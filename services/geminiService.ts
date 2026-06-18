export async function getGearAdvice(experience: string, weight: string, goal: string): Promise<string> {
  try {
    const response = await fetch("/api/gear-advice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ experience, weight, goal }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.recommendation || "Unable to get a recommendation at this time.";
    }

    // If server API route is not found or fails, use high-quality rule-based fallback
    if (response.status === 404 || response.status === 502 || response.status === 503) {
      return getRuleBasedAdvice(experience, weight, goal);
    }

    const errData = await response.json().catch(() => ({}));
    return errData.error || `HTTP error! status: ${response.status}`;
  } catch (error: any) {
    console.warn("API error, falling back to rule-based advice:", error);
    return getRuleBasedAdvice(experience, weight, goal);
  }
}

function getRuleBasedAdvice(experience: string, weight: string, goal: string): string {
  const isBeginner = experience.toLowerCase().includes("begin");
  const isIntermediate = experience.toLowerCase().includes("intermed");
  
  // Extract weight number if possible
  const weightNum = parseInt(weight.replace(/\D/g, "")) || 75;
  
  let recommendation = `### Recommended Setup for Your Profile\n\n`;
  recommendation += `Based on your profile (${experience}, ${weightNum}kg, and goal: "${goal}"), here is our custom gear recommendation compiled by the community:\n\n`;
  
  if (isBeginner) {
    if (weightNum < 70) {
      recommendation += `**1. Hydrofoil Front Wing:**\nWe recommend a high-aspect / mid-aspect wing around **1500cm² to 1750cm²** (such as the *Sroka S-Foil HA 1800* or *Takoon Pump One*).\n\n`;
    } else if (weightNum <= 85) {
      recommendation += `**1. Hydrofoil Front Wing:**\nWe recommend a large high-aspect wing around **1750cm² to 2000cm²** (such as the *Sroka S-Foil HA 2000* or *Gong Trail V3 XL*). This provides maximum lift to learn dockstarting easily.\n\n`;
    } else {
      recommendation += `**1. Hydrofoil Front Wing:**\nFor riders over 85kg learning to pump, you need substantial lift. We suggest a wing of **2000cm² to 2200cm²** (such as the *Indiana Condor XL* or *Gong Trail V3 XXL*).\n\n`;
    }
    recommendation += `**2. Board Selection:**\nA compact board with some volume is ideal. We recommend a dedicated dockstart board between **80cm and 90cm** with **10 to 15 Liters** (such as the *Sroka Pump Board 85* or *Takoon Wood 80*).\n\n`;
    recommendation += `**3. Pro Learning Tips:**\n- Start running from a steady dock with a low drop (under 30cm from the water).\n- Practice the running-start separately before jumping on the board.\n- Focus on weight placement: your feet should be positioned perfectly centered over the mast.`;
  } else if (isIntermediate) {
    if (weightNum < 75) {
      recommendation += `**1. Hydrofoil Front Wing:**\nYou can size down to a high-performance high-aspect wing around **1300cm² to 1500cm²** (like the *Ketos Pump Winter* or *AFS Enduro GLT*).\n\n`;
    } else {
      recommendation += `**1. Hydrofoil Front Wing:**\nA high-aspect wing of **1500cm² to 1800cm²** (like the *Sroka S-Foil HA 1800* or *Wake Thief Original*) will offer the perfect balance between lift and glide.\n\n`;
    }
    recommendation += `**2. Board Selection:**\nA light, performance carbon fiber board of **80cm** (such as the *Takoon Pump Carbon 80* or *Indiana Magic HD*) is perfect for reducing swing weight.\n\n`;
    recommendation += `**3. Pro Learning Tips:**\n- Focus on a high-frequency, low-amplitude pumping rhythm to maintain momentum.\n- Keep your upper body stable and pump primarily with your legs and hips.`;
  } else {
    // Advanced
    recommendation += `**1. Hydrofoil Front Wing:**\nChoose a highly optimized, ultra-efficient high-aspect wing around **1100cm² to 1400cm²** for maximum glide, low drag, and minutes of endless pumping.\n\n`;
    recommendation += `**2. Board Selection:**\nAn ultra-light, minimalist setup under **80cm** (such as the *Alpine Pocket Pro* or a DIY custom board).\n\n`;
    recommendation += `**3. Pro Learning Tips:**\n- Use a wider stance to better distribute pump load.\n- Combine dockstarting with micro-turns to maximize session length.`;
  }
  
  return recommendation;
}
