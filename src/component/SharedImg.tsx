import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

`;

const Img = styled.img`
  background-size:cover;
`;

function ShareImg({ Photo }: {
  Photo: string
}) {

  return (
    <Wrapper>
      <Img>{Photo}</Img>
    </Wrapper>
  );
}

export default ShareImg