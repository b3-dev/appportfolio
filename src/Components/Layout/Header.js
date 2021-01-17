import React,{Component} from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ComputerIcon from '@material-ui/icons/Computer';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link, animateScroll as scroll } from "react-scroll";
import { BorderBottom, Height } from '@material-ui/icons';
class Header extends Component{
    constructor(props){
        super(props);

    }

    render() {
        //const theme = useTheme();
        const { classes } = this.props; //declarating props into a constants
        const Background='./images/site/background.jpg';
        return (
          <header >

            <Grid className={classes.root} >

              <AppBar position="fixed" style={{ backgroundColor: '#01579b' }}  >
                <Toolbar>
                  <IconButton color="inherit" aria-label="Menu">
                    <ComputerIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" className={classes.title} >
                    Eduardo Pérez Acuña 
                        </Typography  >
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                  </Typography  >
                  <Breadcrumbs aria-label="breadcrumb"  >

                    <Link
                      to="portfolio"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000} >
                      <Typography variant="h6" style={{ color: '#FFF', cursor: 'pointer' }}>
                        Portfolio
                      </Typography>

                    </Link>
                    <Link
                      to="experience"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000} >
                      <Typography variant="h6" style={{ color: '#FFF', cursor: 'pointer' }}>
                        Experience
                        </Typography>
                    </Link>
                    <Link
                      to="skills"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000} >
                      <Typography variant="h6" style={{ color: '#FFF', cursor: 'pointer' }}>
                        Skills
                      </Typography>

                    </Link>
                    <Link
                      to="contact"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000} >
                      <Typography variant="h6" style={{ color: '#FFF', cursor: 'pointer' }}>
                        Contact
                      </Typography>
                    </Link>
                  </Breadcrumbs>
                </Toolbar>

              </AppBar>
              <Grid container alignItems="center" style={{ backgroundImage: `url(${Background})`, height: '50vh', }} justify="center">
                <Typography variant="h4" component="p" style={{ color: '#FFF', backgroundColor:'#000', opacity:'.3', padding:'6vh', borderRadius:'40px' }} >
                   <strong>{'<FullStack/>'}</strong> Developer. 
                  </Typography>
              </Grid>


            </Grid>
          </header>
        );
      }

}
const drawerWidth = 240;
const styles ={
 /* title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
  },*/
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,

  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
  
    justifyContent: 'flex-end',
  },
  drawerHeaderTitle: {
    display: 'flex',
    alignItems: 'center',
    padding: '0px 8px',
   
    justifyContent: 'flex-start',
  },
}
export default withStyles(styles)(Header);