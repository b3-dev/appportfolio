import './App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
/*Components*/
import Header from "./Components/Layout/Header";
import Portfolio from "./Components/Portfolio/Portfolio";


function App() {
  return (
    <div className="App">
      <Header />
      <section id='portfolio'>

        <Typography variant="h4" component="h3" style={{ marginTop: "12vh" }}>
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

          <Avatar alt="Remy Sharp" src="./images/experience/benedettis/benedettis.png" style={{ backgroundColor: "#000", width: 250, height: 250 }} />
          <Avatar alt="Remy Sharp" src="./images/experience/crossfitness/crossfitness.png" style={{ backgroundColor: "#000", width: 250, height: 250 }} />
          <Avatar alt="Remy Sharp" src="./images/experience/jumpingtime/jumpingtime.jpg" style={{ backgroundColor: "#000", width: 250, height: 250 }} />
          <Avatar alt="Remy Sharp" src="./images/experience/legarza/legarza.png" style={{ backgroundColor: "#000", width: 250, height: 250 }} />


        </Grid>
      </section>
      <section id='skills'>
        <Typography variant="h4" component="h3" style={{ marginTop: 80 }}>
          {"Skills"}
        </Typography>
        <Divider component="hr" variant="fullWidth" style={{ marginTop: "2vh", marginBottom: "3vh" }} />
        <Grid container justify="center" spacing={0}>
          Habilidades
      </Grid>
      </section>
      <section id='contact'>

        <Typography variant="h4" component="h3" style={{ marginTop: 80 }}>
          {"Contact"}
        </Typography>
        <Divider component="hr" variant="fullWidth" style={{ marginTop: "2vh", marginBottom: "3vh" }} />
        <Grid container justify="center" spacing={0}>
          Contacto
      </Grid>
      </section>


    </div>
  );
}

export default App;
