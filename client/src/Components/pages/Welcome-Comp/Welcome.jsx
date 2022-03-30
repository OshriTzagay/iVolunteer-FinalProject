import React from "react";
import "./Style-Welcome.css";
import { useNavigate } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';



function Welcome() {
  const navigate = useNavigate();

  return (
  <div className="Welcome-Container">
  <div className="meet-us">
    <div className="cards">
      <img src="/Media/lior.jpeg" alt="" />
      <h2>Lior Yosef</h2>
  <i style={{color:'white'}} class="fas fa-code"></i>

      <div className="contact-icons">
      <a href="https://github.com/Lior-Yosef"><i className="fab fa-github"></i></a>
     <a href="https://www.linkedin.com/in/lior-yosef-6314b0225/"><i className="fab fa-linkedin"></i></a> 
    <a href="mailto:Lioryosef06@gmail.com"><i className="fas fa-at"></i></a> 
      </div>
    </div>
    <div className="cards">
      <img src="/Media/oshri.jpg" alt="" />
      <h2>Oshri-el Tzagay</h2>
<i style={{color:'white'}} class="fas fa-code"></i>

      <div className="contact-icons">
      <a href="https://github.com/OshriTzagay"><i className="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/oshri-el-tzagay-873482226/"><i className="fab fa-linkedin"></i></a> 
      <a href="mailto:webmaster@example.com"><i className="fas fa-at"></i></a> 
      </div>
    </div>
    <div className="cards">
<img src="/Media/matan.jpeg" alt="" />
<h2>Matan Asayas</h2>
 <i style={{color:'white'}} class="fas fa-code"></i>
<div className="contact-icons">
<a href="https://github.com/matan-ysayas"><i className="fab fa-github"></i></a>
<a href="https://www.linkedin.com/in/matan-ysayas-94b105226/"><i className="fab fa-linkedin"></i></a> 
<a href="mailto:matan.ysayas@gmail.com"><i className="fas fa-at"></i></a> 
</div>
</div>

  </div>
  <div className="welcome-bg">
    <img src="Media/vecteezy_activism_volunteering_illustration-2_hk1220.png" alt="" />

    <h1 className="iTitle">iVolunteer</h1>


    <button className="siteBtn" onClick={()=>{navigate('/login')}}>Go-Volunteer!</button>
  </div>

  </div>
    
  );
}
export default Welcome;
