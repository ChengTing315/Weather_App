
import React from 'react';

const WeatherInfo = ({ weather }) => {
    return (
        <div className="weather-info">
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherInfo;