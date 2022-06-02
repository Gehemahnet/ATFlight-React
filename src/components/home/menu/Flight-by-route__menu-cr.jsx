import React, {useState} from "react";
import "../../../styles/home/menu/flight-by-route__menu-cr.css";
import ChartIcon from "../../../images/home/menu/flight-by-route/chart.svg";
import CalendarIcon from "../../../images/home/menu/flight-by-route/calendar.svg";
import ChangeIcon from "../../../images/home/menu/flight-by-route/change.svg";
import SettingsIcon from "../../../images/home/menu/flight-by-route/settings.svg";
import MagnifyingGlass from "../../../images/home/menu/flight-by-route/magnifying-glass.svg";
import DestinationInput from "../../UI/input/Destination-input";

const CharterRentMenu = ({className}) => {
  const tripTypeChecking = () =>{
    const typeNode = document.getElementById('way-type-selection').value
    const appendNode = document.getElementsByClassName('flight-by-route__location-to')[0]
    const appendedElement = <DestinationInput/>
    if (typeNode == "Multiway") {
      appendNode.after(appendedElement)
    }
  }
  return(
    <div className={className}>
        <div className="flight-by-route__location-from">
          <DestinationInput
            className="destination-input"
            buttonClassName="flight-by-route__position-button"
            buttonId="location-from-position"
            buttonType='button'
            inputId="location-to-input"
            inputPlaceholder="Location From..."
          />
          <button type="button" className="flight-by-route__chart-button"
            id="location-from-chart">
              <img src={ChartIcon}/>
          </button>
          <input id="rent-dates-input" placeholder="Rent Dates"/>
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
          <select className="flight-by-route__selection"
            id="plane-type-selection">
            <option>Plane Type</option>
            <option>Plane Type</option>
            <option>Plane Type</option>
          </select>
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

export default CharterRentMenu