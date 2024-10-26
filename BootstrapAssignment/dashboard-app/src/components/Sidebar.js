import React, { useState, useEffect } from 'react';
import { IoHomeOutline, IoPeopleOutline, IoBarChartOutline, IoCartOutline, IoSettingsOutline } from 'react-icons/io5';
import '../App.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (window.innerWidth <= 820) {
      setIsOpen(false);
    }
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: <IoHomeOutline /> },
    { name: "Users", icon: <IoPeopleOutline /> },
    { name: "Analytics", icon: <IoBarChartOutline /> },
    { name: "Orders", icon: <IoCartOutline /> },
    { name: "Settings", icon: <IoSettingsOutline /> },
  ];

  return (
    <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      <div className="sidebar-header" onClick={toggleSidebar}>
        <h2>{isOpen ? "Dashboard" : "D"}</h2>
      </div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            {isOpen && <span className="menu-text">{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
