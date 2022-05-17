import React, { useState } from "react";
import "../../../styles/index/menu/flight-by-route__menu-st.css"
import PositionIcon from "../../../images/index/menu/flight-by-route/position.svg";
import ChartIcon from "../../../images/index/menu/flight-by-route/chart.svg";
import CalendarIcon from "../../../images/index/menu/flight-by-route/calendar.svg";
import ChangeIcon from "../../../images/index/menu/flight-by-route/change.svg";
import SettingsIcon from "../../../images/index/menu/flight-by-route/settings.svg";
import MagnifyingGlass from "../../../images/index/menu/flight-by-route/magnifying-glass.svg";
import Passenger from "../../../images/index/menu/flight-by-route/passenger.svg";
import Minus from "../../../images/index/menu/flight-by-route/minus.svg";
import Plus from "../../../images/index/menu/flight-by-route/plus.svg";
import Exit from "../../../images/index/menu/flight-by-route/exit.svg";


const SeatTicketMenu = ({className}) => {
  const [passengersNumber, setPassengersNumber] = useState(0)
  const passengerAdd = () =>{
    setPassengersNumber(passengersNumber + 1)
  }
  const passengerRemove = () =>{
    setPassengersNumber(passengersNumber - 1)
  }

  const [adultPassengers, setAdultPassengers] = useState(0)
  const adultPassengersAdd = () =>{
    setAdultPassengers(adultPassengers + 1)
    passengerAdd()
  }
  const adultPassengersRemove = () =>{
    setAdultPassengers(adultPassengers - 1)
    passengerRemove()
  }

  const [childPassengers, setChildPassengers] = useState(0)
  const ChildPassengersAdd = () =>{
    setChildPassengers(childPassengers + 1)
    passengerAdd()
  }
  const ChildPassengersRemove = () =>{
    setChildPassengers(childPassengers - 1)
    passengerRemove()
  }

  const [babiesPassengers, setBabiesPassengers] = useState(0)
  const BabiesPassengersAdd = () =>{
    setBabiesPassengers(babiesPassengers + 1)
    passengerAdd()
  }
  const BabiesPassengersRemove = () =>{
    setBabiesPassengers(babiesPassengers - 1)
    passengerRemove()
  }

  const resetPassengers = () =>{
    setAdultPassengers(0)
    setChildPassengers(0)
    setBabiesPassengers(0)
    setPassengersNumber(0)
  }

  const callPassengersPopup = () =>{
    document.getElementById('st__passengers-popup').classList.toggle('_called')
  }
  const closePassengersPopup =() =>{
    document.getElementById('st__passengers-popup').classList.toggle('_called')
  }

  return(
    <div className={className}>
        <div className="flight-by-route__location-from">
          <input id="location-from-input" placeholder="Location From..."/>
          <button type="button" className="flight-by-route__position-button"
            id="location-from-position">
            <img src={PositionIcon}/>
          </button>
          <button type="button" className="flight-by-route__chart-button"
            id="location-from-chart">
              <img src={ChartIcon}/>
          </button>
          <input id="st__rent-dates-input" placeholder="Rent Dates"/>
          <button type="button" className="flight-by-route__calendar"
            id="location-from-calendar">
            <img src={CalendarIcon}/>
          </button>
          
        </div>
          
        <button type="button" id="change-locations">
          <img src={ChangeIcon}/>
        </button>

        <div className="flight-by-route__location-to">
          <input id="location-to-input" placeholder="Location To..."/>
            <button type="button" className="flight-by-route__position-button"
              id="location-to-position">
              <img src={PositionIcon}/>
            </button>
            <button type="button" className="flight-by-route__chart-button"
              id="location-to-chart">
              <img src={ChartIcon}/>
            </button>
            <select className="flight-by-route__selection"
              id="way-type-selection">
              <option>One Way</option>
              <option>Round Way</option>
              <option>Multiway</option>
            </select>
            <div id="st__passengers-selection" onClick={callPassengersPopup}>
            <span>Passengers: {passengersNumber}</span>
            <img src={Passenger} alt="" />
          </div>
          {/* Passengers selection popup */}
          <div id="st__passengers-popup">
            <div className="st__popup-top-decorating-element">
              <div></div>
            </div>
            <div className="st__popup-row">
              <div className="st__popup-text">
                <h4>Adults</h4>
                <span>Over 12 years</span>
              </div>
              <div className="st__popup-interractions">
                <button type="button" className="st__popup-minus" onClick={adultPassengersRemove}><img src={Minus} alt="" /></button>
                <input value={adultPassengers} className="st__popup-input" type="number" pattern='[0-9]'/>
                <button type="button" className="st__popup-plus" onClick={adultPassengersAdd}><img src={Plus} alt="" /></button>
              </div>
            </div>
            <div className="st__popup-row">
              <div className="st__popup-text">
                <h4>Children</h4>
                <span>From 2 to 12 years</span>
              </div>
              <div className="st__popup-interractions">
                <button type="button" className="st__popup-minus" onClick={ChildPassengersRemove}><img src={Minus} alt="" /></button>
                <input value={childPassengers} className="st__popup-input" type="number" pattern='[0-9]'/>
                <button type="button" className="st__popup-plus" onClick={ChildPassengersAdd}><img src={Plus} alt="" /></button>
              </div>
            </div>
            <div className="st__popup-row">
              <div className="st__popup-text">
                <h4>Babies</h4>
                <span>up to 2 years, without place</span>
              </div>
              <div className="st__popup-interractions">
                <button type="button" className="st__popup-minus" onClick={BabiesPassengersRemove}><img src={Minus} alt="" /></button>
                <input value={babiesPassengers} className="st__popup-input" type="number" pattern='[0-9]'/>
                <button type="button" className="st__popup-plus" onClick={BabiesPassengersAdd}><img src={Plus} alt="" /></button>
              </div>
            </div>
            <div className="st__popup-footer">
              <div className="st__popup-footer-actions">
                <button type="button" onClick={closePassengersPopup}><img src={Exit} alt=""/></button>
                <button type="button" onClick={resetPassengers}>Reset</button>
              </div>
              <button type="button">Confirm</button>
            </div>
          </div>
        </div>
        
        <div className="flight-by-route__footer">
          <button type="button" id="show-more-filters">
            <img src={SettingsIcon}/>
            <span>Show More Filters</span>
          </button>
          <button id="flight-by-route__search">
            <img src={MagnifyingGlass}/>
            <span>Search</span>
          </button>
        </div>
      </div>
  )
}

export default SeatTicketMenu