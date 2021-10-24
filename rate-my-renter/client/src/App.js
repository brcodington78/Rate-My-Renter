import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from "react-redux"

import {getReviews} from './actions/reviews'
import Reviews from './components/Reviews/Reviews';
import ReviewForm from './components/Forms/ReviewForm/ReviewForm';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch])

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
              <Grid container justifyContent="space-between" alignItems="stretch">
                <Grid item xs={12} sm={12}>
                    <Reviews />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ReviewForm />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </div>
    );
}

export default App
