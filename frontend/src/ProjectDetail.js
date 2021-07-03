import './App.css';
//import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

/*const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  })); */

/*function OutlinedChips() {
    const classes = useStyles();

    const handleClick = () => {
      console.info('You clicked the Chip.');
    };
}*/

function ProjectDisplay() {

    return (

        <div className="projectDetail">
            <h1 className="title">Project Name</h1>
            <div className="desc">
                <h3>Language and Expertise Requirement</h3>
                <Chip label="Python" color="primary" />
                <Chip label="JavaScript" color="secondary"/>
                <Chip label="CSS" />
                <br/>
                <p>Expertise Level: Beginner</p>
            </div>

            <div className="desc">
                <h3>Project Summary</h3>
                <p>
                    Summary your project here
                </p>
                <Button className="homebuttons" variant="contained">I'm interested!</Button>
                <Button className="homebuttons" variant="contained">Explore more projects</Button>
            </div>
        </div>

    );
};

export default ProjectDisplay;
