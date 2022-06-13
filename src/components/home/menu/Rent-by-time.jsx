import React, {Component, useEffect, useState} from "react";
import "../../../styles/home/menu/Rent-by-time.css"
import DestinationInput from "../../UI/input/Destination-input";
import Select from "react-select";
import DateInput from "../../UI/input/Date-input";

const RentByTime = ({ParentClassName}) => {
  const [startDatePlaceholder, setStartDatePlaceholder] = useState('Start Date & Time')
  const [finishDatePlaceholder, setFinishDatePlaceholder] = useState('Finish Date & Time')

  const [startDatePopup, setStartDatePopup] = useState("Hidden")
  const [finishDatePopup, setFinishDatePopup] = useState("Hidden")

  const [isReturnToAnother, setReturnToAnother] = useState(false)
  const typesToSelect = [

    {value:"Turboprops",label:"Turboprops"},{value:"Light-Sport Aircraft",label:"Light-Sport Aircraft"},
    {value:"Helicopters",label:"Helicopters"},{value:"Tricycle Gear Aircraft",label:"Tricycle Gear Aircraft"},
    {value:"Airbus",label:"Airbus"},{value:"Single Engine Piston Aircraft",label:"Single Engine Piston Aircraft"},
    {value:"Amphibious",label:"Amphibious"},{value:"Business Jets",label:"Business Jets"}

  ]

  const confirmationAction = (popupToClose) => {
  }
  // const startDateconfirmationAction = (data) =>{
  //   setStartDatePlaceholder(data)
  // }
  // const finishDateconfirmationAction = (data) =>{
  //   setStartDatePlaceholder(data)
  // }

  const toggleStartCalendar = () => {
    if(startDatePopup === "Hidden"){
      setStartDatePopup("Shown")

    } else {
      setStartDatePopup("Hidden")
    }
    setFinishDatePopup("Hidden")
  }

  const toggleFinishCalendar = () => {
    if(finishDatePopup === "Hidden"){
      setFinishDatePopup("Shown")

    } else {
      setFinishDatePopup("Hidden")
    }
    setStartDatePopup("Hidden")   
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
      <DestinationInput 
          className={isReturnToAnother === true? "destination-input": "destination-input _hidden"}
          buttonType={'button'}
          parrentId={"rent-by-time__returnLocation"}
          inputPlaceholder={"Return To"}/>

      <div className="rent-by-time__row">
        <Select 
            classNamePrefix="rent-by-time__type-selection"
            closeMenuOnSelect={false}
            options={typesToSelect}
            placeholder={"Plane Types"}
            isSearchable
            isMulti/>

        <DateInput 
            className={'rent-by-time__date'}
            popupHidden={startDatePopup}
            placeholder={'Start Date & Time'}
            id={"rent-by-time-start-date"}
            image={'up'}
            onClick={toggleStartCalendar}
            confirmationAction={confirmationAction(setStartDatePlaceholder)}/>

        <DateInput 
            className={'rent-by-time__date'}
            popupHidden={finishDatePopup}
            placeholder={'Finish Date & Time'}
            id={"rent-by-time-finish-date"}
            image={'down'}
            onClick={toggleFinishCalendar}
            confirmationAction={confirmationAction(setFinishDatePlaceholder)}/>
      </div>

    </form>
  )
}

export default RentByTime