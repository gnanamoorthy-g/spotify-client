import React from "react";
import { MENU } from "../utils/menuUtils";

const Menu = () =>{

    const getMenuItem = (item = null) =>{
        if(!item) return;
        return (
            <div key={item?.page} className="flex px-2 cursor-pointer">
                <div className="flex justify-center items-center mx-2">{item?.icon}</div>
                <div className="flex justify-center items-center mx-2">{item?.label}</div>
            </div>
        )
    }

    const listMenu = () =>{
        return(
            <div className="flex flex-column full-ht justify-evenly">{MENU.map(item => getMenuItem(item))}</div>
        )
    }
    return listMenu()
}

export default Menu;