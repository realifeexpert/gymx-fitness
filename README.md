# GymX Fitness App 💪

A modern and responsive fitness application built with React, Vite, and Tailwind CSS. Explore over 1,300 exercises with animated GIFs, watch detailed video tutorials, and follow a curated weekly home workout plan.

**[Live Demo](https://gym-x-fitness-app.vercel.app)** 🚀

---

## Features

- ⚡️ **Fast & Modern:** Built with Vite for a lightning-fast development experience and optimized performance.
- 🎨 **Styled with Tailwind CSS:** A fully custom, responsive, and attractive dark-themed UI designed from the ground up.
- 🤸 **Comprehensive Exercise Database:** Browse and search an open-source database of over 1,300 exercises.
- 🎞️ **Animated Visuals:** Each exercise is demonstrated with a clear, animated GIF.
- 📺 **Integrated YouTube Videos:** Watch related exercise tutorials from YouTube directly within the app.
- 📅 **Weekly Home Workout Plan:** A dedicated page with curated, full-length video workouts for each day of the week.
- ✨ **Smooth Animations:** The entire application is polished with subtle and professional animations using Framer Motion.

---

## Tech Stack

- **Framework:** React.js (with Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Icons:** Lucide React

---

Of course. You are right, the `README` should be specifically for your open-source API project and explain its usage limits.

Here is a complete, professional `README.md` file for your API's GitHub repository. It explains what the API does, how to use it, and includes the important note about the Vercel free plan.

---

# ExerciseDB API - v1 (Open Source)

A free, public, and open-source REST API for fitness exercises, featuring over 1,300 structured exercises with animated GIF-based visual media.

This project provides a clean, developer-friendly interface to a comprehensive exercise dataset, perfect for personal projects, learning, and building community-driven fitness applications.

**Live API Base URL:** `https://testings-nine.vercel.app`

---

## ⚠️ Important Usage Notice

This API is hosted on a **Vercel Hobby Plan**, which is free but has usage limits (e.g., 100 GB-hours/month of serverless function execution).

It is intended for **demonstration, personal projects, and non-commercial use**.

If you plan to use this API in a production application or expect high traffic, it is strongly recommended that you **fork this repository and deploy your own instance**. This will give you your own usage quota and ensure the stability of your application.

---

## API Endpoints

Here are some of the main endpoints available.

### Get All Exercises

Retrieves a paginated list of all exercises.

- **Endpoint:** `GET /api/v1/exercises`
- **Query Params:** `limit` (default: 10, max: 100), `offset` (default: 0)
- **Example:** `https://testings-nine.vercel.app/api/v1/exercises?limit=5`

### Get Exercises by Body Part

Retrieves all exercises for a specific body part.

- **Endpoint:** `GET /api/v1/bodyparts/{bodyPartName}/exercises`
- **Example:** `https://testings-nine.vercel.app/api/v1/bodyparts/chest/exercises`

### Get a Single Exercise by ID

Retrieves the details for a single exercise.

- **Endpoint:** `GET /api/v1/exercises/{exerciseId}`
- **Example:** `https://testings-nine.vercel.app/api/v1/exercises/VPPtuSI`

---

## Data Structure

Each exercise object in the response follows this structure:

```json
{
  "exerciseId": "string",
  "name": "string",
  "gifUrl": "string (link to animated GIF)",
  "targetMuscles": ["string"],
  "bodyParts": ["string"],
  "equipments": ["string"],
  "secondaryMuscles": ["string"],
  "instructions": ["string"]
}
```

## Getting Started

Follow these instructions to set up and run the project locally.

### 1\. Clone the Repository

```bash
git clone https://github.com/MauryaShiva/GymX-Fitness-App.git
cd GymX-Fitness-App
```

### 2\. Install Dependencies

This project uses `pnpm` as the package manager.

```bash
pnpm install
```

### 3\. Set Up Environment Variables

You will need an API key from RapidAPI to fetch YouTube videos.

- Create a file named `.env` in the root of the project.
- Add your RapidAPI key to this file as shown below:

<!-- end list -->

```env
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
```

### 4\. Run the Development Server

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`.

---

## Acknowledgments

- This project was inspired by the tutorials and work of **JavaScript Mastery**.
- The exercise data and GIFs are provided by a fantastic **open-source community project**.
