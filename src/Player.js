import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";

import "./Player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default Player;
