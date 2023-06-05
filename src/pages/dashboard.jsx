import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import { Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';

export default function Dashboard() {
  const [sideVisible, showSidebar] = useState(false);

  return (
    <div className="Dashboard">
      <Sidebar visible={sideVisible} show={showSidebar} />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            <div className={!sideVisible ? 'page' : 'page page-with-sidebar'}>
              <h1>Admin</h1>
            </div>
          }
        />
        <Route
          path="/analytics"
          element={
            <div className={!sideVisible ? 'page' : 'page page-with-sidebar'}>
              <h1>Users</h1>
            </div>
          }
        />
        <Route
          path="/orders"
          element={
            <div className={!sideVisible ? 'page' : 'page page-with-sidebar'}>
              <h1>Orders</h1>
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className={!sideVisible ? 'page' : 'page page-with-sidebar'}>
              <h1>Settings</h1>
            </div>
          }
        />
      </Routes>
      <h1>Hello</h1>
    </div>  
  );
}
