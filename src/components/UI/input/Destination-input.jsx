import React from "react";
import PositionIcon from "../../../images/home/menu/flight-by-route/position.svg";
import "../../../styles/UI.css";

const DestinationInput = ({className, buttonClassName, buttonId, buttonType, onClick, inputId, inputPlaceholder, parrentId}) => {
  return(
    <div className={className}
         id={parrentId}>
      <input 
        id={inputId}
        placeholder={inputPlaceholder}
      />
        <button 
          type={buttonType}
          className={buttonClassName}
          id={buttonId}
          onClick={onClick}
        >
        <img src={PositionIcon}/>
        </button>
    </div>
  )
}

export default DestinationInput