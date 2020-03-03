import React from "react"
import PropTypes from "prop-types"
import "./EpisodeCard.css"

export default class EpisodeCard extends React.Component {
  render() {
    return (
      <div className="episode-card">
        <div className="top">
          <div className="number">Ep. {this.props.number}</div>
          <h2 className="title">{this.props.title}</h2>
          <div className="date">{this.props.date}</div>
        </div>
        <div className="middle">
          <p className="description">{this.props.description}</p>
          {
            this.props.links.map((link) => {
              return (
                <div className="link">
                  <span>{link.text}</span>&nbsp;
                  <a href={link.url}>{link.title}</a>
                </div>
              )
            })
          }
        </div>
        { this.props.children }
      </div>
    )
  }
}

// Props
EpisodeCard.propTypes = {
  date: PropTypes.number, //six digit number in format YYMMDD
  number: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
}