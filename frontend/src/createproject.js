import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

export default function CreateProject({ close }) {
    const classes = useStyles();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [githubLink, setGithubLink] = useState();

    function changeName(e) {
        setName(e.target.value);
    }

    function changeDescription(e) {
        setDescription(e.target.value);
    }

    function changeRepoLink(e) {
        setGithubLink(e.target.value);
    }

    async function sendForm() {
        console.log(name);
        console.log(description);
        console.log(githubLink);

        await fetch('/api/project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                description,
                githubLink,
            }),
        });
        close();
    }

    return (
        <Container className="popup" component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <p className="topp" component="h1" variant="h5">
                    Create a new project
                </p>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            InputLabelProps={{
                                style: { color: '#FFDBB5' },
                              }}
                                autoComplete="newproject"
                                name="newproject"
                                variant="outlined"
                                required
                                fullWidth
                                id="newproject"
                                label="Name of your project"
                                autoFocus
                                onChange={changeName}
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
                                multiline
                                id="description"
                                placeholder="Write about your project and what your looking for in potential team members"
                                label="Decription"
                                name="description"
                                autoComplete=""
                                onChange={changeDescription}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            InputLabelProps={{
                                style: { color: '#FFDBB5' },
                              }}
                                autoComplete="githublink"
                                name="githublink"
                                variant="outlined"
                                required
                                fullWidth
                                id="githublink"
                                label="Enter the github link of your project repo"
                                autoFocus
                                onChange={changeRepoLink}
                            />
                        </Grid>
                    </Grid>
                    <Button

                        fullWidth
                        variant="contained"
                        color="primary"
                        className="homebuttons"
                        onClick={sendForm}
                    >
                        Submit
                    </Button>
                </form>
            </div>
            <Box mt={5}></Box>
        </Container>
    );
}
