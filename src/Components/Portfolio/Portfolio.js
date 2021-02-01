import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
/*Data */
import Projects from '../../Data/projects.json';
/*Components*/
import ProjectItem from "../../Components/Projectitem/ProjectItem";
import ModalPortfolioItemDetails from "../Modals/ModalPortfolioItemDetails";

class Portfolio extends Component{
    constructor(props){
        super(props);

        this.state={
            isOpen:false,
            projectId:0,
            loading:true,
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        //this.addProduct = this.addProduct.bind(this);
    }

    componentDidMount(){
        setTimeout(
            () => this.setState({ loading: false }), 
            2000
          );
    }

    handleOpenModal(projectId) {
        console.log('project id before'+projectId)
        console.log('aqui this open'+this.state.isOpen);
        this.setState({ 
            isOpen: true, 
            projectId:projectId
         });
        console.log('open modal'+this.state.isOpen);
        console.log('project id modal'+this.state.projectId);
    };

    handleCloseModal(){

        console.log('handle close modal');
        this.setState({ 
            isOpen: false, 
         });
    }

    render() {
        const { classes } = this.props;
        const nightTheme = this.props.nightTheme;
        return (
            <Grid container className={classes.root} justify="center" >
                
                <Grid container md={10} justify="center" >
                {Projects['Projects'].map(project=>
                    <Grid item key={project.id} className={classes.itemCenter} style={{padding:10}} onClick={()=>this.handleOpenModal(project.id)}  >
                     
                     <ProjectItem 
                        loading={this.state.loading}
                        alt={project.title}
                        image={`./images/projects/${project.folder}/${project.image_name}`}
                        title={`${project.title}`} 
                        description={`${project.description}`}
                        />
                    </Grid>
                    )
                }
                </Grid>
                
                {/*modal*/}
                <ModalPortfolioItemDetails 
                nightTheme={nightTheme}
                isOpen={this.state.isOpen}
                description={this.state.description}
                projectId={this.state.projectId}
                handleCloseModal={this.handleCloseModal.bind(this)}
                
                />
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
