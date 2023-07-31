import React from "react";
import { MENU } from "../utils/menuUtils";

const Menu = () =>{

    const getMenuItem = (item = null) =>{
        if(!item) return
        return (
            <div key={item?.page} className="flex">
                <div></div>
                <div>{item?.label}</div>
            </div>
        )
    }

    const listMenus = () =>{
        return(
            <div>{MENU.map(item => getMenuItem(item))}</div>
        )
    }
    return(listMenus())
}

export default Menu;