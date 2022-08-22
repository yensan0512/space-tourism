import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`

`;

const Title = styled.div`
  font-size:20px;
  opacity:0.5;
  color:var(--white);
  margin:50px 0px 10px 0px;
`;

const BigLabel = styled.h1`
  font-size:60px;
  color:var(--white);
  letter-spacing:2px;
  font-family: serif;
  margin:0px 0 50px 0;

  @media screen and (max-width: 1028px) {
    margin:0px 0px 0px 0;
    letter-spacing:0px;
  }
  
`;

const Description = styled.h3`
  color:var(--white);
  opacity:0.5;
  text-align:start;
  font-size:20px;
  letter-spacing:2px;
  padding-right:200px;
  line-height:1.6;

  @media screen and (max-width: 1028px) {
    padding:0px 10px 0px 0px;
    letter-spacing:0px;
  }
`;


function TechnologyDesc({ TitleTech, HeaderTech, DescTech }: {
  TitleTech: string,
  HeaderTech: string,
  DescTech: string
}) {

  return (
    <Wrapper>
      <Title>{TitleTech}</Title>
      <BigLabel>{HeaderTech}</BigLabel>
      <Description>{DescTech}</Description>
    </Wrapper>
  );
}

export default TechnologyDesc