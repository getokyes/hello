import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Register = ({regData}) => {
    const [name, SetName] = useState();
    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
    const data = { name, email, password };
    const handleregister = (e)=>{
      e.preventDefault();
      alert("Registration successful");
      regData(data);
    };
  return (
    <div>
        {/* {name}{email}{password} */}
        {JSON.stringify(data)}
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => SetName(e.target.value)}
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email" onChange={(e) => SetEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password" onClick={(e) => SetPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button onClick={handleregister} className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;