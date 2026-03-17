import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Profile from './pages/Profile.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">

        <Routes>

          <Route path="/" element={<Landing />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/profile" element={<Profile />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;