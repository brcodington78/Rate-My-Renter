import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import { Redirect, Route, Switch, Link, HashRouter } from 'react-router-dom';
import { NavContainer } from "../src/components/navbar/nav_container";
import Nav from './components/navbar/navbar';
import './default.css'

const App = () => (
    <div>
        <header>
            <Nav/>
        </header>
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Rate My Renter!
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch">
                        
                    </Grid>
                </Container>
            </Grow>
        </Container>
    </div>
)

export default App
