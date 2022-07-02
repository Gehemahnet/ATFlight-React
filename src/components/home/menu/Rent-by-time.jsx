import React, { useEffect, useState} from "react";
import "../../../styles/home/menu/rent-by-time.css"
import DestinationInput from "../../UI/input/Destination-input";
import Select from "react-select";
import DateInput from "../../UI/input/Date-input";
import MenuFooter from "./Menu-footer";
import Passengers from "./Passengers";
import SliderRange from "../../UI/SliderRange";
import Buck from "../../../images/UI/buck.svg"

const RentByTime = ({ParentClassName}) => {

  const [isReturnToAnother, setReturnToAnother] = useState(false)
  const [stateOfFilters, setStateOfFilters] = useState("Hidden")
  
  const showFilters = () => {
    stateOfFilters === "Hidden"? setStateOfFilters("Shown") : setStateOfFilters("Hidden")
  }

  const typesToSelect = [

    {value:"Turboprops",label:"Turboprops"},{value:"Light-Sport Aircraft",label:"Light-Sport Aircraft"},
    {value:"Helicopters",label:"Helicopters"},{value:"Tricycle Gear Aircraft",label:"Tricycle Gear Aircraft"},
    {value:"Airbus",label:"Airbus"},{value:"Single Engine Piston Aircraft",label:"Single Engine Piston Aircraft"},
    {value:"Amphibious",label:"Amphibious"},{value:"Business Jets",label:"Business Jets"}

  ]

  return(
    <form className={ParentClassName}>

      <div className="rent-by-time__row">
        <DestinationInput 
            className={"destination-input"}
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

      <DestinationInput 
          className={isReturnToAnother === true? "destination-input": "destination-input _hidden"}
          buttonType={'button'}
          parrentId={"rent-by-time__returnLocation"}
          inputPlaceholder={"Return To"}
      />

      <div className="rent-by-time__row">

        <Select 
            classNamePrefix="rent-by-time__type-selection"
            closeMenuOnSelect={false}
            options={typesToSelect}
            placeholder={"Plane Types"}
            isSearchable
            isMulti
        />
        
        <DateInput
            className={'rent-by-time__date'}
            textBeforeTime={'Start Rent Time:'}
            defaultPlaceholder={'Start Date & Time'}
            id={"rent-by-time-start-date"}
            image={'up'}
        />

        <DateInput 
            className={'rent-by-time__date'}
            textBeforeTime={'Finish Rent Time:'}
            defaultPlaceholder={'Finish Date & Time'}
            id={"rent-by-time-finish-date"}
            image={'down'}
        />

      </div>
      <div className={stateOfFilters ==="Hidden"? "rent-by-time__filters" : "rent-by-time__filters _shown"}>
          <SliderRange
            className={'rent-by-time__price'}
            title={'Price'}
            measures={'$'}
            measuresIcon={Buck}
            defaultPlaceholder={': From — To'}
            sliderMin={100}
            sliderMax={50000}
            sliderDefault={[300,30000]}
          />
          <Passengers
            className='rent-by-time__passengers '
          />
          <SliderRange
            className={'rent-by-time__distance'}
            title={'Flight distance'}
            measures={"km"}
            measuresIcon={false}
            defaultPricePlaceholder={''}
            sliderMin={500}
            sliderMax={2000}
            sliderDefault={[750,1800]}
          /> 
          <SliderRange
            className={'rent-by-time__speed'}
            title={'Cruise Speed'}
            measures={'km/h'}
            measuresIcon={false}
            defaultPricePlaceholder={''}
            sliderMin={200}
            sliderMax={1800}
            sliderDefault={[750,1800]}
          />
      </div>
      <MenuFooter
        showFilters={showFilters}
      />

    </form>
  )
}

export default RentByTime