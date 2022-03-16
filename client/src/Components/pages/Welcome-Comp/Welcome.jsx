import React from "react";
import "./Style-Welcome.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';


function Welcome() {
    
        function Myname() {
            console.log("lior");
        }
    
    return (<>
        <div className="welcome">
            <h1 > Welcome To iVolunteer </h1>
            <p> How we are: <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid soluta quis, reprehenderit perferendis labore optio eaque illo mollitia commodi quo omnis totam minus odio a aliquam sed nam at officia. </p>
        </div>

        <div className="continer">
            <section className="how">
                <h1 > Lior Yosef </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum repellat modi</p>
                <div className="icon">
                    <a href="https://github.com/Lior-Yosef" target="_blank"><i class="fa fa-github fa-3x"></i> </a>
                    <a href="https://www.linkedin.com/in/lior-yosef-6314b0225/" target="_blank"><i class="fa fa-linkedin fa-3x"></i> </a>
                </div>
            </section>
            <section className="how">
                <h1 > Matan Ysayas </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum repellat modi</p>
                <div className="icon">
                    <a href="https://github.com/matan-ysayas" target="_blank"><i class="fa fa-github fa-3x"></i></a>
                    <a href="https://www.linkedin.com/in/matan-ysayas-94b105226/" target="_blank"><i class="fa fa-linkedin fa-3x"></i> </a>
                </div>
            </section>
            <section className="how">
                <h1 > Oshri-el Tzagay </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum repellat modi</p>
                <div className="icon">
                    <a href="https://github.com/OshriTzagay" target="_blank"><i class="fa fa-github fa-3x"></i> </a>
                    <a href="https://www.linkedin.com/in/oshri-el-tzagay-873482226/" target="_blank"><i class="fa fa-linkedin fa-3x"></i> </a>
                </div>
            </section>
        </div>

        <div className="continerUser">
            <div className="login">
                <h1>Login to Your Account</h1>
                <TextField label="Email" type="email" /> <br/>
                <TextField label="Password" type="password" autoComplete="current-password"/>
                <br/>
                <Fab variant="extended" color="success" aria-label="add"> Log In </Fab>
            </div>
           
            <section className="Register">
                <div className="newUser">
                    <h1>New Here?</h1>
                    <p>Sing up and discover the iVolunteer world</p>
                    <Fab variant="extended" color="primary" aria-label="add"> Register </Fab>
                </div>

            </section>
        </div>
    </>
    )
}
export default Welcome;