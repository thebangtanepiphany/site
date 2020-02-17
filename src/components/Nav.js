import React from "react"
import TwitterIcon from "../img/twitter"
import smicon from "../img/bangtan-icon-sm.png"
import "./Nav.css"

export default class Nav extends React.Component {
  render() {
    return <nav className="navbar fixed-top">
      <a className="navbar-brand" href="/">
        <img className="" alt="The Bangtan Epiphany Podcast" src={smicon} />
      </a>
      <ul className="nav">
      <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#about-us">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#episodes">Episodes</a>
        </li>
      </ul>
      <span className="nav-item">
        <a className="social" href="https://www.twitter.com/btsepiphanypod" target="_blank" rel="noopener noreferrer">
          <TwitterIcon/>
        </a>
      </span>
    </nav>
  }
}
