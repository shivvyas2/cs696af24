import React from 'react';
import '../App.css';

function Metrics() {
  return (
    <div className="performance-metrics">
      <h3>Performance Metrics</h3>
      <p>CPU Usage</p>
      <div className="metric-bar"><div style={{ width: '70%' }} /></div>
      <p>Memory Usage</p>
      <div className="metric-bar"><div style={{ width: '50%' }} /></div>
      <p>Disk Usage</p>
      <div className="metric-bar"><div style={{ width: '80%' }} /></div>
    </div>
  );
}

export default Metrics;
