import React, { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "zaidalicodex@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/zaidcodex",
      color: "#c9a0f0",
      glow: "rgba(201,160,240,0.4)",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "#4cc9f0",
      glow: "rgba(76,201,240,0.4)",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: "Email",
      href: `mailto:${email}`,
      color: "#f72585",
      glow: "rgba(247,37,133,0.4)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ct-section {
          position: relative;
          overflow: hidden;
          padding: 6rem 1.5rem 4rem;
          background:
            radial-gradient(ellipse 70% 60% at 50% 0%,   rgba(114,9,183,0.22)  0%, transparent 60%),
            radial-gradient(ellipse 55% 50% at 10% 100%, rgba(247,37,133,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 90% 80%,  rgba(67,97,238,0.15)  0%, transparent 60%),
            linear-gradient(180deg, #0b0820 0%, #06040f 100%);
        }
        .ct-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }

        /* top separator wave */
        .ct-wave {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f72585, #7209b7, #4361ee, #4cc9f0);
          background-size: 200%;
          animation: ctShimmer 3s linear infinite;
        }
        @keyframes ctShimmer { 0%{background-position:0%} 100%{background-position:200%} }

        /* orbs */
        .ct-orb {
          position: absolute; border-radius: 50%;
          filter: blur(90px); pointer-events: none;
        }
        .ct-orb-1 {
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(114,9,183,0.35), transparent 70%);
          top: -80px; left: 50%; transform: translateX(-50%);
          animation: ctFloat 10s ease-in-out infinite;
        }
        @keyframes ctFloat { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-22px)} }

        /* inner */
        .ct-inner {
          position: relative; z-index: 1;
          max-width: 640px; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 2.8rem;
          text-align: center;
        }

        /* heading */
        .ct-head { animation: ctFadeUp 0.8s ease both; }
        .ct-eyebrow {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.35); margin-bottom: 0.7rem;
        }
        .ct-title {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(2.4rem, 7vw, 3.8rem);
          background: linear-gradient(135deg, #fff 0%, #d8b4fe 45%, #f72585 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1; margin: 0 0 1rem;
        }
        .ct-divider {
          width: 64px; height: 3px; margin: 0 auto; border-radius: 99px;
          background: linear-gradient(90deg, #f72585, #7209b7, #4361ee, #4cc9f0);
          background-size: 200%;
          animation: ctShimmer 3s linear infinite;
        }
        .ct-subtitle {
          font-family: 'DM Sans', sans-serif; font-weight: 300;
          font-size: 1rem; color: rgba(255,255,255,0.45);
          margin-top: 1rem; line-height: 1.7;
        }

        /* social icons */
        .ct-socials {
          display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;
          animation: ctFadeUp 0.8s 0.15s ease both;
        }
        .ct-social-btn {
          display: flex; align-items: center; gap: 0.55rem;
          font-family: 'DM Sans', sans-serif; font-size: 0.88rem; font-weight: 600;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          padding: 0.7rem 1.4rem;
          border-radius: 99px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s, border-color 0.25s, color 0.25s, background 0.25s;
        }
        .ct-social-btn:hover {
          transform: translateY(-5px);
          color: var(--acc);
          border-color: var(--acc);
          background: rgba(255,255,255,0.07);
          box-shadow: 0 0 24px var(--glow), 0 10px 20px rgba(0,0,0,0.25);
        }
        .ct-social-icon {
          color: var(--acc);
          display: flex; align-items: center;
          filter: drop-shadow(0 0 0px var(--acc));
          transition: filter 0.25s;
        }
        .ct-social-btn:hover .ct-social-icon {
          filter: drop-shadow(0 0 8px var(--acc));
        }

        /* email copy pill */
        .ct-email-wrap { animation: ctFadeUp 0.8s 0.3s ease both; }
        .ct-email-pill {
          display: inline-flex; align-items: center; gap: 0.75rem;
          font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500;
          color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 99px; padding: 0.65rem 1.4rem;
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s, background 0.25s, transform 0.2s;
          user-select: none;
        }
        .ct-email-pill:hover {
          border-color: rgba(247,37,133,0.5);
          color: rgba(255,255,255,0.9);
          background: rgba(247,37,133,0.07);
          transform: translateY(-3px);
        }
        .ct-email-pill.copied {
          border-color: rgba(82,214,94,0.6);
          color: #52d65e;
          background: rgba(82,214,94,0.08);
        }
        .ct-copy-icon {
          font-size: 0.85rem; opacity: 0.5;
          transition: opacity 0.2s;
        }
        .ct-email-pill:hover .ct-copy-icon { opacity: 1; }

        /* footer bar */
        .ct-footer {
          position: relative; z-index: 1;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.07);
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.5px;
          animation: ctFadeUp 0.8s 0.45s ease both;
        }
        .ct-footer span {
          background: linear-gradient(90deg, #f72585, #7209b7);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          font-weight: 600;
        }

        @keyframes ctFadeUp {
          from { opacity:0; transform: translateY(22px); }
          to   { opacity:1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          .ct-section { padding: 4rem 1rem 3rem; }
          .ct-social-btn { padding: 0.6rem 1.1rem; font-size: 0.82rem; }
        }
      `}</style>

      <section className="ct-section" id="contacts">
        <div className="ct-wave" />
        <div className="ct-orb ct-orb-1" />

        <div className="ct-inner">
          {/* Heading */}
          <div className="ct-head">
            <span className="ct-eyebrow">Don't be a stranger</span>
            <h2 className="ct-title">Get In Touch</h2>
            <div className="ct-divider" />
            <p className="ct-subtitle">
              Open to new opportunities, collaborations, or just a friendly chat.<br />
              My inbox is always open!
            </p>
          </div>

          {/* Social buttons */}
          <div className="ct-socials">
            {socials.map(({ label, href, color, glow, icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                className="ct-social-btn"
                style={{ "--acc": color, "--glow": glow }}
              >
                <span className="ct-social-icon">{icon}</span>
                {label}
              </a>
            ))}
          </div>

          {/* Email copy pill */}
          <div className="ct-email-wrap">
            <div
              className={`ct-email-pill ${copied ? "copied" : ""}`}
              onClick={copyEmail}
              title="Click to copy"
            >
              {copied ? "✓ Copied!" : email}
              <span className="ct-copy-icon">{copied ? "✓" : "⎘"}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="ct-footer">
          Designed & Built by <span>Zaid Bin Ali</span> · {new Date().getFullYear()}
        </div>
      </section>
    </>
  );
};

export default Contact;