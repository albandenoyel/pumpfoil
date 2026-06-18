export async function getGearAdvice(experience: string, weight: string, goal: string): Promise<string> {
  try {
    const response = await fetch("/api/gear-advice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ experience, weight, goal }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      return errData.error || `HTTP error! status: ${response.status}`;
    }

    const data = await response.json();
    return data.recommendation || "Unable to get a recommendation at this time.";
  } catch (error: any) {
    console.error("Error fetching gear advice:", error);
    return "Error connecting to the AI expert. Please try again later.";
  }
}
