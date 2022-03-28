import { useState } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import './Footer-style.css';

export const Footer = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div className={`the-footer ${toggle?"active-footer":""}`}>
      <button className="footer-btn" onClick={()=>setToggle(!toggle)}>
      <ArrowCircleUpIcon className="footer-btn-icon"/>

      </button>
    <div className="footer-basic">
        <footer>
            <div className="social"><a href="#"><i className="bi bi-instagram"></i></a><a href="#"><i className="bi bi-linkedin"></i></a><a href="#"><i className="bi bi-twitter"></i></a><a href="#"><i className="bi bi-facebook"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">i Volunteer © 2022</p>
        </footer>
    </div>
    </div>
  );
};
