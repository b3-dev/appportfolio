import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

/*DATA */
import Projects from '../../Data/projects.json';


class ModalPortfolioItemDetails extends Component {
    constructor(props) {
        super(props)
        this.state={
            title:'',
            image:'',
            first_line_description:''          
        }
    }

   
    onRendered(projectId){
       
        let ProjectItem=Projects['Projects'].find(item => item.id === projectId)
        this.setState({
            title:ProjectItem.title,
            first_line_description:ProjectItem.first_line_description,
            image:`./images/projects/${ProjectItem.folder}/${ProjectItem['thumbnail'][0].image_name}`
        })
        console.log('on rendered'+JSON.stringify(ProjectItem))
        console.log('description'+this.state.description)
    }

    onRequestClose(){
        console.log('request close')
    }

    render() {
      
        const { classes } = this.props;

        return (

            <div>
          
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={this.props.isOpen}
                    onClose={this.props.handleCloseModal.bind.this}
                    onRendered={()=>this.onRendered(this.props.projectId)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 20,
                    }}
                >
                    <Fade in={this.props.isOpen}>
                        <div className={classes.paper}>
                            <Typography component="h4" variant="h4" style={{ padding:"3vh" }} >
                                 {this.state.title}
                            </Typography>

                             <Grid container style={{ display: 'flex', flex:1, flexWrap: "wrap",
                                   flexDirection:"row",  
                                justifyContent:"center" }}>
                                <Grid item style={{
                                    display: "flex", flex: 1,flexDirection: "row",  alignItems: "center",
                                    justifyContent: "left"
                                }} >

                                    <img src={this.state.image} width="100%" alt={this.state.img_title} />

                                </Grid>
                                <Grid item style={{  display: "flex", flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center", textAlign:"center" }}>
                                    <Typography component="p" >
                                        {this.state.first_line_description}
                                    </Typography>
                                </Grid>
                                 
                            </Grid>                           
                            
                            <div style={{ flex: 1, textAlign: "right" }} >

                                <Button style={{}} onClick={this.props.handleCloseModal} variant="contained" color="secondary" autoFocus>
                                    Ver otro proyecto
                            </Button>
                            </div>
                       
                        </div>
                    </Fade>
                </Modal>
            </div>

        );
    }
}
const styles = {
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: "#FFF",
        border: '1px solid #000',
        boxShadow: "20px",
        padding: "5vh"
    },
}

export default withStyles(styles)(ModalPortfolioItemDetails);

