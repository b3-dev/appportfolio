import React,{Component} from 'react';


class SkillItem extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        const { classes } = this.props;
        return (
            <img 
                src={this.props.image}
                style={{ width:80 }}
            />
        );
      }

}


export default SkillItem;  