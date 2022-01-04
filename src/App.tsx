import React from 'react';
import Nav from './components/Nav';
import Head from './components/Head';
import LoginBar from './components/LoginBar';



function App() {
  return (
    <div className="homepage">
      <LoginBar/>
      <Head />
      <Nav />
      
    </div>
  );
}

export default App;
