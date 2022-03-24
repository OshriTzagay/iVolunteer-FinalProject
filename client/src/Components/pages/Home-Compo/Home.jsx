import React, {useState,useEffect} from 'react';
import TimerPopup from "../../parts/Popup/Time-Popup";
import './Home.css';

export const Home = () => {
  const [timePopup,setTimePopup] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setTimePopup(true)
    },5000)
  },[]);
  return (<> 
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
    
  </>);
};
