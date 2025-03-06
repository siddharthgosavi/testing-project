import React, { useState } from "react";

const StateBatching = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const loadUser = async () => {
    const user = await fetch("https://randomuser.me/api/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.results[0];
      });
    setPhone(user.phone);
    setEmail(user.email);
    setGender(user.gender);
  };
  console.log("Render 19");
  return (
    <div>
      <div className="input-group mb-2 mr-sm-2">
        <div className="input-group-prepend">
          <div className="input-group-text ">Phone</div>
        </div>
        {phone && <p className="form-control">{phone}</p>}
      </div>
      <div className="input-group mb-2 mr-sm-2">
        <div className="input-group-prepend">
          <div className="input-group-text">Email</div>
        </div>
        {email && <p className="form-control">{email}</p>}
      </div>
      <div className="input-group mb-2 mr-sm-2">
        <div className="input-group-prepend ">
          <div className="input-group-text">Gender</div>
        </div>
        {gender && <p className="form-control">{gender}</p>}
      </div>
      <div className="input-group mb-2 mr-sm-2">
        <div className="input-group-prepend w-100">
          <button
            onClick={loadUser}
            className="btn btn-outline-primary"
            type="button"
          >
            Load User
          </button>
        </div>
      </div>
    </div>
  );
};

export default StateBatching;
