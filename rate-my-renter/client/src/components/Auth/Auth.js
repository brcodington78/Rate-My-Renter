import React from 'react';
import UserForm from '../Forms/UserForm/UserRegForm.js'


function Auth() {

    const isSignup = false;
    return (
        <>
          <h1>{isSignup ? "Sign Up!" : "Log in!" }</h1>
          <UserForm />  
        </>
    )
}

export default Auth
