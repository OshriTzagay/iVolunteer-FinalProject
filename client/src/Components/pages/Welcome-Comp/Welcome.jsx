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
    <>
  <div className="Welcome-Container">
  <div className="meet-us">
    <div className="cards">

      <img src="https://cdn-icons-png.flaticon.com/512/1759/1759366.png" alt="" />
    
      <h2>Lior Yosef</h2>
      <div className="contact-icons">
      <p><GitHubIcon className="icon"/></p>
     <p><FacebookRoundedIcon className="icon"/></p> 
    <p><AlternateEmailRoundedIcon className="icon"/></p> 

      </div>

      
    </div>
    <div className="cards">

      <img src="https://cdn-icons-png.flaticon.com/512/1759/1759366.png" alt="" />
    
      <h2>Oshri-el Tzagay</h2>
      <div className="contact-icons">
      <p><GitHubIcon className="icon"/></p>
     <p><FacebookRoundedIcon className="icon"/></p> 
    <p><AlternateEmailRoundedIcon className="icon"/></p> 

      </div>

      
    </div>
    <div className="cards">

<img src="https://cdn-icons-png.flaticon.com/512/1759/1759366.png" alt="" />

<h2>Matan Asayas</h2>
<div className="contact-icons">
<GitHubIcon className="icon"/>
<FacebookRoundedIcon className="icon"/>
<AlternateEmailRoundedIcon className="icon"/>

</div>


</div>


  {/* <div class="heart-shape"></div> */}

  </div>
  <div className="welcome-bg">
    <img src="Media/vecteezy_activism_volunteering_illustration-2_hk1220.jpg" alt="" />

    <h1 className="iTitle">iVolunteer</h1>


    <button className="siteBtn" onClick={()=>{navigate('/login')}}>Go-Volunteer!</button>
  </div>


	




  </div>
    </>
  );
}
export default Welcome;
