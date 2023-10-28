import React, { useEffect,createContext, useState } from "react";
import AppRoot from "./appRoot";
import { fetchAccessToken ,getAccessToken,getCookie } from "./utils/utilFunctions";

export const AppStateContext = createContext(null);

const App = () =>{
    const [appState,setAppState] = useState({});

    useEffect(() => {
        const access_token  = getAccessToken();
        if(!access_token) fetchAccessToken();
        const authorization_code = getCookie('authorization_key');
        if(!authorization_code){
            setAppState({ ...appState, is_user_logged_in : false });
        }
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.size) {
            const authorization_key = urlParams.get('code');
            if (authorization_key) {
                document.cookie = `${document.cookie}authorization_key=${authorization_key};`
                setAppState({ ...appState, is_user_logged_in : true });
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