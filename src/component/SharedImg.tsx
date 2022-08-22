import React from "react";
import styled from "styled-components/macro";

export const Wrapper = styled.div`

`;

const Img = styled.img`
  background-size:cover;
  justify-self:center;
`;

function ShareImg({ Photo }: {
  Photo: string
}) {

  return (
    <Wrapper>
      <Img src={Photo} />
    </Wrapper>
  );
}

export default ShareImg