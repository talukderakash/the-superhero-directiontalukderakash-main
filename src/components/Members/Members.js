import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Member from "../Member/Member";
import "./Members.css";

const Members = () => {
  const [members, setMembers] = useState([]);
  //   console.log(members);

  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("./Community.JSON")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-9 left">
          <div className="row row-cols-3 g-4">
            {members.map((member) => (
              <Member
                key={member._id}
                carts={carts}
                setCarts={setCarts}
                member={member}
              ></Member>
            ))}
          </div>
        </div>

        <div className="col-md-3 right">
          <Cart carts={carts}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Members;
