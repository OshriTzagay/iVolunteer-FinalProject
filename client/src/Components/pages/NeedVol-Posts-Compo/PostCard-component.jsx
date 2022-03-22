import React, {useState,useEffect} from 'react';
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
    const [btnPopup,setBtnPopup] = useState(false)
    return (<section>
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                component="img"
                alt="Pic of need vol"
                height="380"
                image="https://starktimes.com/wp-content/webp-express/webp-images/uploads/2020/12/Neta-Alchimister-Biography.jpg.webp"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.FirstName} {item.LastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {/* <p>{item.Description}</p> */}
                    {/* <p> <EmailOutlinedIcon /> {item.Email} </p> */}
                    {/* <p> <LocationOnIcon /> {item.City} </p> */}
                    {/* <p> <TranslateIcon /> {item.Language} </p> */}
                    {/* <p>{item.Age} </p> */}
                </Typography>
            </CardContent>
            <CardActions>
                <a href="tel:+{item.Phone}"><Button size="small"> <LocalPhoneIcon /> {item.Phone}</Button></a>
                <Button size="small" onClick={()=>setBtnPopup(true)}>See More Details</Button>
            </CardActions>
        </Card>
        <Popup trigger={btnPopup} setTrigger={setBtnPopup} item={item}/>
    </section>)
}
export default PostCard;