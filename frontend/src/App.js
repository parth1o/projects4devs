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
import Dash from './dashboard'
import Createproj from './createproject'

function App() {
  return (
      <Router>
    <html>
    <div className="hi">
          <Switch>
            <Route exact path='/'>
              <div className="App">
              <h1 className="title">projects<span className="single">4</span>devs</h1>
              <p className="desc">
                An online platform for student developers to find meaningful coding projects.
              </p>
              <Link to='/login'>
                <Button className="homebuttons" variant="contained">Login</Button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/signup'>
                <Button className="homebuttons" variant="contained">Sign Up</Button>
              </Link>
              </div>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>
            <Route exact path="/dashboard">
              <Dash className="dash"/>
            </Route>
            <Route exact path="/createproject">
              <Createproj/>
            </Route>
          </Switch>
    </div>
    </html>
      </Router>
  );
}

export default App;
