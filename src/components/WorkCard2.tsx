import "./WorkCardStyles2.css";

import React from "react";
import { NavLink, To } from "react-router-dom";

const WorkCard2 = (props: {
  imgsrc2: string | undefined;
  title2:
    | string
    | number
    | boolean
    | React.ReactFragment
    | React.ReactPortal
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
  text2:
    | string
    | number
    | boolean
    | React.ReactFragment
    | React.ReactPortal
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
  view2: To;
}) => {
  return (
    <div className="project-card2">
      <img src={props.imgsrc2} alt="" />
      <h2 className="project-title2">{props.title2}</h2>
      <div className="pro-details2">
        <p>{props.text2}</p>
      </div>
      <div className="pro-btns2">
        <NavLink to={props.view2} className="btn">
          View
        </NavLink>
        <NavLink
          to="https://midriffinfosolution.org/some-points-to-consider-about-web-development/"
          className="btn"
        >
          Source
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard2;
