import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faRain } from '@fortawesome/free-solid-svg-icons';

// Usa FontAwesomeIcon en tu componente
<FontAwesomeIcon icon={faCloud} />

function WeatherDisplay({ data }) {
  return (
    <div className="weather-display">
      <h2>{data.name}</h2>
      <p><strong>Temperature:</strong> {data.main.temp} °C</p>
      <p><strong>Weather:</strong> {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
