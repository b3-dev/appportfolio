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

class ModalExperienceItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            image: '',
            first_line_description: ''
        }
    }

    onRendered(experienceId) {
        let ExperienceItem = Experience['Experience'].find(item => item.id === experienceId)
        this.setState({
            title: ExperienceItem.title,
            first_line_description: ExperienceItem.first_line_description,
        })
    }

    onRequestClose() {
        console.log('request close')
    }

    componentDidMount() {

        this.setState({
            title: '',
            first_line_description: '',
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
                                padding: '4vh'
                            }}>
                                <Grid item style={{
                                    display: "flex", flex: 1, flexDirection: "row", alignItems: "center",
                                    justifyContent: "left", maxWidth: '50vh'
                                }} >
                                    <Typography component="p" variant="p" style={{ padding: "1vh", textAlign: "justify" }} >
                                        <Typography component="h2" variant="h6" style={{ backgroundColor: '#61dafb', paddingLeft: '2vh', paddingRight: '2vh', borderRadius: '40px' }} >
                                            Back-end Developer
                                        </Typography>

                                        <br />
                                        Diseño e implementación de distintas APIs para integración con servicios tanto propios de la empresa como de proveedores externos usando Laravel y Ruby on Rails
                                        <br />
                                        <br />
                                        <br />
                                        <Typography component="h2" variant="h6" style={{ backgroundColor: '#61dafb', paddingLeft: '2vh', paddingRight: '2vh', borderRadius: '40px' }} >
                                            Front-end Developer
                                        </Typography>
                                        <br />
                                        Construcción de interfases de usuario usando tecnologías como ReactJs, Angular,Boostrap, Material IU JavaScript
                                        <br />
                                        <br />
                                        Planeación, desarrollo e implementación de distintos proyectos de tipo ERP, POS, e-commerce usando
                                        usando técnologías y/o frameworks del lado del servidor como Laravel, Codeigniter, Ruby on Rails y del
                                        lado del cliente


                                    </Typography>


                                </Grid>


                            </Grid>

                            <div style={{ flex: 1, textAlign: "right", padding: '3vh' }} >

                                <Button className={`ModalButton${classTheme}`} onClick={this.props.handleCloseModal} >
                                    Ver otro proyecto
                                </Button>
                            </div>

                        </Grid>
                    </Slide>
                </Modal>

        );
    }
}


export default ModalExperienceItem;

