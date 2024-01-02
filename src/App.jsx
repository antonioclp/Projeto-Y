import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

// Styles
import "./styles/Reset.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
