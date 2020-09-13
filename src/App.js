import React, { useEffect } from "react"
import { Header } from "./components/core/Header"
import { Home } from "./components/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Checkout } from "./components/Checkout"
import { Signin } from "./components/core/Signin"
import "./App.css"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"

export const App = () => {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route exact path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route exact to='/signin'>
          <Signin />
        </Route>
      </Switch>
    </Router>
  )
}
