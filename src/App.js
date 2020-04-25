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
      listRef: [],
    };

    this.WhoAmI = React.createRef();
    this.Exp = React.createRef()
  }


  

  componentDidMount() {
    const {listRef} = this.state
     
    listRef.push(
      {
      ref: this.WhoAmI,
      title: "Qui suis-je",
      },    
      {
      ref: this.Exp,
      title: 'Expériences professionnelles',
    },)

    this.setState({ listRef });

    
  }

  

  render() {
    return (
      <div className="App">
        <Header listRef={this.state.listRef} />
        <Element><WhoAmI></WhoAmI></Element>
        <Element><Exp></Exp></Element>
        <Element><Formation></Formation></Element>
        <Element name='proj'><Projects></Projects></Element>
        <Element><Competences></Competences></Element>
        <Element><Contacts></Contacts></Element>
      </div>
    );
  }
}

export default App;
