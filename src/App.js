import React, { Component } from "react";
import Header from "./component/Header";
import WhoAmI from "./component/WhoAmI";
import Exp from "./component/Exp";
import Formation from "./component/Formation";
import Competences from "./component/Competences";
import Contacts from "./component/Contacts";
import Projects from "./component/Projects";
import "./App.css";

var Scroll = require('react-scroll');
var Element = Scroll.Element;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listRef: [      {
        name: "who",
        title: "Qui suis-je",
      },
      {
        name: "formation",
        title: "Formations",
      },
      {
        name: "projets",
        title: "Projets",
      },
      {
        name: "comp",
        title: "Compétences",
      },
      {
        name: "exp",
        title: "Expériences professionnelles",
      }
      ,
      {
        name: "contacts",
        title: "Contacts",
      }
    ],
    };


  }


  render() {
    return (
      <div className="App">
        <Header listRef={this.state.listRef} />
        <Element name='who'><WhoAmI></WhoAmI></Element>
        <Element name="formation"><Formation></Formation></Element>
        <Element name='projets'><Projects></Projects></Element>
        <Element name='comp'><Competences></Competences></Element>
        <Element name='exp'><Exp></Exp></Element>
        <Element name='contacts'><Contacts></Contacts></Element>
      </div>
    );
  }
}

export default App;
