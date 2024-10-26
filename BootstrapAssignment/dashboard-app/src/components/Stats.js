import React from 'react';
import '../App.css';

function Stats({ title, value }) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default Stats;
