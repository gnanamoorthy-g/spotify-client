import React, { useEffect,createContext, useState } from "react";
import Layout from "./layout";
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
                    <Layout />
                </div>
            </AppStateContext.Provider>
        </>
    )
}

export default App