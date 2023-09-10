import React from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Contact() {


  return (
    <div className='contact-container'>
        <div className='final-contact-poster'>

        <Card sx={{ maxWidth: 600 }}>
                            <CardActionArea>
                                <CardMedia
                               
                                component="img"
                                height="400"
                                image="https://media.istockphoto.com/id/1466440320/vector/chatbot-on-huge-phone-giving-letter-to-happy-man.jpg?s=1024x1024&w=is&k=20&c=SfKJnrpB2K_c2T0Sn1tNHzw1Aa-lY7RdF1cammnbKW8="
                                alt="pictures"
                                />                    
                            </CardActionArea>
                            </Card>
            
      
        </div>
        <div>


        <div class="card">
      <p class="card-title">Let's connect and work together </p>
      <p class="small-desc">
      <PhoneAndroidIcon />: +91-8778900571
      </p>
      <p class="small-desc">
      <AddLocationIcon/>: Erode, India
      </p>
      <p class="small-desc">
      <MailOutlineIcon/>: yashar93official@gmail.com
      </p>
      <p > <img className='gitHub-img' src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="github"/> : <a class="small-desc" href='https://github.com/MohamedYashar' target='_blank' rel="noreferrer">GitHub </a></p>
      
      
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>

        {/* <div className='contact-details'>
            <p>   <PhoneAndroidIcon />: +91-8778900571</p>
            <p>  <AddLocationIcon/>: Erode, India</p>
            <p>  <MailOutlineIcon/>: yashar93official@gmail.com</p>
            <p> <img className='gitHub-img' src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="github"/> : <a href='https://github.com/MohamedYashar' target='_blank' rel="noreferrer">GitHub </a></p>
            
        </div> */}

        </div>
      
      
    </div>
  )
}
// https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png