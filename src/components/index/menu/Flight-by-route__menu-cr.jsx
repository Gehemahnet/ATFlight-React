import React, {useState} from "react";
import "../../../styles/index/menu/flight-by-route__menu-cr.css"
import PositionIcon from "../../../images/index/menu/flight-by-route/position.svg";
import ChartIcon from "../../../images/index/menu/flight-by-route/chart.svg";
import CalendarIcon from "../../../images/index/menu/flight-by-route/calendar.svg";
import ChangeIcon from "../../../images/index/menu/flight-by-route/change.svg";
import SettingsIcon from "../../../images/index/menu/flight-by-route/settings.svg";
import MagnifyingGlass from "../../../images/index/menu/flight-by-route/magnifying-glass.svg";

const CharterRentMenu = ({className}) => {

  const DESTINATIONS = [
    
  ]
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