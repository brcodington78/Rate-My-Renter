import React, { useState } from "react";

function UserForm() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());
    console.log(result);
  }

  return (
    <div>
      <h1>Sign Up Here!</h1>
      <form className="user-reg-form" onSubmit={registerUser}>
        <input
          type="text"
          id="username-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
