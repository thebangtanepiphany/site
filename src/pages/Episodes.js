import React from "react"
import EpisodeCard from "../components/EpisodeCard"
import episodeData from "../data/Episodes.json"
import "./Episodes.css"

export default class Episodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { episodes: [] };
    this.createEmbedPlayer = this.createEmbedPlayer.bind(this);
  }

  componentDidMount() {
    let episodes = episodeData.map((data) => {
      return (
        <EpisodeCard
          date={data.date}
          number={data.number}
          title={data.title}
          description={data.description}
          links={data.links}>
          {this.createEmbedPlayer(data.embedId, data.embedNum)}
        </EpisodeCard>
      )
    })
    this.setState({episodes: episodes})
  }

  createEmbedPlayer(embedId, embedNum) {
    const id = `buzzsprout-player-${embedNum}`
    const scriptSrc = `https://www.buzzsprout.com/814801/${embedId}.js?container_id=buzzsprout-player-${embedNum}&player=small`
    const script = document.createElement("script")
    script.src = scriptSrc
    script.charset = "utf-8"
    script.async = true
    document.body.appendChild(script)
    return (
      <div id={id}></div>
    )
  }

  render() {
    return (
      <div>
        <h2>Episodes</h2>
        <div className="episodes">
          {this.state.episodes}
        </div>
      </div>
    )
  }
}
