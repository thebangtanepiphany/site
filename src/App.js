import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Episodes from "./pages/Episodes"
import TwitterIcon from "./img/twitter"
import logo from "./img/bangtan-icon-sm.png"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="nav fixed-top">
            <a className="nav-icon" href="/">
              <img className="" alt="The Bangtan Epiphany Podcast" src={logo} />
            </a>
            <ul className="nav-links">
              <li>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li>
                <Link className="nav-link" to="/episodes">Episodes</Link>
              </li>
            </ul>
            <a className="nav-icon social" href="https://www.twitter.com/btsepiphanypod" target="_blank" rel="noopener noreferrer">
              <TwitterIcon/>
            </a>
          </nav>
        </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/episodes" component={Episodes} />
      </Switch>
      </div>
    </Router>
  )
}

export default App;
