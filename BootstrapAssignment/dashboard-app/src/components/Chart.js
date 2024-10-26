import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../App.css';

const data = [
  { name: 'Jan', pv: 2400, uv: 2200 },
  { name: 'Feb', pv: 1398, uv: 1280 },
  { name: 'Mar', pv: 9800, uv: 5000 },
  { name: 'Apr', pv: 3908, uv: 2780 },
  { name: 'May', pv: 4800, uv: 3000 },
  { name: 'Jun', pv: 3800, uv: 2500 },
  { name: 'Jul', pv: 4300, uv: 3200 },
];

function Chart() {
  return (
    <div className="chart">
      <h3>Sales Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={true} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
