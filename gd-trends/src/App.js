//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import Videos from './components/videos';
import Hashtags from './components/hashtags.js';
import Sounds from './components/sounds.js';

function App() {
  return (
    <>
      <Header />
      <Search />
      <div className='content-container'>
        <Videos />
        <div></div>
        <Hashtags/>
        <Sounds/>
      </div>
    </>
  );
}

export default App;
