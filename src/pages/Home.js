import React, { useEffect, useState } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

export default function Home() {
  // const user = Cookies.get("userLogged")

  const [userLogged, setLoggedIn] = useState(false)

  useEffect(() => {
    console.log(Cookies.get("userLogged"))
    const user = Cookies.get("userLogged")
    if (user) {
      setLoggedIn(true)
    }
  }, [])

  const logOut = () => {
    Cookies.remove("userLogged", { path: "" })
    setLoggedIn(false)
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          {userLogged ? (
            <Link className="mr-2" to="/" onClick={() => logOut()}>
              Log Out
            </Link>
          ) : (
            <div>
              <Link className="mr-2" to="/auth/signup">
                Sign In
              </Link>

              <Link className="mr-2" to="/auth/login">
                Log In
              </Link>
            </div>
          )}
        </Nav>
      </Navbar>
      <h1>WELCOME TO THIS AWESOME WEBSITE FULL OF FEATURES</h1>
    </div>
  )
}
