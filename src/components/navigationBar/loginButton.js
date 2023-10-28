import React from "react";
import { authorizeApp } from "../../apiController";

const LoginButton = () =>{
    return <button className="login-btn" onClick={authorizeApp}>Login with Spotify</button>
}

export default LoginButton;