import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../../../Contexts/user-context";
import { registerUser } from "../../../Services/user-service";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Register-Compo.css";

export const UserRegister = () => {
  const [user, setUser] = useState({});
  const changingTheValue = (e) => {
    user[e.target.name] = e.target.value;
  };

  const AddUser = (e) => {
    e.preventDefault();
    setUser({ ...user });
    console.log(user);
    registerUser(user);
    alert("GOOD");
  };
  return (
    <div>
      <h1 className="registerTitle" >Register compo</h1>
      <form className="register-compo" onSubmit={AddUser}>
        <TextField
          label="First name"
          type="text"
          name="FirstName"
          placeholder="First Name"
          onChange={changingTheValue}
          required
        />
          <br></br>
        <TextField
          label="Last name"
          type="text"
          name="LastName"
          placeholder="Last Name"
          onChange={changingTheValue}
          required
        />
          <br></br>

        <TextField
          label="Email"
          type="text"
          name="Email"
          placeholder="Email"
          onChange={changingTheValue}
          required
        />
          <br></br>

        <TextField
          label="Password"
          placeholder="Enter your Password"
          type="Password"
          name="Password"
          autoComplete="current-password"
          onChange={changingTheValue}
          required
        />
          <br></br>

        <TextField
          label="Age"
          type="number"
          name="Age"
          placeholder="Age"
          maxLength={10}
          onChange={changingTheValue}
          required
        />
        <br></br>
        <Button style={{backgroundColor:'#809fff',color:'white'}} type="submit">Confirm</Button>
      </form>
 <div className="spaceDiv">

 </div>

    </div>
  );
};
