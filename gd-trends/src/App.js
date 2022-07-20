import './App.css';
import Header from './components/Header';
import Search from './components/Search';
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
        <div></div>
        <div></div>
        <Sounds/>
      </div>
    </>
  );
}

export default App;
