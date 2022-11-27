import React from "react";
import babycare from '../img/BabyCare.png';
import {FaUserAlt } from "react-icons/fa";

function HeaderApp() {
    return (
        <> 
<header className="app-bar">
  <div className="app-bar__brand">
        <img src={babycare}  alt="logo-apps" />
  </div>
  <nav className="app-bar__navigation">
    <ul>
      <li><a href="#/">Home</a></li>
      <li><a href="#/article">Article</a></li>
      <li><a href="#/reminder">Reminder</a></li>
      <li><a href="#/baby-check">Baby-Check</a></li>
      <li><button className="Settings"><FaUserAlt />  </button></li>              
    </ul>
  </nav>
</header>

        </>
        
    )
}

export default HeaderApp;