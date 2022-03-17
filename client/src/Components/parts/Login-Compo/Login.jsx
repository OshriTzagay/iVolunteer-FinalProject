import { useContext } from "react";
import { userContext } from "../../../Contexts/user-context";
import { loginUser } from "../../../Services/user-service";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./Style-Login.css"


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
        localStorage.setItem('token', res.token)

        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        setUser({ ...decoded.user });
        alert(`welcome ${decoded.user.FirstName} `)

        Navigate("/");
      }
      else {
        alert('Check your password or email')
      }

    });
  };
  return (
    <div>
      <h1>LOGIN</h1>

      <form>

        <div className="continerUser">
          <div className="login">
            <h1>Login to Your Account</h1>
            <TextField label="Email" type="text" name="Email"  placeholder="Enter your Email" onChange={changingTheValue} required/> <br />
            <TextField label="Password" placeholder="Enter your Password" type="password" name="Password" autoComplete="current-password" onChange={changingTheValue} required/>
            <br />
            <Button variant="contained" component="span" type="submit" onClick={SendTheLoginUser}>Send</Button>
          </div>

          <section className="Register">
            <div className="newUser">
              <h1>New Here?</h1>
              <p>Sing up and discover the iVolunteer world</p>
              <Button variant="contained" component="span" type="submit">Send</Button>
            </div>

          </section>
        </div>
      </form>
    </div>
  );
};
