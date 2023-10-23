import React, { useEffect } from "react";
import Layout from "./layout";
import { fetchAccessToken } from "./utils/utilFunctions";

const App = () =>{

    useEffect(()=>{
        fetchAccessToken();
    },[]);

    return (
        <div className="dark root-node">
            <Layout/>
        </div>
    )
}

export default App