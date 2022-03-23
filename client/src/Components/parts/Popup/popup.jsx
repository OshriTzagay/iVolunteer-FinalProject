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
                <h4>Contact me:</h4>
                <p>Email: {props.item.Email}</p>
                <p>City: {props.item.City}</p>
                <p>Language: {props.item.Language}</p>
                <a href="tel:+{props.item.Phone}">Call me here</a>
            </div>
        </div>
    ) : "";
}

export default Popup;