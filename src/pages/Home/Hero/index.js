//Imports from styles
import { HeroLoop, HeroText, HeroWrapper } from "./styles";

//Import from assets
import Fog from "@video/fog.mp4";
//Import from package.json
import React from "react";

//Creating the hero with a looping background video
export default (props) => (
  <HeroWrapper>
    <HeroLoop>
      <video autoPlay playsInline muted loop id="vanta">
        <source src={Fog} type="video/mp4" />
      </video>
    </HeroLoop>
    {/* <HeroTextWrapper> */}
    <HeroText>
      <div>This page was created to mirror the rhythm of the breath</div>
      <div>
        &ldquo;The Spirit of God has made me, and the breath of the
        Almighty&nbsp;gives&nbsp;me&nbsp;life&rdquo;
      </div>
    </HeroText>
    {/* </HeroTextWrapper> */}
  </HeroWrapper>
);
