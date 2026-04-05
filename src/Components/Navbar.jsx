import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home",     href: "/" },
    { label: "About",    href: "#about" },
    { label: "Skills",   href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contacts" },
  ];

  const dotColors = ["#f72585", "#b5179e", "#7209b7", "#4361ee", "#4cc9f0"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .pf-navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s ease, box-shadow 0.3s ease;
          background: ${scrolled
            ? "rgba(8, 6, 28, 0.92)"
            : "rgba(10, 8, 30, 0.55)"};
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          box-shadow: ${scrolled ? "0 4px 32px rgba(0,0,0,0.45)" : "none"};
        }

        /* Animated gradient top border */
        .pf-navbar::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #f72585, #7209b7, #4361ee, #4cc9f0, #f72585);
          background-size: 200%;
          animation: navShimmer 4s linear infinite;
        }
        @keyframes navShimmer {
          0%   { background-position: 0% }
          100% { background-position: 200% }
        }

        /* Logo */
        .pf-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.45rem;
          background: linear-gradient(135deg, #f72585, #b5179e, #7209b7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          letter-spacing: -0.5px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .pf-logo span {
          background: linear-gradient(135deg, #4cc9f0, #4361ee);
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* Desktop nav links */
        .pf-nav-links {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          list-style: none;
          margin: 0; padding: 0;
        }
        .pf-nav-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          padding: 0.45rem 1rem;
          border-radius: 99px;
          transition: color 0.2s, background 0.2s;
        }
        .pf-nav-links a:hover {
          color: #fff;
          background: rgba(255,255,255,0.08);
        }

        /* Resume pill */
        .pf-resume-btn {
          background: linear-gradient(135deg, #f72585, #7209b7) !important;
          color: #fff !important;
          font-weight: 600 !important;
          padding: 0.45rem 1.25rem !important;
          box-shadow: 0 0 18px rgba(247,37,133,0.4);
          transition: box-shadow 0.25s, transform 0.2s !important;
        }
        .pf-resume-btn:hover {
          box-shadow: 0 0 32px rgba(247,37,133,0.65) !important;
          transform: translateY(-2px);
          background: rgba(255,255,255,0.08) !important;
        }

        /* Hamburger */
        .pf-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 42px; height: 42px;
          padding: 9px;
          border-radius: 10px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer;
          z-index: 1100;
          transition: background 0.2s;
        }
        .pf-hamburger:hover { background: rgba(255,255,255,0.14); }
        .pf-hamburger span {
          display: block;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #f72585, #4361ee);
          transition: all 0.35s cubic-bezier(.68,-.55,.27,1.55);
          transform-origin: center;
        }
        .pf-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .pf-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .pf-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .pf-mobile-menu {
          position: fixed;
          top: 68px; left: 0; right: 0;
          background: rgba(8, 6, 30, 0.97);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 1.5rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          z-index: 999;
          transform: translateY(-8px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .pf-mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        .pf-mobile-menu a {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          padding: 0.8rem 1.2rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }
        .pf-mobile-menu a:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.1);
          color: #fff;
          padding-left: 1.6rem;
        }
        .pf-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .pf-mobile-resume {
          margin-top: 0.5rem;
          background: linear-gradient(135deg, #f72585, #7209b7) !important;
          color: #fff !important;
          border: none !important;
          justify-content: center !important;
          box-shadow: 0 4px 20px rgba(247,37,133,0.35);
          font-weight: 700 !important;
        }
        .pf-mobile-resume:hover {
          padding-left: 1.2rem !important;
          box-shadow: 0 6px 28px rgba(247,37,133,0.5) !important;
        }

        @media (max-width: 768px) {
          .pf-nav-links { display: none; }
          .pf-hamburger { display: flex; }
          .pf-navbar { padding: 0 1.2rem; }
        }
      `}</style>

      <nav className="pf-navbar">
        {/* Logo */}
        <Link to="/" className="pf-logo">
          Port<span>folio</span>
        </Link>

        {/* Desktop Links */}
        <ul className="pf-nav-links">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pf-resume-btn"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div
          className={`pf-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          role="button"
        >
          <span /><span /><span />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`pf-mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map(({ label, href }, i) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            <span className="pf-dot" style={{ background: dotColors[i] }} />
            {label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="pf-mobile-resume"
          onClick={() => setMenuOpen(false)}
        >
          Resume ↗
        </a>
      </div>
    </>
  );
};

export default Navbar;