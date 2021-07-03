import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './login'
import Signup from './signup'
import Dash from './dashboard'
import Home from './home'
import Portfolio from './Portfolio'
import HeaderBar from './headerbar';

function App() {
  return (
      <Router>
    <html>
    <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/dashboard">
            <Dash/>
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
