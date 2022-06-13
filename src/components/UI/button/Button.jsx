import React from "react";

const Button = ({className, id, onClick, disabled, text, type}) => {

  return(
    <button type={type}
            className={className} 
            id={id} 
            onClick={onClick} 
            disabled={disabled}>{text}</button>
  )
}

export default Button