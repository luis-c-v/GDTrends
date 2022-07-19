import React from 'react'
import './search.css';

const Search= () =>(
    <div className="searchBar">
        <ul className="topSearchList">
            <li className="topSearchItem">
                <form action="/" method="get" >
                    <input
                        className="search-bar"
                        type="text"
                        id="header-search"
                        placeholder="Enter Keywords"
                        name="s" 
                    />
                <button className="searchButton" type="submit"> Search Brand Keywords </button>
                </form> 
            </li>
            <li className="topSearchItem">
                <button className="discoverButton" type="submit"> Discover! </button>
            </li>
        </ul>
    </div>
);
export default Search;

