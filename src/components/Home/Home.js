import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Laptop from '../Laptop/Laptop';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 3,
      display: 'flex',
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const Home = () => {
    const classes = useStyles();
    const [laptops, setLaptops] = useState([]);

    useEffect(() =>{

        fetch('https://nameless-peak-99458.herokuapp.com/laptops')
        .then(res => res.json())
        .then(data => setLaptops(data));

    }, []);

    return (
        <Container maxWidth='lg'>
        <Grid container className={classes.root} spacing={1}>
            {laptops.map((laptop) => (
                <Grid xs={12} sm={6} md={3} lg={3} key={laptop._id} item>
                    <Laptop laptop={laptop} />
                </Grid>
            ))}
        </Grid>
    </Container>
    );
};

export default Home;