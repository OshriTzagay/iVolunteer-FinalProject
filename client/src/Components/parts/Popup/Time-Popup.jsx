import React from 'react';
import "./Popup-Style.css";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

function TimerPopup(props) {

    const navigate = useNavigate();

    return (props.trigger) ? (
        <div className='Popup'>
            <div className="PopupTimer-inner">
                 <CloseIcon className='TimerClose-btn' onClick={() => props.setTrigger(false)}/> 
                 <img src="Media/Donate.jpg" alt="" className="PopupTimer-inner"/>
                 <Button variant="contained" size="large" onClick={()=> navigate('/donates')}> Click To Donate </Button>
            </div>
           
        </div>
    ) : "";
}

export default TimerPopup;