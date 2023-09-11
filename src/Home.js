import React from "react";
import Common from "./Common";
import web from "../src/images/home.jpg";
import Services from "./Services";
import About from "./About";
import HeroSlider from "./Components/HeroSlider";
const Home = () => {
  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <HeroSlider />
        {/* <Common
          name="Revolutionize Your Digital Presence with"
          desc="At Tech Decoder Nepal, we are dedicated to reshaping your technological landscape. Our team of experts specializes in providing innovative IT solutions that help businesses thrive in today’s fast-paced digital world."
          imgsrc={web}
          visit="#Services"
          btname="Discover More"
        /> */}
      </div>
      <div style={{ marginTop: "150px" }} id="Services">
        <Services />
        <About />
      </div>
    </>
  );
};

export default Home;
