import "./WorkCardStyles1.css";
import "./WorkCardStyles2.css";
import "./WorkCardStyles3.css";

import WorkCard1 from "./WorkCard1";
import WorkCard2 from "./WorkCard2";
import WorkCard3 from "./WorkCard3";

import WorkCardData1 from "./WorkCardData1";
import WorkCardData2 from "./WorkCardData2";
import WorkCardData3 from "./WorkCardData3";

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container1">
        {WorkCardData1.map((val, ind) => {
          return (
            <WorkCard1
              key={ind}
              imgsrc1={val.imgsrc1}
              title1={val.title1}
              text1={val.text1}
              view1={val.view1}
            />
          );
        })}
      </div>
      <div className="project-container2">
        {WorkCardData2.map((val, ind) => {
          return (
            <WorkCard2
              key={ind}
              imgsrc2={val.imgsrc2}
              title2={val.title2}
              text2={val.text2}
              view2={val.view2}
            />
          );
        })}
      </div>
      <div className="project-container3">
        {WorkCardData3.map((val, ind) => {
          return (
            <WorkCard3
              key={ind}
              imgsrc3={val.imgsrc3}
              title3={val.title3}
              text3={val.text3}
              view3={val.view3}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
