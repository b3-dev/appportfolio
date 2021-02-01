import React, { Component } from 'react';
import './css/Footer.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Footer extends Component {

    constructor(props) {
        super(props);
    }
     
    render() {
        const  className  = !this.props.nightTheme ? 'Footer' : 'FooterNightheme';

        return (

            <Grid container className={className} alignItems="center"  justify="center">
                <Typography component="p" className="TagFooter"  >
                    Designed and develop by <strong>Eduardo Perez ©2021</strong>. All rights reserved 
                </Typography>

            </Grid>
        );
    }
}
export default Footer;
