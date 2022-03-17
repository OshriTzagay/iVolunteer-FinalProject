import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../../../Contexts/user-context";
import { registerUser } from "../../../Services/user-service";
import "./Register-Compo.css";
import TextField from '@mui/material/TextField';

export const UserRegister = () => {
  const { user, setUser } = useContext(userContext);
  const changingTheValue = (e) => {
    user[e.target.name] = e.target.value;
  };

  const AddUser = (e) => {
    e.preventDefault();

      setUser({ ...user });
      // console.log(user);
      registerUser(user);
      alert("GOOD")
  
  
  };
  return (
    <div className="register-compo">
      <form onSubmit={AddUser}  className="register-compo">
 
      <TextField label="First name" placeholder="Enter your first name" name="FirstName" type="text" onChange={changingTheValue} required multiline/> <br/>

      <TextField label="Last name" placeholder="Enter your Last name" name="LastName" type="text" onChange={changingTheValue} required multiline/> <br/>

      <TextField label="Email" placeholder="Enter your Email" name="Email" type="text" onChange={changingTheValue} required multiline/> <br/>

      <TextField label="Password" placeholder="Enter your Password" name="Password" type="text" onChange={changingTheValue} required multiline/> <br/>

      <TextField label="Age" placeholder="Enter your Age" name="Age" type="number" maxLength={10} onChange={changingTheValue} required multiline/> 



{/* 
        <label>First Name: </label>
        <input
          type="text"
          name="FirstName"
          placeholder="First Name"
          onChange={changingTheValue}
          required />

        <label>Last Name: </label>
        <input
          type="text"
          name="LastName"
          placeholder="Last Name"
          onChange={changingTheValue}
          required
        />
        <label>Email: </label>
        <input
          type="text"
          name="Email"
          placeholder="Email"
          onChange={changingTheValue}
        />
        <label>Password </label>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={changingTheValue}
        />
        <label>Age </label>
        <input
          type="number"
          name="Age"
          placeholder="Age"
          maxLength={10}
          onChange={changingTheValue}
        />  */}

        <button type="submit"> Confirm </button>
      </form>
    </div>
  );
};
