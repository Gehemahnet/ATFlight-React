import React, {useEffect, useState} from "react";
import "../../../styles/UI.css";
import PlaneDown from "../../../images/home/menu/rent-by-time/plane-down.svg";
import PlaneUp from "../../../images/home/menu/rent-by-time/plane-up.svg";
import CalendarTimePopup from "./CalendarTimePopup";


const DateInput = ({
  textBeforeTime,
  className, 
  id, 
  defaultPlaceholder, 
  image
  }) => {
  
  const [placeholderText, setPlaceholderText] = useState(defaultPlaceholder)
  const [popupState, setPopupState] = useState("Hidden")
  
  const closePopup = () => {
    setPopupState("Hidden")
  }

  useEffect(()=>{
    setPopupState(popupState)
    setPlaceholderText(placeholderText)
  },
  [popupState, placeholderText]
  )
  
  return(
    <div 
      onClick={ () =>{
        {popupState == "Hidden"? setPopupState("Shown"): setPopupState("Hidden")}
        }
      } 
      className={className}
      id={id}
    >

      <span  className={className + '-input'}>
      {placeholderText}
      </span>

      <img src={image =='up'? PlaneUp: PlaneDown} alt=""/>

      <CalendarTimePopup
          resetAction={(e, placeholder) => {setPlaceholderText(defaultPlaceholder);closePopup()}}
          confirmationAction={(e, date) => {closePopup(); setPlaceholderText(date)}}
          closePopup ={closePopup}
          textBeforeTime={textBeforeTime}
          popup={popupState}
          className={popupState == "Shown"? `${className}`: `${className}`}
          defaultPlaceholder={defaultPlaceholder}
          placeholder={placeholderText}
      />
    </div>
  )
}

export default DateInput