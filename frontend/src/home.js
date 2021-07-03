import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

function home(){
    return(
        <div>
            <h1 className="title" style={{marginTop: 0}}>projects<span className="single">4</span>devs</h1>
            <p className="desc">
                projects4devs aims to solve the issue student developers have in finding meaningful projects.Students are able to become project owners and put their project ideas onto the site and other students can request to join their project,if the project owner sees the requested students profile and sees them as a goodfit then they will be able approve the student to come in on the project.project4devs helps to add an additional layer of support for student devs as through these projects they will be able to gain valuable experience which will help them to get that dream internship or job.
            </p>

            <Link to='/login'>
                <Button className="homebuttons" variant="contained">Login</Button>
            </Link>
            <Link to='/signup'>
                <Button className="homebuttons" variant="contained">Sign Up</Button>
            </Link>
        </div>

    )
}
export default home;