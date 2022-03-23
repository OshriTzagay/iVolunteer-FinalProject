import React from "react";
import { Router } from "react-router-dom";
import { Login } from "../../parts/Login-Compo/Login";
import "./Style-Welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <img
        className="background"
        src="Media/vecteezy_activism_volunteering_illustration-2_hk1220.jpg"
      />
      <div className="welcome">
        <h1>i Volunteer</h1>
        {/* <h1 onClick = {() => navigate('/home')} style ={{cursor: 'pointer'}}> Welcome To iVolunteer </h1> */}
        <p>
        A platform for connecting volunteers to people who need their help
        </p>
      </div>

      <div className="continer">
        <section className="Developer">
          <h1> Lior Yosef </h1>
          <img src="Media/profile.jpg" />
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum repellat modi</p> */}
          <div className="icon">
            <a href="https://github.com/Lior-Yosef" target="_blank">
              <i className="fa fa-github fa-3x"></i>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/lior-yosef-6314b0225/"
              target="_blank"
            >
              <i className="fa fa-linkedin fa-3x"></i>{" "}
            </a>
          </div>
        </section>
        <section className="Developer">
          <h1> Matan Ysayas </h1>
          <img src="Media/profile.jpg" />
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum repellat modi</p> */}
          <div className="icon">
            <a href="https://github.com/matan-ysayas" target="_blank">
              <i className="fa fa-github fa-3x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/matan-ysayas-94b105226/"
              target="_blank"
            >
              <i className="fa fa-linkedin fa-3x"></i>{" "}
            </a>
          </div>
        </section>
        <section className="Developer">
          <h1> Oshri-el Tzagay </h1>
          <img src="Media/profile.jpg" />
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum repellat modi</p> */}
          <div className="icon">
            <a href="https://github.com/OshriTzagay" target="_blank">
              <i className="fa fa-github fa-3x"></i>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/oshri-el-tzagay-873482226/"
              target="_blank"
            >
              <i className="fa fa-linkedin fa-3x"></i>{" "}
            </a>
          </div>
        </section>
      </div>
      <div>
        <button className="navigate-login" onClick={() => navigate("/login")}>
          GO Login!
        </button>
      </div>
    </>
  );
}
export default Welcome;
