import React from "react";
const NavigationBar =  React.lazy(() => import('./../components/navigationBar/index'));

const HomeScreen = () =>{
    return (
        <div className="full-ht">
            <NavigationBar/>
            <div></div>
        </div>
    )
}

export default HomeScreen;