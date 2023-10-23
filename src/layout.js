import React from "react";
import Menu from "./components/menu";
import Player from "./components/player";

const Layout =() =>{
    return (
        <div className="full-ht full-wid p-lr-10 p-t-10">
            <div className="full-ht base-grid">
                <div className="content-grid">
                    <div className="sidebar">
                        <div className="bg-base card-bordered">
                            <Menu/>
                        </div>
                        <div className="bg-base card-bordered">Library</div>
                    </div>
                    <div className="bg-base card-bordered">Content</div>
                </div>
                <div className="">
                    <Player/>
                </div>
            </div>
        </div>
    )
}

export default Layout