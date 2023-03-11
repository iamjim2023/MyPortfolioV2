import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <div>
        <Navbar />
        <HeroImg2
          heading="ABOUT."
          text="Im a Front-End Developer trainee & Network Maintenance Staff trainee at Dowinn Group"
        />
        <AboutContent />
        <Footer />
      </div>
    </div>
  );
}

export default About
