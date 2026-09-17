import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="Topbar-container">
      <div className="indices-container">
        <div className="nifty me-5">
          <p className="index text-muted me-3">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index text-muted me-3">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>
      <menu />
    </div>
  );
};

export default TopBar;
