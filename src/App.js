import React from 'react'
import styled from 'styled-components'
import { Menu } from './Menu'
import { About } from './About'
import { GlobalStyle } from './Global'
import { Listen } from './Listen'
import { NNFT } from './NNFT'
import PerfectScrollbar from 'react-perfect-scrollbar'

const Background = styled.div`
  height: auto;
  width: 100%;
  background-repeat: repeat-y;
  background: 
  radial-gradient(
    farthest-side at 85% 85%, 
    rgba(255,47,144,.7) 0%, 
    rgba(0,0,0,0) 100%), /*pink*/
  radial-gradient(
    farthest-side at 95% 10%,
    rgba(28, 164, 255,.7) 30%, 
    rgba(0,0,0,0) 100%), /*blue*/
  radial-gradient(
    farthest-side at 5% 65%, 
    rgba(255,201,10,.8) 0%, 
    rgba(0,0,0,0) 100%), /*yellow*/
  radial-gradient(
    farthest-side at 25% 5%, 
    rgba(130, 4, 194,.9) 0%, 
    rgba(0,0,0,0) 100%), /*purple*/
  radial-gradient(
    farthest-side at 50% 50%, 
    rgba(255, 154, 54,.8) 20%, 
    rgba(0,0,0,0) 100%); /*orange*/
    margin: -50px 0 190px 0;
`
const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 15px 0;
`

const Footer = styled.div`
width: 100%;
text-align: center;
`

function App() {
  return (
    <PerfectScrollbar>
      <Background>
        <Menu />
        <Page>
          <About />
          <Listen />
          <NNFT />
          <Footer>&#169; The Bangtan Epiphany Podcast</Footer>
        </Page>
      </Background>
      <GlobalStyle />
    </PerfectScrollbar>
  )
}

export default App;
