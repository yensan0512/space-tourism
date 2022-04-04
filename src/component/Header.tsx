import React from "react";
import styled from "styled-components/macro";


const Wrapper = styled.div`
  margin:0;
`;

const TitleNo = styled.div`
  color:var(--white);
  opacity:0.5;
  font-size:30px;
  display:inline;
  float: left;
  // left: 25%;
  left:35%;
  position: relative;
  
`;

const TitleText = styled.div`
  color:var(--white);
  font-size:30px;
  display:inline;
  float: left;
  left:35%;
  // left: 27%;
  position: relative;
  width:90%;

`;

const ImgMars = styled.img`
  content:url(static/assets/destination/image-mars.png);
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top:100px;
`;

function Header({ Number, Title }: {
  Number: string,
  Title: string
}) {

  return (
    <Wrapper>
      <TitleNo>{Number}</TitleNo>
      <TitleText>{Title}</TitleText>
      {/* <ImgMars /> */}
    </Wrapper>);
}
export default Header