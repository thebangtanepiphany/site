import React from "react"
import "./About.css"
import em from "../img/emily.png"
import rk from "../img/rocky.png"

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About Us/</h2>
        <div className="card-deck">
          <div className="card">
            <img className="card-img" alt="Emily" src={em} />
            <div className="card-body">
              <p className="card-text">Emily is an unpublished writer, part-time painter and full-time ARMY circa March 9, 2019 <span role="img" aria-label="winking face">&#128521;</span>. She loves to talk about culture, art, music... really just about anything. She may or may not be an immortal vampire.</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img" alt="Rocky" src={rk} />
            <div className="card-body">
              <p className="card-text">Rocky got into BTS because he loves good music and honest lyrics. He's into hip-hop, Final Fantasy, Killing Eve and bad action movies.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}