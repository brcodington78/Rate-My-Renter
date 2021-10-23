import React from 'react';
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

export default App
