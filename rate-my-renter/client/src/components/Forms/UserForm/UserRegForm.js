import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

function UserForm({isSignup, setIsSignup}) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [isLandLord, setisLandLord] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();


  

  function handleSubmit(e) {
    e.preventDefault()
  }

  function switchMode(e) {
    e.preventDefault()
    setIsSignup(!isSignup)
  }

  const googleSuccess = async (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;

      try {
        dispatch({ type: 'AUTH', data: {result, token}})
        history.push('/')
      } catch (error) {
        console.log(error);
      }
  };

  const googleFailure = (error) => {
    console.log(error)
      console.log("Google Sign In was unsuccessful. Try Again Later")
  };
  

  return (
    <div>
      <form className="user-reg-form" onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <div id="user-reg-radio-btn-container">
              <input
                type="radio"
                id="reg-user-radio-btn"
                name="identity-type"
                value="reg-user"
                defaultChecked
                onClick={() => setisLandLord(false)}
              />
              <label htmlFor="reg-user-radio-btn">I am not a landlord</label>
              <input
                type="radio"
                id="landlord-radio-btn"
                name="identity-type"
                value="landlord"
                onClick={() => setisLandLord(true)}
              />
              <label htmlFor="landlord-radio-btn">I am a landlord</label>
            </div>
            <br />
            <label htmlFor="firstname-input">First Name:</label>
            <input
              type="text"
              id="firstname-input"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastname-input">Last Name:</label>
            <input
              type="text"
              id="lastname-input"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="username-input">Username:</label>
            <input
              type="text"
              id="username-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </>
        )}

        <label htmlFor="email-input">Email:</label>
        <input
          type="email"
          id="email-input"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password-input">Password:</label>
        <input
          type="password"
          id="password-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
        <GoogleLogin
          clientId="875673568-t68j7u11cqvga2m7h9ulemt3ue4fk1g0.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="google-login-button"
              onClick={renderProps.onClick}
            >Google Login</button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
        <button onClick={switchMode}>
          {isSignup
            ? "Already have an account? Log in!"
            : "Don't have an account? Sign Up!"}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
