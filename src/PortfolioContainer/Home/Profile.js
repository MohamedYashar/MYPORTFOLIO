import React from 'react'

import Typical from 'react-typical'
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



export default function Profile() {

    
    return (
        <div className='profile-container'>
            
            <div className='profile-parent'>

                <div className='profile-picture'>

                        <Card sx={{ maxWidth: 500 }}>
                            <CardActionArea>
                                <CardMedia

                                component="img"
                                height="350"
                                image="https://media.istockphoto.com/id/1444780357/vector/marketing-employee-sending-marketing-mail-from-home.jpg?s=1024x1024&w=is&k=20&c=XccEnwjpDL3joDBl2jI4PAnrbNIStMXoVyg2fS2P8TE="
                                alt="profilephoto"
                                />
                            </CardActionArea>
                            </Card>
                            
                        

                </div>
                
                <div className='profile-details'>
                    
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted text'> Yashar</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <p>I'm a {" "}
                            <Typical
                            loop={1}
                            wrapper='b'
                            steps={
                                ['Web Developer💻',1000,
                               "React Developer 🌐",1000,
                               "MERN Stack Dev 😎", 1000,
                            ]
                            }
                            />  
                            </p>
                            <span className='profile-role-tag-line'>
                            Crafting Digital Experiences with MERN Magic: Journey of a Curious MERN Stack Learner
                            </span>
                        </span>
                    </div>
                    <div className='profile-options' >
                    
                                               {/* Resume Link */}
                        <a  href='#' target="_blank" rel="noopener noreferrer"
                        download= " Mohamed_Yashar_cv"  > 
                        <Button  size="large"  aria-label="Get Resume" variant="contained">  <InsertDriveFileIcon />   Get Resume</Button>
                        
                        </a>
                        <a  href='https://www.linkedin.com/in/mohamed-yashar-2a6350125/' target="_blank" rel="noopener noreferrer" > 
                        <Button  size="large"  aria-label="Home" variant="contained" >  <LinkedInIcon />  LinkedIn</Button>
                        </a>
                    </div>
                   
                    
                </div>

                
            </div>

        </div>
    )
}


