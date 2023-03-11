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
        <HeroImg2 />
        <AboutContent />
        <Footer />
      </div>
    </div>
  );
}

export default About
