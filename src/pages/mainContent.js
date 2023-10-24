import React,{Suspense, useContext} from "react";
import { AppStateContext } from "../App";

const HomeScreen = React.lazy(()=> import('./home'));
const SearchScreen = React.lazy(()=> import('./search'));

const MainContent = () =>{
    const {appState,setAppState} = useContext(AppStateContext);
    const {currentPage} = appState;

    if(currentPage?.page === 'search'){
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <SearchScreen />
            </Suspense>
        );
    };
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeScreen/>
        </Suspense>
    )
}

export default MainContent;