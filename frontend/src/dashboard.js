import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import "./dashboard.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import ProjectDisplay from './ProjectDetails';
import HeaderBar from './headerbar';
import {useRouteProtector} from './useRouteProtector';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'center',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export default function Album() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [viewingItem, setViewingItem] = useState(null);

    useRouteProtector();

    useEffect(() => {
        fetch('/api/project', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            });
        setLoading(true);
    }, []);

    console.log(projects);

    if (loading) {
        return (
            <HeaderBar/>
        )
    ;
    } else {
        return (
            <div>
                <HeaderBar/>
                <React.Fragment>
                    <CssBaseline />
                    <main>
                        <Container className={classes.cardGrid} maxWidth="md">
                            {/* End hero unit */}
                            <Grid container spacing={4}>
                                {!loading &&
                                projects.map((card) => (
                                    <Grid
                                        item
                                        key={card._id}
                                        xs={12}
                                        sm={6}
                                        md={4}
                                    >
                                        <Card
                                            className={classes.card}
                                            variant="elevation"
                                            id="pp"
                                        >
                                            <CardContent
                                                className={classes.cardContent}
                                                
                                            >
                                                <Typography
                                                    className="title4"
                                                    gutterBottom
                                                    variant="h5"
                                                    component="h2"
                                                >
                                                    {card.name}
                                                </Typography>
                                                <Typography className="pop">
                                                    {card.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button
                                                    className="homebutt"
                                                    color="primary"
                                                    onClick={() => {
                                                        setViewingItem(card);
                                                        setOpen(true);
                                                    }}
                                                >
                                                    View
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                        </Grid>
                        <Dialog open={open} onClose={() => setOpen(false)}>
                            <ProjectDisplay data={viewingItem} />
                        </Dialog>
                    </Container>
                </main>
            </React.Fragment>
            </div>
        );
    }
}
