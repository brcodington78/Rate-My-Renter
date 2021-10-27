import React, {useState} from 'react';
import UserForm from '../Forms/UserForm/UserRegForm.js';



function Auth() {
    let [isSignup, setIsSignup] = useState(false)
    
    return (
        <>
          <h1>{isSignup ? "Sign Up!" : "Log in!" }</h1>
          <UserForm isSignup={isSignup} setIsSignup={setIsSignup}/>  
        </>
    )
}

export default Auth
