import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
/*Data */
import DataExperience from '../../Data/experience.json';
/*Components*/
import ExperienceItem from "../../Components/ExperienceItem/ExperienceItem";
import ModalExperienceItem from "../Modals/ModalExperienceItem";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

class Experience extends Component {
    constructor(props) {
        super(props)
        this.state={
            isOpen:false,
            experienceId:0
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(experienceId) {
        console.log('project id before'+experienceId)
        console.log('aqui this open'+this.state.isOpen);
        this.setState({ 
            isOpen: true, 
            experienceId:experienceId
         });
        console.log('open modal'+this.state.isOpen);
        console.log('project id modal'+this.state.experienceId);
    };

    handleCloseModal(){
        console.log('handle close modal');
        this.setState({ 
            isOpen: false, 
         });
    }

    render() {
        const arrayLength=Math.round(12/DataExperience['Experience'].length);
        const  nightTheme=this.props.nightTheme;
        return (
            <Grid container justify="center"  >
                {DataExperience['Experience'].map(rowExperience =>
                    <Grid item key={rowExperience.id} xs={12} md={arrayLength} sm={6} style={{ padding: 5, marginTop:10 }}   >
                         <Tooltip title={rowExperience.title} aria-label={rowExperience.title} placement="top-end" arrow>
                            <IconButton aria-label={rowExperience.title} 
                            onClick={()=>this.handleOpenModal(rowExperience.id)} >

                            <ExperienceItem
                                {...rowExperience}
                                key={rowExperience.id}
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
               
               <ModalExperienceItem
                
                    nightTheme={nightTheme}
                    {...this.state}
                    handleCloseModal={this.handleCloseModal.bind(this)}

               />

            </Grid>

        )
    }


} export default Experience;