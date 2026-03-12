import React from "react";
import './Login.css'

function LoginPage(){

return(
    // This is a Login Page
    <div className="login">
        <h2>Login</h2>
    <form>
    <label>Username</label>
    <input type="text" placeholder=" Enter your username " />

    <label>Password</label>
    <input type="password" placeholder="Password"  />

    </form>
    </div>
)

}

export default LoginPage
