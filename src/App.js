import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Route path="/auth/signup" exact component={Signup} />
      <Route path="/auth/login" exact component={Login} />)
      <Route path="/" exact component={Home} />)
    </div>
  )
}

export default App
