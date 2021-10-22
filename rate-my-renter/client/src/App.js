import React from 'react';
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

export default App
