import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import DataSkills from '../../Data/skills.json';
import SkillItem from "../../Components/SkillsItem/SkillsItem";
import IconButton from '@material-ui/core/IconButton';

class Skills extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Grid container style={{ flexGrow: 1 }} justify="center" >
                {
                    DataSkills['Skills'].map(skill =>

                        <Grid key={skill.id} item xs={6} md={3} sm={6} style={{ padding: 10 }}  >
                            <Tooltip title={skill.title} aria-label={skill.title} placement="top-end" arrow>
                                <IconButton aria-label={skill.title}>
                                    <SkillItem
                                        alt={skill.title}
                                        image={`./images/${skill.folder}/${skill.image_name}`}

                                    />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    )
                }
            </Grid>
        );
    }

}export default Skills;