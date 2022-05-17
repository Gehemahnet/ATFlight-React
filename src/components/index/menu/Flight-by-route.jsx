import React, { useState } from "react";
import "../../../styles/index/menu/flight-by-route.css";
import CharterRentMenu from "./Flight-by-route__menu-cr.jsx";
import SeatTicketMenu from "./Flight-by-route__menu-st.jsx"

const FlightByRoute = function () {

  const [radioState, setRadioState] = useState(1)
  const radioChange = (index) =>{
    setRadioState(index)
    console.log(`selected ${index}`)
  }
  
  return(
    <form className="flight-by-route flight-by-route_active">
      <div className="flight-by-route__radio">
        <div className="flight-by-route__radio-item">
        <input id="charter-rent" type="radio" onChange={() => radioChange(1)} name="choice" defaultChecked/><label>Charter Rent</label>
        </div>
        <div className="flight-by-route__radio-item">
        <input id="seat-ticket" type="radio" onChange={() => radioChange(2)} name="choice" /><label>Seat Ticket</label>
        </div>
      </div>
      <CharterRentMenu className={radioState === 1? "flight-by-route__charter-rent _active": 'flight-by-route__charter-rent _disabled'}/>
      <SeatTicketMenu className={radioState === 2? "flight-by-route__seat-ticket _active": 'flight-by-route__seat-ticket _disabled'}/>
    </form>
  )
}


export default FlightByRoute