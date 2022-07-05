import { useState } from "react";
import MagnifyingGlass from '../../../../images/home/main/section/magnifying-glass.svg'
import CategoryCards from "./CategoryCards.jsx";
import Button from "../../../UI/button/Button";

const SearchCrew = (props) => {
  const crewMembers = [
    {
      name:"Jenny Wilson",
      price: "110$",
      img: require("../.././../../images/home/main/section/search-crew/Jenny Wilson.jpg"),
      rank: "First Pilot",
      experience: "7 year",
      hours: "2500",
      types: ["Multi-Engine Piston", "Business Jets"]
    },
    {
      name:"Floyd Miles",
      price: "150$",
      img: require("../.././../../images/home/main/section/search-crew/Floyd Miles.jpg"),
      rank: "First Pilot",
      experience: "7 year",
      hours: "2500",
      types: ["Multi-Engine Piston", "Business Jets"]
    },
    {
      name:"Jacob Jones",
      price: "120$",
      img: require("../.././../../images/home/main/section/search-crew/Jacob Jones.jpg"),
      rank: "First Pilot",
      experience: "7 year",
      hours: "2500",
      types: ["Multi-Engine Piston", "Business Jets"]
    },
    {
      name:"Eleanor Pena",
      price: "200$",
      img: require("../.././../../images/home/main/section/search-crew/Eleanor Pena.jpg"),
      rank: "First Pilot",
      experience: "7 year",
      hours: "2500",
      types: ["Multi-Engine Piston", "Business Jets"]
    },
    {
      name:"Marvin McKinney",
      price: "180$",
      img: require("../.././../../images/home/main/section/search-crew/Marvin McKinney.jpg"),
      rank: "First Pilot",
      experience: "7 year",
      hours: "2500",
      types: ["Multi-Engine Piston", "Business Jets"]
    },
    {
      name:"Savannah Nguyen",
      price: "210$",
      img: require("../.././../../images/home/main/section/search-crew/Savannah Nguyen.jpg"),
      rank: "First Pilot",
      experience: "7 year",
      hours: "2500",
      types: ["Multi-Engine Piston", "Business Jets"]
    },
    {
      name:"Darrell Steward",
      price: "160$",
      img: require("../.././../../images/home/main/section/search-crew/Darrell Steward.jpg"),
      rank: "First Pilot",
      experience: "7 year",
      hours: "2500",
      types: ["Multi-Engine Piston", "Business Jets"]
    },
    {
      name:"Annette Black",
      price: "120$",
      img: require("../.././../../images/home/main/section/search-crew/Annette Black.jpg"),
      rank: "First Pilot",
      experience: "7 year",
      hours: "2500",
      types: ["Multi-Engine Piston", "Business Jets"]
    },
    {
      name:"Esther Howard",
      price: "180$",
      img: require("../.././../../images/home/main/section/search-crew/Esther Howard.jpg"),
      rank: "First Pilot",
      experience: "7 year",
      hours: "2500",
      types: ["Multi-Engine Piston", "Business Jets"]
    }
  ];
  const [numberOfCards, setNumberOfCards] = useState(9);
  const loadMoreCards = () => {
    setNumberOfCards(numberOfCards + numberOfCards)
  }
  const membersSlicing = crewMembers.slice(0, numberOfCards)
  return(
    <div className={props.className}>
      <div className="category__header">
        <h1>Search results for Crew</h1>
        <img src={MagnifyingGlass} alt="" />
      </div>
      <div className="category__items">
        {membersSlicing.map(card =>
          <CategoryCards
            type={"Search Crew"}
            key={card.name} 
            member={card}
          />
        )}
      </div>
      <Button
        disabled={numberOfCards == crewMembers.length ? true : false}
        className="UI__load-more-button" 
        text="Load More"
        onClick={loadMoreCards}
      />
    </div>
  )

}

export default SearchCrew