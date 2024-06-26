import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CitySelector from './components/CitySelector';
import WeatherInfo from './components/WeatherInfo';
import Loading from './components/Loading';
import Error from './components/Error';
import { createUser, fetchUsers } from './api';
import './styles/Weather.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const cities = [
        { name: 'New York', value: 'New York' },
        { name: 'London', value: 'London' },
        { name: 'Tokyo', value: 'Tokyo' },
        { name: 'Sydney', value: 'Sydney' },
        { name: 'Paris', value: 'Paris' }
    ];

    const API_KEY = process.env.REACT_APP_API_KEY;

    const getWeather = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
            setWeather(response.data);
        } catch (err) {
            setError('Failed to fetch weather data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (city) {
            getWeather();
        }
    }, [city]);

    return (
        <div className="weather-container">
            <h1>Weather App</h1>
            <CitySelector cities={cities} selectedCity={city} onCityChange={(e) => setCity(e.target.value)} />
            {loading && <Loading />}
            {error && <Error message={error} />}
            {weather && <WeatherInfo weather={weather} />}
        </div>
    );
};

export default Weather;