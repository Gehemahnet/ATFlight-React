import React, { useState, useEffect } from "react";
import "../../styles/login-popup.css";

import Verification from "./Verification";
import Login from "./Login";
import Registration from "./Registration";


const UserPopup = ({visible, setVisible}) => {
  const [currentStage, setCurrentStage] = useState("Login")
  const [typeOfVerification, setTypeOfVerification] = useState('')
  const [userLogin, setUserLogin] = useState("")

  const toVerify = (data) => {
    setCurrentStage("Verification")
    setUserLogin(data)
    if (data.includes('@')){
      setTypeOfVerification('E-mail')
    } else {
      setTypeOfVerification("Phone")
    }
  }

  const closePopup = () =>{
    setVisible(false)
    setCurrentStage('Login')
    document.body.classList.remove('_using-popup')
  }
  return(
    <div className={visible == true? "user-popup _active" : "user-popup"}>
      <div 
        className="user-popup-overlay"
      >
        <Login
          className={currentStage == "Login"? "login" : "login _hidden"}
          toRegister={() => setCurrentStage("Registration")}
          proceedToVerify={toVerify}
          closePopup={closePopup}
          
        />
        <Registration
          className={currentStage == "Registration"? "registration" : "registration _hidden"}
          backToLogin={() => {setCurrentStage("Login")}}
          closePopup={closePopup}
        />
        <Verification
          type={typeOfVerification}
          user={userLogin}
          className={currentStage == "Verification"? "verification" : "verification _hidden"}
          backToLogin={() => {setCurrentStage("Login")}}
          closePopup={closePopup}
        />

      </div>

    </div>
  )

}

export default UserPopup