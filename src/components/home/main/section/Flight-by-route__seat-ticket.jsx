import { useState } from "react";
import MagnifyingGlass from '../../../../images/home/main/section/magnifying-glass.svg'
import CategoryCards from "./CategoryCards.jsx";
import Button from "../../../UI/button/Button";

const FlightByRouteSeatTicket = (props) => {
  const tickets = [
    {
      id:1,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/first.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:2,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/second.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:3,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/third.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:4,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/fourth.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:5,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/fifth.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:6,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/sixth.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:7,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/seventh.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:8,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/eighth.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:9,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/nineth.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:10,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/first.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:11,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/second.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:12,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/third.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:13,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/fourth.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:14,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/fifth.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:15,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/sixth.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:16,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/seventh.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:17,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/eighth.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    },{
      id:18,
      name: "New York — Hawai",
      img: require('../../../../images/home/main/section/seat-ticket/nineth.jpg'),
      price: "500$",
      flightTime: "20:30",
      landingTime: "09:50",
      seats: "x12"
    }
  ]
  const [numberOfCards, setNumberOfCards] = useState(9);
  const loadMoreCards = () => {
    setNumberOfCards(numberOfCards + numberOfCards)
  }
  const ticketsSlicing = tickets.slice(0, numberOfCards)
  return(
    <div className={props.className}>
      <div className="category__header">
        <h1>Search results for Flight by route (Seat Ticket)</h1>
        <img src={MagnifyingGlass} alt="" />
      </div>
      <div className="category__items">
        {ticketsSlicing.map(card =>
          <CategoryCards
            type={"Seat Ticket"}
            key={card.id} 
            ticket={card}
          />
        )}
      </div>
      <Button
        disabled={numberOfCards == tickets.length ? true : false}
        className="UI__load-more-button" 
        text="Load More"
        onClick={loadMoreCards}
      />
    </div>
  )
}

export default FlightByRouteSeatTicket