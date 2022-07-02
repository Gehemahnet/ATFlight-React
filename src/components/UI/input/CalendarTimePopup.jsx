import React, {useState, useEffect} from "react";
import PrevArrow from "../Previous-arrow.jsx";
import NextArrow from "../Next-arrow.jsx";
import Calendar from "react-calendar";
import moment from "moment";
import "../../../styles/Calendar.css";
import TimePicker from "rc-time-picker";
import Button from "../button/Button.jsx";
import "../../../styles/calendarTimePopup.css";
import X from "../../../images/UI/x.svg"
  

const CalendarTimePopup = ({
  popup, 
  className,
  closePopup,
  placeholder,
  defaultPlaceholder,
  textBeforeTime, 
  confirmationAction,
  resetAction
  }) => {

  const [popupState, setPopupState] = useState(popup)
  
  useEffect( () =>
  {setPopupState(popup)},
  [popup,  textBeforeTime, popupState]
  )

  const [date, setDate] = useState(new Date())
  const [timeValue, setTimeValue] = useState('12:00 pm')

  const finalData = `${date.toLocaleString('en-En', {day: 'numeric'})} ${date.toLocaleDateString('en-En', {month: 'long' })}, ${timeValue.toUpperCase()}`
  
  return(
    <div className={popupState === "Shown"?className + "-popup _active": className + "-popup"}>
      <div className={className + "-popup-overlay"}>  
      </div>
      <div className={className + "-popup-wrapper"}
            onClick={e => {e.stopPropagation()}}
      >
          <div className={className + "-popup-decorating"}></div>
          <div className={className + "-popup-body"}>
            <Calendar onChange={setDate}
                      value={date}
                      showDoubleView
                      calendarType="ISO 8601"
                      locale="en-EN"
                      showNeighboringMonth={false}
                      prevLabel={<PrevArrow/>}
                      nextLabel={<NextArrow/>}
            />
            <div className={className + "-popup-body-displayed"}>
                <span>{textBeforeTime}</span>
                <TimePicker
                    showSecond={false}
                    use12Hours={true}
                    value={moment(timeValue,'h:mm a')}
                    placeholder="Set Time"
                    onChange={(date)=>{setTimeValue(date.format('h:mm a').toUpperCase())}}
                />
        
                  <span className={className + "-popup-body-displayed-time-result"}>
                      {date.toLocaleString('en-En', {day: 'numeric'})} {date.toLocaleDateString('en-En', {month: 'long' })}, {timeValue.toUpperCase()}
                  </span>
            </div>
        
            <div className={className + "-popup-body-footer"}>
              <div className={className + "-popup-body-footer-buttons"}>

                  <button 
                          onClick={(e) => closePopup()}
                          type="button"
                          className={className + "-popup-body-footer-close"}><img src={X}/>
                  </button>

                  <button
                          onClick={(e) => resetAction(defaultPlaceholder)}  
                          type="button"
                          className={className + "-popup-body-footer-reset"}>Reset Selected
                  </button>
                  
              </div>

                  <Button
                      onClick={(e)=>{confirmationAction(e, finalData)}}
                      type="button"
                      className="button popup-body-footer-confirm"
                      text="Confirm"
                  />

              </div>

            </div>
            
        </div>
    </div>
  )
}


export default CalendarTimePopup