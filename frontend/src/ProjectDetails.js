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

function ProjectDisplay({ data }) {
    return (
        <div className="projectDetail">
            <h1 className="title">{data.name}</h1>
            <div className="desc">
                <h3>Language and Expertise Requirement</h3>

                {data.skill.map((element) => {
                    return (
                        <div key={element.name}>
                            <Chip label={element.name} color="primary" />
                            <p>Expertise Level: {element.proficiency}</p>
                            <p></p>
                        </div>
                    );
                })}
            </div>

            <div className="desc">
                <h3>Project Summary</h3>
                <p>{data.description}</p>
                <Button className="homebuttons" variant="contained">
                    I'm interested!
                </Button>
                <Button className="homebuttons" variant="contained">
                    Explore more projects
                </Button>
            </div>
        </div>
    );
}

export default ProjectDisplay;
