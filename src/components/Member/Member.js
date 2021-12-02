import { faLink, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Member.css";

const Member = (props) => {
  const { name, picture, age, gender, email, phone, salary, _id } =
    props.member;
  const { carts, setCarts, member } = props;
  const errorMessage = (id) => {
    const uniqueMember = carts.find((member) => member._id === id);
    if (uniqueMember) {
      alert("It's more than one");
    } else {
      setCarts([...carts, member]);
    }
  };

  return (
    <div className="col card-container">
      <div className="card p-2">
        <img src={picture} className=" image" alt="..." />
        <div className="card-body">
          <h5>Name:{name}</h5>
          <p>Age:{age}</p>
          <p>Gender:{gender}</p>
          <p>mail:{email}</p>
          <p>Phone:{phone}</p>
          <p>Salary:${salary}</p>
          <button className="add-btn" onClick={() => errorMessage(_id)}>
            <FontAwesomeIcon icon={faUserPlus} />
            Add in team
          </button>

          <div>
            <FontAwesomeIcon icon={faLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
