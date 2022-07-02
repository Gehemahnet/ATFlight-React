import React, { useState } from "react";
import "../../styles/UI.css";

const Switcher = ({id, onClick, callback, text}) => {
  
  return(
    <div className="switcher-container">
      <span className="switcher-text">{text}</span>
      <label className="switcher">
        <input
          className="switcher-slider"
          type="checkbox"
          />
        <span className="switcher-round"></span>
      </label>
    </div>
  )

}

export default Switcher