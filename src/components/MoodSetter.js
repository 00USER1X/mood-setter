import React, { useState, useEffect } from 'react';
import './MoodSetter.css';

function MoodSetter() {
    const [mood, setMood] = useState('Neutral'); // Default mood set to 'Neutral'
    const [message, setMessage] = useState('');

    // useEffect to handle the message display upon mood change
    useEffect(() => {
        setMessage(`Your current mood is: ${mood}`);
        
        // Clear the message after 3 seconds
        const timer = setTimeout(() => {
            setMessage('');
        }, 3000);

        return () => {
            clearTimeout(timer); // Cleanup timer to avoid any potential issues
        };
    }, [mood]);

    const resetMood = () => {
        setMood('Neutral');
    }

    const handleMoodChange = (event) => {
        setMood(event.target.value);
    };

    return (
        <div className={`mood-container ${mood.toLowerCase()}`}>
            <h1>Mood Setter</h1>
            <select value={mood} onChange={handleMoodChange}>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Neutral">Neutral</option>
            </select>
            <button onClick={resetMood}>reset</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default MoodSetter;
