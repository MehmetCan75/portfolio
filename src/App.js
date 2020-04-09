import React, { Component } from 'react';
import Header from './component/Header';
import WhoAmI from './component/WhoAmI';
import Exp from './component/Exp';
import Formation from './component/Formation'
import Competences from './component/Competences'
import Contacts from './component/Contacts'
import Projects from './component/Projects'
import List from './component/List'

import './App.css';

 

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listRef: []
    };

    // Creation des Refs
    this.WhoAmI = React.createRef();
    this.Exp = React.createRef();
    this.Formation = React.createRef();
    this.Projects = React.createRef()

  }



  componentDidMount() {
    const {listRef} = this.state

    listRef.push({
      id: 1,
      ref: this.WhoAmI,
      title: 'Qui suis-je',
    },
    {
      id: 2,
      ref: this.Exp,
      title: 'Expériences professionnelles',
    },
    {
      id:3,
      ref: this.Formation,
      title: 'Formations',
    },
    {
      id:4,
      ref: this.Projects,
      title: 'Projets',
    }
    
    
    )

    this.setState({listRef});
  }




render (){
  const {listRef} = this.state
  return (
    <div className="App">
      <Header listRef={listRef}></Header>
      <WhoAmI></WhoAmI>
      <Exp></Exp>
      {/* <List></List> */}
      <Formation></Formation>
      <Projects></Projects>
      <Competences></Competences>
      <Contacts></Contacts>
    </div>
  );
}
}

export default App;
