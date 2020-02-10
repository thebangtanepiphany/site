import React, { useState } from "react";
import spotify from "./img/spotify.png";
import stitcher from "./img/stitcher.png";
import apple from "./img/apple.svg";
import twitter from "./img/twitter.svg"
import twitterHover from "./img/twitter-hover.svg"
import smicon from "./img/bangtan-icon-sm.png"
import bangimg from "./img/bangtan-img.png"
import em from "./img/emily.png"
import rk from "./img/rocky.png"
import "./App.css";

function App() {
  const [social, setSocial] = useState(twitter);
  return (
    <div className="App">
      <header>
        <nav className="navbar fixed-top">
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
                src={social}
                alt="Twitter Icon"
                onMouseEnter={() => setSocial(twitterHover)}
                onMouseLeave={() => setSocial(twitter)}
              />
            </a>
          </span>
        </nav>
      </header>
      <section className="header container">
        <div className="spacer"></div>
        <h1>The Bangtan Epiphany Podcast</h1>
        <div className="card">
          <img src={bangimg} className="card-img-top" alt="The Bangtan Epiphany Podcast" />
          <div className="card-body">
            <h3 className="card-title">Falling into BTS</h3>
            <p className="card-text">Join married 30-somethings Rocky and Emily as we start to descend down the BTS rabbit hole, diving deep into the Bangtan Universe, exploring themes, culture, and stories created by this infectiously charming and surprisingly profound Korean idol group. We’ll review all the media and music, from debut till today, including their variety and reality shows, interviews, albums, mixtapes, social media, live shows, and MVs. We’re curious about culture, music, art, and storytelling and we’re opening our minds to the unexpectedly intense and endlessly delightful experience of being ARMY. </p>
            <div className="podcast-badges">
              <a className="badge" href="https://open.spotify.com/show/2wglhSf4DW5RHFCUD3dbx5"><img src={spotify} alt="Spotify"/></a>
              <a className="badge" href="https://www.stitcher.com/podcast/the-bangtan-epiphany-podcast"><img src={stitcher} alt="Stitcher"/></a>
              <a className="badge" href="https://podcasts.apple.com/us/podcast/the-bangtan-epiphany-podcast/id1495749770"><img src={apple} alt="apple"/></a>
            </div>            
          </div>
        </div>
      </section>
      <section className="about-us container" id="about-us">
        <div className="spacer"></div>
        <h2>About Us</h2>
        <div className="card-deck">
          <div className="card bg-light">
            <img className="card-img-top about-img img-fluid image-responsive" alt="Emily" src={em} />
            <div className="card-body">
              <p className="card-text">Emily is a programmer, writer, and proud ARMY circa March 9, 2019 <span role="img" aria-label="winking face">&#128521;</span>. She loves to talk about culture, art, music... really just about anything. She may or may not be an immortal vampire.</p>
            </div>
          </div>
          <div className="card bg-light">
            <img className="card-img-top about-img img-fluid image-responsive" alt="Rocky" src={rk} />
            <div className="card-body">
              <p className="card-text">Rocky is a programmer, gamer and baby ARMY. He loves music and finding those deeper meanings.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="podcast-episodes container" id="episodes">
        <div className="spacer"></div>
        <h2>Episodes</h2>
        <div className="container">
          <div id="buzzsprout-large-player-814801"></div>
        </div>
      </section>
    </div>
  )
}

export default App;
