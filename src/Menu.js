import React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
  top: 0px;
  height: 50px;
  background: rgba(61, 61, 61, .95);
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  z-index: 30;

  @media all and (max-width: 800px) {
    justify-content: space-around;
  }
  @media all and (max-width: 500px) {
    flex-direction: column;
  }
`

const Title = styled.span`
  background: -webkit-linear-gradient(45deg, #d8c2ff, orchid);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.25em;
  padding: 0 20px;
  &::before {
    content: 'The Bangtan Epiphany Podcast';
    @media all and (max-width: 800px) {
      content: 'BE Pod';
    }
  }
`

const Link = styled.a`
  href: '${props => props.href}';
  padding: 0 15px;
  color: white;
`

const LinkContainer = styled.div`
  padding: 0 20px;
`

const Icon = styled.img`
  margin: 5px;
  height: 32px;
  width: 32px;
`

const Logo = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
`

export function Menu() {
  return(
    <MenuContainer>
      <Logo>
        <Icon src="/favicon-32x32.png" />
        <Title />
      </Logo>
      <LinkContainer>
        <Link href="#About">About</Link>
        <Link href="#Listen">Listen</Link>
        <Link href="#NNFT">NNFT Photocard</Link>
      </LinkContainer>
    </MenuContainer>
  )
}