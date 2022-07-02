import React from "react";

const Button = ({className, id, onClick, disabled, text, type, image}) => {

  return(
    <button 
      className={className} 
      type={type}
      id={id} 
      onClick={onClick} 
      disabled={disabled}
    >
    <img src={image} alt="" />        
    {text}
    </button>
  )
}

export default Button