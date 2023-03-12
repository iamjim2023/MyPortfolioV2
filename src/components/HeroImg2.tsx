import "./HeroImg2Styles.css";
import React, { Component } from "react";

interface HeroImg2Props {
  heading: string;
  text: string;
}

class HeroImg2 extends Component<HeroImg2Props> {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
