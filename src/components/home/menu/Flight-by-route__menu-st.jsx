import React, {Fragment, useEffect, useState } from "react";
import "../../../styles/home/menu/flight-by-route__menu-st.css";
import "../../UI/input/Destination-input.jsx";
import ChartIcon from "../../../images/home/menu/flight-by-route/chart.svg";
import CalendarIcon from "../../../images/home/menu/flight-by-route/calendar.svg";
import ChangeIcon from "../../../images/home/menu/flight-by-route/change.svg";
import MenuFooter from "./Menu-footer";
import DestinationInput from "../../UI/input/Destination-input.jsx";
import Passengers from "./Passengers";
import PlusCircle from "../../../images/UI/plus-circle.svg";
import Buck from "../../../images/UI/buck.svg";
import SliderRange from "../../UI/SliderRange";
import Switcher from "../../UI/Switcher";


const SeatTicketMenu = ({className, setHomePageState}) => {
  const [typeOfTrip, setTypeOfTrip] = useState("One Way")
  const [limitOfDestinations, setLimitOfDestinations] = useState(1)
  const additionalDestinations = [
    {id: 1
    ,content:
    <Fragment>
  
    <button type="button" className="change-locations">
      <img src={ChangeIcon}/>
    </button>
  
    <div className="flight-by-route__row">
  
      <DestinationInput
        className="destination-input"
        buttonClassName="flight-by-route__position-button"
        buttonType='button'
        inputPlaceholder="Next Destination"
      />
      <button
        className="flight-by-route__chart-button"
        type="button"
      >
        <img src={ChartIcon}/>
      </button>
  
      <button
        className="flight-by-route__cr-add-destination"
        type="button"
        onClick={(e)=>{
          increaseLimit()
          e.target.closest('button').classList.add('_hidden')
        }}
      >
        <img src={PlusCircle}/>
        Add Destination
      </button>
  
    </div>
  
    </Fragment> 
    },
    {id: 2
      ,content:
      <Fragment>
    
      <button type="button" className="change-locations">
        <img src={ChangeIcon}/>
      </button>
    
      <div className="flight-by-route__row">
    
        <DestinationInput
          className="destination-input"
          buttonClassName="flight-by-route__position-button"
          buttonType='button'
          inputPlaceholder="Next Destination"
        />
        <button
          className="flight-by-route__chart-button"
          type="button"
        >
          <img src={ChartIcon}/>
        </button>
    
        <button
          className="flight-by-route__cr-add-destination"
          type="button"
          onClick={(e)=>{
            increaseLimit()
            e.target.closest('button').classList.add('_hidden')
          }}
        >
          <img src={PlusCircle}/>
          Add Destination
        </button>
    
      </div>
    
      </Fragment> 
    },
    {id: 3
      ,content:
      <Fragment>
    
      <button type="button" className="change-locations">
        <img src={ChangeIcon}/>
      </button>
    
      <div className="flight-by-route__row">
    
        <DestinationInput
          className="destination-input"
          buttonClassName="flight-by-route__position-button"
          buttonType='button'
          inputPlaceholder="Next Destination"
        />
        <button
          className="flight-by-route__chart-button"
          type="button"
        >
          <img src={ChartIcon}/>
        </button>
    
        <button
          className="flight-by-route__cr-add-destination"
          type="button"
          onClick={(e)=>{
            increaseLimit()
            e.target.closest('button').classList.add('_hidden')
          }}
        >
          <img src={PlusCircle}/>
          Add Destination
        </button>
    
      </div>
    
      </Fragment> 
    },
    {id: 4
        ,content:
        <Fragment>
      
        <button type="button" className="change-locations">
          <img src={ChangeIcon}/>
        </button>
      
        <div className="flight-by-route__row">
      
          <DestinationInput
            className="destination-input"
            buttonClassName="flight-by-route__position-button"
            buttonType='button'
            inputPlaceholder="Next Destination"
          />
          <button
            className="flight-by-route__chart-button"
            type="button"
          >
            <img src={ChartIcon}/>
          </button>
      
          <button
            className={limitOfDestinations ==4 ? "flight-by-route__cr-add-destination _hidden": "flight-by-route__cr-add-destination" }
            type="button"
            onClick={(e)=>{
              increaseLimit()
              e.target.closest('button').classList.add('_hidden')
            }}
          >
            <img src={PlusCircle}/>
            Add Destination
          </button>
      
        </div>
      
        </Fragment> 
    }
  ]
  const additionalDestinationToShow = additionalDestinations.slice(0,limitOfDestinations)
  const increaseLimit = () =>{
    if (limitOfDestinations < 4){
    setLimitOfDestinations(limitOfDestinations+1)
    }
  }
  const [stateOfFilters, setStateOfFilters] = useState("Hidden")
  const showFilters = () => {stateOfFilters === "Hidden"? setStateOfFilters("Shown") : setStateOfFilters("Hidden")}

  return(
    <div className={className}>

        <div className="flight-by-route__row">
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

          <div className="flight-by-route__rent-dates">
            
            <input placeholder="Rent Dates"/>

            <button 
              className="flight-by-route__calendar"
              type="button"
              >
              <img src={CalendarIcon}/>
            </button>
            
          </div>
          
        </div>

        <button type="button" className="change-locations">
          <img src={ChangeIcon}/>
        </button>

        <div className="flight-by-route__row">
          <DestinationInput
            className="destination-input"
            buttonClassName="flight-by-route__position-button"
            buttonId="location-to-position"
            buttonType='button'
            inputId="location-to-input"
            inputPlaceholder="Location To..."
          />
            <button 
              type="button" 
              className="flight-by-route__chart-button"
              id="location-to-chart">
              <img src={ChartIcon}/>
            </button>
            <select 
              className="flight-by-route__selection"
              id="way-type-selection"
              onChange={(e) => {
                  setTypeOfTrip(e.target.value)
              }}
            >
              <option>One Way</option>
              <option>Round Way</option>
              <option>Multitrip</option>
            </select>
            <Passengers className="flight-by-route__seat-ticket "/>
        </div>

        <div className={typeOfTrip == "Multitrip"? "flight-by-route__multiway _shown" : "flight-by-route__multiway"}>
        {additionalDestinationToShow.map((item) => <Fragment key={item.id}>{item.content}</Fragment>)}
        </div>

        <div className={stateOfFilters ==="Hidden"? "flight-by-route__cr-filters" : "flight-by-route__cr-filters _shown"}>

          <div className="flight-by-route__row">
            <SliderRange
              className={'flight-by-route__cr-price'}
              title={'Price'}
              measures={'$'}
              measuresIcon={Buck}
              defaultPlaceholder={': From — To'}
              sliderMin={100}
              sliderMax={50000}
              sliderDefault={[300,30000]}
            />

            <Switcher
              text={"Only with luggage"}
            />
            <Switcher
              text={"Without transfers"}
            />
            <Switcher
              text={"Convenient transfers"}
            />
          </div>

        </div>

        <MenuFooter
          homeStateToSet={"SeatTicket"}
          setHomePageState={setHomePageState} 
          showFilters={showFilters}
        />
    </div>
  )
}

export default SeatTicketMenu