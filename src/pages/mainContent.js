import React,{useContext} from "react";
import HomeScreen from "./home";
import SearchScreen from "./search";
import { AppStateContext } from "../App";

const MainContent = () =>{
    const {appState,setAppState} = useContext(AppStateContext);
    const {currentPage} = appState;

    if(currentPage?.page === 'search') return <SearchScreen/>;
    return <HomeScreen/>;
}

export default MainContent;