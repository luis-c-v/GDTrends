import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Videos from './components/videos';
import Hashtags from './components/hashtags.js';
import Sounds from './components/sounds.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [ page, setPage ] = useState("discover")

  const buttonFunction = (event, str) => {
    if (str === "search") {
      setPage("search")
    } else {
      setPage("discover")
    }
    console.log("PAGE " + page)
  }

  useEffect(() => {
    setPage(page)
  }, [page])

  return (
    <>
      <Header />
      <Search buttonFunction={buttonFunction}/>
      <div className='content-container'>
        <Videos page={page}/>
        <div></div>
        <div>
          <Hashtags page={page}/>
          <div className='spacer'></div>
          <Sounds/>
        </div>
      </div>
    </>
  );
}

export default App;
