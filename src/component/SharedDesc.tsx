import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`

`;

const Title = styled.div`
  font-size:30px;
  opacity:0.5;
  color:var(--white);
`;

const BigLabel = styled.h1`
  font-size:100px;
  color:var(--white);
  letter-spacing:2px;
  font-family: serif;
  margin:50px 0 50px 0;
  
`;

const Description = styled.h3`
  color:var(--white);
  opacity:0.5;
  text-align:start;
  font-size:20px;
  letter-spacing:2px;
  padding-right:200px;
`;


function SharedDesc({ TitleTech, HeaderTech, DescTech }: {
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

export default SharedDesc