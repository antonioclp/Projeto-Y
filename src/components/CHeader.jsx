import React from "react";

// Style
import "../styles/components/CHeader.css";
import { useNavigate } from "react-router-dom";

export default function CHeader() {
  const navigate = useNavigate();

  const onClickFunction = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="home-hdr">
      <div className="hdr--general">
        <span><a href="/">Home</a></span>
        <button onClick={onClickFunction}>Logout - {`going to be removed`}</button>
      </div>
      <div className="home-hdr--logo">
        <img src="/src/imgs/y-logo-white.png" />
      </div>
      <div className="hdr--search">
        <input type="text" placeholder="Search in Y" />
        <button>
          <img src="/src/imgs/lupe.png" />
        </button>
      </div>
    </header>
  );
}
