import React from "react";
import "../styles/Formation.css";

export default function Formation() {
  return (
    <div className="formation">

      <div className="formations">
        
        <div className="">
        <h1>Formation</h1> <br/>
          <h2>IronHack</h2>

          <div className="">
            <div>
              <a href="http://www.ironhack.com"><p className="ironHackLogo"></p></a>
            </div>
            <div className="">
              <p>Formation Développeur Web Fullstack</p>
              <p>Janv 2020 – Mars 2020</p>
              <p>Paris</p>
            </div>
          </div>
          <ul>
            <li className="CodeAndLogo"> - React.js <span className="imgCode"></span></li> 
            <li className="CodeAndLogo"> - JavaScript <span className="imgCodeJS"></span></li>
            <li className="CodeAndLogo"> - Node.js <span className="imgCodeNode"></span></li>
            <li className="CodeAndLogo"> - HTML <span className="imgCodeHTML"></span></li>
            <li className="CodeAndLogo"> - CSS <span className="imgCodeCSS"></span></li>
          </ul>
        </div>

        <div className="formationsAcademiques">
        <h1>Formation Académique</h1> <br/>
          <h2>Master 1 en Economie Internationale</h2>

          <div className="logoAndDetails">
            <div>
            <a href="https://www.pantheonsorbonne.fr"><p className="sorbonneLogo"></p></a>
            </div>
            <div className="schoolInfo">
              <p>Panthéon-Sorbonne</p>
              <p>Juin 2012</p>
              <p>Paris</p>
            </div>
          </div>

          <h2>Licence en Science de l'Economie</h2>

          <div className="logoAndDetails">
            <div>
            <a href="https://www.pantheonsorbonne.fr"><p className="sorbonneLogo"></p></a>
            </div>
            <div className="schoolInfo">
              <p>Panthéon-Sorbonne</p>
              <p>Juin 2011</p>
              <p>Paris</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
