import React from "react";
import styled from "styled-components/macro";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display:flex;
  height:300px;
  align-items:center;
  margin-top:200px;
  
  @media screen and (max-width: 1028px) {
    margin-top: 0;
    flex-direction: column;
  }

`;

const MainContainer = styled.div`
  flex:50%;

  // @media screen and (max-width: 1028px) {
  //   display: flex;
  //   justify-content: center;

  //   &#top {
  //     flex-direction: column;
  //   }
  
`;

const MainTitle = styled.div`
  color:var(--white);
  opacity:0.5;
  text-align:center;
  font-family: cursive;
  font-size:35px;
  padding-left:100px;

  @media screen and (max-width: 1028px) {
    padding-top: 100px;
  }
`;

const MainText = styled.div`
  color:var(--white);
  font-size:100px;
  letter-spacing:5px;
  text-align:center;
  padding-left:100px;
`;

const MainSentence = styled.div`
  color:var(--white);
  text-align:start;
  opacity:0.5;
  padding-left:100px;
  font-family: cursive;
  line-height: 200%;
  font-size:20px;

`;

const Circle = styled.div`
  border-radius:50%;
  background-color:var(--white);
  position:relative;
  height:250px;
  width:250px;
  top:50%;
  left:50%;

  @media screen and (max-width: 1028px) {
    top:unset;
    left:unset;
  }

`;

const Text = styled(Link)`
  color:black;
  font-size:40px;
  text-align:center;
  position:absolute;
  top :50%;
  left:50%;
  font-family: serif;
  font-weight:100;
  cursor:pointer;
  text-decoration:none;
  transform:translate(-50%,-50%);
  

`;


function Container() {


  return (
    <Wrapper>
      <MainContainer>
        <MainTitle>
          SO, YOU WANT TO TRAVEL TO
        </MainTitle>
        <MainText>SPACE</MainText>
        <MainSentence>Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. WEll sit back, and relax because we'll give you a truly out of this world experience!</MainSentence>
      </MainContainer>
      <MainContainer>

        <Circle>
          <Text to="/destination">
            Explore
          </Text>
        </Circle>


      </MainContainer>
    </Wrapper >
  );
}

export default Container