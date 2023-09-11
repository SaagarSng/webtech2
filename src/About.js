import React from "react";
import Common from "./Common";
import web from "../src/images/about.jpg";
const About = () => {
  return (
    <>
      <div className="my-5">
        <Common
          name="Welcome to About page"
          imgsrc={web}
          visit="/contact"
          btname="Contact Now"
        />
      </div>
    </>
  );
};

export default About;
