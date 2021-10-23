import React from 'react';
<<<<<<< HEAD
import { Redirect, Route, Switch, Link, HashRouter } from 'react-router-dom';
import { NavContainer } from "../src/components/navbar/nav_container";
import Nav from './components/navbar/navbar';
import './default.css'

const App = () => (
    <div>
        <header>
            <Nav/>
        </header>
        <h1>App</h1>
    </div>
)
=======
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'

function App() {
    return (
        <div>
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
}
>>>>>>> 35dde876a716ceaf84b9b40e3764edd72dad442b

export default App
