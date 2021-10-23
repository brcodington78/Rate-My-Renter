import React from 'react';
import './stylesheets/nav.css';
import './stylesheets/search.css';

const Nav = (props) => {

  const displayRight = (
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