import React from "react";
import "../styles/Contacts.css";

export default function Contacts() {
  return (
    <div className="Contacts">

    <a href="http://www.linkedin.com/in/mehmetcanozmen"><div className="Linkedin"></div></a>
    <a href="https://github.com/MehmetCan75/"><div className="GitHub"></div></a>
    <a href="mailto:mehmetozmenfb@gmail.com"><div className="Email"></div></a>


    <div className="phoneNumber">
    <div className="phone"></div> <p className="num">+33688548816</p>
    </div>
    </div>
  );
}