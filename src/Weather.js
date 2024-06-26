// src/Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const API_KEY = '1a60d98bd6e15e19e7147fcd1a59d76f'; // Replace with your actual API key
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=$${city}&units=metric&appid=$${API_KEY}`);
        setWeather(response.data);
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city" 
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;