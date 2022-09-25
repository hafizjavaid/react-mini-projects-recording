/* eslint-disable jsx-a11y/anchor-is-valid */
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
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Shop</a>
          <a href="#">Admin</a>
        </div>
        <div className="icons">
          <span className="icon">
            <i className="fas fa-search"></i>
          </span>
          <span className="icon">
            <span className="number">13</span>
            <i className="far fa-heart"></i>
          </span>
          <span className="icon">
            <span className="number">5</span>
            <i className="fas fa-shop"></i>
          </span>
          <span className="menu" onClick={() => setMobileNav(!mobileNav)}>
            <svg
              width={48}
              height={48}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75 16H38.25"
                stroke="#443c37"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
              <path
                d="M9.75 24H38.25"
                stroke="#443c37"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
              <path
                d="M9.75 32H38.25"
                stroke="#443c37"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className={`mobile-nav ${mobileNav ? "active" : ""}`}>
        <div className="links">
          <a onClick={() => setMobileNav(!mobileNav)} href="#">
            Home
          </a>
          <a onClick={() => setMobileNav(!mobileNav)} href="#">
            Blog
          </a>
          <a onClick={() => setMobileNav(!mobileNav)} href="#">
            Shop
          </a>
          <a onClick={() => setMobileNav(!mobileNav)} href="#">
            Admin
          </a>
        </div>
      </div>
    </nav>
  );
};
