import React, { useEffect,useContext } from "react";
import { AppStateContext } from "../App";
import { fetchUserProfile } from "../utils/utilFunctions";

const UserProfile = () =>{
    const {appState,setAppState} = useContext(AppStateContext);

    useEffect(()=>{
        const user_response = fetchUserProfile();
        console.log(user_response,"user_response from Profile");
    },[]);

    return (
        <div>User</div>
    )
};

export default UserProfile;