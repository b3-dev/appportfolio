import React,{Component} from 'react';


class ExperienceItem extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        console.log('props experience..'+this.props.alt);
        const { classes } = this.props;

        return (
            <img 
                src={this.props.image}
                style={{ width:170 }}
            />
        );
      }
}
export default ExperienceItem;  