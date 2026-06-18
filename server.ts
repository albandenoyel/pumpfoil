import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Setup Gemini SDK securely on server-side
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  const ai = apiKey ? new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  }) : null;

  // API Route for Gear Advice
  app.post("/api/gear-advice", async (req, res) => {
    try {
      const { experience, weight, goal } = req.body;
      if (!experience || !weight || !goal) {
        return res.status(400).json({ error: "Missing required fields: experience, weight, goal" });
      }

      if (!ai) {
        console.warn("GEMINI_API_KEY is not defined. Returning a descriptive error.");
        return res.status(503).json({ 
          error: "The AI Expert Service is currently unavailable as the API key is not configured on the server. Please check Settings > Secrets." 
        });
      }

      const prompt = `As a pump foil expert, recommend a setup (foil size, board type) for a rider with the following details:
  Experience Level: ${experience}
  Rider Weight: ${weight}
  Primary Goal: ${goal}
  
  Please provide a concise recommendation in Markdown format including specific wing areas (in cm2) and board volumes (in liters). Keep it constructive, clear, and action-oriented.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
        config: {
          temperature: 0.7,
          topP: 0.9,
        }
      });

      return res.json({ recommendation: response.text || "Sorry, I couldn't generate advice right now." });
    } catch (error: any) {
      console.error("Gemini API Error in /api/gear-advice:", error);
      return res.status(500).json({ error: error.message || "Failed to generate advice." });
    }
  });

  // Vite integration middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
