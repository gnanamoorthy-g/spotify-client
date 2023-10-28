import React, { useState,useContext } from "react";
import { MENU } from "../utils/menuUtils";
import { AppStateContext } from "../App";

const Menu = () =>{
    const {appState,setAppState} = useContext(AppStateContext)
    const [currentPage,setCurrentPage] = useState(null);

    const onClick = (item) => (event) =>{
        console.log(item,event);
        setCurrentPage(item);
        if(setAppState && (setAppState instanceof Function)){
            setAppState({...appState,currentPage : item})
        }
    }

    const isItemCurrent = (item) =>{
        if(!currentPage || !item) return false;
        return item.page === currentPage.page
    }

    const getMenuItem = (item = null) =>{
        if(!item) return;
        return (
            <div key={item?.page} className={`flex mx-2 px-2 py-2 cursor-pointer rounded hover:font-bold ${isItemCurrent(item) ? 'font-bold' : ''}`} onClick={onClick(item)}>
                <div className="flex justify-center items-center mx-2">{item?.icon}</div>
                <div className="flex justify-center items-center mx-2">{item?.label}</div>
            </div>
        )
    }

    const listMenu = () =>{
        return(
            <div className="flex flex-col full-ht justify-evenly">{MENU.map(item => getMenuItem(item))}</div>
        )
    }
    return listMenu();
}

export default Menu;