import React from "react";
import { useState } from 'react';
function Login () {
return(
    <div>
        <p>Enter your username</p>
        <input name="username"/>
        <p>Enter your password</p>
        <input name="password"/>
    </div>
)
}; //need mutations file
export default Login;
//exported to User