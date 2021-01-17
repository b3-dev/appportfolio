import React,{Component} from 'react';
import {Link,BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';



/*Data */

class Contact extends Component{

    constructor(props){
        super(props)
    }
  
    render(){
        return (
            <div>
                <IconButton color="inherit" aria-label="Github" onClick={() => window.open('https://github.com/b3-dev', '_blank')}>
                    <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton color="inherit" aria-label="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/eduardo-perez-acuna', '_blank')}>
                    <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton color="inherit" aria-label="Email" onClick={() => window.location.href = `mailto:ing_eduardo_perez@hotmail.com`}>
                    <AlternateEmailIcon fontSize="large" />
                </IconButton>
            </div>
        );
    }
    
}export default Contact;







/*
<IconButton color="inherit" aria-label="Github">
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" aria-label="Linkedin">
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" aria-label="Email">
            <AlternateEmailIcon fontSize="large" />
          </IconButton>
          <LinkGoogle />
           */

      