import React from 'react'
import styled from 'styled-components'
import { Section } from './Section'

const AboutDescription = styled.div`
  font-size: 1em;
  padding: 30px 0;
  font-family: 'Khula', sans-serif;
`

const AboutHighlight = styled.div`
  font-size: 1.5em;
  line-height: 1.5em;
  color: #452f96;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  margin: 10px 0;
  line-height: 40px;

  h1, a, img {
    margin:0 15px;
    display: inline-flex;
    height: 40px;
    padding: 0;
  }
`

const Social = styled.a`
  display: inline-block;
  font-size: 1.25rem;
  margin: 10px;
  height: 40px;

  svg {
    fill: black;
  }

  &:hover {
    svg {
      fill: rgb(141, 98, 184);
    }
  }
`

export function About() {
  return(
    <Section title="About our podcast" id="About">
      <AboutDescription>
        Dope old married couple talking about BTS. Song analysis, concert &amp; mv deep dives and general fanning!
      </AboutDescription>
      <AboutHighlight>New episodes every Monday</AboutHighlight>
      <Links>
        <Social href="https://www.twitter.com/btsepiphanypod" target="_blank" rel="noopener noreferrer">
          <svg x="0px" y="0px" viewBox="0 0 400 400" height="40px"><title>Twitter</title>
            <g id="twitter-logo"><path class="st1" d="M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6
  c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2
  c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6c-4.4,7.6-6.9,16.4-6.9,25.8
  c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8
  c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7
  C97.7,293.1,124.7,301.6,153.6,301.6"></path></g>
          </svg>
        </Social>
        <a href="https://www.patreon.com/bePatron?u=29621109" data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
      </Links>
    </Section>
  )
}