import React, { useState, useEffect } from "react";
import "./VolPost-style.css";
import Popup from "../../parts/Popup/popup.jsx";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TranslateIcon from "@mui/icons-material/Translate";
import BuildIcon from "@mui/icons-material/Build";
import AlarmIcon from "@mui/icons-material/Alarm";
import AlarmOffIcon from "@mui/icons-material/AlarmOff";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Welcome from "../Welcome-Comp/Welcome";
const PostCard = ({ item }) => {
  const [btnPopup, setBtnPopup] = useState(false);

  return (
    <section className="card">
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          alt="Pic of need vol"
          height="380"
          image={item.ProfilePic}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.FirstName} {item.LastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h5>Contact me:</h5> <br />
            <EmailOutlinedIcon /> {item.Email} <br />
            <LocationOnIcon /> {item.City} <br />
            <TranslateIcon /> {item.Language} <br />
          </Typography>
          <Button size="small" onClick={() => setBtnPopup(true)}>
            {" "}
            See More Details{" "}
          </Button>
        </CardContent>
      </Card>
      <Popup trigger={btnPopup} setTrigger={setBtnPopup} item={item} />
    </section>
  );
};
export default PostCard;
