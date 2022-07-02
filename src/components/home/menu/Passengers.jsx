import React, { useState, useEffect} from "react";
import "../../../styles/home/menu/passengers.css"
import Passenger from "../../../images/home/menu/flight-by-route/passenger.svg";
import Minus from "../../../images/home/menu/flight-by-route/minus.svg";
import Plus from "../../../images/home/menu/flight-by-route/plus.svg";

const Passengers = ({className}) => {

  const [passengersNumber, setPassengersNumber] = useState(0)
  const passengerAdd = () =>{
    setPassengersNumber(passengersNumber + 1)
  }
  const passengerRemove = () =>{
    setPassengersNumber(passengersNumber - 1)
  }

  const [passengerPopupState, setPassengerPopupState] = useState("Hidden")

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

  useEffect(() =>{
    {adultPassengers === 0? setAdultPassengersMinusButtonDisabled(true) : setAdultPassengersMinusButtonDisabled(false)};
    {childPassengers === 0? setChildPassengersMinusButtonDisabled(true) : setChildPassengersMinusButtonDisabled(false)};
    {babiesPassengers === 0? setBabiesPassengersMinusButtonDisabled(true) : setBabiesPassengersMinusButtonDisabled(false)};
    setPassengerPopupState(passengerPopupState)

  },
  [passengerPopupState,adultPassengers,childPassengers,babiesPassengers]
  )
  return(
    <div 
      className={className + "passengers"}
      onClick={() => {passengerPopupState == "Hidden"? setPassengerPopupState("Shown") : setPassengerPopupState("Hidden")}}
    >

      <div className="passengers-window">
        <span><span>Passengers: </span><span>{passengersNumber}</span></span>

        <img src={Passenger} alt="" />

      </div>

      <div className={passengerPopupState === "Shown"? "passengers-popup _active" : "passengers-popup"}>
        <div className="passengers-popup-overlay">
        </div>

        <div className="passengers-popup-wrapper"
             onClick={(e)=>e.stopPropagation()}
        >
        
            <div className={"passengers-popup-decorating"}>
            </div>
            <div className={"passengers-popup-row"}>
                  <div className={"passengers-popup-text"}>
                    <h4>Adults</h4>
                    <span>Over 12 years</span>
                  </div>
                  <div className={"passengers-popup-interactions"}>
                    <button
                      type="button"
                      className={"passengers-popup-minus"}
                      onClick={adultPassengersRemove}
                      disabled={adultPassengersMinusButtonDisabled}
                    >
                      <img src={Minus} alt=""/>
                    </button>
                    <input
                      readOnly
                      value={adultPassengers}
                      className={"passengers-popup-input"}
                      type="number"
                    />
                    <button
                      type="button"
                      className={"passengers-popup-plus"}
                      onClick={adultPassengersAdd}
                    >
                      <img src={Plus} alt="" />
                    </button>
                  </div>
            </div>
            <div className={"passengers-popup-row"}>
                  <div className={"passengers-popup-text"}>
                    <h4>Children</h4>
                    <span>From 2 to 12 years</span>
                  </div>
                  <div className={"passengers-popup-interactions"}>
                    <button
                      className={"passengers-popup-minus"}
                      type="button"
                      onClick={ChildPassengersRemove}
                      disabled={childPassengersMinusButtonDisabled}
                    >
                      <img src={Minus} alt="" />
                    </button>
                    <input
                      readOnly
                      value={childPassengers}
                      className={"passengers-popup-input"}
                      type="number"
                    />
                    <button
                      type="button"
                      className={"passengers-popup-plus"}
                      onClick={ChildPassengersAdd}
                    >
                      <img src={Plus} alt="" />
                    </button>
                  </div>
            </div>
            <div className={"passengers-popup-row"}>
                  <div className={"passengers-popup-text"}>
                    <h4>Babies</h4>
                    <span>Up to 2 years, no place</span>
                  </div>
                  <div className={"passengers-popup-interactions"}>
                    <button
                      type="button"
                      className={"passengers-popup-minus"}
                      onClick={BabiesPassengersRemove}
                      disabled={babiesPassengersMinusButtonDisabled}
                    >
                       <img src={Minus} alt=""/>
                    </button>
                    <input
                      readOnly
                      value={babiesPassengers}
                      className={"passengers-popup-input"}
                      type="number"
                    />
                    <button
                      type="button"
                      className={"passengers-popup-plus"}
                      onClick={BabiesPassengersAdd}
                    >
                      <img src={Plus} alt="" />
                    </button>
                  </div>
            </div>
        </div>

      </div>

    </div>
  )

}


export default Passengers