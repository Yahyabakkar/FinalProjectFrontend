import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/navbar.jsx";
import Home from "./pages/Home.jsx";
import Talent from "./pages/talent.jsx";
import Profile from "./pages/Profile.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="talent" element={<Talent />} />
          <Route path="talent" element={<Profile />} />

        </Routes>
      </Router>
    </>
  );
}
