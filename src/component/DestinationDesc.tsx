import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div``;

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

  &:hover {
    cursor:pointer;
    text-decoration:underline;
    text-decoration-color:white;
    text-decoration-thickness:30%;
}
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

const FlexContainer = styled.div`
  display:flex;
`;

function DestinationDesc({ Header, Description, Distance, Duration }: {
  Header: string,
  Description: string,
  Distance: string,
  Duration: string
}) {
  return (
    <Wrapper>
      <InnerFlexMenuContainer>
        <InnerFlexContent>MOON</InnerFlexContent>
        <InnerFlexContent>MARS</InnerFlexContent>
        <InnerFlexContent>EUROPA</InnerFlexContent>
        <InnerFlexContent>TITAN</InnerFlexContent>
      </InnerFlexMenuContainer>
      <BigLabel>{Header}</BigLabel>
      <Sentence>{Description}</Sentence>
      <HR />
      <FlexContainer>


        <InnerFlexFooterContainer>
          <Text>AVG. DISTANCE</Text>
          <AnsText>{Distance}</AnsText>
        </InnerFlexFooterContainer>
        <InnerFlexFooterContainer>
          <Text>EST. TRAVEL TIME</Text>
          <AnsText>{Duration}</AnsText>
        </InnerFlexFooterContainer>
      </FlexContainer>
    </Wrapper>
  );

}

export default DestinationDesc