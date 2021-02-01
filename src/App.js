import React, { Component } from 'react';
import './Components/Layout/css/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
/*COMPONENTS*/
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skills from "./Components/Skills/Skills";
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from "react-scroll";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nightTheme: false,
      className: '',
      portfolioElement: false,
      experienceElement: false,
      skillsElement: false,
      contactElement: false,

    }

    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handlePortfolioElement = this.handlePortfolioElement.bind(this);
    this.handleExperienceElement = this.handleExperienceElement.bind(this);
    this.handleSkillsElement = this.handleSkillsElement.bind(this);
    this.handleContactElement = this.handleContactElement.bind(this);

  }

  handlePortfolioElement = () => {
    console.log('portfolio Element');
    this.setState({
      portfolioElement: true,
      experienceElement: false,
      skillsElement: false,
      contactElement: false,
    });
  }

  handleSkillsElement = () => {
    this.setState({
      portfolioElement: false,
      experienceElement: false,
      skillsElement: true,
      contactElement: false,
    });
  }

  handleExperienceElement = () => {
    this.setState({
      portfolioElement: false,
      experienceElement: true,
      skillsElement: false,
      contactElement: false,
    });
  }

  handleContactElement = () => {
    this.setState({
      portfolioElement: false,
      experienceElement: false,
      skillsElement: false,
      contactElement: true,
    });
  }


  componentDidMount() {
    const nighTheme = localStorage.getItem('nightTheme');
    console.log('local storage' + localStorage.getItem('nightTheme'));
    if (nighTheme === 'true') {
      this.setState({
        nightTheme: true,
        className: 'Nighttheme'
      });
    }
    else {
      this.setState({
        nightTheme: false,
        className: ''
      });
    }
  }

  handleChangeTheme() {
    console.log('change theme');
    this.setState({
      nightTheme: !this.state.nightTheme,
      className: !this.state.nightTheme ? 'Nighttheme' : '',
    });

    localStorage.setItem('nightTheme', !this.state.nightTheme);
  }

  render() {
    const { className } = this.state;
    return (
      <Router>
        <CssBaseline />
        <div className="App" className={`App${className}`}>
          <Header onChangeTheme={this.handleChangeTheme}  {...this.state} />

          <Element id='portfolio' >
            <Typography variant="h4" component="h3" className="SecctionTag">
              {"Portfolio"}
            </Typography>
            <Divider component="hr" variant="fullWidth" className="DividerHr" />
            <Grid container justify="center" spacing={0}>
              <Portfolio {...this.state} />
            </Grid>
          </Element>
          <Element id='experience'>
            <Typography variant="h4" component="h3" className="SecctionTag">
              {"Experience"}
            </Typography>
            <Divider component="hr" variant="fullWidth" className="DividerHr" />
            <Grid container justify="center" spacing={0}>
              <Experience {...this.state} />
            </Grid>
          </Element>

          <Element id='skills'>
            <Typography variant="h4" component="h3" className="SecctionTag">
              {"Skills"}
            </Typography>
            <Divider component="hr" variant="fullWidth" className="DividerHr" />

            <Grid container justify="center" spacing={0} style={{ padding: "5vh", paddingTop: '0vh' }}>
              <Skills />
            </Grid>
          </Element>


          <Element id='contact'  >
            <Typography variant="h4" component="h3" className="SecctionTag">
              {"Contact"}
            </Typography>
            <Divider component="hr" variant="fullWidth" className="DividerHr" />

            <Grid container justify="center" spacing={0} style={{ padding: "5vh", paddingTop: '8vh' }}>
              <Contact />
            </Grid>
          </Element>

          <Element id='footer'>
            <Footer nightTheme={this.state.nightTheme} />
          </Element>
        </div>
      </Router>
    );

  }
}

export default App;
