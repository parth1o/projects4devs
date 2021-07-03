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
            <p className="ghuu"><strong>Project Owner: </strong>{data.owner.firstName} {data.owner.lastName}</p>
            <p className="ghuu"><strong>Owner Email: </strong>{data.owner.email}</p>
            <p className="ghuu"><strong>Project Github link: </strong><a className="ghu" target="_blank" href={data.githubLink}>{data.githubLink}</a></p>
            
            <br>
            </br>
            <div className="ghuu">
                <p><strong>Project Summary:</strong></p>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export default ProjectDisplay;
