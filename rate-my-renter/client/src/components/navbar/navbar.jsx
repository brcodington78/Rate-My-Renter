import React from 'react';
import {Link} from 'react-router-dom'
import './stylesheets/nav.css';
import './stylesheets/search.css';

const Nav = (props) => {

  const user = null;

  const displayRight = user ? (<div id="session-btns">
    <button id='logout-btn' className="session-btn">Logout</button>
  </div>) 
  :(
    <div id="session-btns">
      <div id="signup-btn" className="session-btn">Sign up</div>
      <div id="login-btn" className="session-btn">Login</div>
    </div>
  )

  const searchBar = (
    <div id="search-bar">
      Search
    </div>
  )

  const displayLeft = (
    <div>
      <div>Logo</div>
    </div>
  )

  return (
    <div id="nav-container">
      {displayLeft}
      {searchBar}
      {displayRight}
    </div>
  )
}

export default Nav;