import React, { useEffect, useState } from "react"; 
import '../../../../styles/index/main/section/flight-by-route__main.css';
import Plane from "./Flight-by-route__plane.jsx";

const FlightByRouteCharterRent = function() {
  let [planes, setPlanes] = useState([
    {
      id: 1,
      name: "McDonnell Douglas MD-80",
      price: 2500,
      cardPhoto: require('../../../../images/index/main/section/charter-rent/McDonnell Douglass 2500.jpg'),
      crewNumber: 4,
      crew: ["Captain", "Co-pilot", "Engineer", "Attendant"],
      type: "Business Jets",
      seatsNumber: 12,
      buildYear: 2012,
      maxRange: 1240,
      speed: 910
    },
    {
      id: 2,
      name: "Saab Aircraft — 340",
      price: 1410,
      cardPhoto: require('../../../../images/index/main/section/charter-rent/Saab Aircraft 1410.jpg'),
      crewNumber: 4,
      crew: ["Captain", "Co-pilot", "Engineer", "Attendant"],
      type: "Business Jets",
      seatsNumber: 12,
      buildYear: 2012,
      maxRange: 1240,
      speed: 910
    },
    {
      id: 3,
      name: "BAe Avro RJ-70/85/100",
      price: 5100,
      cardPhoto: require('../../../../images/index/main/section/charter-rent/BAe Avro 5100.jpg'),
      crewNumber: 4,
      crew: ["Captain", "Co-pilot", "Engineer", "Attendant"],
      type: "Business Jets",
      seatsNumber: 12,
      buildYear: 2012,
      maxRange: 1240,
      speed: 910
    },
    {
      id: 4,
      name: "Boeing 737 MAX",
      price: 1600,
      cardPhoto: require('../../../../images/index/main/section/charter-rent/Boeing 1600.jpg'),
      crewNumber: "No Crew",
      type: "Business Jets",
      seatsNumber: 12,
      buildYear: 2012,
      maxRange: 1240,
      speed: 910
    },
    {
      id: 5,
      name: "McDonnell Douglas MD-80",
      price: 800,
      cardPhoto: require('../../../../images/index/main/section/charter-rent/McDonnell Douglass 800.jpg'),
      crewNumber: "No Crew",
      type: "Business Jets",
      seatsNumber: 12,
      buildYear: 2012,
      maxRange: 1240,
      speed: 910
    },
    {
      id: 6,
      name: "Airbus A330",
      price: 6500,
      cardPhoto: require('../../../../images/index/main/section/charter-rent/Airbus 6500.jpg'),
      crewNumber: 4,
      crew: ["Captain", "Co-pilot", "Engineer", "Attendant"],
      type: "Business Jets",
      seatsNumber: 12,
      buildYear: 2012,
      maxRange: 1240,
      speed: 910
    },
    {
      id: 7,
      name: "Pilatus PC-12",
      price: 2650,
      cardPhoto: require('../../../../images/index/main/section/charter-rent/Pilatus 2650.jpg'),
      crewNumber: "No Crew",
      type: "Business Jets",
      seatsNumber: 12,
      buildYear: 2012,
      maxRange: 1240,
      speed: 910
    },
    {
      id: 8,
      name: "Dornier 228",
      price: 6500,
      cardPhoto: require('../../../../images/index/main/section/charter-rent/Dornier 228.jpg'),
      crewNumber: 2,
      crew: ["Captain", "Co-pilot"],
      type: "Business Jets",
      seatsNumber: 12,
      buildYear: 2012,
      maxRange: 1240,
      speed: 910
    },
    {
      id: 9,
      name: "Beechcraft King Air",
      price: 4400,
      cardPhoto: require('../../../../images/index/main/section/charter-rent/Beechcraft 4400.jpg'),
      crewNumber: 4,
      crew: ["Captain", "Co-pilot", "Engineer", "Attendant"],
      type: "Business Jets",
      seatsNumber: 12,
      buildYear: 2012,
      maxRange: 1240,
      speed: 910
    },
  ])
  return(
    <div className="section__flight-by-route section__flight-by-route_charter-rent">
      <h1>Search results for Flight by route (Charter Rent)</h1>
      <div className="flight-by-route__items">
        {planes.map(plane =>
          <Plane plane={plane} key={plane.id}/>
        )}
      </div>
      
    </div>
  )
}


export default FlightByRouteCharterRent