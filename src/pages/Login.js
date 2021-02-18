import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const [authentication, setAuthentication] = useState({})
  const handleChange = (e) => {
    setAuthentication({ ...authentication, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const showLoginForm = () => {
    return (
      <div className="d-flex flex-column">
        <div className="login-input-wrap mb-4">
          <p className="login-label mb-0">Email</p>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={authentication.email}
          ></input>
        </div>
        <div className="login-input-wrap mb-2">
          <p className="login-label mb-0">Password</p>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={authentication.password}
          ></input>
        </div>
        {/* <Link className="forgot-password mb-4" to="/login/forgotpassword">
          Forgot Password?
        </Link> */}
        {/* {errorMsg && (
          <small className="mb-2 mt-0 text-danger text-center">
            {errorMsg}
          </small>
        )} */}
        <button onClick={handleSubmit} className="sign-in-btn">
          Sign in
        </button>
      </div>
    )
  }
  return (
    <div
      id="login-main-container"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div>
        <div className="login-top-container d-flex align-items-center justify-content-start">
          <div className="login-title d-flex mb-3">
            <h4>Linked</h4>
            <i className="fab fa-linkedin ml-1"></i>
          </div>
        </div>
        <div className="login-content-container mb-5">
          <div className="mb-4">
            <h2 className="mb-1">Sign in</h2>
            <p className="mb-0">Stay updated on your professional world</p>
          </div>
          {showLoginForm()}
        </div>
        <div className="text-center">
          <p>
            New to Our App?{" "}
            <Link to="/auth/signup" className="font-weight-bold">
              Join now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
