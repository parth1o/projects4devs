import React, {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

const levels = [
  {
    value: 'Beginner',
    label: 'Beginner',
  },
  {
    value: 'Intermediate',
    label: 'Intermediate',
  },
  {
    value: 'Professional',
    label: 'Professional',
  },
];
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

export default function SignUp() {
  const classes = useStyles();

  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [skills, setSkills] = useState([]);
  const [description, setDescription] = useState('');

  const signUp = async () => {
    let res = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        language,
        level,
        description
      })
    });

    if (res.status === 201) {
      history.push('/login');
    } else {
      window.alert('Can\'t sign up');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <p className="title2" component="h1" variant="h5">
          Sign up
        </p>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              InputLabelProps={{
                style: { 
                    color: '#FFDBB5'
                },
                
              }}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={event => setFirstName(event.target.value)}
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              InputLabelProps={{
                style: { color: '#FFDBB5' },
              }}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={event => setLastName(event.target.value)}
                value={lastName}
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
            <Grid item xs={12}>
              <TextField
              InputLabelProps={{
                style: { color: '#FFDBB5' },
              }}
                variant="outlined"
                required
                fullWidth
                id="language"
                label="Technical language you are familiar with"
                name="language"
                autoComplete="language"
                onChange={event => setLanguage(event.target.value)}
                value={language}
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
                select
                name="level"
                label="Level of Proficiency"
                id="level"
                value={level}
                onChange={event => setLevel(event.target.value)}
              
              >
                {levels.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Button className="addbutton" onClick={() => setSkills([...skills, {language, level}])}>Add</Button>
            <div >{skills.map(skill => {
              return <span className="skill" >{skill.language} - {skill.level}</span>
              })}</div>
            <Grid item xs={12}>
              <TextField
              InputLabelProps={{
                style: { color: '#FFDBB5' },
              }}
                variant="outlined"
                required
                fullWidth
                multiline
                id="description"
                placeholder="Write about your software development experiences in here"
                label="Decription"
                name="description"
                autoComplete=""
                onChange={event => setDescription(event.target.value)}
                value={description}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="homebuttons"
            onClick={signUp}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
