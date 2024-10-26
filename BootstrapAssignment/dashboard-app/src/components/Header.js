import React from 'react';
import { MdNotificationsNone, MdSearch } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import '../App.css';

function Header() {
  return (
    <div className="header">
      <div className="search-container">
        <MdSearch size={24} className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-icons">
        <span><MdNotificationsNone size={24} /></span>
        <span><FaUserCircle size={24} /></span>
      </div>
    </div>
  );
}

export default Header;
