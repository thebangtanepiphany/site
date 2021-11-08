import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 2.5em;
  padding: 80px 0 25px 0;
  text-align: center;
`

const SectionStyle = styled.div`
  text-align: center;
  margin: 50px 0;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export function Section({children, id, title}) {

  return(
    <SectionStyle>
      <Title id={id}>{title}</Title>
      { children }
    </SectionStyle>
  )
}