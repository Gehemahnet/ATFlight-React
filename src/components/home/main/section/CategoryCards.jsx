import Seat from "../../../../images/home/main/section/cards/seat.svg";
import Speed from '../../../../images/home/main/section/cards/speed.svg';
import Range from '../../../../images/home/main/section/cards/range.svg';
import BluePaperPlane from "../../../../images/home/main/section/cards/paper-plane-blue.svg";
import PaperPlane from "../../../../images/home/main/section/cards/paper-plane.svg";
import PlaneUp from "../../../../images/home/main/section/cards/plane-up.svg";
import PlaneDown from "../../../../images/home/main/section/cards/plane-down.svg";
import License from "../../../../images/home/main/section/cards/license.svg";
import Hours from "../../../../images/home/main/section/cards/hours.svg";
import Experience from "../../../../images/home/main/section/cards/experience.svg";

const CategoryCards = (props) => {

    switch(props.type){
      case "Charter Rent":
        return(
          <div className="category__item">
          <div className="category__item-photo">
            <img src={props.plane.cardPhoto}/>
            <div>{props.plane.price}$</div>
          </div>
          <div className="category__item-text">
            <h2 className="category__item-name">{props.plane.name}</h2>
            <h4 className="category__item-crew">
              {props.plane.crewNumber == 'No Crew'?
              <span>No Crew</span>:
              <span>x{props.plane.crewNumber} Crew: <span className="category__item-tag-crew">
              {props.plane.crew.join(', ')}</span>
              </span>
              }
            </h4>
          </div> 
          <div className="category__item-tags">
            <div className="category__item-tag _active" ><img src={BluePaperPlane}/><span>{props.plane.type}</span></div>
            <div className="category__item-tag" ><img src={Seat}/><span>x{props.plane.seatsNumber}</span></div>
            <div className="category__item-tag" >{props.plane.buildYear} Year</div>
            <div className="category__item-tag" ><img src={Speed}/><span>{props.plane.speed} km/h</span></div>
            <div className="category__item-tag" ><img src={Range}/><span>{props.plane.maxRange} km/h</span></div>
          </div>
        </div>
        )
      case "Seat Ticket":
        return(
          <div className="category__item">
            <div className="category__item-photo">
              <img src={props.ticket.img}/>
              <div>{props.ticket.price}</div>
            </div>
              <h2 style={{margin: "20px 0"}} className="category__item-name">{props.ticket.name}</h2>
            <div className="category__item-tags">
              <div className="category__item-tag _active" ><img src={PlaneUp}/><span>{props.ticket.flightTime}</span></div>
              <div className="category__item-tag _active" ><img src={PlaneDown}/><span>{props.ticket.landingTime}</span></div>
              <div style={{width: "105px"}} className="category__item-tag" ><img src={Seat} alt="" />{props.ticket.seats} (Seats)</div>
            </div>
          </div>
        )
      case "Rent By Time":
        return(
          <div className="category__item">
          <div className="category__item-photo">
            <img src={props.plane.cardPhoto}/>
            <div>{props.plane.price}$</div>
          </div>
          <div className="category__item-text">
            <h2 className="category__item-name">{props.plane.name}</h2>
            <h4 className="category__item-crew">
              {props.plane.crewNumber == 'No Crew'?
              <span>No Crew</span>:
              <span>x{props.plane.crewNumber} Crew: <span className="category__item-tag-crew">
              {props.plane.crew.join(', ')}</span>
              </span>
              }
            </h4>
          </div> 
          <div className="category__item-tags">
            <div className="category__item-tag _active" ><img src={BluePaperPlane}/><span>{props.plane.type}</span></div>
            <div className="category__item-tag" ><img src={Seat}/><span>x{props.plane.seatsNumber}</span></div>
            <div className="category__item-tag" >{props.plane.buildYear} Year</div>
            <div className="category__item-tag" ><img src={Speed}/><span>{props.plane.speed} km/h</span></div>
            <div className="category__item-tag" ><img src={Range}/><span>{props.plane.maxRange} km/h</span></div>
          </div>
        </div>
        )
      case "Search Crew":
        return(
          <div className="category__item">
            <div className="category__item-photo">
              <img src={props.member.img}/>
              <div style={{width: "95px"}}>{props.member.price}<span style={{fontSize: "12px", color: "#FFFFFF", opacity: "0.5", marginLeft: "5px"}}>/Hour</span></div>
            </div>
              <h2 style={{margin: "20px 0"}} className="category__item-name">{props.member.name}</h2>
            <div className="category__item-tags">
            <div className="category__item-tag _active" ><img src={License}/><span>{props.member.rank}</span></div>
            <div className="category__item-tag" ><img src={Experience}/><span>{props.member.experience}</span></div>
            <div className="category__item-tag" ><img src={Hours}/><span>{` ~ ${props.member.hours} h`}</span></div>
            {props.member.types.map(type =>
              <div
                key={type} 
                className="category__item-tag" ><img src={PaperPlane}/><span>{type}</span></div>
              )}
            </div>
          </div>
        )
    }
    
}

export default CategoryCards