import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

// Errors
import { ErrorComponent } from "./components";

// Styles
import "./styles/Reset.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/y/:username" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorComponent message="Page Not Found"  status={404} />} />
      </Routes>
    </BrowserRouter>
  );
}
