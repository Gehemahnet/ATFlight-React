import React, { useState } from "react";
import "../../../styles/home/menu/menu.css";
import FlightByRoute from "./Flight-by-route.jsx"
import RentByTime from "./Rent-by-time.jsx"
import SeacrhCrew from "./Search-crew";
import SearchCrew from "./Search-crew"

const Menu = ({setHomePageState}) => {
  const [chosenMenu,setChosenMenu] = useState("FlightByRoute")
  const chooseTab = (tab) => {
    setChosenMenu(tab)
  }

  return(
    <div className="menu">
      <div className="wrapper _menu">
        <div className="menu__content">
          <div className="menu__window">
            <div className="menu__header">
              <div className={chosenMenu == "FlightByRoute"?"menu__header-link _active":"menu__header-link"}
                   onClick={()=> chooseTab("FlightByRoute")}>Flight By Route
              </div>
              <div className={chosenMenu == "RentByTime"?"menu__header-link _active":"menu__header-link"}
                   onClick={()=> chooseTab("RentByTime")}>Rent By Time
              </div>
              <div className={chosenMenu == "SearchCrew"?"menu__header-link _active":"menu__header-link"}
                   onClick={()=> chooseTab("SearchCrew")}>Search Crew</div>
            </div>
            <div className="menu__body">

              <FlightByRoute 
                parentClassName={chosenMenu == "FlightByRoute"?"flight-by-route _active":"flight-by-route"}
                setHomePageState={setHomePageState}
              />
              <RentByTime 
                parentClassName={chosenMenu == "RentByTime" ?"rent-by-time _active": "rent-by-time"}
                setHomePageState={setHomePageState}
              />
              <SeacrhCrew 
                parentClassName={chosenMenu == "SearchCrew" ?"search-crew _active": "search-crew"}
                setHomePageState={setHomePageState} 
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Menu