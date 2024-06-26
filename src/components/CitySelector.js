
import React from 'react';

const CitySelector = ({ cities, selectedCity, onCityChange }) => {
    return (
        <select value={selectedCity} onChange={onCityChange}>
            <option value="">Select a city</option>
            {cities.map((city) => (
                <option key={city.value} value={city.value}>
                    {city.name}
                </option>
            ))}
        </select>
    );
};

export default CitySelector;