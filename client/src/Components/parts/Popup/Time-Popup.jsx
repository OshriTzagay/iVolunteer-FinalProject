import React from 'react';
import "./Popup-Style.css";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

function TimerPopup(props) {

    return (props.trigger) ? (
        <div className='Popup'>
            <div className="PopupTimer-inner">
                 <CloseIcon className='TimerClose-btn' onClick={() => props.setTrigger(false)}/> 
                 <img src="Media/Donate.jpg" alt="" className="PopupTimer-inner"/>
                 <a href='https://form.jotform.com/220872919622461' target="_blank"><Button variant="contained" size="large" > Click To Donate </Button></a>
            </div>
           
        </div>
    ) : "";
}

export default TimerPopup;