import './App.css';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

function ProfileDisplay({ data={} }) {
    return (
        <div className="profileDetail">
            <h1 className="title">{data.name}</h1>
            <div className="desc">
                <h4>Skills:</h4>
            </div>

            <div className="desc">
                <h4>About me!</h4>
                <p>
                    First year Compsci student. Check out my projects and Github
                </p>
                <Button className="homebuttons" variant="contained">
                    Say Hello!
                </Button>
                <Button className="homebuttons" variant="contained">
                    My projects
                </Button>
            </div>
        </div>
    );
}

export default ProfileDisplay;
