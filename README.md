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
- **Data:** [Open-Source ExerciseDB v1](https://testings-nine.vercel.app) & YouTube Search API from RapidAPI

---

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
