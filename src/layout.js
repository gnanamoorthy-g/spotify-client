import React from "react";
import Menu from "./components/menu";

const Layout =() =>{
    return (
        <div className="full-ht full-wid p10">
            <div className="full-ht base-grid">
                <div className="content-grid">
                    <div className="sidebar">
                        <div className="bg-base card-brdrd">
                            <Menu/>
                        </div>
                        <div className="bg-base card-brdrd">Library</div>
                    </div>
                    <div className="bg-base card-brdrd">Content</div>
                </div>
                <div className="centered-flex" style={{backgroundColor: 'blueviolet'}}>player</div>
            </div>
        </div>
    )
}

export default Layout