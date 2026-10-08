import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../Data/Data";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

function WatchList() {
  return (
    <>
      <div className="watchlist-container">
        <div className="search_container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg:infy,bse,nifty fut weekly,gold mcx"
            className="Search"
          />
          <span className="counts">{watchlist.length}/50</span>
        </div>
        <ul className="list">
          {watchlist.map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistAction] = useState(false);
  const handleMouseEnter = (e) => {
    setShowWatchlistAction(true);
  };
  const handleMouseLeave = (e) => {
    setShowWatchlistAction(false);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="persent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
    </li>
  );
};
