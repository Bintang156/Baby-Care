import React from "react";
import babycare from "../img/BabyCare.png";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderApp() {
  return (
      <header className="app-bar">
          <img src={babycare} alt="logo-apps" />
        <nav className="app-bar__navigation">
          <ul>
            <li>
              <Link to={"/"}>Home </Link>
            </li>
            <li>
              <Link to={"/article"}>Article</Link>
            </li>
            <li>
              <Link to={"/remainder"}>Remainder</Link>
            </li>
            <li>
              <Link to={"/babycheck"}>BabyCheck</Link>
            </li>
            <li>
              <button className="Settings">
                <FaUserAlt />{" "}
              </button>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default HeaderApp;
