import React from "react";
import "../../../../styles/home/main/aside/aside.css";
import Map from "./Map.jsx";
import Filters from './Filters.jsx';

const Aside = function() {
  return(
    <aside className="aside">
      <Map/>
      <Filters/>
    </aside>
  )
}


export default Aside;