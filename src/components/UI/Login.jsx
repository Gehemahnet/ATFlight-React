import React, { useState, useEffect } from "react";
import Eye from "../../images/UI/eye.svg";
import LoginUser from "../../images/UI/login-user.svg";
import GoogleLogin from "react-google-login";
import GoogleIcon from "../../images/UI/google.svg";
import AppleIcon from "../../images/UI/apple.svg"
import Button from "./button/Button";

const Login = ({className, toRegister, proceedToVerify, closePopup}) => {

  const [userLogin, setUserLogin] = useState("")
  const [dirtyLogin, setDirtyLogin] = useState(false)
  const [userPassword, setUserPassword] = useState("")
  const [dirtyPassword, setDirtyPassword] = useState(false)
  const [loginError, setLoginError] = useState("Email/phone can't be empty")
  const [passwordError, setPasswordError] = useState("Password can't be empty")
  const [readiness, setReadiness] = useState(false)

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "Login":
        setDirtyLogin(true)
        break
      case "Password":
        setDirtyPassword(true)
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

  useEffect(() =>{
    if (loginError == '' && passwordError == ''){
      setReadiness(true)
    } else {
      setReadiness(false)
    }
  }, [loginError,passwordError])

  return(
    <form
      className={className}
      action=""
    >
      <div className="login-header">
        <h1>Login</h1>
        <button
          onClick={ () => closePopup()} 
          type="button"
        >🞪
        </button>
      </div>

      <div className="login-body">
  
        <span>Email or Phone Number</span>
          {(dirtyLogin && loginError) && <div style={{color: "red"}}>{loginError}</div>}
        <div className="login-body-textfield">
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
          <div className="login-body-textfield">
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
            <h6>You can use these methods to login</h6>
            <GoogleLogin
              render={renderProps => (
                <button
                className="login-body-google"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                >
                <img src={GoogleIcon}></img>Sign In with Google
                </button>
              )}
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={(googleData) => { console.log(googleData)}}
              onFailure={(failure) => { console.log(failure)}}
             />
            <button
                className="login-body-apple"
                type="button"
                onClick={() => alert('Using of apple services is impossible at this moment.')}
              >
              <img src={AppleIcon} alt="" />Sign In with Apple
            </button>
       </div>

      <div className="login-footer">
        <Button
          onClick={() => toRegister()}
          type="button"
          className={"button"}
          text={"Regisrter New"} 
        />
        <Button
          disabled={!readiness}
          type="submit"
          className={"button"}
          text={"Login"}
          onClick={(e) => {
            e.preventDefault()
            proceedToVerify(userLogin)
          }}
        />
      </div>
    </form>
  )
  
}



export default Login