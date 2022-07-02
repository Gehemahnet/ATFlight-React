import React, { useEffect, useState } from "react";
import {TYPES, DESTINATIONS} from "../../../data/HomeMainData";
import DefaultBackground from "../../../images/home/main/main-default-planes.jpg";
import EmployeeImage from "../../../images/home/main/employee-img.svg"
import Button from "../../UI/button/Button";


const MainDefault = ({setVisible}) => {

  let [numberOfDestinationCards,setNumberOfDestinationCards] = useState(8)
  let destinationSlicing = DESTINATIONS.slice(0, numberOfDestinationCards)
  let shownDestinations = destinationSlicing.length
  let limit = DESTINATIONS.length
  let loadMoreCards = () =>{
    setNumberOfDestinationCards(numberOfDestinationCards + 4)
  }
  let[loadMoreStateDisabled, setLoadMoreStateDisabled] = useState(false)
  
  
  useEffect(() =>{
    {shownDestinations === limit? setLoadMoreStateDisabled(true):setLoadMoreStateDisabled(false)}
  },
  [loadMoreStateDisabled, shownDestinations, limit]
  )

  return(
    <div className="main__content-default_active">
          <div className="content-default__header">
            <h1 className="content-default__header-title">We will help you find out the best air freight</h1>
            <h4 className="content-default__header-subtitle">We are largest search engine for airline tickets in the Caribbean.
              We equally use the new transfer options at your expense,
              and then redirect to the official website of the airline and the agency for further purchase.</h4>
          </div>
          <div className="content-default__planes-image">
            <img src={DefaultBackground} alt="" />
          </div>
          <div className="content-default__vehicle-types">
            <h1>Types of Vehicles We Have</h1>
            <div className="content-default__vehicle-types-content">
              
              {TYPES.map(type =>
                <div
                  key={type.id} 
                  className="content-default__vehicle-types-item"
                  onClick={e => {
                    e.target.closest('.content-default__vehicle-types-item').classList.toggle('_active')
                    }}
                >
                  <div className="content-default__vehicle-types-item-overlay"></div>
                  <div className="content-default__vehicle-types-item-wrapper">
                    <button
                      type="button"
                    >
                      <img src={type.icon} alt=""/>
                      <h4 className="content-default__vehicle-types-item-name">{type.name}</h4>
                    </button>

                    <div className="content-default__vehicle-types-item-description">

                      <h5>{type.description}
                      <a
                        className="content-default__vehicle-types-read-more"
                        href={type.readMore}
                      > Read More
                      </a>
                      </h5>

                    </div>
                  
                  </div>
                </div>
              )}

            </div>
          </div>
          <div className="content-default__popular-destinations">
            <div className="content-default__popular-destinations-header">
              <h1 className="content-default__popular-destinations-title">Popular Destinations</h1>
              <h4 className="content-default__popular-destinations-subtitle">We are largest search engine for airline tickets in the Caribbean. 
                We equally use the new transfer options at your expense, 
                and then redirect to the official website of the airline and the agency for further purchase.</h4>
            </div>
            <div className="content-default__popular-destinations-content">
              {destinationSlicing.map(destination =>
              <div key={destination.id}
                   className="content-default__popular-destinations-item">
               <img src={destination.icon} alt="" />
               <h4 className="content-default__popular-destinations-item-name">{destination.name}</h4>
              </div>
              )}
            </div>
          </div>
          <Button 
            id={"content-default__load-more-button"} 
            className={"UI__load-more-button"}
            onClick={loadMoreCards}
            disabled={loadMoreStateDisabled}
            text={'Load More'}
          />
          <div className="content-default__employee">
            <img src={EmployeeImage} alt="" />
            <h1 className="content-default__employee-title">Register as an employee</h1>
            <h4 className="content-default__employee-subtitle">Viverra adipiscing a, adipiscing sit mi, ullamcorper iaculis augue. 
                In quam diam donec fermentum sed. Lacus vestibulum.</h4>
            <Button
              onClick={ () => {
                setVisible(true)

              }}
              className={'button'}
              id={'content-default__employee-button'}
              text={'Start Registration'}
            />
            
          </div>
        </div>
  )
}

export default MainDefault