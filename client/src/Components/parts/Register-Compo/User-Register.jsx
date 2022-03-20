import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../../../Contexts/user-context";
import { registerUser } from "../../../Services/user-service";
import "./Register-Compo.css";
export const UserRegister = () => {
  const { user, setUser } = useContext(userContext);
  const changingTheValue = (e) => {
    user[e.target.name] = e.target.value;
  };

  const AddUser = (e) => {
    e.preventDefault();
    setUser({...user })
   console.log(user);
    registerUser(user);
    alert("GOOD");
  };
  return (
    <div className="register-compo">
      <form onSubmit={AddUser}>
        <label>First Name: </label>
        <input
          type="text"
          name="FirstName"
          placeholder="First Name"
          onChange={changingTheValue}
          required
        />
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
        />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};