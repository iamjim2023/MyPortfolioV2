import "./WorkCardStyles1.css";

import React from "react";
import { NavLink, To } from "react-router-dom";

const WorkCard1 = (props: { imgsrc1: string | undefined; title1: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; text1: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; view1: To; }) => {
  return (
    <div className="project-card1">
      <img src={props.imgsrc1} alt="" />
      <h2 className="project-title1">{props.title1}</h2>
      <div className="pro-details1">
        <p>{props.text1}</p>
      </div>
      <div className="pro-btns1">
        <NavLink to={props.view1} className="btn">
          View
        </NavLink>
        <NavLink
          to="https://www.geeksforgeeks.org/10-best-web-development-project-ideas-for-beginners-in-2021/"
          className="btn"
        >
          Source
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard1;
