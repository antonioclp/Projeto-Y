import React from "react";

// Style
import "../styles/components/CHeader.css";

export default function CHeader() {
  return (
    <header className="home-hdr">
      <div className="hdr--general">
        <span><a href="/">Home</a></span>
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
