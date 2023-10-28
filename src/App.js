import React, { useEffect,createContext, useState } from "react";
import AppRoot from "./appRoot";
import { fetchAccessToken ,fetchUserAccessToken,fetchUserProfile,getAccessToken,getAuthToken,getCookie } from "./utils/utilFunctions";
import { MENU } from "./utils/menuUtils";

export const AppStateContext = createContext(null);

const App = () =>{
    const [appState,setAppState] = useState({
        currentPage : MENU[0],
        is_user_logged_in : false,
        user_details : null
    });

    useEffect(() => {
        const access_token  = getAccessToken();
        if(!access_token) fetchAccessToken();
        const authorization_code = getCookie('authorization_key');
        if(!authorization_code){
            setAppState({ ...appState, is_user_logged_in : false });
        }
        else{
            setAppState({ ...appState, is_user_logged_in : true });
        }
        const auth_token = getAuthToken();
        if(authorization_code && !auth_token){
            fetchUserAccessToken();
            const user_response = fetchUserProfile();
            setAppState({ ...appState, user_details : user_response?.data || null });
            return;
        }
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.size) {
            const authorization_key = urlParams.get('code');
            if (authorization_key) {
                document.cookie = `authorization_key=${authorization_key};expires=${null};`
                fetchUserAccessToken();
                const user_response = fetchUserProfile();
                setAppState({ ...appState, is_user_logged_in : true ,user_details : user_response?.data || null });
                console.log("**************Authorized**********************");
                window.history.replaceState(null, '', window.location.pathname);

            }
        }
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