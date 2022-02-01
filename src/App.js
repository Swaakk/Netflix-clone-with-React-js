import React from 'react';
import Banner from './component/Banner/Banner,';
import NavBar from './component/Navbar/NavBar';
import RowPost from './component/RowPost/RowPost';
import "./App.css"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  )   
}

export default App;
