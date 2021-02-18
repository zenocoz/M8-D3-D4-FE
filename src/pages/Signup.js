import React, { useState, useEffect } from "react"
import "./auth.css"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

export default function Signup() {
  const handleSubmit = () => {}

  const [profile, setProfile] = useState({})

  //   useEffect(() => {
  //     Cookies.remove("userLogged", { path: "" })
  //   }, [])

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }
  const showSignupForm = () => {
    return (
      <div class="d-flex flex-column mt-4">
        <div className="login-input-wrap mb-4">
          <p className="login-label mb-0">Name</p>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={profile.name}
          ></input>
        </div>

        <div className="login-input-wrap mb-4">
          <p className="login-label mb-0">Surname</p>
          <input
            type="text"
            name="surname"
            onChange={handleChange}
            value={profile.surname}
          ></input>
        </div>

        <div className="login-input-wrap mb-4">
          <p className="login-label mb-0">Username</p>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            value={profile.userName}
          ></input>
        </div>
        <div className="login-input-wrap mb-4">
          <p className="login-label mb-0">Email</p>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={profile.email}
          ></input>
        </div>
        <div className="login-input-wrap mb-2">
          <p className="login-label mb-0">Password</p>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={profile.password}
          ></input>
        </div>

        {/* <div className="login-input-wrap mb-2">
          <p className="login-label mb-0">Confirm Password</p>
          <input
            type="password"
            name="password2"
            onChange={handleChange}
            value={password2}
          ></input>
        </div> */}

        {/* {errorMsg && (
          <small className="mb-2 mt-0 text-danger text-center">
            {errorMsg}
          </small>
        )} */}

        {/* {successMsg && (
          <small className="mb-2 mt-0 text-success text-center">
            {successMsg}
          </small>
        )} */}
        <hr />
        <button onClick={handleSubmit} className="sign-in-btn">
          Sign up
        </button>
        <a href={process.env.REACT_APP_GOOGLE_SIGNIN_URI}>
          <button className="mt-2 sign-in-btn">Sign in with Google</button>
        </a>

        <div className="text-center">
          <p className="mt-2">
            Already have an account?{" "}
            <Link to="/auth/login" className="font-weight-bold">
              Login
            </Link>
          </p>
        </div>
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
        <div className="signup-content-container mb-5">
          <div className="mb-4">
            <h2 className="mb-1">Sign up</h2>
            <p className="mb-0">Create a Profile</p>
          </div>
          {showSignupForm()}
        </div>
      </div>
    </div>
  )
}
