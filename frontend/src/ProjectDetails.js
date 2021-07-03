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
            <p className="top">{data.name}</p>
            <p>Project Owners Github link:{data.owner}</p>
            <p>{data.githubLink}</p>

            <div className="desc">
                <h3>Project Summary:</h3>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export default ProjectDisplay;
