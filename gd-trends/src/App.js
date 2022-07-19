import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import Videos from './components/videos';

function App() {
  return (
    <>
      <Header />
      <Search />
      <div className='content-container'>
        <Videos />
        <div></div>
        <div>Placeholder for hashtags</div>
      </div>
    </>
  );
}

export default App;
