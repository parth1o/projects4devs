import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import ProjectDisplay from './ProjectDetail';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
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
    cardMedia: {
        paddingTop: '30.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);

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

    if (loading) {
        return <div></div>;
    } else {
        return (
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
                                        >
                                            <CardMedia
                                                className={classes.cardMedia}
                                                title="Image title"
                                            />
                                            <CardContent
                                                className={classes.cardContent}
                                            >
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="h2"
                                                >
                                                    {card.name}
                                                </Typography>
                                                <Typography>
                                                    {card.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button
                                                    size="small"
                                                    color="primary"
                                                    onClick={() =>
                                                        setOpen(true)
                                                    }
                                                >
                                                    View
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                        </Grid>
                        <Dialog open={open} onClose={() => setOpen(false)}>
                            <ProjectDisplay />
                        </Dialog>
                    </Container>
                </main>
            </React.Fragment>
        );
    }
}
