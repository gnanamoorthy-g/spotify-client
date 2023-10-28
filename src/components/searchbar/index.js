import React, { useState,useRef } from "react";
import Search from '../../icons/search.svg';
import './searchbar.scss'

const SearchBar = () =>{
    const [searchQuery,setSearchQuery] = useState('');
    const searchBarRef = useRef();

    const onInputFocus = ()=>{
        searchBarRef.current.classList.add("highlight-border");
    };

    const onInputBlur = () =>{
        searchBarRef.current.classList.remove("highlight-border");
    };

    return (
        <div ref={searchBarRef} className="search-bar flex items-center mx-2">
            <div className="search-icon-container mx-1">
                <img src={Search}></img>
            </div>
            <input
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                className="flex-1 mx-1"
                placeholder="What do you want to listen to?"
            ></input>
        </div>
    )
}

export default SearchBar;