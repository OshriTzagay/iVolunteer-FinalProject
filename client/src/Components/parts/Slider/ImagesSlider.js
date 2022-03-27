import React, { useState } from 'react';
import { DataSlider } from './DataSlider';
import './Style.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export const ImagesSlider = ({ slider }) => {
  const [current, setCurrent] = useState(0);
  const length = slider.length
  const nextSlider = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlider = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);

  }
  if (!Array.isArray(slider) || slider.length <= 0) {
    return null;
  }
  return (
    <section className='Slider'>
      <ArrowCircleRightIcon className='right' onClick={nextSlider} />
      <ArrowCircleLeftIcon className='left' onClick={prevSlider} />
      {DataSlider.map((slider, index) => {
        return (
          <div
            className={index === current ? 'slider active' : 'slider'}
            key={index}>
            {index === current && (
              <img src={slider.image} alt="Volunteer image" className='VolunteerImage' />
            )}
          </div>
        )
      })}
    </section>
  )
}
