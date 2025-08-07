# 🏋️‍♂️ GymX – Modern Fitness Web App

**GymX** is a responsive and feature-rich fitness web application built using **React.js**. It helps users discover and explore over **1,000+ exercises** categorized by body part, muscle group, and equipment type. Each exercise is supported by related **YouTube tutorial videos** to guide proper form and technique.

The app integrates data using **ExerciseDB API** and **YouTube Search & Download API**, both accessed via **RapidAPI**.

---

## ⚙️ Tech Stack

- **React.js** – Component-based UI development
- **Material UI (MUI)** – Prebuilt responsive UI components
- **React Router Dom** – Navigation and routing
- **ExerciseDB API** _(via RapidAPI)_ – Exercise data (muscle, equipment, etc.)
- **YouTube Search API** _(via RapidAPI)_ – Embedded workout video suggestions

---

## ✅ Key Features

- 🔍 **Smart Search** – Find exercises by keyword, body part, target muscle, or equipment
- 🧠 **Categorized Filtering** – Select from body parts with smooth horizontal scrolling
- 🎥 **YouTube Video Integration** – View instructional videos for every exercise
- 🧩 **Similar Exercises** – Based on muscle groups and equipment
- 📱 **Fully Responsive UI** – Works seamlessly on mobile, tablet, and desktop

---

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/MauryaShiva/GymX-Fitness-App.git
   cd GymX-Fitness-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your RapidAPI credentials** in `src/utils/fetchData.js`

4. **Run the app**

   ```bash
   npm start
   ```

---

## 📁 Folder Structure

```
GymX-Fitness-App/
├── public/                      # Static assets (index.html, favicon, etc.)
│
├── src/
│   ├── assets/                  # Images, icons, and static files
│   │   ├── images/              # Hero banner and exercise images
│   │   └── icons/               # Arrow icons or SVGs
│   │
│   ├── components/              # Reusable components
│   │   ├── BodyPart.js
│   │   ├── Detail.js
│   │   ├── ExerciseCard.js
│   │   ├── ExerciseVideos.js
│   │   ├── Footer.js
│   │   ├── HeroBanner.js
│   │   ├── HorizontalScrollbar.js
│   │   ├── Loader.js
│   │   ├── Navbar.js
│   │   ├── SearchExercises.js
│   │   └── SimilarExercises.js   # ✅ Added here
│   │
│   ├── pages/                   # Page-level components
│   │   ├── Home.js
│   │   └── ExerciseDetails.js
│   │
│   ├── utils/                   # API functions and helpers
│   │   └── fetchData.js
│   │
│   ├── App.js                   # Root app component with routing
│   ├── index.js                 # Entry point (ReactDOM)
│   └── App.css                  # Global styles
│
├── .env                         # API keys (not committed to Git)
├── .gitignore                   # Git ignored files
├── package.json                 # Project metadata and dependencies
├── package-lock.json            # Exact version lock for installed npm packages
├── README.md                    # Project documentation

```

---

📸 Screenshot

<img width="1918" height="902" alt="image" src="https://github.com/user-attachments/assets/56389c48-213b-4a82-a848-bc8f176e951f" />

---

## 🔌 API Sources

- **[ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)** – Over 10,000+ exercises with details like muscle, equipment, etc.
- **[YouTube Search & Download API](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download)** – For fetching exercise videos by name
- **[RapidAPI](https://rapidapi.com/)** – The world’s largest API hub used to access and manage both ExerciseDB and YouTube APIs.

---

## 🌐 Live Demo

👉 [Live App on Netlify](https://gymx-fitness-app.netlify.app/)

Explore the live version of **GymX – Modern Fitness Web App**, fully deployed on **Netlify**.  
Browse exercises, search by muscle group, watch YouTube tutorials, and experience a smooth, responsive UI across all devices — mobile, tablet, and desktop.  
No setup required — just click and start your fitness journey!
