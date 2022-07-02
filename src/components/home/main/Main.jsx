import React, { useEffect, useState } from "react";
import "../../../styles/UI.css"
import "../../../styles/home/main/main.css";
import Aside from "./aside/Aside.jsx";
import MainDefault from "./Main__default";
import FlightByRouteCharterRent from "./section/Flight-by-route__charter-rent.jsx";

const Main = ({setVisible}) =>{
  const [HomeMainState, setHomeMainState] = useState("Default")
  return(
    <main className="main">
      <div className="wrapper _main">
        <MainDefault 
          className={HomeMainState === "Default"? "main__content-default_active": "main__content-default_disabled"}
          setVisible={setVisible}
        />
        <div className={HomeMainState === "CharterRent"? "main__charter-rent_active": "main__charter-rent_disabled"}>
          <Aside/>
          <section className="main__section">
            <FlightByRouteCharterRent/>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Main