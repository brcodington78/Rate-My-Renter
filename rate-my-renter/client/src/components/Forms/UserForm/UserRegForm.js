import React, { useState, useEffect } from "react";

function UserForm({isSignup, setIsSignup}) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [isLandLord, setisLandLord] = useState(false)

  console.log("setIs", setIsSignup)
  console.log("isSi", isSignup)
  // useEffect(() => {
  //   let firstNameInput = document.querySelector("#firstname-input");
  //   firstNameInput.focus()
  // }, [])

  function handleSubmit(e) {
    e.preventDefault()
  }

  function switchMode(e) {
    e.preventDefault()
    setIsSignup(!isSignup)
  }
  

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
        <button onClick={switchMode}>
          {isSignup ? "Already have an account? Log in!" : "Don't have an account? Sign Up!"}
          </button>
      </form>
    </div>
  );
}

export default UserForm;
