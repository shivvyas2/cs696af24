import React from 'react';
import StatCard from './Stats';
import Chart from './Chart';
import Metrics from './Metrics';
import '../App.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stat-cards">
        <StatCard title="Total Users" value="10,245" />
        <StatCard title="Revenue" value="$45,678" />
        <StatCard title="Orders" value="1,234" />
        <StatCard title="Conversion Rate" value="2.3%" />
      </div>
      <Chart />
      <Metrics />
    </div>
  );
}

export default Dashboard;
