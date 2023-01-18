import React from 'react'
import styled from 'styled-components';
import { theme } from '../../design';

export default function Logo() {
  return (
    <LogoStyle>      <h1>
    CRAZEE <img src="/images/logo.png" alt="burger-logo" />
    BURGER
  </h1></LogoStyle>
  )
}
const LogoStyle = styled.div`
display: flex;
align-items: center;
transform: scale(2.5);

h1{
    display: inline;
    text-align: center;
    color: ${theme.colors.primary_burger};
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
}

img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80;
    margin: 0 5px;
}
  
`;