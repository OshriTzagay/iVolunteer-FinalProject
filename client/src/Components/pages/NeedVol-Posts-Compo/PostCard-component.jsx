import React, { useState, useEffect } from 'react';
import "../Vol-Posts-Compo/VolPost-style.css"
import Popup from '../../parts/Popup/popup.jsx';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TranslateIcon from '@mui/icons-material/Translate';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const PostCard = ({ item }) => {
    const [btnPopup, setBtnPopup] = useState(false)
    return (<section className='card'>
        <Card sx={{ maxWidth: 450 }}>
            <CardMedia
                component="img"
                alt="Pic of need vol"
                height="380"
                image="https://media.istockphoto.com/photos/young-13-year-old-boy-standing-in-front-of-white-wall-picture-id1169056343?k=20&m=1169056343&s=170667a&w=0&h=ohVg67cNTmcPCuqfvzHQU3MLD_hM_872BHgg6Icg5fo="
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.FirstName} {item.LastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p>{item.Description}</p>
                    <Button size="small" onClick={() => setBtnPopup(true)}>See More Details</Button>
                </Typography>
            </CardContent>
        </Card>
        <Popup trigger={btnPopup} setTrigger={setBtnPopup} item={item} />
    </section>)
}
export default PostCard;