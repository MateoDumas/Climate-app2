import React, { useState } from 'react';

function Settings({ setUnits }) {
  const [units, updateUnits] = useState('metric');

  const handleChange = (e) => {
    updateUnits(e.target.value);
    setUnits(e.target.value);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <label>
        Units:
        <select value={units} onChange={handleChange}>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </label>
    </div>
  );
}

export default Settings;
