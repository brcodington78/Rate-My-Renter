import React, {useState, useEffect} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom'
import './stylesheets/nav.css';
import './stylesheets/search.css';
import { useDispatch } from 'react-redux';


const Nav = (props) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();


  console.log("user", user)

  //used to set the user if the user is logged in 
  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])

  const logout = () => {
    dispatch({ type: 'LOGOUT'});
    history.push('/')

    setUser(null)
  }



  const displayRight = user ? (<div id="session-btns">
    <button id='logout-btn' className="session-btn" onClick={logout}>Logout</button>
  </div>) 
  :(
    <div id="session-btns">
      <Link to="/auth">
        <div id="signup-btn" className="session-btn">Sign up</div>
      </Link>
      <div id="login-btn" className="session-btn">Login</div>
    </div>
  )




  const searchBar = (
    <div id="search-bar">
      Search
    </div>
  )


  const displayLeft = (
    <Link to="/">
      <div>Logo</div>
    </Link>
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