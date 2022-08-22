import React, { useState } from "react";
import styled from "styled-components/macro";
import Header from "./Header";
import TechnologyDesc from "./TechnologyDesc";
import ShareImg from "./SharedImg";


const Wrapper = styled.div`

`;

const FlexContainer = styled.div`
  display:flex;
  //flex-wrap:wrap;

  @media screen and (max-width: 1028px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FlexContent = styled.div`
  flex:65%;
  display:flex;
  flex-direction:column;
  
`;

const SmallFlexContent = styled.div`
  flex:30%;

  @media screen and (max-width: 1028px) {
    flex:unset;
  }
`;

const FlexColumn = styled.div`
 margin-right:80px;
 margin-left:50px;

`;

const Num = styled.p`
  color:white;
  position:absolute;
  top:50%;
  left:50%;
  font-size:30px;
  margin:0;
  transform:translate(-50%,-50%);
  transition:0.25s;
  
`;

const NumCircle = styled.div`
  border-radius:50%;
  width:100px;
  height:100px;
  background:black;
  position:relative;
  margin-bottom:50px;
  margin-top:50px;
  transition:0.25s;

  &:hover {
    cursor:pointer;
    background:var(--white);
    color:black;
  }

  &:hover ${Num} {
    color:black;

  }
`;




function Technology() {

  const [Index, setIndex] = useState(0);

  let HeaderTech = "", DescTech = "", Photo = "";

  if (Index === 0) {
    HeaderTech = "LAUNCH VEHICLE";
    DescTech = "Launch vehicle A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    Photo = "static/assets/technology/image-launch-vehicle-portrait.jpg";
  }
  else if (Index === 1) {
    HeaderTech = "SPACE CAPSULE";
    DescTech = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    Photo = "static/assets/technology/image-space-capsule-portrait.jpg";
  }
  else {
    HeaderTech = "SPACEPORT";
    DescTech = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    Photo = "static/assets/technology/image-spaceport-portrait.jpg";
  }


  return (
    <Wrapper>
      <FlexContainer>
        <FlexContent>
          <Header
            Number="03"
            Title="SPACE LAUNCH 101" />

          <div style={{ display: "flex", alignItems: "space-evenly" }}>
            <FlexColumn>
              <NumCircle onClick={() => setIndex(0)}><Num>1</Num></NumCircle>
              <NumCircle onClick={() => setIndex(1)}><Num>2</Num></NumCircle>
              <NumCircle onClick={() => setIndex(2)}><Num>3</Num></NumCircle>
            </FlexColumn>
            <TechnologyDesc
              TitleTech="THE TERMINOLOGY ..."
              HeaderTech={HeaderTech}
              DescTech={DescTech}
              
            />
          </div>
        </FlexContent>

        <SmallFlexContent>
          <ShareImg
            Photo={Photo} />
        </SmallFlexContent>


      </FlexContainer >
    </Wrapper >
  );
}

export default Technology