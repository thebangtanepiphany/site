import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Section } from './Section'

const shimmer = keyframes`
  0%{background-position:10% 0%;}
  50%{background-position:90% 100%;}
  100%{background-position:10% 0%;}
`

const spin = keyframes`
  0% { transform: rotate(0deg);} 
  50% { transform: rotate(30deg);}
  100% { transform: rotate(0deg);}
`

const blink = keyframes`
  0% { opacity: 1;} 
  50% { opacity: 0;}
  100% { opacity: 1;}
`

const Overlay = styled.div`
  background: linear-gradient(40deg, rgba(255, 163, 223, .4) 20%, rgba(97, 223, 255, .4) 60%, rgba(255, 163, 223, .4) 70%, rgba(0,0,0,0) 100%);
  background-size: 200% 200%;
  animation: ${shimmer} 2s ease infinite;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
`

const Twinkle = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
`

const Star = styled.div`
  animation: ${spin} 1s ease infinite;
  top: ${props => props.top};
  left: ${props => props.left};
  background: rgba(255,255,255,.8);
  height: 1px;
  width: 8px;
  position: relative;
  :before {
    background: rgba(255,255,255,.8);
    height: 1px;
    width: 8px;
    transform: translate(-4px, 0) rotate(60deg);
    position: absolute;
    content: '';
  }
  :after {
    background: rgba(255,255,255,.8);
    height: 1px;
    width: 8px;
    transform: translate(-4px, 0) rotate(120deg);
    position: absolute;
    content: '';
  }
`

const Planet = styled.div`
  animation: ${props => props.delay} ${blink} 1s infinite;
  top: ${props => props.top};
  left: ${props => props.left};
  background: rgba(255,255,255,.8);
  height: 2px;
  width: 2px;
  position: absolute;
`

const Photocard = styled.div`
  height: 400px;
  width: 250px;
  overflow: hidden;
  position: relative;
  z-index: 10;
  border-radius: 7px;
`

const Photo = styled.img`
  height: 400px;
  width: 310px;
  object-position: -30px;
  border-radius: 7px;
`

const Button = styled.button`
  background: rgba(61, 61, 61, .75);
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 1.1em;
  color: white;
  width: fit-content;
  cursor: pointer;
  z-index: 10;
  margin: 0;
  font-family: 'Bebas Neue', sans-serif;

  &:hover {
    background: rgba(61, 61, 61, .85);
  }
`

const NameInput = styled.input`
  border: 1px solid rgba(61, 61, 61, .75);
  height: 20px;
  padding: 5px;
  margin: 5px 10px;
  line-height: 15px;
  font-size: 1.2em;
  
`

const CertificateGenerator = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
  @media all and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Modal = styled.div`
  display: ${props => props.open ? 'flex' : 'none'};
  z-index: 40;
  position: fixed;
  width: 50%;
  margin: 100px auto;
  top: 0;
  border-radius: 15px;
  flex-direction: column;
  font-size: 1em;
  background: white;
  padding: 20px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  font-family: 'Khula',sans-serif;
  max-height: 100vh;
  overflow: scroll;

  h2, h3 {
    font-family: 'Great Vibes', cursive;
  }

  @media all and (max-width: 800px) {
    width: 90%;
    margin: 10px auto;
  }
`

const Fancy = styled.span`
  font-size: 1.2em;
  color: ${props => props.color};
  padding: 0 5px;
`
const Description = styled.div`
  font-size: 1em;
  padding: 30px 0;
  font-family: 'Khula', sans-serif;
`

const Certificate = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')

  const changeName = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  const changeOpen = (openValue) => {
    console.log(openValue)
    setOpen(openValue)
  }

  return(
    <>
      <CertificateGenerator>
        <Fancy color="black">Your Name:</Fancy>
        <NameInput value={name} onChange={(e) => changeName(e)} />
        <Button onClick={() => changeOpen(true)}>Issue Certificate of Ownership</Button>
      </CertificateGenerator>
      <Modal open={open}>
        <h2>Certificate of Imagination</h2>
        <p>This certificate certifies that <Fancy color="darkorchid">{name}</Fancy> digitally owns this photocard in their imagination. 
        As far as <Fancy color="darkorchid">{name}</Fancy> is concerned, this digital image of a BTS member is <i>theirs</i>, even though it is 
        made up of ones and zeros and shared across the internet. </p>
        <p>Please use this free certificate of imagination to feel the benefits of owning an NFT photocard, 
        without having to spend any money or destroy the environment, simply so that someone gets the 
        experience of "owning" something that is digtal and easily reprodicuble. In your imagination, 
        you own this photocard, which is the important part of ownership, apparently. So enjoy this imagainary 
        ownership fully and without reservation.</p>
        <p>This certificate also imagines, or rather hopes, that <Fancy color="darkorchid">{name}</Fancy> won't ever pay for the priviledge of 
        pretending to own any digital card NFT in the future, seeing that a certificate of imaginary ownership already exists
        free of charge.</p>
        <h3><Fancy color="darkorchid">{name}</Fancy> is a Super Cool Digital-thing Owner!</h3>
        <Button onClick={() => changeOpen(false)}>close</Button>
      </Modal>
    </>
  )
}

export function NNFT() {
  return(
    <Section title="Not a NFT photocard" id="NNFT">
      <Description>Want the thrill and excitement of owning an NFT with none of the cost? Just enter your name below 
        and an official certificate of imaginary ownership will be issued!
      </Description>
      <Photocard>
        <Overlay />
        <Twinkle>
          <Star top="30px" left="210px" />
          <Star top="20px" left="230px" />
          <Star top="40px" left="210px" />
          <Planet top="40px" left="200px" delay=".5s" />
          <Planet top="30px" left="220px" />
          <Planet top="40px" left="230px" delay=".5s" />
          <Planet top="20px" left="240px" />
          <Planet top="10px" left="210px" delay=".5s" />
          <Star top="370px" left="10px" />
          <Star top="380px" left="30px" />
          <Star top="390px" left="10px" />
          <Planet top="360px" left="00px" delay=".5s" />
          <Planet top="390px" left="20px" />
          <Planet top="350px" left="30px" delay=".5s" />
          <Planet top="370px" left="40px" />
          <Planet top="380px" left="10px" delay=".5s" />
        </Twinkle>
        <Photo src="/jimin.jpg" alt="Jimin in PTD live" />
      </Photocard>
      <Certificate />
    </Section>
  )
}