import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Forecast({ city }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const apiKey = 'YOUR_API_KEY';
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);
      setForecast(response.data.list);
    };

    fetchForecast();
  }, [city]);

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <ul>
        {forecast.map((item) => (
          <li key={item.dt}>
            <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
            <p>{item.weather[0].description}</p>
            <p>{item.main.temp} °C</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Forecast;
