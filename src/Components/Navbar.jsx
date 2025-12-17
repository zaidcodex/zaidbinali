import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg position-absolute w-100"
      style={{
        top: 0,
        left: 0,
        backgroundColor: "rgba(20, 20, 20, 0.4)", // transparent dark background
        backdropFilter: "blur(12px)", // adds nice glass effect
        padding: "6px 20px",
        zIndex: 1000, // higher z-index to stay above carousel
        fontFamily: "Sans-serif",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="navbar-brand mt-3" to="#">
          <img
            src="https://www.lianapenn.com/images/logo-white.png"
            alt="Logo"
            style={{ width: "110px", height: "auto" }}
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "white" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div
          className="collapse navbar-collapse justify-content-end mt-5 mx-5"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav text-center">
            <a className="nav-link text-white mx-3" style={{ fontSize: "22px" }} href="/">
              Home
            </a>
            <a className="nav-link text-white mx-3" style={{ fontSize: "22px" }} href="#about">
              About
            </a>
            <a className="nav-link text-white mx-3" style={{ fontSize: "22px" }} href="#skills">
              Skills
            </a>
            <a className="nav-link text-white mx-3" style={{ fontSize: "22px" }} href="#projects">
              Projects
            </a>
            <a className="nav-link text-white mx-3" style={{ fontSize: "22px" }} target="_blank" rel="noopener noreferrer" href="/resume.pdf">
              Resume
            </a>
            <a className="nav-link text-white mx-3" style={{ fontSize: "22px" }} href="#contacts">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;