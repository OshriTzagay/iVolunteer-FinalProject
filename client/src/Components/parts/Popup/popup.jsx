import React from 'react';
import "./Popup-Style.css";
import CloseIcon from '@mui/icons-material/Close';
function Popup(props) {
    return (props.trigger) ? (
        <div className='Popup'>
            <div className="Popup-inner">
                <h1> {props.item.FirstName} {props.item.LastName}</h1> <br/>
                 <CloseIcon className='close-btn' onClick={() => props.setTrigger(false)}/> 
                <img src={props.item.ProfilePic} alt="Profile Picture" />
                {props.children}
                <p>{props.item.Description}</p>
                <a href="tel:+{props.item.Phone}">Call me here</a>
            </div>
        </div>
    ) : "";
}

export default Popup;