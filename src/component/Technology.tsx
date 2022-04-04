import React from "react";
import styled from "styled-components/macro";
import Header from "./Header";
import SharedDesc from "./SharedDesc";
import ShareImg from "./SharedImg";

const Wrapper = styled.div`

`;

const FlexContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
`;

const FlexContent = styled.div`
  flex:50%;
  
`;

const FlexColumn = styled.div`
  display: flex 
  flexDirection: column
`;

const NumCircle = styled.div`
  border-radius:50%;
  width:50px;
  height:50px;
  background:black;

  &:hover {
    cursor:pointer;
    background:var(--white);
}
`;


function Technology() {

  return (
    <Wrapper>
      <FlexContainer>
        <FlexContent>
          <Header
            Number="03"
            Title="SPACE LAUNCH 101" />


        </FlexContent>

        <FlexContent>
          <ShareImg
            Photo="static/assets/technology/image-launch-vehicle-portrait.jpg" />
        </FlexContent>

        <FlexContent>
          <FlexColumn>
            <NumCircle>1</NumCircle>
            <NumCircle>2</NumCircle>
            <NumCircle>3</NumCircle>
          </FlexColumn>
          <SharedDesc
            TitleTech="THE TERMINOLOGY"
            HeaderTech="LAUNCH VEHICLE"
            DescTech="Launch vehicle A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
          />
        </FlexContent>
      </FlexContainer >
    </Wrapper >
  );
}

export default Technology