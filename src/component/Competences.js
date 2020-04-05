import React from "react";
import "../styles/Competences.css";

export default function Competences() {
  return (
    <div className="competences">
      <div className="text">
        <div className="competencesEtHobbies">
          <div className="compet">
            <h1>Compétences</h1> <br />
            <div className="">
              <div className="">
                <p>- Pack Office</p>
                <p>- Gestion de Projet </p>
                <p>- Fruity Loops</p>
              </div>
            </div>
          </div>

          <div className="compet">
            <h1>Hobby</h1> <br />
            <div className="">
              <div className="">
                <p>- Nouvelles Technologies</p>
                <p>- Voyages(Brésil,Turquie) </p>
                <p>- Football</p>
              </div>
            </div>
          </div>
        </div>

        <div className="compet">
            <h1>Langues</h1> <br />
            <div className="">
              <div className="">
                <p>- Anglais : Courant</p>
                <p>- Portugais : Courant  </p>
                <p>- Espagnol : Intermédiaire</p>
                <p>- Turc : Bilingue</p>
              </div>
            </div>
            </div>  
          </div>

          <div className="pen">
              <p>Touchez la pointe du crayon</p>
          </div>
    </div>
  );
}
