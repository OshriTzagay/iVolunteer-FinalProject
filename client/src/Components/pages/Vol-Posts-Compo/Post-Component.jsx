import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./VolPost-style.css"

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TranslateIcon from '@mui/icons-material/Translate';
import BuildIcon from '@mui/icons-material/Build';
import AlarmIcon from '@mui/icons-material/Alarm';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const PostCard = ({item})=>{
    return(<section className='card'>
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
        <p>{item.Description}</p>
        <p> <EmailOutlinedIcon /> {item.Email} </p>
        <p> <LocationOnIcon/> {item.City} </p>
        <p> <TranslateIcon/> {item.Language} </p>
        <p><BuildIcon/> {item.Skills} </p>
        <p>{item.Age} </p>
        <p><AlarmIcon/> {item.StartHour}:00 </p>
        <p><AlarmOffIcon/> {item.FinishHour}:00 </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> <LocalPhoneIcon/> {item.Phone}</Button>
        <Button size="small">Learn More</Button> 
      </CardActions>
    </Card>
    </section>)
}
export default PostCard;