import React from 'react';
import "../styles/Header.css";

export default function Header() {

  const handleScrollToStats = () => {
    window.scrollTo({
        top: 725,
        behavior: 'smooth' 
    })
}

  return (
    <div className="head">
      <div className="header">
        <h1>Mehmet Can OZMEN</h1>
        <div className="arrow" onClick={handleScrollToStats}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}



