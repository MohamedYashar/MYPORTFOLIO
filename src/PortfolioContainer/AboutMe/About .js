import React from 'react'
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function About () {
  return (
    <div className='About-parent' >

      

    <div className='About-text-parent'>
        
       <div class="card">
      <p class="card-title">About</p>
      <p class="small-desc">
      Welcome to my portfolio, a glimpse into my journey as a MERN Stack Web Developer and  you can explore more about my skills that  echoes the spirit of continuous improvement in the dynamic world of web development.
      </p>
      <p class="small-desc">
      Full stack Developer Based on Tamil Nadu, India.
      </p>
      <p class="small-desc">
      Bachelor in Aeronautical Engineering, I'm always eager to explore how Web Development can create unforgettable experiences. My passion lies in finding new and exciting ways to make a lasting impact through digital innovation.
      </p>
      
      
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>
      
    </div>
    <div className='About-image-parent'>

      <Card sx={{ maxWidth: 600 }}>
                            <CardActionArea>
                                <CardMedia                               
                                component="img"
                                height="400"
                                image="https://media.istockphoto.com/id/1488543191/vector/a-student-attends-a-lecture-on-quantum-mechanics.jpg?s=1024x1024&w=is&k=20&c=HDl-AYn-CAHHSEGF0LBzIb4YucKzVn8K8uq4dDNSO2U="
                                alt="profilephoto"
                                />                            
                            </CardActionArea>
                            </Card>
        
  
    </div>
    </div>
  )
}
