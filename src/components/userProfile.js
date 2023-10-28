import React, { useEffect,useContext, useState } from "react";
import { AppStateContext } from "../App";
import { fetchUserProfile } from "../utils/utilFunctions";
import Profile from '../icons/profile.svg'

const UserProfile = () =>{
    const {appState,setAppState} = useContext(AppStateContext);
    const { user_details } = appState;

    const [userProfile,setUserProfile] = useState(user_details);

    const getUserProfile = async () =>{
        let user_response = await fetchUserProfile();
        setAppState({...appState,user_details : user_response?.data || null})
    }

    useEffect(()=>{
        if(user_details) return;
        getUserProfile();
    },[]);

    return (
        <div className="user-profile cursor-pointer" title={userProfile.display_name}>
            <div className="flex items-center justify-center">
                <img src={Profile}/>
            </div>
        </div>
    )
};

export default UserProfile;