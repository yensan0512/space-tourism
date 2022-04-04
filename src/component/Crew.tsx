import React from "react";
import styled from "styled-components/macro";
import CrewProfile from "./CrewProfile";
import Header from "./Header";

const Wrapper = styled.div``;

const FlexContainer = styled.div`
  display:flex;
`;

const FlexContent = styled.div`
  flex:50%;
  
`;

const Img = styled.img`
  content:url(static/assets/crew/image-anousheh-ansari.png);
  background-size:cover;
  padding-top:100px;
  justify-self:center;
`;

const ProfileTabContainer = styled.div`
  padding:50px 0px 0px 180px;
  //text-align:start;
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

  return (
    <Wrapper>
      <FlexContainer>
        <FlexContent>
          <Header
            Number="02"
            Title="MEET YOUR CREW" />
          <CrewProfile
            PositionSpace="FLIGHT ENGINEER"
            NameSpace="ANOUSHEH ANSARI"
            Experience="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the forth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space." />
          <ProfileTabContainer>
            <ProfileTab />
            <ProfileTab />
            <ProfileTab />
            <ProfileTab />
          </ProfileTabContainer>
          {/* <Position>FLIGHT ENGINEER</Position>
          <Name>ANOUSHEH ANSARI</Name>
          <Sentence>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the forth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</Sentence> */}
        </FlexContent>
        <FlexContent>
          <Img />
        </FlexContent>
      </FlexContainer>
    </Wrapper>
  );
}

export default Crew