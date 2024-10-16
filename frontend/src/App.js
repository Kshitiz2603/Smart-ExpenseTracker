import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./app/@sys/Home/Home";
import Header from "./app/@sys/Header/Header";
import Login from "./app/@sys/Login/Login";
import Profile from "./app/@sys/Profile/Profile";
import { Footer } from "antd/es/layout/layout";
import Dashboard from "./app/@sys/Dashboard/Dashboard";
import './App.css';

function App() {
  return (
    <>
      <div className="rootPage-wrapper">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
