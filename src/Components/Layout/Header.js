import React, { Component } from 'react';
/*CSS */

import './css/Header.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ComputerIcon from '@material-ui/icons/Computer';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import { Link, animateScroll as scroll } from "react-scroll";
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { Switch } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Hidden from '@material-ui/core/Hidden';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }

    this.anchorRef = React.createRef(null);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleListKeyDown = this.handleListKeyDown.bind(this);
    // this.handleChangeTheme = this.handleChangeTheme.bind(this);
  }

  componentDidMount() {
    console.log(`header props ${JSON.stringify(this.props)}`)
  }

  handleToggle() {
    /*arrow*/
    console.log('handle toogle' + !this.state.menuOpen);
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleClose() {
    /*arrow*/
    this.setState({ menuOpen: false });
  }

  handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      this.setState({ menuOpen: false });
    }
  }

  render() {
    //const theme = useTheme();
    const Background = './images/site/background.jpg';
    const Video='./images/site/intro.mp4';
    const toolbarClassName = this.props.nightTheme ? 'AppBarNightTheme' : 'AppBar';
    const menuClassName = this.props.nightTheme ? 'NightTheme' : '';
    const offset=-90;
    const duration=700;
    /*const porfolioClass = this.props.portfolioSection ? `ActiveMdItem${menuClassName}` : '';
    const experienceClass = this.props.experienceSection ? `ActiveMdItem${menuClassName}` : '';
    const skillsClass = this.props.skillsSection ? `ActiveMdItem${menuClassName}` : '';
    const contactClass = this.props.contactSection ? `ActiveMdItem${menuClassName}` : '';*/

    return (
      <header >
       

        <Grid style={{ flexGrow: 1 }} >
          <AppBar position="fixed"  >
            <Toolbar className={toolbarClassName}  >
              <IconButton color="inherit" aria-label="Menu" style={{ color: '#61dafb' }}>
                <ComputerIcon />
              </IconButton>
              <Hidden mdDown >
                <Typography variant="h6" color="inherit" style={{ color: '#61dafb' }} >
                  Eduardo Pérez Acuña 
                </Typography  >
              </Hidden>
              <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              </Typography  >
              <Hidden lgUp >
                <IconButton color="inherit" aria-label="Menu" style={{ color: '#61dafb' }} onClick={() => this.handleToggle()}>
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden mdDown >
                <Breadcrumbs aria-label="breadcrumb" style={{ color: '#61dafb' }}  >
                  <Link
                    to="portfolio"
                    activeClass={`MenuItem ActiveMdItem${menuClassName}`}
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={duration} 
                    className="MenuItem" 
                    >
                    
                    <Typography component="h7" variant="h7" >
                      Portfolio
                    </Typography>


                  </Link>
                  <Link
                    to="experience"
                    activeClass={`MenuItem ActiveMdItem${menuClassName}`}
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={duration}
                    className="MenuItem"
                    
                    >
                    <Typography component="h7" variant="h7" >
                      Experience
                    </Typography>
                  </Link>
                  <Link
                    to="skills"
                    activeClass={`MenuItem ActiveMdItem${menuClassName}`}
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={duration}
                    className="MenuItem" 
                    >
                    <Typography component="h7" variant="h7" >
                      Skills
                    </Typography>
                  </Link>
                  <Link
                    to="contact"
                    activeClass={`MenuItem ActiveMdItem${menuClassName}`}
                    spy={true}
                    hashSpy={true}
                    isDynamic={true}
                    smooth={true}
                    offset={0}
                    duration={duration}
                    className="MenuItem"
                    
                    >
                    <Typography component="h7" variant="h7" >
                      Contact
                    </Typography>
                  </Link>
                </Breadcrumbs>
              </Hidden>

              {this.props.nightTheme ? <Brightness2Icon style={{ marginLeft: '4vh', color: '#fff' }} /> : <Brightness7Icon style={{ marginLeft: '4vh', color: '#fdd835' }} />}
              <Switch
                checked={this.props.nightTheme}
                onChange={this.props.onChangeTheme}
                name="NightTheme"
                color={'default'}
                inputProps={{ 'aria-label': 'secondary theme' }}
              />
            </Toolbar>
          </AppBar>
          <Grid container alignItems="center" style={{   width:'100%',height: '50vh'}} justify="center">
            <video loop autoPlay muted style={{ width:'100%'}}>
              <source src={Video}  type="video/mp4" />
            </video>
          </Grid>

          <Grid container alignItems="center" style={{ backgroundImage: `url(${Background})`, height: '50vh', }} justify="center">
            <Typography variant="h4" component="p" style={{ color: '#FFF', backgroundColor: '#000', opacity: '.2', padding: '5vh', paddingLeft: '9vh', paddingRight: '9vh', borderRadius: '70px' }} >
              <strong>{'<FullStack/>'}</strong> Developer.
            </Typography>
          </Grid>
        </Grid>
        {/*MENU DROPDOWN */}
        <Hidden lgUp >
          <Grid containter style={{ flexGrow: 1 }} >
            <Popper className="Popper" open={this.state.menuOpen} anchorEl={this.anchorRef.current} transition >

              {({ TransitionProps }) => (

                <Slide  {...TransitionProps} timeout={{ enter: 200, exit: 400 }}>
                  <Paper className="PaperDropdown" >
                    <ClickAwayListener onClickAway={this.handleClose}>
                      <MenuList style={{ borderBottom: '2px solid #000'}} autoFocusItem={this.state.menuOpen} id="menu-list-grow" onKeyDown={this.handleListKeyDown}>
                        <MenuItem  >
                          <Link
                            onClick={this.handleClose}
                            to="portfolio"
                            activeClass={`MenuItemSm ActiveSmItem${menuClassName}`}
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={duration} 
                            className="MenuItemSm"
                            >
                            <Typography component="h7" variant="h7" >
                              Portfolio
                            </Typography>

                          </Link>
                        </MenuItem>
                        <MenuItem >
                          <Link
                            onClick={this.handleClose}
                            to="experience"
                            activeClass={`MenuItemSm ActiveSmItem${menuClassName}`}
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={duration}
                            className="MenuItemSm"
                            >
                            <Typography component="h7" variant="h7" >
                              Experience
                            </Typography>

                          </Link>
                        </MenuItem>
                        <MenuItem >
                          <Link
                            onClick={this.handleClose}
                            to="skills"
                            activeClass={`MenuItemSm ActiveSmItem${menuClassName}`}
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={duration}
                            className="MenuItemSm"
                            >
                            <Typography component="h7" variant="h7" >
                              Skills
                            </Typography>

                          </Link>

                        </MenuItem>
                        <MenuItem >
                          <Link
                            onClick={this.handleClose}
                            to="footer"
                            activeClass={`MenuItemSm ActiveSmItem${menuClassName}`}
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={duration}
                            className="MenuItemSm"
                            >
                            <Typography component="h7" variant="h7" >
                              Contact
                            </Typography>

                          </Link>

                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Slide>
              )}
            </Popper>
            {/*END DROPDOWN */}
          </Grid>
        </Hidden>
      </header>

    );
  }

} export default Header;