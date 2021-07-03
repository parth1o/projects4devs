import './App.css';
import { Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './login'
import Signup from './signup'
import { Link } from "react-router-dom";

function App() {
  return (
      <Router>
    <html>
    <div className="App">
          <Switch>
            <Route exact path='/'>
              <h1 className="title">projects<span className="single">4</span>devs</h1>
              <p className="desc">
                projects4devs aims to solve the issue student developers have in finding meaningful projects.Students are able to become project owners and put their project ideas onto the site and other students can request to join their project,if the project owner sees the requested students profile and sees them as a goodfit then they will be able approve the student to come in on the project.project4devs helps to add an additional layer of support for student devs as through these projects they will be able to gain valuable experience which will help them to get that dream internship or job.
              </p>

              <Link to='/login'>
                <Button className="homebuttons" variant="contained">Login</Button>
              </Link>
              <Link to='/signup'>
                <Button className="homebuttons" variant="contained">Sign Up</Button>
              </Link>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>
          </Switch>

    </div>
    </html>
      </Router>
  );
}

export default App;
