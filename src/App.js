import React from 'react'
import styles from './app.module.scss'
import Description from './components/description'
import Episodes from './components/episodes'
import Postcard from './components/postcard'

function App() {
  const favicon = '/favicon-96x96.png'
  return (
    <div className={styles.header}>      
      <div className={styles.links}>
        <img className={styles.logo} src={favicon} />
        <h1>The BTS Epiphany Podcast</h1>
      </div>
      <div className={styles.links}>
        <a className={styles.social} href="https://www.twitter.com/btsepiphanypod" target="_blank" rel="noopener noreferrer">
          <svg x="0px" y="0px" viewBox="0 0 400 400" height="40px"><title>Twitter</title>
            <g id="twitter-logo"><path class="st1" d="M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6
  c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2
  c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6c-4.4,7.6-6.9,16.4-6.9,25.8
  c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8
  c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7
  C97.7,293.1,124.7,301.6,153.6,301.6"></path></g>
          </svg>
        </a>
        <a href="https://www.patreon.com/bePatron?u=29621109" data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84MTQ4MDEucnNz" className={styles.link}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43"><g><g><path fill="inherit" d="M14.642 11.207v9.512a2.671 2.671 0 0 1-2.683 2.683 2.684 2.684 0 0 1-2.684-2.683v-9.512a2.684 2.684 0 0 1 5.367 0zM33.665 22.2v9.511c0 1.481-1.181 2.64-2.684 2.64-1.482 0-2.684-1.159-2.684-2.64V22.2a2.671 2.671 0 0 1 2.684-2.684zM24.153 2.684v2.984a2.684 2.684 0 0 1-5.367 0V2.684A2.671 2.671 0 0 1 21.47 0zm0 34.588v2.984a2.684 2.684 0 1 1-5.367 0v-2.984a2.684 2.684 0 0 1 2.684-2.684zm-9.51-5.561c0 1.46-1.203 2.64-2.684 2.64-1.482 0-2.684-1.18-2.684-2.64v-2.984a2.671 2.671 0 0 1 2.684-2.684 2.684 2.684 0 0 1 2.683 2.684zM5.366 19.967v3.006c0 1.46-1.202 2.662-2.683 2.662A2.666 2.666 0 0 1 0 22.973v-3.006c0-1.481 1.18-2.662 2.684-2.662zm37.572 0v3.006c0 1.46-1.202 2.662-2.683 2.662-1.482 0-2.684-1.202-2.684-2.662v-3.006a2.666 2.666 0 0 1 2.684-2.662zm-18.786-6.312v15.608a2.685 2.685 0 0 1-5.367 0V13.655a2.699 2.699 0 0 1 2.684-2.684zm9.512-2.448v3.006c0 1.46-1.181 2.662-2.684 2.662-1.482 0-2.684-1.202-2.684-2.662v-3.006a2.684 2.684 0 0 1 2.684-2.683z"/></g></g></svg>
        </a>
        <a href="https://open.spotify.com/show/2wglhSf4DW5RHFCUD3dbx5" className={styles.link}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 29"><g><g><path fill="inherit" d="M33.582 24.997C25.74 20.204 16.02 19.089 4.687 21.68a1.853 1.853 0 0 0 .826 3.614c10.355-2.365 19.149-1.4 26.135 2.869a1.85 1.85 0 0 0 2.549-.618 1.851 1.851 0 0 0-.615-2.548zm4.257-5.551a2.32 2.32 0 0 0-.764-3.188c-9.183-5.646-22.615-7.232-33.42-3.955a2.324 2.324 0 0 0-1.546 2.893 2.32 2.32 0 0 0 2.893 1.545c9.46-2.87 21.65-1.445 29.646 3.468 1.09.67 2.516.328 3.19-.763zm.312-8.437a2.784 2.784 0 0 0 2.841-4.785C29.952-.328 12.484-.946 1.975 2.245.502 2.691-.325 4.246.121 5.716a2.78 2.78 0 0 0 3.468 1.855c9.156-2.78 24.973-2.257 34.562 3.438z"/></g></g></svg>
        </a>
        <a href="https://podcasts.apple.com/us/podcast/the-bangtan-epiphany-a-bts-podcast/id1495749770" className={styles.link}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 43"><g><g><g><path fill="inherit" d="M24.272 42.626a22.852 22.852 0 0 1-7.24.05c-.76-3.274-2.22-11.9-1.504-14.5.641-2.324 4.317-2.645 5.119-2.645.802 0 4.477.32 5.119 2.646.714 2.586-.73 11.139-1.494 14.449z"/></g><g><path fill="inherit" d="M15.608 18.775a4.892 4.892 0 1 1 9.784 0 4.892 4.892 0 0 1-9.784 0z"/></g><g><path fill="inherit" d="M20.5 6.958c-7.467 0-13.542 6.075-13.542 13.542 0 4.739 2.447 8.917 6.145 11.338-.075-1.31-.068-2.509.06-3.454A10.74 10.74 0 0 1 9.726 20.5c0-5.942 4.833-10.776 10.775-10.776 5.941 0 10.776 4.834 10.776 10.776 0 2.982-1.22 5.684-3.183 7.637.158.932.178 2.148.11 3.493 3.526-2.445 5.84-6.522 5.84-11.13 0-7.467-6.077-13.542-13.543-13.542z"/></g><g><path fill="inherit" d="M20.5 0C9.196 0 0 9.196 0 20.5 0 29.595 5.955 37.326 14.17 40a94.827 94.827 0 0 1-.52-3.142C7.263 34.173 2.766 27.85 2.766 20.5c0-9.779 7.955-17.733 17.734-17.733 9.778 0 17.733 7.954 17.733 17.733 0 7.23-4.349 13.464-10.568 16.222a91.025 91.025 0 0 1-.523 3.173C35.197 37.13 41 29.48 41 20.5 41 9.196 31.803 0 20.5 0z"/></g></g></g></svg>
        </a>
      </div>

      <div className={styles.container}>
        <Description />

        <Postcard />

        <Episodes />
      </div>



      <footer className={styles.footer}>
        &#169; The Bangtan Epiphany Podcast
      </footer>
      
    </div>
  )
}

export default App;
