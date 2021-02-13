import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';


class ProjectItem extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}  >
            <CardActionArea>
            {this.props.loading?(
             <Skeleton animation="wave" variant="rect" style={{ width: 360, height:236, maxWidth: 360, }} />
               
            ):(
                <CardMedia
                component="img"
                alt={this.props.alt}
                image={this.props.image}
                title={ this.props.title }
                className={classes.media}               
              />
            )}
            </CardActionArea>
          </Card>
        );
      }
}

const styles = {

    itemCenter: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        aligmentAjust: 'center',
        justifyContent: 'center',
    },

    content: {
        height: 100
    },
    root: {
        flexGrow: 1,
    },
    card: {
        width: 360,
        maxWidth: 360,
        borderRadius: "2px",
        backgroundColor:'transparent',
        boxShadow: '0 0px 10px #CCC',
   },
    media: {
        transition:"all 0.6s ease",
        
         "&:hover": {       
          filter: 'brightness(50%)',
          transform:'scale(1.3)',
          transition:"all 0.4s ease"
        },
        
    },
    CardActions:{
       display: 'flex',
       flexDirection: 'row',
    },
    actionItem:{
        flex:1
    }
 };
export default withStyles(styles)(ProjectItem);  