import { useContext, useState } from "react";
import { userContext } from "../../../Contexts/user-context";
import { registerUser } from "../../../Services/user-service";

export const UserRegister = () => {
  const { user, setUser } = useContext(userContext);

  const changingTheValue = (e) => {
    user[e.target.name] = e.target.value;
  };

  const AddUser = (e) => {
    e.preventDefault();
    setUser({ ...user });
    console.log(user);
    registerUser(user);
  };
  return (
    <div>
      <form>
        <label>First Name: </label>
        <input
          type="text"
          name="FirstName"
          placeholder="First Name"
          onChange={changingTheValue}
        />
        <label>Last Name: </label>
        <input
          type="text"
          name="LastName"
          placeholder="Last Name"
          onChange={changingTheValue}
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

        <button type="submit" onClick={AddUser}>
          Confirm
        </button>
      </form>
    </div>
  );
};
