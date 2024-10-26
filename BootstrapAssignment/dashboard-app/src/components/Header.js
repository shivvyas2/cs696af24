import React from 'react';
import '../App.css';

function Header() {
  return (
    <div className="header">
      <input type="text" placeholder="Search..." />
      <div className="header-icons">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </div>
  );
}

export default Header;
