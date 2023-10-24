import React, { useEffect,createContext, useState } from "react";
import AppRoot from "./appRoot";
import { fetchAccessToken } from "./utils/utilFunctions";

export const AppStateContext = createContext(null);

const App = () =>{
    const [appState,setAppState] = useState({})

    useEffect(()=>{
        fetchAccessToken();
    },[]);

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