import React from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaChartBar,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const ICON_SIZE = 20;

function Sidebar({ visible, show }) {
  return (
    <>
      <div className="mobile-side">
        <button className="mobile-side-btn" onClick={() => show(!visible)}>
          <FaBars size={24} />
        </button>
      </div>
      <side className={!visible ? "sidebar" : ""}>
        <button
          type="button"
          className="side-btn"
          onClick={() => show(!visible)}
        >
          {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
        <div>
          <NavLink className="logo" to="/">
            <img
              src={require("../components/yehia bakkar branding-30.svg")}
              alt="logo"
            />
          </NavLink>
          <div className="links side-top">
            <NavLink to="/analytics" className="side-link">
              <FaChartBar size={ICON_SIZE} />
              <span>Users </span>
            </NavLink>
          </div>
        </div>

        <div className="side-links">
          <NavLink to="/Sign-out" className="side-link">
            <FaSignOutAlt size={ICON_SIZE} />
            <span>Logout</span>
          </NavLink>
        </div>
      </side>
    </>
  );
}

export default Sidebar;
