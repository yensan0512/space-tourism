import React from "react";
import styled from "styled-components/macro";
import Header from "./Header";
import ShareImg from "./SharedImg";
import DestinationDesc from "./DestinationDesc";

const Wrapper = styled.div`

`;


const FlexContainer = styled.div`
  display:flex;
`;

const FlexContent = styled.div`
  flex:50%;
  
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
          <DestinationDesc />
        </FlexContent>
      </FlexContainer>
      {/* </Background> */}
    </Wrapper>
  );

}
export default Destination