import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import CityList from './components/CityList';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cities, setCities] = useState([]);

  const fetchWeather = async (city) => {
    const apiKey = '443a146d3a9c3854aea0fd5644ba23a4'; // Reemplaza esto con tu API key de OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
        setCities((prevCities) => [...prevCities, city]);
      } else {
        setWeatherData(null);
        alert(data.message);
      }
    } catch (error) {
      console.error('Error fetching the weather data', error);
    }
  };

  const editCity = (oldCity, newCity) => {
    setCities((prevCities) =>
      prevCities.map((city) => (city === oldCity ? newCity : city))
    );
  };

  const deleteCity = (cityToDelete) => {
    setCities((prevCities) =>
      prevCities.filter((city) => city !== cityToDelete)
    );
  };

  return (
    <div className="App">
      <h1> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clouds" viewBox="0 0 16 16">
  <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.5 3.5 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.6 5.6 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5"/>
  <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.5 4.5 0 0 1 7 5m3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492z"/>
</svg> App del Clima</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      {weatherData && <WeatherDisplay data={weatherData} />}
      <CityList cities={cities} editCity={editCity} deleteCity={deleteCity} />
    </div>
  );
}

export default App;
