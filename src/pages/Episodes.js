import React from "react"
import "./Episodes.css"

export default class Episodes extends React.Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.src = "https://www.buzzsprout.com/814801.js?container_id=buzzsprout-player&player=small"
    script.async = true
    document.body.appendChild(script)
  }

  render() {
    return (
      <div>
        <h2>Episodes</h2>
        <div className="player">
          <div id="buzzsprout-player"></div>
        </div>
      </div>
    )
  }
}