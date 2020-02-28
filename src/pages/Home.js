import React from "react"
import bangimg from "../img/bangtan-img.png"
import spotify from "../img/spotify.png"
import stitcher from "../img/stitcher.png"
import apple from "../img/apple.svg"
import iheartradio from "../img/iheartradio.png"
import "./Home.css"

export default class Home extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="title-scroll backdrop">
          <div className="scroll-content">
            <h1 className="title-heading">The Bangtan Epiphany Podcast</h1>
            <div className="window"></div>
          </div>
        </div>
        <div className="podcast-scroll backdrop">
          <div className="scroll-content">
            <div className="scroll-card">
              <p>Join married 30-somethings Rocky and Emily as we start to descend down the BTS rabbit hole, diving deep into the Bangtan Universe, exploring themes, culture, and stories created by this infectiously charming and surprisingly profound Korean idol group. We’ll review all the media and music, from debut till today, including their variety and reality shows, interviews, albums, mixtapes, social media, live shows, and MVs. We’re curious about culture, music, art, and storytelling and we’re opening our minds to the unexpectedly intense and endlessly delightful experience of being ARMY. </p>
              <div className="podcast-badges">
                <a className="badge" href="https://open.spotify.com/show/2wglhSf4DW5RHFCUD3dbx5" target="_blank" rel="noopener noreferrer"><img src={spotify} alt="Spotify"/></a>
                <a className="badge" href="https://www.stitcher.com/podcast/the-bangtan-epiphany-podcast" target="_blank" rel="noopener noreferrer"><img src={stitcher} alt="Stitcher"/></a>
                <a className="badge" href="https://podcasts.apple.com/us/podcast/the-bangtan-epiphany-podcast/id1495749770" target="_blank" rel="noopener noreferrer"><img src={apple} alt="Apple"/></a>
                <a className="badge" href="https://www.iheart.com/podcast/269-the-bangtan-epiphany-podca-57080748/" target="_blank" rel="noopener noreferrer"><img src={iheartradio} alt="iHeartRadio"/></a>
              </div> 
            </div>
            <div className="window"></div>
          </div>
        </div>
      </div>
    )
  }
}