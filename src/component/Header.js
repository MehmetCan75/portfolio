import React from "react";
import "../styles/Header.css";



const Header = props => {
  const { listRef } = props


const handleScrollToStats = (ref) => {
  console.log(ref)
  window.scrollTo(ref)

}



  // const handleScrollToStats = () => {
  //   window.scrollTo({
  //     "behavior": "smooth",
  //     "top": (0, window.innerHeight)
  // });}




  return (
    <div className="head">
      <div className="header">
        <h1>Mehmet Can OZMEN</h1>
        {/* <div className="arrow" onClick={handleScrollToStats}> */}
        <div>
        {listRef.map((ref,i) =>(
            <button className="title" key={i} onClick={handleScrollToStats}>{ref.title}</button>
        ))}
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

  );
}

export default Header;

