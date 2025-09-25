import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner'; // Import the spinner

const TodaysWorkout = () => {
    const [workout, setWorkout] = useState(null);
    const [logs, setLogs] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = 123; // Example user ID

    useEffect(() => {
        const fetchWorkout = async () => {
            try {
                setLoading(true);
                setError(null);
                // Use a relative URL. The Vite proxy will forward this to the backend.
                const response = await fetch(`/api/workout/${userId}`);
                if (!response.ok) {
                    const errData = await response.json();
                    throw new Error(errData.message || 'Failed to fetch workout');
                }
                const data = await response.json();
                setWorkout(data);
                // Initialize logs state based on fetched workout
                const initialLogs = {};
                data.exercises.forEach(ex => {
                    initialLogs[ex.exerciseId] = Array.from({ length: ex.targetSets }, () => ({ reps: '', weightKg: '' }));
                });
                setLogs(initialLogs);
            } catch (err) {
                setError(err.message);
                // Fallback to mock data on error for demonstration
                console.error("Failed to fetch workout, falling back to mock data.", err);
                const mockWorkout = {
                    workoutDate: "2025-09-25",
                    muscleGroups: ["Chest", "Triceps"],
                    exercises: [
                        { exerciseId: 101, name: "Barbell Bench Press", targetSets: 3, targetReps: 10, targetWeightKg: 52.5, videoUrl: "http://example.com/video.mp4" },
                        { exerciseId: 102, name: "Incline Dumbbell Press", targetSets: 3, targetReps: 12, targetWeightKg: 20, videoUrl: "http://example.com/video.mp4" },
                        { exerciseId: 103, name: "Tricep Dips", targetSets: 3, targetReps: 15, targetWeightKg: 0, videoUrl: "http://example.com/video.mp4" },
                    ]
                };
                setWorkout(mockWorkout);
                const initialLogs = {};
                mockWorkout.exercises.forEach(ex => {
                    initialLogs[ex.exerciseId] = Array.from({ length: ex.targetSets }, () => ({ reps: '', weightKg: '' }));
                });
                setLogs(initialLogs);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkout();
    }, [userId]);

    const handleLogChange = (exerciseId, setIndex, field, value) => {
        const updatedLogs = { ...logs };
        updatedLogs[exerciseId][setIndex][field] = value;
        setLogs(updatedLogs);
    };

    const handleFinishWorkout = async () => {
        const payload = {
            userId: userId,
            logs: Object.keys(logs).map(exerciseId => ({
                exerciseId: parseInt(exerciseId),
                sets: logs[exerciseId].map(set => ({
                    reps: parseInt(set.reps) || 0,
                    weightKg: parseFloat(set.weightKg) || 0,
                })).filter(set => set.reps > 0) // Only send sets that were performed
            }))
        };

        console.log("Submitting workout log:", JSON.stringify(payload, null, 2));

        try {
            // Use a relative URL for the POST request as well.
            const response = await fetch('/api/log-workout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                alert('Workout logged successfully!');
            } else {
                alert('Failed to log workout.');
            }
        } catch (error) {
            console.error('Error logging workout:', error);
            alert('An error occurred while logging the workout.');
        }
    };

    if (loading) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Generating your AI workout...</h2>
                <Spinner />
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500">Error: {error}. Displaying mock data as a fallback.</div>;
    }

    if (!workout) {
        return <div>No workout plan available for today.</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Today's Workout: {workout.muscleGroups.join(' & ')}</h1>
            <div className="space-y-6">
                {workout.exercises.map(exercise => (
                    <div key={exercise.exerciseId} className="p-4 border rounded-lg shadow-sm bg-white">
                        <h2 className="text-2xl font-semibold text-gray-800">{exercise.name}</h2>
                        <p className="text-gray-600">Target: {exercise.targetSets} sets of {exercise.targetReps} reps at {exercise.targetWeightKg}kg</p>
                        {exercise.justification && <p className="mt-2 text-sm text-blue-600 bg-blue-50 p-2 rounded-lg">💡 AI Coach: {exercise.justification}</p>}
                        <div className="mt-4 space-y-2">
                            {logs[exercise.exerciseId] && logs[exercise.exerciseId].map((set, setIndex) => (
                                <div key={setIndex} className="flex items-center space-x-4">
                                    <span className="font-semibold">Set {setIndex + 1}:</span>
                                    <input
                                        type="number"
                                        placeholder="Reps"
                                        className="w-24 p-2 border rounded-md bg-gray-50 focus:ring-red-500 focus:border-red-500"
                                        value={set.reps}
                                        onChange={(e) => handleLogChange(exercise.exerciseId, setIndex, 'reps', e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Weight (kg)"
                                        className="w-24 p-2 border rounded-md bg-gray-50 focus:ring-red-500 focus:border-red-500"
                                        value={set.weightKg}
                                        onChange={(e) => handleLogChange(exercise.exerciseId, setIndex, 'weightKg', e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={handleFinishWorkout}
                className="mt-8 w-full bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
                Finish Workout
            </button>
        </div>
    );
};

export default TodaysWorkout;
