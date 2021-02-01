import React,{Component} from 'react';
/*CSS */
import './css/ModalPortfolio.css';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';

/*DATA */
import Projects from '../../Data/projects.json';

class ModalPortfolioItemDetails extends Component {
    constructor(props) {
        super(props)
        this.state={
            title:'',
            image:'',
            first_line_description:'' ,
            description:'',         
        }
    }

    componentDidMount() {

    }
    onRendered(projectId) {

        let ProjectItem = Projects['Projects'].find(item => item.id === projectId)
        this.setState({
            title: ProjectItem.title,
            description: ProjectItem.description,
            first_line_description: ProjectItem.first_line_description,
            image: `./images/projects/${ProjectItem.folder}/${ProjectItem['thumbnail'][0].image_name}`
        })
        console.log('on rendered' + JSON.stringify(ProjectItem))
        console.log('description' + this.state.description)
    }

    onRequestClose() {
        console.log('request close')
    }

    render() {

        const classTheme=this.props.nightTheme ? 'NightTheme' : '';

        return (

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="ModalPortfolio"
                open={this.props.isOpen}
                onClose={this.props.handleCloseModal.bind(this)}
                onRendered={() => this.onRendered(this.props.projectId)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 20,
                }}
            >

                <Slide direction="down" in={this.props.isOpen} mountOnEnter unmountOnExit>

                    <Grid className={`PaperPortfolio${classTheme}`}>
                        <Grid containter className={`ModalPortfolioHeader${classTheme}`} >

                            <Grid item className="GridCloseIcon" >
                                <IconButton className="IconClose" aria-label={'Close'} onClick={this.props.handleCloseModal} >
                                    <HighlightOffIcon style={{ fontSize: '35px' }} />
                                </IconButton>
                            </Grid>
                            <Grid item style={{  textAlign:'center' }} >
                                <Typography component="h2" variant="h5" className="ModalPortfolioTitle" >
                                    {this.state.title}
                                </Typography>
                                </Grid>
                            <Grid item style={{ textAlign:'center' }} >

                                <Typography component="p" variant="p" className="ModalPortfolioDescription" >
                                    {this.state.description}
                                </Typography>
                            </Grid>
                            
                        </Grid>
                        <Divider component="hr" variant="fullWidth" className="Divider" />
                        <Grid spacing={3} container style={{
                            display: 'flex', flex: 1, flexWrap: "wrap",
                            flexDirection: "row",
                            justifyContent: "center",

                        }}>
                            <Grid item md={6}  >
                                <img src={this.state.image} width="98%" alt={this.state.img_title} />
                            </Grid>
                            <Grid item md={6}  >
                                <Typography component="p" className={`TextPortfolioDescription${classTheme}`} >
                                    {this.state.first_line_description}
                                   
                                </Typography>
                            </Grid>
                        </Grid>

                        <div style={{ flex: 1, textAlign: "right", padding: '3vh' }} >
                            <Button className={`ModalPortfolioButton${classTheme}`} onClick={this.props.handleCloseModal} >
                                Ver otro proyecto
                                 </Button>
                        </div>
                    </Grid>
                </Slide>
            </Modal>
        );
    }
} export default ModalPortfolioItemDetails;

