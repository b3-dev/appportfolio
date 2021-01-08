import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


/*Components*/
import ProjectItem from "../../Components/Projectitem/ProjectItem";
import { Paper } from '@material-ui/core';

class Portfolio extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.root} justify="center"  >
            <Grid item xs={12}  md={4} sm={6} className={classes.itemCenter} style={{padding:10}}  >
                <ProjectItem 
                 alt="Benedetti's Online 2021"
                 image="./images/projects/online2021/online2021_1.png"
                 title="Benedetti's Online 2021"
                 description="Tienda en línea de productos Benedetti's. Desarrollada con Laravel, Jquery, Bootstrap."
                />
            </Grid>
            <Grid item xs={12}  md={4} sm={6} className={classes.itemCenter} style={{padding:10}}  >
                <ProjectItem 
                     alt="Benedetti's Online 2016"
                     image="./images/projects/online2016/online2016_1.png"
                     title="Benedetti's Online "
                     description="Actual Tienda en línea de productos Benedetti's. Desarrollado con PHP, Jquery, HTML5, CSS3 y demás librerías."
                
                />
            </Grid>
            <Grid item xs={12}  md={4} sm={6} className={classes.itemCenter} style={{padding:10}}  >
                <ProjectItem 
                 alt="Benedetti's CASA"
                 image="./images/projects/casa2020/casa2020_1.png"
                 title="Benedetti's CASA "
                 description="Centro de Atención y Solución al Asociado. Desarrollado con Ruby on Rails, React, Material UI."
                
                
                />
            </Grid>
            
           
                
            </Grid>

          );
      }
}

const styles = {
    root: {
        flexGrow: 1,
       /* backgroundColor:'#F00'*/
    },

    itemCenter: {
        display: 'flex',
       
        flexDirection: 'row',
        aligmentAjust: 'center',
        justifyContent: 'center',

    },
};

export default withStyles(styles)(Portfolio); 
