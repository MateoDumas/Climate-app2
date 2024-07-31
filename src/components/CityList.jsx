import React, { useState } from 'react';

function CityList({ cities, editCity, deleteCity }) {
  const [isEditing, setIsEditing] = useState(null);
  const [newCity, setNewCity] = useState('');

  const handleEdit = (city) => {
    setIsEditing(city);
    setNewCity(city);
  };

  const handleSave = (oldCity) => {
    editCity(oldCity, newCity);
    setIsEditing(null);
    setNewCity('');
  };

  return (
    <div className="city-list">
      <h2>Tus Ciudades</h2>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            {isEditing === city ? (
              <>
                <input
                  type="text"
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                />
                <button onClick={() => handleSave(city)}>Save</button>
                <button onClick={() => setIsEditing(null)}>Cancel</button>
              </>
            ) : (
              <>
                {city}
                <button onClick={() => handleEdit(city)}>Edit</button>
                <button onClick={() => deleteCity(city)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
