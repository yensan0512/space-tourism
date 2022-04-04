import React from "react";
import styled from "styled-components/macro";
import Header from "./Header";

const Wrapper = styled.div`

`;

// const Background = styled.div`
//   background:url(static/assets/destination/background-destination-desktop.jpg);
//   background-size:cover;

// `;

const FlexContainer = styled.div`
  display:flex;
`;

const FlexContent = styled.div`
  flex:50%;
  
`;

// const TitleFlexContainer = styled.div`
//   display:inline-block;

// `;


// const TitleNo = styled.div`
//   color:var(--white);
//   opacity:0.5;
//   font-size:30px;
//   display:inline;
//   float: left;
//   left: 25%;
//   position: relative;




// `;

// const TitleText = styled.div`
//   color:var(--white);
//   font-size:30px;
//   display:inline;
//   float: left;
//   left: 27%;
//   position: relative;


// `;

// const ImgMars = styled.img`
//   content:url(static/assets/destination/image-mars.png);
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top:150px;
// `;

const InnerFlexMenuContainer = styled.div`
  display:flex;
  gap:30px;
  margin-top:200px;
  // justify-content:center;
`;

const InnerFlexContent = styled.div`
  color:var(--white);
  font-size:20px;
  opacity:0.5;
`;

const BigLabel = styled.h1`
  font-size:100px;
  color:var(--white);
  letter-spacing:2px;
  font-family: serif;
  margin:50px 0 50px 0;
  
`;

const Sentence = styled.div`
  color:var(--white);
  opacity:0.5;
  text-align:start;
  font-size:20px;
  letter-spacing:2px;
  padding-right:200px;
`;

const InnerFlexFooterContainer = styled.div`
  flex:50%;
`;

const Text = styled.div`
  font-size:20px;
  color:var(--white);
  opacity:0.5;
  font-family:Arial narrow;
  margin-top:20px;
`;

const HR = styled.hr`
  opacity:0.5;
  width:80%;
  margin:10px 0 10px 0;
`;

const AnsText = styled.div`
  font-size:35px;
  color:var(--white);
  font-family:Times New Roman;
  padding-top:10px;
`;

function Destination() {
  return (
    <Wrapper>
      {/* <Background> */}
      <FlexContainer>
        <FlexContent>
          <Header />
          {/* <TitleNo>01</TitleNo>
          <TitleText>PICK YOUR DESTINATION</TitleText> */}
          {/* <ImgMars /> */}
        </FlexContent>

        <FlexContent>
          <InnerFlexMenuContainer>
            <InnerFlexContent>MOON</InnerFlexContent>
            <InnerFlexContent>MARS</InnerFlexContent>
            <InnerFlexContent>EUROPA</InnerFlexContent>
            <InnerFlexContent>TITAN</InnerFlexContent>
          </InnerFlexMenuContainer>
          <BigLabel>MARS</BigLabel>
          <Sentence>Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary moutain in our solar system. It's two and a half times the size of Everest !</Sentence>
          <HR />
          <FlexContainer>


            <InnerFlexFooterContainer>
              <Text>AVG. DISTANCE</Text>
              <AnsText>225 MIL. KM</AnsText>
            </InnerFlexFooterContainer>
            <InnerFlexFooterContainer>
              <Text>EST. TRAVEL TIME</Text>
              <AnsText>9 MONTHS</AnsText>
            </InnerFlexFooterContainer>
          </FlexContainer>

        </FlexContent>
      </FlexContainer>
      {/* </Background> */}
    </Wrapper>
  );

}
export default Destination