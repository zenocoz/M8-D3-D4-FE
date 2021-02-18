import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Route path="/auth/signup" exact component={Signup} />
      <Route path="/auth/login" exact component={Login} />)
    </div>
  )
}

export default App
