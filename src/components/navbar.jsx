import React from "react";
import { CgProfile } from "react-icons/cg";
import "./navbar.css";
import Img from "../components/yehia bakkar branding-30.svg";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };
  function togell() {
    let element = document.querySelector(".sideBar-home")
    element.classList.toggle('open')
  }

  const [cliked, isclicked] = useState(false);

  if (window.innerWidth < 700) {
    return <div>
      <GiHamburgerMenu className="burger-icon" onClick={()=>{togell() ; isclicked(!cliked)}} />
      <div className="sideBar-home">
        <div className="Togell-links">

          { cliked && <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Img} width={50} alt="" />
            <a href="/" className="logo">
              CodiTalent
            </a>
          </div>
          <nav className="navbar-togell">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="/talent">Talents</a>
              </li>
              <li>
                <a href="/contact">ContactUs</a>
              </li>
            </ul>
          </nav>
          </>}

        </div>

      </div>
    </div>
  }
  return (
    <header>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Img} width={100} alt="" />
        <a href="/" className="logo">
          CodiTalent
        </a>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="/talent">Talents</a>
          </li>
          <li>
            <a href="/contact">ContactUs</a>
          </li>
          <li>
            <button className="login" onClick={handleLoginClick}>Login</button>
          </li>
        </ul>
      </nav>
      {showLoginForm && <LoginForm />}

    </header>
  );
}
