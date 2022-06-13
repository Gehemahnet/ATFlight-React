import React, {useEffect, useState} from "react";
import "../../../styles/UI.css";
import PlaneDown from "../../../images/home/menu/rent-by-time/plane-down.svg";
import PlaneUp from "../../../images/home/menu/rent-by-time/plane-up.svg";
import CalendarTimePopup from "./CalendarTimePopup";


const DateInput = ({
  popupHidden, 
  confirmationAction,
  className, 
  id, 
  placeholder, 
  image, 
  onClick}) => {
  
  const [isPopupClosed, changeIsPopupClosed] = useState(popupHidden)
  
  useEffect(()=>{
    changeIsPopupClosed(popupHidden)
  },[popupHidden, isPopupClosed])
  
  return(
    <div onClick={onClick} className={className}
         id={id}>
      <span  className={className + '-input'}>
      {placeholder}
      </span>
      <img src={image =='up'? PlaneUp: PlaneDown} alt=""/>
      <CalendarTimePopup 
          confirmationAction={confirmationAction}
          popupHidden={isPopupClosed}
          className={isPopupClosed == "Shown"? `${className}`: `${className}`}
          placeholder={placeholder}/>
    </div>
  )
}

export default DateInput