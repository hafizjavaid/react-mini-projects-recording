/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div className="nav-inner">
        <span className="logo">Logo.</span>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
