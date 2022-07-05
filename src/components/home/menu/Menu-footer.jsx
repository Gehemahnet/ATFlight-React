import React from "react";
import "../../../styles/home/menu/menu-footer.css"
import Button from "../../UI/button/Button";
import MagnifyingGlass from "../../../images/home/menu/flight-by-route/magnifying-glass.svg";
import SettingsIcon from "../../../images/home/menu/flight-by-route/settings.svg";
import X from "../../../images/UI/x.svg"
import { useState } from "react";

const MenuFooter = ({showFilters, homeStateToSet, setHomePageState}) => {

  const buttonVariants = [
    {image:SettingsIcon, text: "Show More Filters", key:1},
    {image:X, text: "Hide Filters", key:2}
  ]
  const [stateOfButton, setStateOfButton] = useState(buttonVariants[0])
  const [stateOfFilters, setStateOfFilters] = useState("Hidden")

  return(
    <div className="menu-footer">

          <button
            onClick={() => {
              {stateOfFilters === "Hidden"? setStateOfFilters("Shown") : setStateOfFilters("Hidden")}
              {stateOfFilters === "Hidden"? setStateOfButton(buttonVariants[1]) : setStateOfButton(buttonVariants[0])}
              showFilters()
            }}
            className="menu-footer__show-more" 
            type="button">
            
            <img src={stateOfButton.image}/>

            <span>{stateOfButton.text}</span>

          </button>

          <Button
            onClick={ (e) => {
              e.preventDefault()
              setHomePageState(homeStateToSet)
            }}
            type="submit"
            className="button"
            image={MagnifyingGlass}
            text="Search"
          />
    </div>
  )

}


export default MenuFooter