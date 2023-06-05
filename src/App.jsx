import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Talent from "./pages/talent.jsx";
import Profile from "./pages/Profile.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Contact  from "./pages/ContactUs.jsx";
import Navbar from "./components/navbar";
export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/talent" element={<Profile />} />
          <Route path="/contact" element={<Contact/>} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}
