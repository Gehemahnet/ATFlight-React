import React from "react";

const Button = ({className, id, onClick, disabled, text}) => {

  return(
    <button className={className} 
            id={id} 
            onClick={onClick} 
            disabled={disabled}>{text}</button>
  )
}

export default Button