import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import { BrowserRouter, Redirect, Route, Switch, Link, HashRouter } from "react-router-dom";
import Nav from "./components/navbar/navbar";
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";
import LandLord from './components/Landlord/Landlord.js';
import "./default.css";

import {getReviews} from './actions/reviews'


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch])

    return (
      <BrowserRouter>
        <div>
          <header>
            <Nav />
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/auth' exact component={Auth} />
            <Route path='/landlord/:id' component={LandLord} />
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App
