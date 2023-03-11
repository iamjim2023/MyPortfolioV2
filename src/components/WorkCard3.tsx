import "./WorkCardStyles3.css";

import React from "react";
import { NavLink, To } from "react-router-dom";

const WorkCard3 = (props: {
  imgsrc3: string | undefined;
  title3:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  text3:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  view3: To;
}) => {
  return (
    <div className="project-card3">
      <img src={props.imgsrc3} alt="" />
      <h2 className="project-title3">{props.title3}</h2>
      <div className="pro-details3">
        <p>{props.text3}</p>
      </div>
      <div className="pro-btns3">
        <NavLink to={props.view3} className="btn">
          View
        </NavLink>
        <NavLink
          to="https://blog.faradars.org/%d9%85%d9%88%d8%b6%d9%88%d8%b9-%d8%a8%d8%b1%d8%a7%db%8c-%d8%b7%d8%b1%d8%a7%d8%ad%db%8c-%d9%88%d8%a8-%d8%b3%d8%a7%db%8c%d8%aa/"
          className="btn"
        >
          Source
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard3;
