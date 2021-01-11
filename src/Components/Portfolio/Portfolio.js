import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
/*Data */
import Projects from '../../Data/projects.json';

/*Components*/
import ProjectItem from "../../Components/Projectitem/ProjectItem";
import PortfolioItemDetails from "../../Components/Modals/PortfolioItemDetails";

import { Paper } from '@material-ui/core';

class Portfolio extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(Projects);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.root} justify="left" >
                {Projects['Projects'].map(project=>
                    <Grid item xs={12}  md={4} sm={6} className={classes.itemCenter} style={{padding:10}}  >
                     <ProjectItem 
                        alt={project.title}
                        image={`./images/projects/${project.folder}/${project.image_name}`}
                        title={`${project.title}`} 
                        description={`${project.description}`}
                        />
                    </Grid>
                    )
                }
                <PortfolioItemDetails />
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
