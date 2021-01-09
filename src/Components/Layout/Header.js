import React,{Component} from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ComputerIcon from '@material-ui/icons/Computer';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
//import Link from '@material-ui/core/Link';
import { Link, animateScroll as scroll } from "react-scroll";
class Header extends Component{
    constructor(props){
        super(props);
    }

    render() {
        //const theme = useTheme();
        const { classes } = this.props; //declarating props into a constants

        return (
            <div className={classes.root} >
            <header >
                <AppBar position="fixed" color="primary"  >
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <ComputerIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.title} >
                            Eduardo Pérez Acuña / FullStack Developer
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
                            Portfolio
                       </Link>
                       <Link 
                            to="experience"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={2000} > 
                            Experience
                       </Link>
                       <Link 
                            to="skills"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={2000} > 
                           Skills
                       </Link>
                       <Link 
                            to="contact"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={2000} > 
                           Contact
                       </Link>
                   </Breadcrumbs>    
                    </Toolbar>
                    
                </AppBar>
            </header>
            </div>

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