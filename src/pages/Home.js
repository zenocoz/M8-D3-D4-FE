import React, { useEffect, useState } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {}, [setLoggedIn])

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="mr-2" to="/auth/signup">
            Sign In
          </Link>

          <Link to="/auth/login">Log In</Link>
        </Nav>
      </Navbar>
      <h1>WELCOME TO THIS AWESOME WEBSITE FULL OF FEATURES</h1>
    </div>
  )
}
