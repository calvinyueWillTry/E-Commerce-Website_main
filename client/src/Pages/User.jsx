import React from "react";
import Registration from "./Signup";
import Login from "../Components/Login";
function Users() {
    return (
        <div>
            <Registration/>
            <p>Already a user?</p>
            <Login/>
        </div>
    )
};
export default Users;