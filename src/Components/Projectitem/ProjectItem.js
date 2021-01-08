import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class ProjectItem extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        console.log('aca props'+this.props.alt);
        const { classes } = this.props;

        return (
            <Card className={classes.card} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt={this.props.alt}
                image={this.props.image}
                title={ this.props.title }
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 {this.props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {this.props.description}
                </Typography>
              </CardContent>
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
        width: 400,
        maxWidth: 400,
    },
    media: {
        height: 140,
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