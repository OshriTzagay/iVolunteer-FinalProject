import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../Contexts/user-context";
import { registerUser } from "../../../Services/user-service";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Register-Compo.css";

export const UserRegister = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const changingTheValue = (e) => {
    user[e.target.name] = e.target.value;
  };

  const AddUser = (e) => {
    e.preventDefault();
    setUser({ ...user });
    console.log(user);
    registerUser(user);
    alert(`U Have been registered Successfully : ${user.Email}`);
    navigate('/login')
  };
  return (
    <div className="register-Container">

      <div className="regi-title-div">
        <h1 className="registerTitle"> <span className="letSpan">Lets..</span>Register</h1>
        <div className="someDiv"></div>
      </div>


      <div className="formDiv">
        <form className="register-compo" onSubmit={AddUser}>
          <TextField
            label="First name"
            type="text"
            name="FirstName"
            placeholder="First Name"
            onChange={changingTheValue}
            required
          />
          <br />
          <TextField
            label="Last name"
            type="text"
            name="LastName"
            placeholder="Last Name"
            onChange={changingTheValue}
            required
          />
          <br />

          <TextField
            label="Email"
            type="text"
            name="Email"
            placeholder="Email"
            onChange={changingTheValue}
            required
          />
          <br />

          <TextField
            label="Password"
            placeholder="Enter your Password"
            type="Password"
            name="Password"
            autoComplete="current-password"
            onChange={changingTheValue}
            required
          />
          <br />

          <TextField
            label="Age"
            type="number"
            name="Age"
            placeholder="Age"
            maxLength={10}
            onChange={changingTheValue}
            required
          />
          <br />

          <TextField
            label="Profile image"
            type="text"
            name="ProfilePic"
            placeholder="Enter url only"
            maxLength={1000}
            onChange={changingTheValue}
            required
          />
          <br></br>
          <Button
          className="regi-btn"
            style={{ backgroundColor: "#809fff", color: "white",boxShadow:'2px 2px 2px 2px' }}
            type="submit"
          >
            Confirm
          </Button>
        </form>
      </div>

    </div>
  );
};
