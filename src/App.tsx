import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components/macro';
import Container from './component/Container';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destination from './component/Destination';
import Crew from './component/Crew';
import Technology from './component/Technology';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  width:100vw;
  height:100vh;
`;

const Background = styled.div(({ bg }: { bg: string }) => `
  //background: url(static/assets/home/background-home-desktop.jpg);
  //background:url(static/assets/destination/background-destination-desktop.jpg);
  //background: url(static/assets/crew/background-crew-desktop.jpg);
  background: url(${bg});
  width:100%;
  height:100%;
  background-size:cover;

`);

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

const Menu = styled(Link)`
  color:var(--white);
  font-family: cursive;
  text-decoration:none;

  &:hover {
    cursor:pointer;
    text-decoration:underline;
    text-decoration-color:white;
    text-decoration-thickness:30%;    
  }
`;

function App() {

  const location = useLocation();

  console.log(location);
  let background = "";

  if (location.pathname === "/") {
    background = "static/assets/home/background-home-desktop.jpg";
  }

  switch (location.pathname) {
    case "/":
      background = "static/assets/home/background-home-desktop.jpg";
      break;
    case "/destination":
      background = "static/assets/destination/background-destination-desktop.jpg";
      break;
    case "/crew":
      background = "static/assets/crew/background-crew-desktop.jpg";
      break;
    case "/technology":
      background = "static/assets/technology/background-technology-desktop.jpg";
      break;
  }


  return (

    <Wrapper>
      <Background bg={background}>
        <Layer>
          <MenuList>
            <Menu to="/">00 Home</Menu>
            <Menu to="/destination">01 Destination</Menu>
            <Menu to="/crew">02 Crew</Menu>
            <Menu to="/technology">03 Technology</Menu>
          </MenuList>
        </Layer>


        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>

      </Background>
    </Wrapper >

  );
}

export default App;
