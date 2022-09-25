/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="links">
          <a href={undefined}>Home</a>
          <a href={undefined}>Shop</a>
          <a href={undefined}>Admin</a>
          <a href={undefined}>Blog</a>
        </div>
        <div className="icons">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="icon">
            <span className="number">3</span>
            <i className="far fa-heart"></i>
          </div>
          <div className="icon">
            <span className="number">5</span>
            <i className="fas fa-shop"></i>
          </div>
          <div onClick={() => setMobileNav(!mobileNav)} className="menu">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
      <div className={`mobile-nav ${mobileNav ? "active" : ""}`}>
        <div className="links">
          <a onClick={() => setMobileNav(!mobileNav)} href="#">
            Home
          </a>
          <a onClick={() => setMobileNav(!mobileNav)} href="#">
            Shop
          </a>
          <a onClick={() => setMobileNav(!mobileNav)} href="#">
            Blog
          </a>
          <a onClick={() => setMobileNav(!mobileNav)} href="#">
            Admin
          </a>
        </div>
      </div>
    </nav>
  );
};
