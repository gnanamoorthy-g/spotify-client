import React, { useEffect, useState,useContext } from "react";
import { AppStateContext } from "../../App";
import { sendRequest } from "../../apiController";
import LibraryItem from "./libraryItem";

import library from '../../icons/library.svg';
import plus from '../../icons/plus.svg';

const Library = () =>{
    const {appState,setAppState} = useContext(AppStateContext);
    const [libItems,setLibItems] = useState([]);

    const getPlayLists = () =>{
        const { user_details } = appState;
        if(!user_details) return;
        let user_id = user_details.id;
        const resource_url = `/users/${user_id}/playlists`;
        const response = sendRequest(resource_url);
        return response;
    };

    const getLibraryItems = () => {
        const playlists = getPlayLists();
        return Promise.all([playlists]);
    }

    useEffect(() =>{
        let items= [];
        const promises = getLibraryItems();
        promises
        .then(responses =>{
            responses.forEach(response => {
                items.push(...response.data.items);
            });
            console.log(items,"libItems");
            setLibItems(items);
        }).catch((error) =>{
            console.log(error,"error");
        })
    },[])


    return (
        <div className="full-ht">
            <div className="">
                <div className="flex items-center justify-between p-2 mx-2">
                    <div className="flex">
                        <div className="icon-container mx-2">
                            <img src={library}/>
                        </div>
                        <div className="mx-2 flex items-center"> Your Library</div>
                    </div>
                    <div className="p-2">
                        <div className="icon-container cursor-pointer" title="Create playlist">
                            <img src={plus} />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Library;