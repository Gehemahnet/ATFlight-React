import React from "react";
import "../../../styles/UI.css"


const LoadMore = ({id, onClick, buttonText}) => {

  return(
    <button id={id} onClick={onClick} type="button" className={"UI__load-more-button"}>{buttonText}</button>
  )
}

export default LoadMore