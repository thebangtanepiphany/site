import React from "react"
import twitterImg from "../img/twitter.svg"
import twitterImgHover from "../img/twitter-hover.svg"
import smicon from "../img/bangtan-icon-sm.png"
import "./Nav.css"

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { twitter: twitterImg }
  }
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
        <a href="https://www.twitter.com/btsepiphanypod" target="_blank" rel="noopener noreferrer">
          <img 
            className="social"
            src={ this.state.twitter }
            alt="Twitter Icon"
            onMouseEnter={() => this.setState({ twitter: twitterImgHover }) }
            onMouseLeave={() => this.setState({ twitter: twitterImg }) }
          />
        </a>
      </span>
    </nav>
  }
}
