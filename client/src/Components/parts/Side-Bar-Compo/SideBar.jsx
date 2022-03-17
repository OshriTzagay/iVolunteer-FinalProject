import { Link } from "react-router-dom";
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";


export const SideBar = ()=>{
    console.log("Before");
    console.log("After");

    return(
        <div className="the-sidebar">
            <Link className="sb-links" to="/home">
                <HomeRoundedIcon style={{fontSize:"4rem"}}></HomeRoundedIcon>
            </Link>
            <Link className="sb-links" to="/volposts">
                <VolunteerActivismRoundedIcon style={{fontSize:"4rem"}}></VolunteerActivismRoundedIcon>
            </Link>
            <Link className="sb-links" to="/needvol"style={{fontSize:"1rem"}}>Land-a-Hand</Link>
            <Link className="sb-links" to="/donate" >Donate</Link>

        </div>
    )
}