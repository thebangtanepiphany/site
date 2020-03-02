import React from "react"
import PropTypes from "prop-types"
import "./TimelineItem.css"

export default class TimelineItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { counter: 0 };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <div className="timeline-item">
      <div className="date">{this.props.date}</div>
      <div className="dot"></div>
      <div className="event">
        <h2 className="title">{this.props.title}</h2>
        <p className="description">{this.props.description}</p>
        <a className="link" href={this.props.linkUrl}>{this.props.linkTitle}</a>
      </div>
    </div>
  }
}

// Props
TimelineItem.propTypes = {
  date: PropTypes.number, //six digit number in format YYMMDD
  title: PropTypes.string,
  description: PropTypes.string,
  linkUrl: PropTypes.string,
  linkTitle: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.oneOf(['Album', 'Media', 'Award', 'Event', 'Show', 'Concert']),
}
