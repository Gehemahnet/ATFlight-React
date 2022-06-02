import React, {Component, useState} from "react";
import "../../../styles/home/menu/Rent-by-time.css"
import DestinationInput from "../../UI/input/Destination-input";
import Select from "react-select";
import { Calendar } from "react-calendar";

const RentByTime = ({ParentClassName}) => {
  const [isReturnToAnother, setReturnToAnother] = useState(false)
  const typesToSelect = [
    {value:"Turboprops",label:"Turboprops"},{value:"Light-Sport Aircraft",label:"Light-Sport Aircraft"},
    {value:"Helicopters",label:"Helicopters"},{value:"Tricycle Gear Aircraft",label:"Tricycle Gear Aircraft"},
    {value:"Airbus",label:"Airbus"},{value:"Single Engine Piston Aircraft",label:"Single Engine Piston Aircraft"},
    {value:"Amphibious",label:"Amphibious"},{value:"Business Jets",label:"Business Jets"}
]
  const typesToSelectStyles = {
    
  }
  return(
    <form className={ParentClassName}>
      <div className="rent-by-time__row">
        <DestinationInput className={"destination-input"}
                          buttonType={'button'}
                          parrentId={"rent-by-time__firstLocation"}
                          inputPlaceholder={"Location Name"}
          />
        <div className="rent-by-time__checkbox">
          <input onChange={(element)=> {
            if (element.target.checked == true){
              setReturnToAnother(true)
            }
            else {
              setReturnToAnother(false)
            }
          }} id="rent-by-time__return-to-another-airport" type="checkbox" />
          <label htmlFor="rent-by-time__return-to-another-airport"></label>
          <span>Return to another airport?</span>
        </div>
        <div className="rent-by-time__checkbox">
          <input id="rent-by-time__return-without-pilot" type="checkbox" />
          <label htmlFor="rent-by-time__return-without-pilot"></label>
          <span>Rent without a pilot?</span>
        </div>
      </div>
      <DestinationInput className={isReturnToAnother === true? "destination-input": "destination-input _hidden"}
                        buttonType={'button'}
                        parrentId={"rent-by-time__returnLocation"}
                        inputPlaceholder={"Return To"}
      />
      <div className="rent-by-time__row">
        <Select classNamePrefix="rent-by-time__type-selection"
                options={typesToSelect}
                closeMenuOnSelect={false}
                placeholder={"Plane Types"}
                isSearchable
                isMulti
        />
        <Calendar/>
      </div>
    </form>
  )
}

export default RentByTime