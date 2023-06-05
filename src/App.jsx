import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Talent from "./pages/talent.jsx";
import Profile from "./pages/Profile.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import TalentProfile from "./pages/talentProfile";
import { AuthProvider } from "react-auth-kit";
export default function App() {
  return (
    <>
     <AuthProvider authType = {'localstorage'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/talent" element={<Talent />} />
          <Route path="/talent/:id" element={<TalentProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login/>} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
                  </AuthProvider>
    </>
  );
}
