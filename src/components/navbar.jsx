import React from "react";
import { CgProfile } from "react-icons/cg";
import "./navbar.css";
import Img from "../components/yehia bakkar branding-30.svg";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
  const signOut = useSignOut();

  const [openProfile, setOpenProfile] = useState(false);
  const userData = useAuthUser();

  function togell() {
    let element = document.querySelector(".sideBar-home");
    element.classList.toggle("open");
  }

  const [cliked, isclicked] = useState(false);

  if (window.innerWidth < 700) {
    return (
      <div>
        <GiHamburgerMenu
          className="burger-icon"
          onClick={() => {
            togell();
            isclicked(!cliked);
          }}
        />
        <div className="sideBar-home">
          <div className="Togell-links">
            {cliked && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    );
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
            {userData()?._id ? (
              <span
                className="profile-username"
                onClick={() => setOpenProfile(!openProfile)}
              >
                {userData().email} <CgProfile />
                {openProfile && (
                  <span className="profile-dropdown">
                    <Link to="/profile">Profile</Link>
                    <button onClick={() => signOut()}>Logout</button>
                  </span>
                )}
              </span>
            ) : (
              <Link to="/login" className="login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
