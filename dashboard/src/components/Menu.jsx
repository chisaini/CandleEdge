import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <div style={{ height: "60px", width: "80px" }}>
        <img
          style={{ width: "90%", margin: "-6px 0px 0px 10px" }}
          src="media/BearClawlogo.png"
          alt=""
        />
      </div>
      <div className="menu-items">
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/"
          onClick={() => handleMenuClick(0)}
        >
          <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
            Dashboard
          </p>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/orders"
          onClick={() => handleMenuClick(1)}
        >
          <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
            Orders
          </p>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/holdings"
          onClick={() => handleMenuClick(2)}
        >
          <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
            Holdings
          </p>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/positions"
          onClick={() => handleMenuClick(3)}
        >
          <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
            Positions
          </p>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/funds"
          onClick={() => handleMenuClick(4)}
        >
          <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
            Funds
          </p>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/apps"
          onClick={() => handleMenuClick(5)}
        >
          <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
            Apps
          </p>
        </Link>
      </div>
      <div className="menu-user-profile" onClick={handleProfileClick}>
        <div className="avatar">BC</div>
        <p className="username">USERID</p>
      </div>
    </div>
  );
}

export default Menu;
