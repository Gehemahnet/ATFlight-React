import React from "react";
import "../../../../styles/home/main/aside/aside.css";
import Map from "./Map.jsx";
import Filters from './Filters.jsx';

const Aside = ({homePageState}) => {
  return(
    <aside className="aside">
      <Map/>
      <Filters
        homePageState={homePageState}
      />
    </aside>
  )
}


export default Aside;