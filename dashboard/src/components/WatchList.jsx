import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../Data/Data";

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
            return <p>{stock.name}</p>;
          })}
        </ul>
      </div>
    </>
  );
}

export default WatchList;
