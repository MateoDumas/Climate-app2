import React, { useState, useEffect } from 'react';

function CurrentLocation({ fetchWeather }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeather(`${latitude},${longitude}`);
    });
  }, []);

  return null;
}

export default CurrentLocation;
