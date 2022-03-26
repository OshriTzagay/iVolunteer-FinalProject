import { useState } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import './Footer-style.css';

export const Footer = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div className={`the-footer ${toggle?"active-footer":""}`}>
      {/* <button >Click</button> */}
      <ArrowCircleUpIcon className="footer-btn" onClick={()=>setToggle(!toggle)}/>
    <div class="footer-basic">
        <footer>
            <div class="social"><a href="#"><i class="bi bi-instagram"></i></a><a href="#"><i class="bi bi-linkedin"></i></a><a href="#"><i class="bi bi-twitter"></i></a><a href="#"><i class="bi bi-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">i Volunteer © 2022</p>
        </footer>
    </div>
    </div>
  );
};
