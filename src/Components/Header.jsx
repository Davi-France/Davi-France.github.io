import React from 'react'
import styled from 'styled-components'

const HeaderOfc = styled.header`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #181818;  
  padding: 20px 130px;
  color: #eaeaea;
  box-shadow: 8px 8px 8px rgba(0,0,0,0.2);
  h1{
    font-size: 2.5rem;
    font-weight: 300;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-shadow: 0px 0px 5px #ddd;
  }
  `

const Header = ({children}) => {
  return (
    <header>
      <HeaderOfc>
        <h1>{children}</h1>
      </HeaderOfc>
    </header>
    )
}

export default Header