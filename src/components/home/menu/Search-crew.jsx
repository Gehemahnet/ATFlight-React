import React, { useState } from "react";
import "../../../styles/home/menu/search-crew.css"
import SliderRange from "../../UI/SliderRange";
import MenuFooter from "./Menu-footer";
import Select from "react-select";
import DropDown from "../../../images/home/menu/flight-by-route/select-dropdown.svg";
import DropUp from "../../../images/home/menu/flight-by-route/select-dropup.svg";
import { TYPES } from "../../../data/HomeMainData";

const SeacrhCrew = ({ParentClassName}) => {
  
  const [stateOfFilters, setStateOfFilters] = useState("Hidden")
  const showFilters = () => {stateOfFilters === "Hidden"? setStateOfFilters("Shown") : setStateOfFilters("Hidden")}
  
  const [vehicleTypesArrow, setVehicleTypesArrow] = useState(DropDown)
  const [vehicleTypesPopup, setVehicleTypesPopup] = useState("Hidden")
  const [vehicleTypes, setVehicleTypes] = useState ([])

  const professions = [
    {value:'Board Engineer', label:'Board Engineer'},
    {value:'Captain', label: 'Captain'},
    {value:'Flight attendant', label: 'Flight attendant'},
    {value:'First officer (co-pilot)', label:'First officer (co-pilot)'},
    {value:'Land Surveyor', label:'Land Surveyor'}]

  const genders = [
    {value:'Male', label:'Male'}, 
    {value:'Female', label:'Female'}, 
    {value:'Prefer not to say', label:'Prefer not to say'}]

  const languages = [
    {value:'English', label:'English'}
  ]
  

  return(
    <form className={ParentClassName}>

      <div className="search-crew__row">

        <Select
          classNamePrefix="search-crew__selection"
          id="search-crew__profession"
          closeMenuOnSelect={false}
          options={professions}
          placeholder={"Choose Profession"}
          isSearchable
          isMulti={false}
        />

        <div 
          className="search-crew__selection"
          id="search-crew__vehicle-types"
          onClick={() => {
            {vehicleTypesPopup == "Hidden"? setVehicleTypesPopup("Shown"): setVehicleTypesPopup("Hidden")}
            {vehicleTypesArrow == DropDown? setVehicleTypesArrow(DropUp): setVehicleTypesArrow(DropDown)}
          }}
        >
          <div 
            className="search-crew__selection-window"
          >
            <div
              className="search-crew__selection-selected"
            >
              {vehicleTypes.length == 0? "Vehicle Types" : vehicleTypes.map((item) => 
              <div 
                className="search-crew__selection-selected-item"
                key={item.key}

              >{item.type}
              </div>
              )}
            </div>
            <img src={vehicleTypesArrow} alt="" />
          </div>

          <div className={vehicleTypesPopup =="Hidden"? "search-crew__selection-popup": "search-crew__selection-popup _active"}>

            <div className="search-crew__selection-popup-overlay"></div>

            <div 
              className="search-crew__selection-popup-wrapper"
              onClick={e => {e.stopPropagation()}}
            >
              <div className="search-crew__selection-popup-decorating"></div>

              <div className="search-crew__selection-popup-body">
                {TYPES.map(item => 
                  <button
                    className="search-crew__selection-popup-body-item" 
                    key={item.id}
                    type="button"
                    onClick={e => {
                      let stateSet = vehicleTypes.slice()
                      e.target.closest('button').classList.toggle('_clicked')
                      let text = e.target.closest('button').querySelector('h4').textContent
                      if (e.target.closest('button').classList.contains('_clicked')){
                        stateSet.push({type: text, key: item.id})
                      } else {
                        let toDeleteIndex = stateSet.findIndex(value =>
                          value.type == text
                        )
                        stateSet.splice(toDeleteIndex,1)
                      }
                      setVehicleTypes(stateSet)
                    }}
                  >
                    <img src={item.icon} alt="" />
                    <h4>{item.name}</h4>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="search-crew__row">
        
        <SliderRange
          className={'search-crew__slider'}
          id="search-crew__salary"
          title={'Salary'}
          measures={'$/Hour'}
          measuresIcon={false}
          defaultPlaceholder={': From — To'}
          sliderMin={10}
          sliderMax={1000}
          sliderDefault={[100,450]}
        />

        <SliderRange
          className={'search-crew__slider'}
          id="search-crew__work-experience"
          title={'Work Experience'}
          measures={"Hours"}
          measuresIcon={false}
          sliderMin={1}
          sliderMax={100000}
          sliderDefault={[500, 1000]}
        />

      </div>
      
      <div className={stateOfFilters == "Hidden"? "search-crew__filters" : "search-crew__filters _shown"}>
        
        <div className="search-crew__row">
        
        <Select
          classNamePrefix="search-crew__selection"
          id="search-crew__gender"
          closeMenuOnSelect={false}
          options={genders}
          placeholder={"Gender (if needed)"}
          isSearchable
          isMulti
        />

        <SliderRange
          className={'search-crew__slider'}
          id="seacrh-crew__age"
          title={'Age'}
          measures={'Years'}
          measuresIcon={false}
          defaultPlaceholder={' (if  needed)'}
          step={1}
          sliderMin={21}
          sliderMax={70}
          sliderDefault={[25,50]}
        />
        <Select
          classNamePrefix="search-crew__selection"
          id="search-crew__languages"
          closeMenuOnSelect={false}
          options={languages}
          placeholder={"Languages"}
          isSearchable
          isMulti
        />

        </div>

      </div>  

      <MenuFooter
          showFilters={showFilters}
      />

    </form>
  )

}

export default SeacrhCrew