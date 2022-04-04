import React, { useState } from "react";
import styled from "styled-components/macro";
import Header from "./Header";
import ShareImg, { Wrapper as ShareImgTool } from "./SharedImg";
import DestinationDesc from "./DestinationDesc";

const Wrapper = styled.div`

`;


const FlexContainer = styled.div`
  display:flex;
`;

const FlexContent = styled.div`
  flex:50%;
  display:flex;
  flex-direction:column;
  
  ${ShareImgTool} {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top:100px;
  }
`;


function Destination() {

  const [index, setIndex] = useState("moon");

  const handlePlanetClick = (planet: string) => {
    setIndex(planet);
  }

  let HeaderTitle = "", Description = "", Distance = "", Duration = "", Photo = "";
  if (index === "moon") {
    HeaderTitle = "MOON";
    Description = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    Distance = "384,400 KM";
    Duration = "3 DAYS";
    Photo = "static/assets/destination/image-moon.png";
  }
  else if (index === "mars") {
    HeaderTitle = "MARS";
    Description = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    Distance = "225 MIL. KM";
    Duration = "9 MONTHS";
    Photo = "static/assets/destination/image-mars.png";
  }
  else if (index === "europa") {
    HeaderTitle = "EUROPA";
    Description = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    Distance = "628 MIL. KM";
    Duration = "3 YEARS";
    Photo = "static/assets/destination/image-europa.png";
  }
  else {
    HeaderTitle = "TITAN";
    Description = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    Distance = "1.6 BIL. KM";
    Duration = "7 YEARS";
    Photo = "static/assets/destination/image-titan.png";
  }



  return (
    <Wrapper>
      <FlexContainer>
        <FlexContent>
          <Header
            Number="01"
            Title="PICK YOUR DESTINATIONS" />
          <ShareImg
            Photo={Photo} />
        </FlexContent>

        <FlexContent>
          <DestinationDesc
            handlePlanetClick={handlePlanetClick}
            Header={HeaderTitle}
            Description={Description}
            Distance={Distance}
            Duration={Duration}
          />
        </FlexContent>
      </FlexContainer>
      {/* </Background> */}
    </Wrapper>
  );

}
export default Destination