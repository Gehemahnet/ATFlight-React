import React, { useState} from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "../../styles/slider-range.css"
import DropDown from "../../images/home/menu/flight-by-route/select-dropdown.svg"
import DropUp from "../../images/home/menu/flight-by-route/select-dropup.svg"

const SliderRange = ({title, measures, measuresIcon, className, id, defaultPlaceholder, sliderMin, sliderMax, sliderDefault,step}) => {
  
  const [dropdownState, setDropdownState] = useState(DropDown)
  const [popupState, setPopupState] = useState("Hidden")

  const [windowState, setWindowState] = useState(defaultPlaceholder)
  const [sliderValues, setSliderValues] = useState(sliderDefault)
  
  const twoInputDataConnection = (firstInputData, secondInputData) =>{
    setSliderValues([Number(firstInputData), Number(secondInputData)])
  }


  return(
    <div 
      className={className + ' slider'}
      id={id}
      onClick={() => {
          {popupState == "Hidden"? setPopupState("Shown") : setPopupState("Hidden")}
          {dropdownState == DropDown? setDropdownState(DropUp) : setDropdownState(DropDown)}
          setWindowState(`${sliderValues[0]} - ${sliderValues[1]} ${measures}`)
        }}
    >

      <div className={className + " slider-window"}>
        <div className={className + " window-slider"}>
          <span className={windowState== defaultPlaceholder? className + " window-slider-text" : className + " window-slider-text _hidden"}>{title}</span>
          <span className={windowState== defaultPlaceholder? className + " window-slider-number" : className + " window-slider-number _entered"}>{windowState}</span>
        </div>
        <img src={dropdownState} alt="" />

      </div>

      <div className={popupState === "Shown"? className + " slider-popup _active" : className + " slider-popup"}>
        <div className={className + " slider-popup-overlay"}>
          
        </div>
        <div className={className + " slider-popup-wrapper"}
          onClick={(e)=>e.stopPropagation()}
        >
          <div className={className + " slider-popup-decorating"}></div>
          <h4>{title}</h4>
          <Slider
            range
            min={sliderMin}
            max={sliderMax}
            step={step}
            allowCross={false}
            value={sliderValues}
            onChange={setSliderValues}
          />   
          <div className={className + " slider-popup-data-to-check"}>
            <div className={className +" slider-popup-data"}>
            <input max={sliderMax} type="number" value={sliderValues[0]} onChange={e => {
              if (e.target.value < sliderMin){
                e.target.value = sliderMin
              }
              if (e.target.value > sliderMax){
                e.target.value = sliderMax
              }
              twoInputDataConnection(e.target.value, sliderValues[1])}}
            />
              {measuresIcon !== false? <img src={measuresIcon} alt="" /> : <span>{measures}</span>}
            </div>
            <div className={className +" slider-popup-data"}>
            <input max={sliderMax} value={sliderValues[1]} onChange={e => {
              if (e.target.value < sliderMin){
                e.target.value = sliderMin
              }
              if (e.target.value > sliderMax){
                e.target.value = sliderMax
              }
              twoInputDataConnection(sliderValues[0], e.target.value)}}
            />
              {measuresIcon !== false? <img src={measuresIcon} alt="" /> : <span>{measures}</span>}
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )

}

export default SliderRange