import { useContext } from "react";
import { userContext } from "../../../Contexts/user-context";
import { loginUser } from "../../../Services/user-service";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Style-Login.css";

export const Login = () => {
  const { user, setUser } = useContext(userContext);
  const Navigate = useNavigate();
  const changingTheValue = (e) => {
    user[e.target.name] = e.target.value;
  };

  const SendTheLoginUser = (e) => {
    e.preventDefault();

    console.log(user);

    loginUser(user).then((res) => {
      if (res.token) {
        localStorage.setItem("token", res.token);

        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser({ ...decoded.user });
        alert(`welcome ${decoded.user.FirstName} `);

        Navigate("/home");
      } else {
        alert("Check your password or email");
      }
    });
  };
  return (
    <div className="login-regi-container">
      <div className="login-div">
        <img
          className="login-img"
          src="https://rhslegend.com/wp-content/uploads/2022/02/volunteers-768x558-1.png"
          alt=""
        />
        <div className="login-title">
          <h1>Login</h1>
        </div>
        <TextField
          style={{ width: "200px", marginLeft: "43%" }}
          label="Email"
          type="text"
          name="Email"
          placeholder="Enter your Email"
          onChange={changingTheValue}
          required
        />{" "}
        <TextField
          style={{ width: "200px", marginLeft: "43%" }}
          label="Password"
          placeholder="Enter your Password"
          type="Password"
          name="Password"
          autoComplete="current-password"
          onChange={changingTheValue}
          required
        />
        <Button
        className="login-btn"
          style={{ width: "200px", marginLeft: "43%" }}
          variant="contained"
          component="span"
          type="submit"
          onClick={SendTheLoginUser}
        >
          Send
        </Button>
      </div>


      <div className="regi-div">
        <div className="regi-content">
          <h1>New Here?</h1>
          <p>Sign up and discover the iVolunteer world</p>
          <Button variant="contained" component="span" type="submit" className="login-btn" onClick={ ()=> Navigate("/register")}>
            Send
          </Button>

      

        </div>
      </div>
    </div>
  );
};
