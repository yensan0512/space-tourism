import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display:flex;
  
`;

const MainContainer = styled.div`
  flex:50%;
  
`;

const MainTitle = styled.div`
  color:var(--white);
  opacity:0.5;
  text-align:center;
`;

const MainText = styled.div`
  color:var(--white);
  font-size:100px;
  letter-spacing:5px;
  text-align:center;
`;

const MainSentence = styled.div`
  color:var(--white);
  text-align:center;
  opacity:0.5;
`;

const Circle = styled.div`
  border-radius:50%;
  background-color:var(--white);
  position:relative;
  height:300px;
  width:300px;
`;

const Text = styled.h2`
  color:black;
  font-size:40px;
  text-align:center;
  position:absolute;
  top :30%;
  left:30%;
  font-family: serif;
  font-weight:100;
`;


function Container() {

  return (
    <Wrapper>
      <MainContainer>
        <MainTitle>
          So,you want to travel to
        </MainTitle>
        <MainText>SPACE</MainText>
        <MainSentence>Let's face it:if you want to go to space</MainSentence>
      </MainContainer>
      <MainContainer>
        <Circle>
          <Text>
            Explore
          </Text>
        </Circle>
      </MainContainer>
    </Wrapper >
  );
}

export default Container