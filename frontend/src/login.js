import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './App.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from 'react-router-dom';
import useToken from './useToken';


const useStyles = makeStyles((theme) => ({
  paper: { 
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const styles = theme => ({
  multilineColor:{
      color:'red'
  }
});

export default function SignUp() {
  const classes = useStyles();

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {setToken} = useToken();

  const signIn = async () => {
    let res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (res.status === 200) {
      let data = await res.json();
      setToken(data.token);
      history.push('/dashboard');
    } else {
      window.alert('Can\'t log in');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <p className="title2" component="h1" variant="h5">
          SIGN IN
        </p>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              className={classes.root}
                InputLabelProps={{
                  style: { color: '#FFDBB5' },
                }}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{
                  style: { color: '#FFDBB5' },
                }}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={event => setPassword(event.target.value)}
                value={password}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="homebuttons"
            onClick={signIn}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
  );
}
