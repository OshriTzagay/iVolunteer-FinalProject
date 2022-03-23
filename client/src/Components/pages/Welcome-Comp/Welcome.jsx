import React from "react";
import { Router } from "react-router-dom";
import { Login } from "../../parts/Login-Compo/Login";
import "./Style-Welcome.css";
import { useNavigate } from "react-router-dom";


function Welcome() {

    
    const navigate = useNavigate();


    return (<>
    <img className="background" src="Media/vecteezy_activism_volunteering_illustration-2_hk1220.jpg"/>
        <div className="welcome">
            <h1>Welcome To iVolunteer</h1>
            {/* <h1 onClick = {() => navigate('/home')} style ={{cursor: 'pointer'}}> Welcome To iVolunteer </h1> */}
        <button className="navigate-login" onClick={()=> navigate('/login')}>GO Login!</button>
            <p> How we are: <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid soluta quis, reprehenderit perferendis labore optio eaque illo mollitia commodi quo omnis totam minus odio a aliquam sed nam at officia. </p>
        </div>

        <div className="continer">
            <section className="how">
                <h1 > Lior Yosef </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum repellat modi</p>
                <div className="icon">
                    <a href="https://github.com/Lior-Yosef" target="_blank"><i className="fa fa-github fa-3x"></i> </a>
                    <a href="https://www.linkedin.com/in/lior-yosef-6314b0225/" target="_blank"><i className="fa fa-linkedin fa-3x"></i> </a>
                </div>
            </section>
            <section className="how">
                <h1 > Matan Ysayas </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum repellat modi</p>
                <div className="icon">
                    <a href="https://github.com/matan-ysayas" target="_blank"><i className="fa fa-github fa-3x"></i></a>
                    <a href="https://www.linkedin.com/in/matan-ysayas-94b105226/" target="_blank"><i className="fa fa-linkedin fa-3x"></i> </a>
                </div>
            </section>
            <section className="how">
                <h1 > Oshri-el Tzagay </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum repellat modi</p>
                <div className="icon">
                    <a href="https://github.com/OshriTzagay" target="_blank"><i className="fa fa-github fa-3x"></i> </a>
                    <a href="https://www.linkedin.com/in/oshri-el-tzagay-873482226/" target="_blank"><i className="fa fa-linkedin fa-3x"></i> </a>

                </div>
            </section>
        </div>

        
    </>
    )
}
export default Welcome;