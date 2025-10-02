-- Drop tables if they exist to start fresh
DROP TABLE IF EXISTS workout_logs;
DROP TABLE IF EXISTS exercises;
DROP TABLE IF EXISTS users;

-- Create a simple users table for the foreign key reference
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    goal VARCHAR(50) DEFAULT 'Build Muscle' -- e.g., 'Build Muscle', 'Lose Fat'
);

-- Create the master catalog of all exercises
CREATE TABLE exercises (
    exercise_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    muscle_group VARCHAR(50) NOT NULL,
    equipment VARCHAR(50),
    video_url VARCHAR(255)
);

-- Create the table for user's complete workout history
CREATE TABLE workout_logs (
    log_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    exercise_id INTEGER NOT NULL REFERENCES exercises(exercise_id),
    reps_achieved JSONB, -- e.g., '[10, 9, 8]'
    weight_used_kg JSONB, -- e.g., '[50, 50, 50]'
    workout_date DATE NOT NULL DEFAULT CURRENT_DATE
);

-- Insert some sample data to get started

-- Sample User
INSERT INTO users (username) VALUES ('testuser');

-- Sample Exercises
-- Chest & Triceps
INSERT INTO exercises (name, muscle_group, equipment) VALUES
('Barbell Bench Press', 'Chest', 'Barbell'),
('Incline Dumbbell Press', 'Chest', 'Dumbbell'),
('Tricep Dips', 'Triceps', 'Bodyweight/Assisted'),
('Tricep Pushdown', 'Triceps', 'Cable');

-- Back & Biceps
INSERT INTO exercises (name, muscle_group, equipment) VALUES
('Pull Ups', 'Back', 'Bodyweight/Assisted'),
('Bent Over Row', 'Back', 'Barbell'),
('Dumbbell Curl', 'Biceps', 'Dumbbell'),
('Hammer Curl', 'Biceps', 'Dumbbell');

-- Legs & Shoulders
INSERT INTO exercises (name, muscle_group, equipment) VALUES
('Barbell Squat', 'Legs', 'Barbell'),
('Leg Press', 'Legs', 'Machine'),
('Overhead Press', 'Shoulders', 'Barbell'),
('Lateral Raises', 'Shoulders', 'Dumbbell');
