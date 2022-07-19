import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Videos from './components/videos';
import Hashtags from './components/hashtags.js';

function App() {
  return (
    <>
      <Header />
      <Search />
      <div className='content-container'>
        <Videos />
        <div></div>
        <Hashtags/>
      </div>
    </>
  );
}

export default App;
