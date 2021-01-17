import React, { Component } from 'react';
import './css/Footer.css';
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
class Footer extends Component {

  static propTypes={
    copyRight:PropTypes.string
  };

  render() {
    const {copyRight = 'copy-right default'} = this.props;
    return (
      <Grid container className="Footer" alignItems="center" style={{marginTop:'3vh'}} justify="center">
            <Typography component="p" >
               Designed by <strong>Eduardo Perez ©2021</strong>. All rights reserved
            </Typography>
      </Grid>
    );
  }
}
export default Footer;
