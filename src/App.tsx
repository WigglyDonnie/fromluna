import React from 'react';
import Nav from './components/Nav';
import Head from './components/Head';
import LoginBar from './components/LoginBar';
import SearchContainer from './components/SearchContainer';



function App() {
  return (
    <div className="homepage">
      <LoginBar/>
      <Head />
      <Nav />
      <SearchContainer />
      
    </div>
  );
}

export default App;
