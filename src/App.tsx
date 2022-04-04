import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components/macro';
import Container from './component/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destination from './component/Destination';
import Crew from './component/Crew';

const Wrapper = styled.div`
  width:100vw;
  height:100vh;
`;

const Background = styled.div`
  //background: url(static/assets/home/background-home-desktop.jpg);
  //background:url(static/assets/destination/background-destination-desktop.jpg);
  background: url(static/assets/crew/background-crew-desktop.jpg);
  width:100%;
  height:100%;
  background-size:cover;

`;

const Layer = styled.div`
  //opacity:0.2;
  width:100vw;
  height:100px;
  padding-top:100px;
  //backdrop-filter:blur(20px);
 // border: 1px solid rgba(255, 0, 0, .5);
  //background-color:black;
  // border : 1px solid rgba(0,0,0,0.5);
  //margin-bottom:200px;
`;

const MenuList = styled.div`
  display:flex;
  justify-content:space-evenly;
  // // box-shadow: 0px 20px 20px 20px grey;
  // //border: 3px solid white;
  // //opacity:0.5;
  gap:10px;
  backdrop-filter:blur(20px);
  padding:10px 0 10px 0;
`;

const Menu = styled.div`
  color:var(--white);
  font-family: cursive;

`;

// const Menu = styled.div(() => `

// `)

// const Menu.active {
//   box-shadow: 1px 1px 5px 3px grey;
// }
function App() {

  return (
    <Wrapper>
      <Background>
        <Layer>
          <MenuList>
            <Menu>00 Home</Menu>
            <Menu>01 Destination</Menu>
            <Menu>02 Crew</Menu>
            <Menu>03 Technology</Menu>
          </MenuList>
        </Layer>
        {/* <Container /> */}
        <Destination />
      </Background>
    </Wrapper >
  );
}

export default App;
