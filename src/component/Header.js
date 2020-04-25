import React from "react";
import "../styles/Header.css";

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;



const Header = (props) => {

// const scrollToRef = (props) => window.scrollTo(0, props.current.offsetTop)

// const myRef = props.listRef[0]
// const executeScroll = () => scrollToRef(myRef)


const handleScrollTo = (props) => {scroller.scrollTo('proj', {
  duration: 1500,
  delay: 100,
  smooth: true,
  // offset: 50, // Scrolls to element + 50 pixels down the page
  
})}

  return (
   
    <div className="head">
      <div className="header">
        <h1>Mehmet Can OZMEN</h1>
        <div style={{display:'flex', justifyContent:'column'}} >
          {props.listRef.map((ref,i) => (
            <span style={{color:'blue', margin:'10px'}} key={i} onClick={handleScrollTo}>{ref.title}</span>
          ))}
        </div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

  );
}

export default Header;

