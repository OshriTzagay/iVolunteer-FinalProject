import React from "react";
import "./Style-Welcome.css";
import { useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Login } from "../../parts/Login-Compo/Login";



function Welcome() {
  const navigate = useNavigate();

  return (
    <>
  <div className="Welcome-Container">
  <div className="welcome-p">
    <br /><br /><br />
    <div className="cards">

    </div>
    <div className="cards"></div>


  </div>
  <div className="welcome-bg">
    <img src="Media/vecteezy_activism_volunteering_illustration-2_hk1220.jpg" alt="" />

    <h1 className="iTitle">iVolunteer</h1>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

    <button onClick={()=>{navigate('/login')}}>sadsa</button>
  </div>







  </div>
    </>
  );
}
export default Welcome;
