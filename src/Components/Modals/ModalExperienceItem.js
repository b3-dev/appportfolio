import React, { Component } from 'react';
/*CSS */
import './css/ModalExperience.css';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';

/*DATA */
import Experience from '../../Data/experience.json';
import { Explicit } from '@material-ui/icons';

class ModalExperienceItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item:'',
            title: '',
            resume: [],
            first_line_description: ''
        }
    }

    onRendered(experienceId) {
        const ExperienceItem = Experience['Experience'].find(item => item.id === experienceId)
        const ExperienceResume=ExperienceItem['Resume'];
        console.log('experience..resume',ExperienceResume);
        this.setState({
            item:ExperienceItem,
            title: ExperienceItem.title,
            first_line_description: ExperienceItem.first_line_description,
            resume:ExperienceResume,
        })
    }

    onRequestClose() {
        console.log('request close')
    }

    componentDidMount() {

        this.setState({
            item:'',
            title: '',
            first_line_description: '',
            resume:[],
        })
    }

   

    render() {

        const classTheme= this.props.nightTheme?'NightTheme':'';
        
        return (
                       
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="Modal"
                    open={this.props.isOpen}
                    onClose={this.props.handleCloseModal.bind(this)}
                    onRendered={() => this.onRendered(this.props.experienceId)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 10,
                    }}
                >
                    <Slide direction="down" in={this.props.isOpen} mountOnEnter unmountOnExit>
                        <Grid className={`Paper${classTheme}`}>
                            <div className={`ModalHeader${classTheme}`} >
                                <Grid item className="GridCloseIcon" >
                                    <IconButton className="IconClose" aria-label={'Close'}  onClick={this.props.handleCloseModal}  >
                                        <HighlightOffIcon style={{ fontSize: '35px'}} />
                                    </IconButton>
                                </Grid>
                                <Typography component="h1" variant="h5" className="ModalTitle" >
                                    {this.state.title}
                                </Typography>
                            </div>
                            <Divider component="hr" variant="fullWidth" className="Divider" />

                            <Grid container style={{

                                justifyContent: "center",
                                padding: '3vh'
                            }}>
                                <Grid item style={{
                                    display: "flex", flex: 1, flexDirection: "row", alignItems: "center",
                                    justifyContent: "left", maxWidth: '550px'
                                }} >
                                    
                                    <Typography component="p" variant="p" className="TextDescription" >
                                    
                                    {
                                       this.state.resume?this.state.resume.map(item=>(
                                           <Grid>
                                            <Typography component="h2" variant="h6" style={{  fontSize: 'calc(0.6em + 0.7vw) !important', backgroundColor: '#61dafb', paddingLeft: '3vh', paddingRight: '3vh', borderRadius: '40px' }} >
                                                {item.title}
                                             </Typography>
                                             <Grid style={{marginTop:'4vh', marginBottom:'4vh' }}> 
                                                 {item.description}
                                             </Grid>          
                                           </Grid>
                                                                                        
                                             )
                                        )
                                        :<Grid style={{marginTop:'4vh', marginBottom:'4vh' }}> 
                                            {`Ups! there's nothing here...`}
                                        </Grid>  
                                    } 
                                    </Typography>
                                </Grid>
                            </Grid>
                            <div style={{ flex: 1, textAlign: "right", padding: '3vh' }} >
                                <Button className={`ModalButton${classTheme}`} onClick={this.props.handleCloseModal} >
                                    See another project
                                </Button>
                            </div>
                        </Grid>
                    </Slide>
                </Modal>
        );
    }
}


export default ModalExperienceItem;

