import React,{Suspense, useContext} from "react";
import { AppStateContext } from "../App";

const HomeScreen = React.lazy(()=> import('./home'));
const SearchScreen = React.lazy(()=> import('./search'));

const MainContent = () =>{
    const {appState,setAppState} = useContext(AppStateContext);
    const {currentPage} = appState;

    if(currentPage?.page === 'search'){
        return (
            <Suspense fallback={null}>
                <SearchScreen />
            </Suspense>
        );
    };
    return (
        <Suspense fallback={null}>
            <HomeScreen/>
        </Suspense>
    )
}

export default MainContent;