import React from "react";
import styled from "styled-components/macro";
import Header from "./Header";
import ShareImg, { Wrapper as ShareImgTool } from "./SharedImg";
import DestinationDesc from "./DestinationDesc";

const Wrapper = styled.div`

`;


const FlexContainer = styled.div`
  display:flex;
`;

const FlexContent = styled.div`
  flex:50%;
  display:flex;
  flex-direction:column;
  
  ${ShareImgTool} {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top:100px;
  }
`;


function Destination() {
  return (
    <Wrapper>
      {/* <Background> */}
      <FlexContainer>
        <FlexContent>
          <Header
            Number="01"
            Title="PICK YOUR DESTINATIONS" />
          <ShareImg
            Photo="static/assets/destination/image-mars.png" />
          {/* <TitleNo>01</TitleNo>
          <TitleText>PICK YOUR DESTINATION</TitleText> */}
          {/* <ImgMars /> */}
        </FlexContent>

        <FlexContent>
          <DestinationDesc
            Header="A"
            Description="A"
            Distance="A"
            Duration="A"
          />
        </FlexContent>
      </FlexContainer>
      {/* </Background> */}
    </Wrapper>
  );

}
export default Destination