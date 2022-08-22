import React from "react";
import styled from "styled-components/macro";


const Wrapper = styled.div`
  margin:0;

  @media screen and (max-width: 1028px) {
    display: flex;
    justify-content: center;
  }
`;

const TitleNo = styled.div`
  color:var(--white);
  opacity:0.5;
  font-size:35px;
  display:inline;
  float: left;
  // left: 25%;
  left:30%;
  position: relative;

  @media screen and (max-width: 1028px) {
    left:unset;
    width:unset;
  }
  
`;

const TitleText = styled.div`
  color:var(--white);
  font-size:35px;
  display:inline;
  float: left;
  left:30%;
  // left: 27%;
  position: relative;
  width:90%;

  @media screen and (max-width: 1028px) {
    left:unset;
    width:unset;

  }

`;

function Header({ Number, Title }: {
  Number: string,
  Title: string
}) {

  return (
    <Wrapper>
      <TitleNo>{Number}</TitleNo>
      <TitleText>{Title}</TitleText>
    </Wrapper>);
}
export default Header