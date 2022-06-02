import React from "react";
import '../../../../styles/home/main/section/Flight-by-route__card.css'
import Seat from "../../../../images/home/main/section/Flight-by-route__plane/seat.svg";
import Speed from '../../../../images/home/main/section/Flight-by-route__plane/speed.svg'
import Range from '../../../../images/home/main/section/Flight-by-route__plane/range.svg'
import PaperPlane from "../../../../images/home/main/section/Flight-by-route__plane/paper-plane.svg"

const Plane = function(props){
  return(
    <div id={props.plane.id} className="flight-by-route__plane">
      <div className="flight-by-route__plane-photo">
        <img src={props.plane.cardPhoto}/>
        <div>{props.plane.price}$</div>
      </div>
      <div className="flight-by-route__plane-text">
        <h2 className="flight-by-route__plane-name">{props.plane.name}</h2>
        <h4 className="flight-by-route__plane-crew">
          {props.plane.crewNumber == 'No Crew'?
          <span>No Crew</span>:
          <span>x{props.plane.crewNumber} Crew: <span className="flight-by-route__plane-tag-crew">
          {props.plane.crew.join(', ')}</span>
          </span>
          }
        </h4>
      </div> 
      <div className="flight-by-route__plane-tags">
        <a className="flight-by-route__plane-tag flight-by-route__plane-tag_active" ><img src={PaperPlane}/><span>{props.plane.type}</span></a>
        <a className="flight-by-route__plane-tag" ><img src={Seat}/><span>x{props.plane.seatsNumber}</span></a>
        <a className="flight-by-route__plane-tag" >{props.plane.buildYear} Year</a>
        <a className="flight-by-route__plane-tag" ><img src={Speed}/><span>{props.plane.speed} km/h</span></a>
        <a className="flight-by-route__plane-tag" ><img src={Range}/><span>{props.plane.maxRange} km/h</span></a>
      </div>
    </div>
  )
}

export default Plane