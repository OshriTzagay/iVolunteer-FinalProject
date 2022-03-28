import React, { useState, useEffect } from 'react';
import TimerPopup from "../../parts/Popup/Time-Popup";
import { DataSlider } from '../../parts/Slider/DataSlider';
import { ImagesSlider } from '../../parts/Slider/ImagesSlider';
import Welcome from '../Welcome-Comp/Welcome';
import './Home.css';

export const Home = () => {
  const [timePopup, setTimePopup] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true)
    }, 1000)
  }, []);
  {
    if (!localStorage.token) {
      return <Welcome />;
    }
  }
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
    <ImagesSlider slider={DataSlider} />


    <div className='headline'>
      <span className='span'></span>
      <h1> Success Story </h1>
      <span className='span'></span>
    </div>

    <div className='Cards'>
      <div className='container'>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouB.png" alt="Thank You" />
          <p>I would like to express my gratitude to Daniel Dahan, who donated food baskets for Passover for the needy. He also provided a regional distribution.</p>
        </section>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouW2.png" alt="Thank You" />
          <p>We would like to express our appreciation to Lisa Megan and her staff for assisting with agricultural work and tree planting in the Carmel Forest.</p>
        </section>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouB3.png" alt="Thank You" />
          <p>We would like to express our appreciation to The lovely Anat gave a two-hour lecture on finance and managed to pass on her vast knowledge to tech career students.</p>
        </section>
      </div>
      <div className='container'>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouW.png" alt="Thank You" />
          <p>Thanks to Adar Avraham and Eyal Levy who donated a buffet, a coffee table, a kitchen stand, and a wall mirror for a young woman who was at risk. You helped her a lot! Thank you very much!</p>
        </section>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouB2.png" alt="Thank You" />
          <p>Many thanks to the Astrenzka workers and their children, who volunteered to help establish seating areas and upgrade the yard at the Beit Tef boarding school in honor of Hanukkah. Lovely!</p>
        </section>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouW3.png" alt="Thank You" />
          <p>There are no words to thank Omri for the above and beyond he did in recruiting computers, you brought him to Gedera and installed it together with his friend, you took care of all the requests in Gedera and we are thrilled by your work. Thanks!</p>
        </section>
      </div>
    </div>
    <TimerPopup trigger={timePopup} setTrigger={setTimePopup}/>
  </>);
};
