import React from "react";
import em from "./img/emily.png"
import rk from "./img/rocky.png"
import Nav from "./components/Nav"
import Title from "./components/Title"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <section className="header">
        <Title />
      </section>
      <section className="about-us" id="about-us">
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
      <section className="podcast-episodes" id="episodes">
        <div className="spacer"></div>
        <h2>Episodes</h2>
        <div className="player">
          <div id="buzzsprout-large-player-814801"></div>
        </div>
      </section>
    </div>
  )
}

export default App;
