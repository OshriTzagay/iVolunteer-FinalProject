import { Link } from "react-router-dom";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PostAddIcon from '@mui/icons-material/PostAdd';

export const SideBar = () => {
  return (
    <div className="the-sidebar">
      <Link className="sb-links" to="/home">
        <HomeRoundedIcon style={{fontSize:'3rem'}} ></HomeRoundedIcon>
      </Link>
      <Link className="sb-links" to="/needvolPost"> To Assist </Link>
      <Link className="sb-links" to="/volposts"> <VolunteerActivismRoundedIcon  style={{fontSize:'3rem'}}/> </Link>
      <Link className="sb-links" to="/volPost"> Assistance </Link>
      <Link className="sb-links" to="/needvol"> <VolunteerActivismRoundedIcon  style={{fontSize:'3rem'}}/> </Link>
      <Link className="sb-links" to="/donates"> Donate </Link>
    </div>
  );
};
