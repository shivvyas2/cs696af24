import React from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import '../App.css';

function Header() {
  return (
    <div className="header">
      <input type="text" placeholder="Search..." />
      <div className="header-icons">
        <span><MdNotificationsNone size={24} /></span>
        <span><FaUserCircle size={24} /></span>
      </div>
    </div>
  );
}

export default Header;
