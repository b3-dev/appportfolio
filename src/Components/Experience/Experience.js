import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
/*Data */
import DataExperience from '../../Data/experience.json';
/*Components*/
import ExperienceItem from "../../Components/ExperienceItem/ExperienceItem";
import ModalPortfolioItemDetails from "../Modals/ModalPortfolioItemDetails";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

class Experience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const arrayLength=Math.round(12/DataExperience['Experience'].length);
        return (
            <Grid container justify="center" >
                
                {DataExperience['Experience'].map(rowExperience =>
                    <Grid item xs={12} md={arrayLength} sm={6} style={{ padding: 5, marginTop:10 }}  >
                         <Tooltip title={rowExperience.title} aria-label={rowExperience.title} placement="top-end" arrow>
                            <IconButton aria-label={rowExperience.title}>

                            <ExperienceItem
                                alt={rowExperience.title}
                                image={`./images/${rowExperience.folder}/${rowExperience.image_name}`}
                                title={`${rowExperience.title}`}
                                description={`${rowExperience.description}`}
                            />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                )
                }
                {/*modal*/}
               {
               /*<ModalPortfolioItemDetails
                    isOpen={this.state.isOpen}
                    description={this.state.description}
                    projectId={this.state.projectId}
                    handleCloseModal={this.handleCloseModal.bind(this)}


               />
               */}
            </Grid>

        )
    }


} export default Experience;