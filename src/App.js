import React from 'react';
import Banner from './component/Banner/Banner,';
import NavBar from './component/Navbar/NavBar';
import RowPost from './component/RowPost/RowPost';
import {action,orginals} from "./urls/urls"
import "./App.css"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" /> 
      <RowPost url={action} title="Action" /> 
    </div>
  )   
}

export default App;
