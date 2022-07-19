import React from 'react'
import '../../styles/search.css';

const Search= () =>(
    <div className="search-bar">
        
            <form action='/' method='get' className='search'>
            <div className="grid-container">
                <input 
                    className='search-input'
                    type="text"
                    id="search-bar"
                    placeholder="Enter Keywords"
                />
                <button className='search-button' type='submit'>
                    Search Brand Keywords
                </button>
                <div></div>
                <button className='discover-button' type='submit'>Discover!</button>
                </div>
            </form>
    </div>
);
export default Search;

