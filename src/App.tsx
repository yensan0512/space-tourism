import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Container from './component/Container';

const Wrapper = styled.div`
  width:100vw;
  height:100vh;
`;

const Background = styled.div`
  background: url(static/assets/home/background-home-desktop.jpg);
  width:100%;
  height:100%;
  background-size:cover;

`;

const Layer = styled.div`
  opacity:0.2;
  width:100vw;
  height:100px;
  padding-top:100px;
  border: 1px solid rgba(255, 0, 0, .5);
  background-color:black;
  // border : 1px solid rgba(0,0,0,0.5);
`;

const MenuList = styled.div`
  display:flex;
  justify-content:flex-end;
  // // box-shadow: 0px 20px 20px 20px grey;
  // //border: 3px solid white;
  // //opacity:0.5;
  gap:10px;
`;

const Menu = styled.h3`
  color:var(--white);
  opacity:1;
`;

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
        <Container />
      </Background>
    </Wrapper >
  );
}

export default App;
