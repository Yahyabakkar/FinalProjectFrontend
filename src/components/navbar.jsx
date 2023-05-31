  import React from "react";
  import { CgProfile } from "react-icons/cg";
  import "./navbar.css";
  import Img from "../components/yehia bakkar branding-30.svg";
  import LoginForm from "./LoginForm";
  import  { useState } from "react";


  export default function Navbar() {
    const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };
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
              <a href="/talent">Talents</a>
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
