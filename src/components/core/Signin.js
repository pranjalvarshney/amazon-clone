import React, { useState } from "react"
import "./signin.css"
import { useHistory } from "react-router-dom"
import { auth } from "../../firebase"
import { Link } from "react-router-dom"

export const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const handleSignin = (e) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authObj) => {
        history.push("/")
      })
      .catch((err) => alert(err.message))

    e.preventDefault()
  }
  const handleRegister = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authObj) => {
        console.log(authObj)
        history.push("/")
      })
      .catch((err) => alert(err.message))
  }
  return (
    <div className='signin'>
      <div className='signin-wrapper'>
        <Link to='/'>
          <img
            className='logo-signin'
            src='http://pngimg.com/uploads/amazon/amazon_PNG9.png'
            alt='logo'
          />
        </Link>
        <div className='signin-form-box'>
          <h2>Login</h2>
          {/* <form onSubmit={handleSignin}> */}
          <div className='form-group'>
            <label className='label-text'>Email or mobile phone number</label>
            <input
              className='form-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label className='label-text'>Password</label>
            <input
              type='password'
              className='form-input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            By continuing, you agree to Amazon's Clone Conditions of Use and
            Privacy Notice.
          </p>
          <button onClick={handleSignin} className='form-btn'>
            Continue
          </button>
          {/* </form> */}
        </div>
        <div className='new-to-amazon-div'>
          <div className='plainline-grey'></div>
          <p className='new-to-amazon-text'> New to Amazon? </p>
          <div className='plainline-grey'></div>
        </div>
        <button className='btn-create-account' onClick={handleRegister}>
          Create a Amazon account
        </button>
        <div className='wrapper-options'>
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Help</p>
        </div>
        <p style={{ fontSize: "12px", color: "grey" }}>
          © 1996-2020, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  )
}
