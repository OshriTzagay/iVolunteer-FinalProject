import React, { useState, useEffect } from 'react';
import TimerPopup from "../../parts/Popup/Time-Popup";
import { DataSlider } from '../../parts/Slider/DataSlider';
import { ImagesSlider } from '../../parts/Slider/ImagesSlider';
import './Home.css';

export const Home = () => {
  const [timePopup, setTimePopup] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true)
    }, 1000)
  }, []);
  return (<>
    <div className='How-we-are'>
      <h1> Who we are</h1>
      <p>iVolunteer is the leading organization in the field of volunteering in Israel, specializing in matching volunteers between people</p>
      <section className='Explication'>
        <p> <span>Our Background</span>  sit amet consectetur adipisicing elit. Laborum voluptatibus
          facere voluptates enim magnam debitis qui! Totam itaque perferendis animi modi
          exercitationem voluptate enim in, doloribus, pariatur obcaecati deleniti iure.</p>
      </section>
      <section className='Explication'>
        <p> <span>Our Vision </span>  We believe everyone has the power to do good,
          which is why we specialize in connecting individuals to causes and organizations they’re
          passionate about, in order to help them to make a difference in the world.</p>
      </section>
      <section className='Explication'>
        <p> <span>What We Do</span>  At iVolunteer, we connect people who are interested in volunteering in Israel to and people looking for volunteers across the country.
          we offer volunteering opportunities, Placements are according to the volunteer’s preferences
          iVolunteer is the intermediate between you, and  the volunteer. </p>
      </section>
    </div>
  <ImagesSlider slider={DataSlider}/>


    <div className='headline'>
      <span className='span'></span>
      <h1> Success Story </h1>
      <span className='span'></span>
    </div>
    
    <div className='Cards'>
      <div className='container'>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouB.png" alt="Thank You" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum, ipsam dolore iure sapiente harum sed vitae quibusdam soluta, eveniet animi</p>
        </section>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouW2.png" alt="Thank You" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum, ipsam dolore iure sapiente harum sed vitae quibusdam soluta, eveniet animi</p>
        </section>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouB3.png" alt="Thank You" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum, ipsam dolore iure sapiente harum sed vitae quibusdam soluta, eveniet animi</p>
        </section>
      </div>
      <div className='container'>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouW.png" alt="Thank You" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum, ipsam dolore iure sapiente harum sed vitae quibusdam soluta, eveniet animi</p>
        </section>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouB2.png" alt="Thank You" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum, ipsam dolore iure sapiente harum sed vitae quibusdam soluta, eveniet animi</p>
        </section>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouW3.png" alt="Thank You" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum, ipsam dolore iure sapiente harum sed vitae quibusdam soluta, eveniet animi</p>
        </section>
      </div>
    </div>
    <TimerPopup trigger={timePopup} setTrigger={setTimePopup}/>
  </>);
};
