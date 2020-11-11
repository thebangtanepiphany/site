import React from 'react'
import styles from './episode.module.scss'
import EpisodeCard from './episodeCard'
import xmlToJson from './utility'

export default class Episodes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      episodes: []
    }
  }

  componentDidMount() {
    const RSS_URL = 'https://feeds.buzzsprout.com/814801.rss'

    fetch(RSS_URL)
      .then(res => res.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(rawdata => xmlToJson(rawdata))
      .then(data => {
        this.setState({
          isLoaded: true,
          episodes: data.rss.channel.item
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }

  render() {
    const { error, isLoaded, episodes } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className={styles.container}>
          {
            this.state.episodes.map( (episode, index) => {
              console.log(episode)
              if (index < 6) {
                return <EpisodeCard
                num={episode['itunes:episode']-1}
                title={episode.title}
                url={episode.guid}
              />
              }
            })
          }
        </div>
      )
    }
  }
}
