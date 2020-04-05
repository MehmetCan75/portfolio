import React from 'react';
import Header from './component/Header';
import WhoAmI from './component/WhoAmI';
import Exp from './component/Exp';
import Formation from './component/Formation'
import Competences from './component/Competences'
import Contacts from './component/Contacts'
import Projects from './component/Projects'

import './App.css';

 

function App() {




  return (
    <div className="App">
      <Header></Header>
      <WhoAmI></WhoAmI>
      <Exp></Exp>
      <Formation></Formation>
      <Projects></Projects>
      <Competences></Competences>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
