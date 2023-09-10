import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
import About from './PortfolioContainer/AboutMe/About ';
import Skills from './PortfolioContainer/Skills/Skills';
import Contact from './PortfolioContainer/ContactMe/Contact';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper';

function App() {

  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const paperStyles = {borderRadius:0, minHeight: "100vh"}

  return (


    // context  Providing

    <ThemeProvider theme={Theme}>

    <Paper  elevation={4 }  style={paperStyles} >

    <div className="App">
     

      <AppBar position="static">
        <Toolbar>
        <h1> Mohamed Yashar </h1>
          <Button style={{ marginLeft: "auto" }} onClick={() => history.push("/")} size="large" color="inherit" aria-label="Home" > 
          <HomeIcon />   </Button>
          {/* <Button onClick={() => history.push("/profile")} size="large" color="inherit" aria-label="Profile" > Profile </Button > */}
          <Button onClick={() => history.push("/About")} size="large" color="inherit" aria-label="About" > <MenuBookIcon />  </Button>
          <Button onClick={() => history.push("/Skils")} size="large" color="inherit" aria-label="Skils" > <LocalLibraryIcon /> </Button>
          <Button onClick={() => history.push("/contact")} size="large" color="inherit" aria-label="contact" > <ContactsIcon /></Button>
          
          <Button 
          onClick= {()=> {setMode (mode=== "dark"?"light":"dark" ) }} size="large" color="inherit" aria-label="Home" 
          startIcon={ mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}></Button>

        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Profile />
          <About />
          <Skills />
          <Contact />
        </Route>
        {/* <Route exact path="/profile" >
          <Profile />
          <h1>Hello</h1>
        </Route> */}

        <Route path="/About" >
          <About />
        </Route>
        <Route path="/Skils" >
          <Skills />
        </Route>

        <Route path="/contact" >
          <Contact />
        </Route>
      </Switch>

      {/* <Profile />
      <About />
      <Skills />
      <Contact /> */}

    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
