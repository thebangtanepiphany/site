import React from 'react'
import styles from './postcard.module.scss'

export default function Postcard() {
  return (
    <div className={styles.postcard}>
      <p>Do you want postcards in the mail from Army?</p>
      <p>How about handmade stickers or photocards?</p>
      <p>Come support the podcast on <a href="https://www.patreon.com/bePatron?u=29621109">Patreon</a> and get some fun presents in the mail!</p>
    </div>
  )
}