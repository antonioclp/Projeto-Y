import React from "react";

// Style
import "../styles/components/CHeader.css";

export default function CHeader() {
  return (
    <header className="home-hdr">
      <div className="hdr--search">
        <img src="/src/imgs/y-logo-noback.png" />
        <input type="text" placeholder="Search in Y" />
        <button>
          <img src="/src/imgs/lupe.png" />
        </button>
      </div>
      <div className="hdr--general">
        <a href="/y/profile"><img src="src/imgs/user-default.png" /></a>
        <a href="/">Home</a>
        <img />
      </div>
    </header>
  );
}
