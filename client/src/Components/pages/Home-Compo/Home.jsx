import React, { useState, useEffect } from 'react';
import TimerPopup from "../../parts/Popup/Time-Popup";
import { DataSlider } from '../../parts/Slider/DataSlider';
import { ImagesSlider } from '../../parts/Slider/ImagesSlider';
import Welcome from '../Welcome-Comp/Welcome';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Home = () => {
  const navigate = useNavigate()
  const [timePopup, setTimePopup] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true)
    }, 10000)
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
        <p> <span>Our Background</span> Connects people who want to volunteer with associations and organizations that need volunteers, using a unique search engine that allows you to find personalized volunteering.
        On our website you can choose a volunteer that interests you according to your location in the country, and according to an area that interests you.

        </p>
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
    <ImagesSlider className="slider"slider={DataSlider} />


    <div className='headline'>
      <span className='span'></span>
      <h1> Success Story </h1>
      <span className='span'></span>
    </div>

    <div className='Cards'>
      <div className='container'>
        <section className='ThanksCards'>
          <img src="https://aicf.org.il/wp-content/uploads//2017/09/GuyNativ_Profile-1-400x400.jpg" alt="Thank You" />
          <p>I would like to express my gratitude to Daniel Dahan, who donated food baskets for Passover for the needy. He also provided a regional distribution.</p>
        </section>
        <section className='ThanksCards'>
          <img src="https://www.humanityinaction.org/wp-content/uploads/2019/03/Mariana1061-400x400.jpg" alt="Thank You" />
          <p>We would like to express our appreciation to Lisa Megan and her staff for assisting with agricultural work and tree planting in the Carmel Forest.</p>
        </section>
        <section className='ThanksCards'>
          <img src="https://blog.capterra.com/wp-content/uploads/2017/05/n448yjwzpdinezpyrn79_400x400.jpeg" alt="Thank You" />
          <p>We would like to express our appreciation to The lovely Anat gave a two-hour lecture on finance and managed to pass on her vast knowledge to tech career students.</p>
        </section>
      </div>
      <div className='container'>
        <section className='ThanksCards'>
          <img src="https://www.bmcsoftware.de/content/dam/bmc/corporate/Andrew-Jason_094square2-400x400.jpg" alt="Thank You" />
          <p>Thanks to Adar Avraham and Eyal Levy who donated a buffet, a coffee table, a kitchen stand, and a wall mirror for a young woman who was at risk. You helped her a lot! Thank you very much!</p>
        </section>
        <section className='ThanksCards'>
          <img src="Media/LogoThankYouB2.png" alt="Thank You" />
          <p>Many thanks to the Astrenzka workers and their children, who volunteered to help establish seating areas and upgrade the yard at the Beit Tef boarding school in honor of Hanukkah. Lovely!</p>
        </section>
        <section className='ThanksCards'>
          <img src="https://www.writer.org/x/lc-content/uploads/2019/07/Zach-Powers-Author-Photo-500-lores-400x400.jpg" alt="Thank You" />
          <p>There are no words to thank Omri for the above and beyond he did in recruiting computers, you brought him to Gedera and installed it together with his friend, you took care of all the requests in Gedera and we are thrilled by your work. Thanks!</p>
        </section>
      </div>
    </div>
    <div className='bottom_page'>
      <div className='Pic_box'>
        <img src="Media/iVolunteer_laptop.png" alt="laptop" className='laptopPic'/>
        <section className='Pic_Section'>
          <h1>Doing good</h1>
          <h1> has never been easier</h1>
          <h4>Volunteer as a team:</h4>
          <p>Connect to your mission by embracing social responsibility.</p>
          <Button  variant="contained" onClick={()=>navigate('/addVolPost')} color="success">Click to Volunteer</Button>
        </section>
      </div>
      <div className='Pic_box'>
        <section className='Pic_Section'>
          <h1>The change is in your</h1>
          <h1>hands</h1>
          <p>Contribute to the missions you love. Make a difference</p>
          <p>with your team or on your own, remotely or on-site.</p>
          <a href="https://form.jotform.com/220872919622461" target="blank"><Button  variant="contained" color="success">Click to DONATE</Button></a> 
        </section>
        <img src="Media/iVolunteer_IPhone.png" alt="IPhone" className='IPhonePic'/>
      </div>
    </div>
    <TimerPopup trigger={timePopup} setTrigger={setTimePopup}/>
  </>);
};
