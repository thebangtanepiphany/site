import React from "react"
import TwitterIcon from "../img/twitter"
import logo from "../img/bangtan-icon-sm.png"
import "./Nav.css"

export default class Nav extends React.Component {
  render() {
    return <nav className="nav fixed-top">
      <a className="nav-icon" href="/">
        <img className="" alt="The Bangtan Epiphany Podcast" src={logo} />
      </a>
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="/">Home</a>
        </li>
        <li>
          <a className="nav-link" href="#about-us">About us</a>
        </li>
        <li>
          <a className="nav-link" href="#episodes">Episodes</a>
        </li>
      </ul>
      <a className="nav-icon social" href="https://www.twitter.com/btsepiphanypod" target="_blank" rel="noopener noreferrer">
        <TwitterIcon/>
      </a>
    </nav>
  }
}
