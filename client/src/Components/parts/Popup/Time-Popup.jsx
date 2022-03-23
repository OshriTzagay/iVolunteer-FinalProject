import React from 'react';
import "./Popup-Style.css";
import CloseIcon from '@mui/icons-material/Close';
function TimerPopup(props) {
    return (props.trigger) ? (
        <div className='Popup'>
            <div className="Popup-inner">
                <h1> Timer Popup</h1>
                 <CloseIcon className='close-btn' onClick={() => props.setTrigger(false)}/> 
                {/* {props.children} */}
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium optio perspiciatis vero, temporibus quibusdam officia repudiandae fuga in sint cupiditate odio aspernatur et commodi perferendis iure rem. Quidem, reprehenderit ut.
                Dolore fugit laudantium aperiam numquam possimus odio fuga libero, alias itaque esse aliquid ex molestiae tempora eum amet quibusdam quas voluptate qui vitae voluptatibus incidunt assumenda cumque, sint exercitationem! Expedita.
                Explicabo dolorum ipsum similique fugit dignissimos dolores esse consectetur illum quia dolore nulla maiores iusto nihil, omnis alias sint consequatur architecto eum nam nobis sit vel odio. Harum, ex ullam?
                Facilis eveniet vel sit, ab ea, debitis, commodi asperiores quas magni quae ipsam. Rerum cupiditate soluta minima fugit. Ab libero quisquam beatae. Deserunt earum officiis aut odio eius sapiente voluptatibus?
                Velit pariatur consectetur explicabo minus? Vel 
                Facilis fugiat velit pariatur nemo beatae asperiores animi officiis placeat perferendis id? Omnis similique dignissimos corrupti inventore nisi quae eveniet porro eaque dolorem! Neque quas ducimus minus, recusandae corrupti odio.</p>
            </div>
        </div>
    ) : "";
}

export default TimerPopup;