import './App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
/*COMPONENTS*/
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skills from "./Components/Skills/Skills";
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';



function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <section id='portfolio'>

          <Typography variant="h4" component="h3" style={{ marginTop: "5vh" }}>
            {"Portfolio"}
          </Typography>
          <Divider component="hr" variant="fullWidth" style={{ marginTop: "2vh", marginBottom: "3vh" }} />
          <Grid container justify="center" spacing={0}>
            <Portfolio />
          </Grid>
        </section>
        <section id='experience'>

          <Typography variant="h4" component="h3" style={{ marginTop: 80 }}>
            {"Experience"}
          </Typography>
          <Divider component="hr" variant="fullWidth" style={{ marginTop: "2vh", marginBottom: "3vh" }} />
          <Grid container justify="center" spacing={0}>
            <Experience />
          </Grid>
        </section>
        <section id='skills'>
          <Typography variant="h4" component="h3" style={{ marginTop: 80 }}>
            {"Skills"}
          </Typography>
          <Divider component="hr" variant="fullWidth" style={{ marginTop: "2vh", marginBottom: "3vh" }} />
          <Grid container justify="center" spacing={0}>
            <Skills />
          </Grid>
        </section>
        <div onFocus={()=>alert('focus')} onScrollCapture={()=>console.log('scroll')} >
        <section id='contact'>
          <Typography variant="h4" component="h3" style={{ marginTop: 90 }}>
            {"Contact"}
          </Typography>
          <Divider component="hr" variant="fullWidth" style={{ marginTop: "2vh", marginBottom: "3vh" }} />
          <Grid container justify="center" spacing={0} style={{ padding: "5vh" }}>
            <Contact />

          </Grid>
        </section>
        </div>
        
        <section id='footer'>
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
