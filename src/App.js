import React, { useEffect,createContext, useState } from "react";
import AppRoot from "./appRoot";
import { fetchAccessToken ,fetchUserAccessToken,fetchUserProfile,getAccessToken,getAuthToken,getCookie } from "./utils/utilFunctions";
import { MENU } from "./utils/menuUtils";

export const AppStateContext = createContext(null);

const App = () =>{

    const [appState, setAppState] = useState({
        currentPage: MENU[0],
        is_user_logged_in: false,
        user_details: null,
    });

    const onAuthorizationCallback = async() =>{
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.size) {
            const authorization_key = urlParams.get('code');
            if(!authorization_key) return ;
            document.cookie = `authorization_key=${authorization_key};expires=${null};`
            await fetchUserAccessToken();
            const user_response =  await fetchUserProfile();
            setAppState({ ...appState, is_user_logged_in : true ,user_details : user_response?.data || null });
            console.log("**************Authorized**********************");
            window.history.replaceState(null, '', window.location.pathname);
        }
    }

    const onLoad = async () => {
        let is_user_logged_in = false;
        let user_details = null;

        const access_token  = getAccessToken();
        if(!access_token) await fetchAccessToken();

        const authorization_code = getCookie('authorization_key');
        if(!authorization_code) is_user_logged_in = false
        else is_user_logged_in = true ;

        const auth_token = getAuthToken();
        if(auth_token){
            let user_response =  await fetchUserProfile();
            user_details = user_response?.data || null;
        }

        if(authorization_code && !auth_token){
            await fetchUserAccessToken();
            let user_response =  await fetchUserProfile();
            user_details = user_response?.data || null;
        }

        setAppState({ ...appState, is_user_logged_in,user_details });
        onAuthorizationCallback();
    }

    useEffect(() => {
        onLoad();
    }, []);

    const getContext = () =>{
        return {
            appState,
            setAppState
        };
    }

    return (
        <>
            <AppStateContext.Provider value={getContext()}>
                <div className="dark root-node">
                    <AppRoot />
                </div>
            </AppStateContext.Provider>
        </>
    )
}

export default App