import { Link } from "react-router-dom";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
export const Header = () => {
  return (
    <div className="the-header">
      
      <div className="div-for-icon">
        <Link className="icon" to="/home">
         <h1>
           Some ICON
         </h1>
        </Link>
   
        
      </div>
      <div className="div-for-others">

            <Link className="links" to="/about">
        About
      </Link>
      <Link className="links" to="/register">
        Register
      </Link>
      
      <Link className="links" to="/login">
        <LoginRoundedIcon style={{ fontSize: "50px" }} />
      </Link>
      </div>
  
    </div>
  );
};
