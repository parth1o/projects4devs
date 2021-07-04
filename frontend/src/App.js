import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login'
import Signup from './signup'
import Dash from './dashboard'
import Home from './home'
import Portfolio from './Portfolio'
import HeaderBar from './headerbar';
import Createproj from './createproject'
import {Button} from '@material-ui/core'

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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            <Route exact path="/profile">
              <Portfolio/>
            </Route>
          </Switch>
    </div>
    </html>
      </Router>
  );
}

export default App;
