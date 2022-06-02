import React, { useEffect, useState } from "react";
import "../../../styles/home/menu/flight-by-route__menu-st.css";
import "../../UI/input/Destination-input.jsx";
import ChartIcon from "../../../images/home/menu/flight-by-route/chart.svg";
import CalendarIcon from "../../../images/home/menu/flight-by-route/calendar.svg";
import ChangeIcon from "../../../images/home/menu/flight-by-route/change.svg";
import SettingsIcon from "../../../images/home/menu/flight-by-route/settings.svg";
import MagnifyingGlass from "../../../images/home/menu/flight-by-route/magnifying-glass.svg";
import Passenger from "../../../images/home/menu/flight-by-route/passenger.svg";
import Minus from "../../../images/home/menu/flight-by-route/minus.svg";
import Plus from "../../../images/home/menu/flight-by-route/plus.svg";
import DestinationInput from "../../UI/input/Destination-input.jsx";


const SeatTicketMenu = ({className}, activated) => {
  const [passengersNumber, setPassengersNumber] = useState(0)
  const passengerAdd = () =>{
    setPassengersNumber(passengersNumber + 1)
  }
  const passengerRemove = () =>{
    setPassengersNumber(passengersNumber - 1)
  }
  const [adultPassengers, setAdultPassengers] = useState(0)
  const [adultPassengersMinusButtonDisabled,setAdultPassengersMinusButtonDisabled] = useState(true)
  const adultPassengersAdd = () =>{
    setAdultPassengers(adultPassengers + 1)
    passengerAdd()
  }
  const adultPassengersRemove = () =>{
    setAdultPassengers(adultPassengers - 1)
    passengerRemove()
  }
  const [childPassengers, setChildPassengers] = useState(0)
  const [childPassengersMinusButtonDisabled,setChildPassengersMinusButtonDisabled] = useState(true)
  const ChildPassengersAdd = () =>{
    setChildPassengers(childPassengers + 1)
    passengerAdd()
  }
  const ChildPassengersRemove = () =>{
    setChildPassengers(childPassengers - 1)
    passengerRemove()
  }
  const [babiesPassengers, setBabiesPassengers] = useState(0)
  const [babiesPassengersMinusButtonDisabled, setBabiesPassengersMinusButtonDisabled] = useState(true)
  const BabiesPassengersAdd = () =>{
    setBabiesPassengers(babiesPassengers + 1)
    passengerAdd()
  }
  const BabiesPassengersRemove = () =>{
    setBabiesPassengers(babiesPassengers - 1)
    passengerRemove()
  }

  const displayPassengersPopup = () =>{
    document.getElementById('st__passengers-popup').classList.toggle('_called')
  }
  useEffect(() =>{
    if (adultPassengers === 0) {
      setAdultPassengersMinusButtonDisabled(true)
    }
    else {
      setAdultPassengersMinusButtonDisabled(false)
    };
    if (childPassengers === 0) {
      setChildPassengersMinusButtonDisabled(true)
    }
    else {
      setChildPassengersMinusButtonDisabled(false)
    };
    if (babiesPassengers === 0) {
      setBabiesPassengersMinusButtonDisabled(true)
    }
    else {
      setBabiesPassengersMinusButtonDisabled(false)
    }
  },[adultPassengers,childPassengers,babiesPassengers])
  return(
    <div className={className}>
        <div className="flight-by-route__location-from">
          <DestinationInput 
            className="destination-input"
            buttonClassName="flight-by-route__position-button"
            buttonId="location-from-position"
            buttonType='button'
            inputId="location-from-input"
            inputPlaceholder="Location From..."
          />
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
          <DestinationInput
            className="destination-input"
            buttonClassName="flight-by-route__position-button"
            buttonId="location-to-position"
            buttonType='button'
            inputId="location-to-input"
            inputPlaceholder="Location To..."
          />
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
            <div id="st__passengers-selection" onClick={displayPassengersPopup}>
            <span><span>Passengers: </span><span>{passengersNumber}</span></span>
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
                <button type="button" 
                        className="st__popup-minus"
                        onClick={adultPassengersRemove} 
                        disabled={adultPassengersMinusButtonDisabled}>
                          <img src={Minus} alt="" />
                </button>
                <input  readOnly
                        value={adultPassengers}
                        className="st__popup-input" 
                        type="number"
                />
                <button type="button" 
                        className="st__popup-plus" 
                        onClick={adultPassengersAdd}>
                          <img src={Plus} alt="" />
                </button>
              </div>
            </div>
            <div className="st__popup-row">
              <div className="st__popup-text">
                <h4>Children</h4>
                <span>From 2 to 12 years</span>
              </div>
              <div className="st__popup-interractions">
                <button type="button" 
                        className="st__popup-minus" 
                        onClick={ChildPassengersRemove} 
                        disabled={childPassengersMinusButtonDisabled}>
                          <img src={Minus} alt="" />
                </button>
                <input readOnly 
                       value={childPassengers} 
                       className="st__popup-input" 
                       type="number"
                />
                <button type="button" 
                        className="st__popup-plus" 
                        onClick={ChildPassengersAdd}>
                          <img src={Plus} alt="" />
                </button>
              </div>
            </div>
            <div className="st__popup-row">
              <div className="st__popup-text">
                <h4>Babies</h4>
                <span>Up to 2 years, no place</span>
              </div>
              <div className="st__popup-interractions">
                <button type="button" 
                        className="st__popup-minus" 
                        onClick={BabiesPassengersRemove} 
                        disabled={babiesPassengersMinusButtonDisabled}>
                          <img src={Minus} alt=""/>
                </button>
                <input readOnly 
                        value={babiesPassengers} 
                        className="st__popup-input" 
                        type="number"
                />
                <button type="button" 
                        className="st__popup-plus" 
                        onClick={BabiesPassengersAdd}>
                          <img src={Plus} alt="" />
                </button>
              </div>
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