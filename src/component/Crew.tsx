import React, { useState } from "react";
import styled from "styled-components/macro";
import CrewProfile from "./CrewProfile";
import Header from "./Header";

const Wrapper = styled.div``;

const FlexContainer = styled.div`
  display:flex;

  @media screen and (max-width: 1028px) {
    flex-direction: column;
  }
`;

const FlexContent = styled.div`
  flex:50%;
  
  @media screen and (max-width: 1028px) {
    display: flex;
    justify-content: center;

    &#top {
      flex-direction: column;
    }
  }
`;

const Img = styled.img`
  // content:url(static/assets/crew/image-anousheh-ansari.png);
  background-size:cover;
  padding-top:30px;
  justify-self:center;

  @media screen and (max-width: 1028px) {
    margin-top:0px;
  }
`;

const ProfileTabContainer = styled.div`
  padding:50px 0px 0px 180px;
  //text-align:start;
  @media screen and (max-width: 1028px) {
    padding:0px 0px 0px 0px;
  }
`;

const ProfileTab = styled.div`
  height:15px;
  width:15px;
  background-color:#606060;
  border-radius:50%;
  display:inline-block;
  margin-left:10px;

  &:hover {
    cursor:pointer;
    background-color:white;
}
  
`;

function Crew() {

  const [index, setIndex] = useState(0);

  let position = "", NameSpace = "", experience = "", photo = "";
  switch (index) {
    case 0:
      position = "COMMANDER";
      NameSpace = "DOUGLAS HURLEY";
      experience = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
      photo = "static/assets/crew/image-douglas-hurley.png";
      break;

    case 1:
      position = "PILOT";
      NameSpace = "VICTOR GLOVER";
      experience = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
      photo = "static/assets/crew/image-victor-glover.png";
      break;

    case 2:
      position = "MISSION SPECIALIST";
      NameSpace = "MARK SHUTTLEWORTH";
      experience = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
      photo = "static/assets/crew/image-mark-shuttleworth.png";
      break;

    case 3:
      position = "FLIGHT ENGINEER";
      NameSpace = "ANOUSHEH ANSARI";
      experience = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the forth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
      photo = "static/assets/crew/image-anousheh-ansari.png";
      break;
  }

  return (
    <Wrapper>
      <FlexContainer>
        <FlexContent id="top">
          <Header
            Number="02"
            Title="MEET YOUR CREW HERE" />
          <CrewProfile
            PositionSpace={position}
            NameSpace={NameSpace}
            Experience={experience} />
          <ProfileTabContainer>
            <ProfileTab onClick={() => setIndex(0)} />
            <ProfileTab onClick={() => setIndex(1)} />
            <ProfileTab onClick={() => setIndex(2)} />
            <ProfileTab onClick={() => setIndex(3)} />
          </ProfileTabContainer>
          {/* <Position>FLIGHT ENGINEER</Position>
          <Name>ANOUSHEH ANSARI</Name>
          <Sentence>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the forth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</Sentence> */}
        </FlexContent>
        <FlexContent>
          <Img src={photo} />
        </FlexContent>
      </FlexContainer>
    </Wrapper>
  );
}

export default Crew