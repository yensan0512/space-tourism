import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div``;


const Position = styled.div`
  color:var(--white);
  opacity:0.5;
  font-size:30px;
  text-align:center;
  margin:0;
  padding:200px 0px 50px 0px;
  font-family:Bodoni MT;

  @media screen and (max-width: 1028px) {
    padding:20px 0px 50px 0px;
  }
`;

const Name = styled.h1`
  color:var(--white);
  font-size:60px;
  text-align:center;
  margin:0;
  font-family:Bodoni MT;
`;

const Sentence = styled.h3`
  color:var(--white);
  font-size:20px;
  text-align:start;
  opacity:0.5;
  margin:0;
  padding:50px 150px 0px 150px;
  line-height:2.0;
  letter-spacing:2px;

  @media screen and (max-width: 1028px) {
    padding:50px 0px 0px 0px;
  }
`;

function CrewProfile({ PositionSpace, NameSpace, Experience }: {
  PositionSpace: string,
  NameSpace: string,
  Experience: string
}) {

  return (
    <Wrapper>
      <Position>{PositionSpace}</Position>
      <Name>{NameSpace}</Name>
      <Sentence>{Experience}</Sentence>
    </Wrapper>
  );
}

export default CrewProfile