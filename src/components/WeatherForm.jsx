import React, { useState } from 'react';

/**
 * Formulario para buscar el clima de una ciudad
 * @param {function} fetchWeather Función que obtiene el clima de una ciudad
 */
function WeatherForm({ fetchWeather }) {
  const [city, setCity] = useState('');

  /**
   * Maneja el envío del formulario
   * @param {Event} e Evento de envío del formulario
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();
    if (trimmedCity !== '') {
      fetchWeather(trimmedCity);
      setCity(''); // Limpia el input después de enviar
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="Ingrese ciudad" // Agrega etiqueta ARIA para accesibilidad
      />
      <button type="submit">Obtener clima</button>
    </form>
  );
}

export default WeatherForm;