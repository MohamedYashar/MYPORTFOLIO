import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Skills() {

    const pictures = [
        {
            name: "HTML",
            picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYZQGijs7beOCmR6VSn2X-cY2IkMUUqAheedWMhdpAw&s"
        },
        {
            name: "CSS",
            picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png"
        },
        {
            name: "JavaScript",
            picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQEO-lCffJlch5n9TVZ34BYYoDNFQ9LUkqf1V9V64lA&s"
        },
        {
            name: "React.js",
            picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVm8bfeIkMuMduGdsb96a0X8Aq4MTfwRQTbi5K0PqOlg&s"
        },
        {
            name: "Node.js",
            picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1BsdkcUG2xRnSC_OngNEuKSk7ZzVmOJlBM7EhzoUKg&s"
        },
        {
            name: "Express.js",
            picture:"https://www.w3jar.com/wp-content/uploads/2019/05/express-js-tutorial.png"
        },
        {
            name: "MongoDB",
            picture:"https://static.javatpoint.com/mongodb/images/mongodb-tutorial.jpg"
        },
        
        {
            name: "GitHub",
            picture:"https://repository-images.githubusercontent.com/326435405/9affba00-777d-11eb-9c52-806cbc107892"
        },
        {
            name: "VSCode",
            picture:"https://miro.medium.com/v2/resize:fit:1400/1*DIWgQmUKDW_TsDbLWYUtDg.png"
        },
        
    ]
  

  return (
    <div className='Skills-parent'>
        <h1> Skills</h1>
        <div className='final-skill-poster'>
            {pictures.map (({name,picture}) => < Storage name = {name} picture ={picture}/>)}

        </div>
          
    </div>
  )
}



function Storage ({name, picture})
{
    return(
        <div className='picurestore'>
            <div className='picurestore-container'>
            <Card sx={{ maxWidth: 150 }}>
                            <CardActionArea>
                                <CardMedia
                               
                                component="img"
                                height="120"
                                image= {picture}
                                alt="pictures"
                                />
                                <CardContent className='picurestore-text'>
                                    {name}
                                </CardContent>
                            </CardActionArea>
                            </Card>
            {/* <img className='main-skills-photos' alt='pictures' src={picture}/> */}
            {/* <p> {name}</p> */}
            </div>

        </div>
    )
}