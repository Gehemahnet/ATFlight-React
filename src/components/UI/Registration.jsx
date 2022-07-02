import React, { useState } from "react";
import LoginUser from "../../images/UI/login-user.svg";
import Eye from "../../images/UI/eye.svg";
import GoogleIcon from "../../images/UI/google.svg";
import AppleIcon from "../../images/UI/apple.svg";
import GoogleLogin from "react-google-login";
import ArrowLeft from "../../images/UI/arrow-left.svg";
import Button from "./button/Button";
import { useEffect } from "react";


const Registration = ({className, closePopup, backToLogin}) => {

  const [userLogin, setUserLogin] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userSecondPassword, setUserSecondPassword] = useState("")

  const [dirtyLogin, setDirtyLogin] = useState(false)
  const [dirtyPassword, setDirtyPassword] = useState(false)
  const [dirtySecondPassword, setDirtySecondPassword] = useState(false)

  const [loginError, setLoginError] = useState("Email/phone can't be empty")
  const [passwordError, setPasswordError] = useState("Password can't be empty")
  const [secondPasswordError, setSecondPasswordError] = useState("Password can't be empty")

  const [readiness, setReadiness] = useState(false)

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "Login":
        setDirtyLogin(true)
        break
      case "Password":
        setDirtyPassword(true)
        break
      case "SecondPassword":
        setDirtySecondPassword(true)
        break
      }
  }
  const loginHandler = (e) => {
    setUserLogin(e.target.value)
    const re = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/i
    if (!re.test(String(e.target.value).toLowerCase())) {
      setLoginError('Wrong email/phone')
    } else {
      setLoginError('')
    }
  }
  const passwordHandler = (e) => {
    setUserPassword(e.target.value)
    if (e.target.value.length < 6) {
      setPasswordError("Password must contains at least 7 characters")
    } else {
      setPasswordError('')
    }
  }
  const secondPasswordHandler = (e) => {
    setUserSecondPassword(e.target.value)
    if (e.target.value != userPassword) {
      setSecondPasswordError("Passwords must match")
    } else {
      setSecondPasswordError('')
    }
  }

  useEffect(() =>{
    if (loginError == '' && passwordError == '' && secondPasswordError == ''){
      setReadiness(true)
    } else {
      setReadiness(false)
    }
  }, [loginError,passwordError,secondPasswordError])

  return(
    <form
      className={className}
      action=""
    >

      <div className="registration-header">
        <h1>Registration</h1>
        <button
          onClick={ () => closePopup(true)} 
          type="button"
        >🞪
        </button>
      </div>

      <div className="registration-body">
        <h6 className="registration-body-title">Create an account so you can enjoy our services</h6>

        <span>Email or Phone Number</span>
          {(dirtyLogin && loginError) && <div style={{color: "red"}}>{loginError}</div>}
        <div className="registration-body-textfield">
          <input
            onBlur={ e => blurHandler(e)}
            onChange={ e => loginHandler(e)}
            value={userLogin}
            name="Login"
            placeholder="Your Email or Phone Number"
            type="text"
          />
          <img src={LoginUser} alt="" />
        </div>

        <span>Password</span>
        {(dirtyPassword && passwordError) && <div style={{color: "red"}}>{passwordError}</div>}
        <div className="registration-body-textfield">
            <input
              onBlur={ e => blurHandler(e)}
              onChange={ e => passwordHandler(e)}
              value={userPassword}
              name="Password"
              placeholder="Enter Password"
              type="password"
            />
            <button
              type="button"
              onClick={ (e) => {
                let targetInput = e.target.closest('div').querySelector('input')
                {targetInput.type == "password"? targetInput.type = "text" : targetInput.type = "password"}
              }}
              >
              <img src={Eye} alt="" />
            </button>
        </div>

        <span>Re-Enter Password</span>
        {(dirtySecondPassword && secondPasswordError) && <div style={{color: "red"}}>{secondPasswordError}</div>}
        <div className="registration-body-textfield">
            <input
              onBlur={ e => blurHandler(e)}
              onChange={ e => secondPasswordHandler(e)}
              value={userSecondPassword}
              name="SecondPassword"
              placeholder="Re-Enter Password"
              type="password"
            />
            <button
              type="button"
              onClick={ (e) => {
                let targetInput = e.target.closest('div').querySelector('input')
                {targetInput.type == "password"? targetInput.type = "text" : targetInput.type = "password"}
              }}
              >
              <img src={Eye} alt="" />
            </button>
        </div>

        <div className="registration-body-agreement">
          <div className="registration-body-checkbox">
            <input id="registration-agreement" type="checkbox" />
            <label htmlFor="registration-agreement"></label>
          </div>
          <div>
            <h4>By Creating your account you have to agree with our</h4>
            <a>Terms and Condition</a>
          </div>
        </div>
        
        <h6 
          style={{marginTop: "20px", fontSize: "14px", fontWeight: "400", color: "#AAAAAA", textAlign: "center"}}
        > You can use these methods to login
        </h6>
        <GoogleLogin
          render={renderProps => (
            <button
            className="registration-body-google"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            >
            <img src={GoogleIcon}></img>Sign Up with Google
            </button>
          )}
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={(googleData) => { console.log(googleData)}}
          onFailure={(failure) => { console.log(failure)}}
          />
        <button
            className="registration-body-apple"
            type="button"
            onClick={() => alert('Using of apple services is impossible at this moment.')}
          >
          <img src={AppleIcon} alt="" />Sign Up with Apple
        </button>
        
      </div>
      
      <div className="registration-footer">
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
            disabled={!readiness}
            className={"button"}
            text={"Registration"}
          />
      </div>
    </form>
  )

}

export default Registration