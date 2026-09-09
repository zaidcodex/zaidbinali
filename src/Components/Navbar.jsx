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
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Skills",   href: "#skills" },
    { label: "Contact",  href: "#contacts" },
  ];

  const dotColors = ["#f72585", "#b5179e", "#7209b7", "#4361ee", "#4cc9f0", "#7209b7"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .pf-navbar {
          position: relative;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          height: 60px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 0 2.5rem;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s ease, box-shadow 0.3s ease;
          background: ${scrolled ? "rgba(8,6,20,0.97)" : "rgba(8,6,20,0.85)"};
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          box-shadow: ${scrolled ? "0 4px 32px rgba(0,0,0,0.5)" : "none"};
        }

        /* Logo */
        .pf-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          justify-self: start;
        }
        .pf-logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #6c3de8, #4f28c4);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          color: #fff;
          letter-spacing: -1px;
          flex-shrink: 0;
        }
        .pf-logo-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #ffffff;
          white-space: nowrap;
        }

        /* Desktop nav links */
        .pf-nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0rem;
          list-style: none;
          margin: 0; padding: 0;
        }
        .pf-nav-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 400;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          padding: 0.4rem 1rem;
          border-radius: 99px;
          transition: color 0.2s, background 0.2s;
        }
        .pf-nav-links a:hover,
        .pf-nav-links a.active {
          color: #fff;
        }
        .pf-nav-links a.active {
          color: #7c6ff7;
          font-weight: 500;
        }

        /* Right side */
        .pf-right {
          justify-self: end;
          display: flex;
          align-items: center;
        }

        /* Hire Me button */
        .pf-hireme-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff !important;
          text-decoration: none;
          padding: 0.4rem 1rem;
          border-radius: 8px;
          background: #6c3de8;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: background 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .pf-hireme-btn:hover {
          background: #5a2fd4;
          transform: translateY(-1px);
        }
        .pf-hireme-btn .arrow {
          font-size: 1rem;
          line-height: 1;
        }

        /* Hamburger */
        .pf-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px; height: 40px;
          padding: 9px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          z-index: 1100;
          transition: background 0.2s;
        }
        .pf-hamburger:hover { background: rgba(255,255,255,0.12); }
        .pf-hamburger span {
          display: block;
          height: 2px;
          border-radius: 2px;
          background: #fff;
          transition: all 0.35s cubic-bezier(.68,-.55,.27,1.55);
          transform-origin: center;
        }
        .pf-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .pf-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .pf-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .pf-mobile-menu {
          position: fixed;
          top: 60px; left: 0; right: 0;
          background: rgba(8,6,20,0.98);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
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
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          padding: 0.75rem 1.2rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }
        .pf-mobile-menu a:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.08);
          color: #fff;
          padding-left: 1.6rem;
        }
        .pf-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .pf-mobile-hireme {
          margin-top: 0.6rem;
          background: #6c3de8 !important;
          color: #fff !important;
          border: none !important;
          justify-content: center !important;
          border-radius: 8px !important;
          font-weight: 700 !important;
        }
        .pf-mobile-hireme:hover {
          background: #5a2fd4 !important;
          padding-left: 1.2rem !important;
        }

        @media (max-width: 768px) {
          .pf-nav-links, .pf-right { display: none; }
          .pf-hamburger { display: flex; }
          .pf-navbar { padding: 0 1.2rem;grid-template-columns: 14fr auto; }
        }
      `}</style>

      <nav className="pf-navbar">
        {/* Logo — left */}
        <Link to="/" className="pf-logo">
          {/* <div className="pf-logo-icon">ZB</div> */}
          <span className="pf-logo-name">Hamza Ali</span>
        </Link>

        {/* Nav links — center */}
        <ul className="pf-nav-links">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} >{label}</a>
            </li>
          ))}
        </ul>

        {/* Hire Me button — right */}
        <div className="pf-right">
          <a
            href="#contact"
            className="pf-hireme-btn"
          >
            Hire Me <span className="arrow">↗</span>
          </a>
        </div>

        {/* Hamburger (mobile) */}
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
          href="#contact"
          className="pf-mobile-hireme"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me ↗
        </a>
      </div>
    </>
  );
};

export default Navbar;