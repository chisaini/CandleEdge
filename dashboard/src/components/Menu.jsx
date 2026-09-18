import React from "react";
function Menu() {
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
        <p style={{ color: "#FE7743" }}>Dashboard</p>
        <p>Orders</p>
        <p>holdings</p>
        <p>Postions</p>
        <p>Funds</p>
        <p>Apps</p>
      </div>
      <div className="menu-user-profile"></div>
    </div>
  );
}

export default Menu;
