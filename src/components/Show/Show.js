import React from "react";
import "./Show.css";

const Show = (props) => {
  const { member } = props;

  return (
    <div>
      <h3>{member.name}</h3>
      <img className="show-pic" src={member.picture} alt="" />
    </div>
  );
};

export default Show;
