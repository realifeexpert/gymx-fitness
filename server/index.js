// --- 1. SETUP ---
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Groq = require("groq-sdk");

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const app = express();
const PORT = 3001;

// --- 2. MIDDLEWARE ---
app.use(cors());
app.use(express.json());

// --- 3. ROUTES ---
app.get("/", (req, res) => {
  res.json({ message: "Hello from the GymX backend server!" });
});

// --- NEW CHAT ROUTE ---
// This single route will handle all AI chat interactions
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history, featureTitle } = req.body;

    // Basic validation
    if (!message || !featureTitle) {
      return res.status(400).json({ error: "Missing required fields: message and featureTitle." });
    }

    // Create a system prompt to tell the AI its role (e.g., "AI Fitness Coach")
    const systemPrompt = `You are a world-class expert assistant. Your current role is: "${featureTitle}". Your goal is to provide helpful, concise, and encouraging information to the user based on your role.`;

    // Combine the system role, the past conversation history, and the new user message
    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      ...(history || []), // Include previous messages if they exist
      {
        role: "user",
        content: message,
      },
    ];

    // Call the Groq API
    const completion = await groq.chat.completions.create({
      messages: messages,
      model: "gemma2-9b-it",
    });

    const aiResponse =
      completion.choices[0]?.message?.content ||
      "Sorry, I could not generate a response at this time.";
    
    // Send the AI's response back to the frontend
    res.json({ response: aiResponse });

  } catch (error) {
    console.error("Error calling Groq API for chat:", error);
    res.status(500).json({
      error: "Failed to get a response due to an internal server error.",
    });
  }
});


app.post("/api/generate-diet-plan", async (req, res) => {
  try {
    const { goal, diet, calories } = req.body;

    if (!goal || !diet || !calories) {
      return res
        .status(400)
        .json({ error: "Missing required fields: goal, diet, or calories." });
    }

    const prompt = `
      You are a professional nutritionist. Create a simple, one-day diet plan for a user with the following details:
      - Main Goal: ${goal}
      - Dietary Preference: ${diet}
      - Daily Calorie Target: Approximately ${calories} kcal

      Please provide a structured plan with sections for Breakfast, Lunch, and Dinner. 
      Keep the meal descriptions clear and concise.
    `;

    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gemma2-9b-it",
    });

    const plan =
      completion.choices[0]?.message?.content ||
      "Could not generate a plan at this time.";
    res.json({ plan });
  } catch (error) {
    console.error("Error calling Groq API:", error);
    res.status(500).json({
      error: "Failed to generate diet plan due to an internal server error.",
    });
  }
});

// --- 4. START SERVER ---
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
