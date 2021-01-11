import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
/*DATA */
import Projects from '../../Data/projects.json';


class PortfolioItemDetails extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('did mount modal');
        let ProjectItem=Projects['Projects'].find(item => item.id === 2)
        console.log('project item'+JSON.stringify(ProjectItem));
    }

    render() {
        const { classes } = this.props;

        return (

            <div>
          
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={'true'}
                    onClose={''}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={'true'}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Transition modal</h2>
                            <p id="transition-modal-description">react-transition-group animates me.</p>
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
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "#CCC",
        border: '2px solid #000',
       /* boxShadow: theme.shadows[5],*/
        /*padding: theme.spacing(2, 4, 3),*/
    },
}

export default withStyles(styles)(PortfolioItemDetails);

