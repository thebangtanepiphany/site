import React from "react"
import "./Timeline.css"
import TimelineItem from "../components/TimelineItem"
import events from "../data/Timeline.json"

export default class Timeline extends React.Component {

  render() {
    return (
      <div className="timeline">
        <h1>BTS Timeline</h1>
        <div className="filter">
          {/* Add ability to filter events by time and type */}
        </div>
        <div className="timeline-items">
          <div className="line"></div>
          <div className="items">
          {
            events.map((data) => {
              return (
                <TimelineItem
                  date={data.date}
                  title={data.title}
                  description={data.description}
                  linkUrl={data.linkUrl}
                  linkTitle={data.linkTitle}
                  image={data.image}
                  type={data.type}
                >
                </TimelineItem>
              )
            })
          }
          </div>
        </div>
      </div>
      
    )
  }
}