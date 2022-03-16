import { useContext } from "react"; 
import { userContext } from "../../../Contexts/user-context";
import { loginUser } from "../../../Services/user-service";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const { user, setUser } = useContext(userContext);
 const Navigate=useNavigate();
  const changingTheValue = (e) => {
    user[e.target.name] = e.target.value;
  };

  const SendTheLoginUser = (e) => {
    e.preventDefault();
    console.log(user);
    
    loginUser(user).then((res)=>{
      if(res.token){
        localStorage.setItem('token',res.token)
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        setUser({...decoded.user});
        alert(`welcome ${decoded.user.FirstName} `)
        Navigate("/");}
else{
      alert('Check your password or email')
    }
    });
  };
  return (
    <div>
      <h1>LOGIN</h1>

      <form>

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
        <button type="submit" onClick={SendTheLoginUser}>click</button>
      </form>
    </div>
  );
};
