import React, { useState,useContext, useEffect } from "react";
import { AppStateContext } from "../App";
import { sendRequest } from "../apiController";
const NavigationBar =  React.lazy(() => import('./../components/navigationBar/index'));

const HomeScreen = () =>{
    const {appState,setAppState} = useContext(AppStateContext);
    const [playLists,setPlayLists] = useState([]);

    const getPlayLists = async() =>{
        const { user_details } = appState;
        if(!user_details) return;
        let user_id = user_details.id;
        const resource_url = `/users/${user_id}/playlists`;
        const response = await sendRequest(resource_url);
        console.log(response,"response")
    };

    useEffect(()=>{
        getPlayLists();
    },[])

    return (
        <div className="full-ht">
            <NavigationBar/>
            <div></div>
        </div>
    )
}

export default HomeScreen;