const sql = require('../config/db');
const Groq = require('groq-sdk');

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const generateWorkout = async (userId) => {
    // 1. Fetch user data and recent workout history from your database
    const userRows = await sql`SELECT goal FROM users WHERE user_id = ${userId}`;
    const user = userRows[0] || { goal: 'Build Muscle' };

    const workoutHistory = await sql`
        SELECT e.name, e.muscle_group, wl.reps_achieved, wl.weight_used_kg, wl.workout_date
        FROM workout_logs wl
        JOIN exercises e ON wl.exercise_id = e.exercise_id
        WHERE wl.user_id = ${userId}
        ORDER BY wl.workout_date DESC, wl.log_id DESC
        LIMIT 5;
    `;

    // 2. Craft the detailed prompt for the AI
    const prompt = `
      You are an expert AI fitness coach. A user needs a new workout plan.

      **User's Profile:**
      - Goal: ${user.goal}

      **User's Recent Workout History (JSON format):**
      ${JSON.stringify(workoutHistory, null, 2)}

      **Your Task:**
      Based on the user's goal and their recent performance, create a new workout plan for their next session.
      Apply the principle of progressive overload. If they did well, slightly increase the weight or reps. If they struggled, keep it the same.
      The workout should target the next logical muscle group in a standard split (e.g., Chest/Tris -> Back/Bis -> Legs/Shoulders).
      Select 4-5 exercises for the target muscle groups.

      **IMPORTANT:** Respond ONLY with a valid JSON object in the following format. Do not include any other text, greetings, or explanations. The exerciseId should correspond to a real ID from the database, but you can use a placeholder like 999 if you are creating a new variation.

      {
        "workoutDate": "${new Date().toISOString().split('T')[0]}",
        "muscleGroups": ["Muscle Group 1", "Muscle Group 2"],
        "exercises": [
          {
            "exercise_id": 101,
            "name": "Exercise Name",
            "targetSets": 3,
            "targetReps": 10,
            "targetWeightKg": 55,
            "videoUrl": "http://example.com/video.mp4",
            "justification": "Increased weight from 52.5kg because the user completed all reps last time."
          }
        ]
      }
    `;

    // 3. Make the API call to Groq
    const response = await groq.chat.completions.create({
        model: "llama3-8b-8192", // A capable model available on Groq
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }, // Enforce JSON output
    });

    // 4. Parse the AI's response and return it
    const workoutPlan = JSON.parse(response.choices[0].message.content);
    return workoutPlan;
};

const logWorkout = async ({ userId, logs, workoutDate }) => {
    // Use a transaction to insert all logs at once
    await sql.begin(async sql => {
        for (const log of logs) {
            if (log.sets.length > 0) {
                const reps = JSON.stringify(log.sets.map(s => s.reps));
                const weights = JSON.stringify(log.sets.map(s => s.weightKg));
                await sql`
                    INSERT INTO workout_logs (user_id, exercise_id, reps_achieved, weight_used_kg, workout_date)
                    VALUES (${userId}, ${log.exerciseId}, ${reps}, ${weights}, ${workoutDate});
                `;
            }
        }
    });
};

module.exports = {
    generateWorkout,
    logWorkout,
};
