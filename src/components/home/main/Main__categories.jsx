import { useState } from "react";
import "../../../styles/home/main/main__categories.css";
import Aside from "./aside/Aside";
import FlightByRouteCharterRent from "./section/Flight-by-route__charter-rent.jsx";
import FlightByRouteSeatTicket from "./section/Flight-by-route__seat-ticket";
import RentByTime from "./section/Rent-by-time";
import SearchCrew from "./section/Search-crew";



const MainCaterogies = ({className ,homePageState}) => {
  return(
    
    <div className={className}>
      <Aside
        homePageState={homePageState}
      />
      <FlightByRouteCharterRent
        className={homePageState == "CharterRent"? "flight-by-route-charter-rent__main _active": "flight-by-route-charter-rent__main"}
      />
      <FlightByRouteSeatTicket
        className={homePageState == "SeatTicket"? "flight-by-route-seat-ticket__main _active": "flight-by-route-seat-ticket__main"}
      />
      <RentByTime
        className={homePageState == "RentByTime"? "rent-by-time__main _active": "rent-by-time"}
      />
      <SearchCrew
        className={homePageState == "SearchCrew"? "rent-by-time__main _active": "rent-by-time"}
      />
    </div>
  )
}

export default MainCaterogies