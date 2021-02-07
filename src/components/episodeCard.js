import React from 'react'
import styles from './episode.module.scss'

export default function EpisodeCard(props) {
  const { num, title, desc } = props
  const deg = (Math.round(Math.random()) * 2 - 1)*(Math.ceil(Math.random()*5))
  const rotate = { transform: `rotate(${deg}deg)`}
  const image = num >= 39 ? `/ep${num}.gif` : 'apple-icon.png'
  return (
    <div
      style={rotate}
      className={styles.polaroid}>
      <img
        src={image}
        alt={title}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>
        { desc }
      </div>
    </div>
  )
}