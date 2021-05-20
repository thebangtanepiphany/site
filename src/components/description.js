import React from 'react'
import styles from './description.module.scss'

export default function Description() {
  return (
    <div className={styles.postit}>
      <div className={styles.army}>
        <div className={styles.l}></div>
        <div className={styles.m}></div>
        <div className={styles.r}></div>
      </div>
      <p className={styles.first}>Hi Army, it's Emily and Rocky! Do you love nerding out over BTS? Give us a listen! We do song/MV analysis, review the BTS shows and films and talk cultural context. </p>
      <p>Excessive fan-girling/fan-boying. <i>Why is there no gender neutral way to say fan-ing?</i></p>
      <p>Let's talk about how BTS <b>infires</b> us to be creative, have a blast, and not give up hope on humanity. We dive deep into meaning, feels and rampant adoration! <i>Don't get Emily started on the choreo.</i></p>
      <p>New episodes every Monday morning!</p>
      <div className={styles.heart}></div>
    </div>
  )
}