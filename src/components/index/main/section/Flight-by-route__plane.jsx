import React, { useState } from "react";
import Seat from "../../../../images/index/main/section/Flight-by-route__plane/seat.svg";
import Speed from '../../../../images/index/main/section/Flight-by-route__plane/speed.svg'
import Range from '../../../../images/index/main/section/Flight-by-route__plane/range.svg'
import PaperPlane from "../../../../images/index/main/section/Flight-by-route__plane/paper-plane.svg"

const Plane = function(props){
  return(
    <div id={props.plane.id} className="flight-by-route__plane">
      <div className="flight-by-route__plane-photo">
        <img src={props.plane.cardPhoto}/>
        <span>{props.plane.price}$</span>
      </div>
      <div className="flight-by-route__plane-text">
        <h2 className="flight-by-route__plane-name">{props.plane.name}</h2>
        <h4 className="flight-by-route__plane-crew">
          {props.plane.crewNumber == 'No Crew'? 'No Crew': 'x'+ props.plane.crewNumber +'Crew:' + props.plane.crew
          }
        </h4>
      </div> 
      <div className="flight-by-route__plane-tags">
        <a className="flight-by-route__plane-tag flight-by-route__plane-tag_active" ><img src={PaperPlane}/>{props.plane.type}</a>
        <a className="flight-by-route__plane-tag" ><img src={Seat}/>x{props.plane.seatsNumber}</a>
        <a className="flight-by-route__plane-tag" >{props.plane.buildYear} Year</a>
        <a className="flight-by-route__plane-tag" ><img src={Speed}/>{props.plane.speed} km/h</a>
        <a className="flight-by-route__plane-tag" ><img src={Range}/>{props.plane.maxRange} km/h</a>
      </div>
    </div>
  )
}

export default Plane