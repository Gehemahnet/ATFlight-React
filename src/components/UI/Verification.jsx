import React, { useState } from "react";
import ReactCodeInput from "react-code-input";
import Inbox from "../../images/UI/inbox.svg";
import Phone from "../../images/UI/phone.svg";
import ArrowLeft from "../../images/UI/arrow-left.svg";
import Button from "./button/Button";

const Verification = ({className, type, user, callback, closePopup, backToLogin}) => {

  const [readyToConfirm, setReadyToConfirm] = useState(false)

  return(
    <form className={className}>
      <div className="verification-header">
        <h1>{type} Verification</h1>
        <button
            onClick={ () => closePopup(true)} 
            type="button"
           >
          🞪
        </button>
      </div>
      <div className="verification-body">
        <img src={type == "E-mail"? Inbox : Phone} alt="" />
        <h3>Check Your {type}</h3>
        <h4 className="verification-prefUser">We send a 6 digits code to</h4>
        <h4 className="verification-user">{user}</h4>
        <ReactCodeInput
          onChange={e=> {
            {e.length < 6? setReadyToConfirm(false) : setReadyToConfirm(true)}
          }}
          type="number"
          fields={6}
          inputStyle={{
            width: "40px",
            height: "56px",
            background: "#F7F7F7",
            border: "none",
            borderRadius: "8px",
            margin: "0 8px",
            textAlign: "center",
            fontSize: "16px",
            MozAppearance: "textfield",
            appearance: "textfield"
          }}

        />
      </div>
      <div className="verification-footer">
        <button
          type="button"
          className="back-to-login"
          onClick={() => backToLogin()}
        >
          <img src={ArrowLeft} alt="" />
        </button>
        <Button
          type={"submit"}
          onClick={ (e) => {
            e.preventDefault(e)
            closePopup(true)
          }}
          disabled={!readyToConfirm}
          className={"button"}
          text={"Confirm"}
        />
      </div>
    </form>
  )
}

export default Verification