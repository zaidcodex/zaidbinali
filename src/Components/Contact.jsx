import React, { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "zaidalicodex@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes shimmerLine {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.4); }
        }

        .ct-section {
          position: relative;
          width: 100%;
          background: #000000;
          font-family: 'DM Sans', sans-serif;
          padding: 30px 0 20px;
          overflow: hidden;
        }

        /* faint orb */
        .ct-section::before {
          content: '';
          position: absolute;
          width: 500px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,61,232,0.18), transparent 70%);
          top: -80px; left: 50%;
          transform: translateX(-50%);
          filter: blur(80px);
          pointer-events: none;
        }

        /* shimmer lines */
        .ct-top-line, .ct-bottom-line {
          position: absolute;
          left: 0; right: 0; height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(108,61,232,0.5) 20%,
            rgba(167,139,250,1) 50%,
            rgba(108,61,232,0.5) 80%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmerLine 4s linear infinite;
        }
        .ct-top-line    { top: 0; }
        .ct-bottom-line { bottom: 0; animation-delay: -2s; }

        /* inner row */
        .ct-row {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr auto auto auto auto;
          align-items: center;
          gap: 0 40px;
          animation: fadeUp 0.7s ease both;
        }
        @media (max-width: 900px) {
          .ct-row {
            grid-template-columns: 1fr 1fr;
            gap: 28px 32px;
          }
          .ct-btn-wrap { grid-column: 1 / -1; }
        }
        @media (max-width: 540px) {
          .ct-row { grid-template-columns: 1fr; }
          .ct-btn-wrap { grid-column: auto; }
        }

        /* left heading */
        .ct-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #7c6ff7;
          margin-bottom: 6px;
          align-item:start;
        }
        .ct-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: #fff;
          margin: 0 0 8px;
          line-height: 1.15;
          text-align:start;
        }
        .ct-sub {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.38);
          margin: 0;
          line-height: 1.5;
          max-width: 320px;
        }

        /* contact item */
        .ct-item {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .ct-item:hover { opacity: 0.8; }

        .ct-item-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ct-item-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.38);
          margin-bottom: 3px;
          font-weight: 500;
        }
        .ct-item-value {
          font-size: 0.88rem;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
        }

        /* divider between items */
        .ct-divider-v {
          width: 1px;
          height: 48px;
          background: rgba(255,255,255,0.08);
          flex-shrink: 0;
        }
        @media (max-width: 900px) { .ct-divider-v { display: none; } }

        /* Let's Talk button */
        .ct-btn-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .ct-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6c3de8, #4f28c4);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
          box-shadow: 0 0 24px rgba(108,61,232,0.4);
        }
        .ct-btn:hover {
          background: linear-gradient(135deg, #7c4ff7, #5a2fd4);
          transform: translateY(-2px);
          box-shadow: 0 0 36px rgba(108,61,232,0.6);
          color: #fff;
        }
        .ct-btn-hint {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.3);
          text-align: center;
        }
        .ct-btn-hint .green-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 5px #22c55e;
          margin-right: 5px;
          animation: pulse 2s ease-in-out infinite;
          vertical-align: middle;
        }
      `}</style>

      <section className="ct-section" id="contacts">
        <div className="ct-top-line" />
        <div className="ct-bottom-line" />

        <div className="px-4 px-lg-5" style={{ position: "relative", zIndex: 1 }}>
          <div className="ct-row">

            {/* Left — heading */}
            <div>
              <p className="ct-eyebrow">Let's Work Together</p>
              <h2 className="ct-title">Have a project in mind?</h2>
              <p className="ct-sub">I'm always excited to work on new projects and help turn your ideas into reality.</p>
            </div>

            {/* Email */}
            <div
              className="ct-item"
              onClick={copyEmail}
              title={copied ? "Copied!" : "Click to copy"}
              style={{ cursor: "pointer" }}
            >
              <div className="ct-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(167,139,250,0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <div className="ct-item-label">Email</div>
                <div className="ct-item-value">{copied ? "Copied!" : email}</div>
              </div>
            </div>

            <div className="ct-divider-v" />

            {/* WhatsApp */}
            <a
              href="https://wa.me/923121235828"
              target="_blank"
              rel="noreferrer"
              className="ct-item"
            >
              <div className="ct-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(74,222,128,0.85)">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="ct-item-label">WhatsApp</div>
                <div className="ct-item-value">+92 312 1235828</div>
              </div>
            </a>

            <div className="ct-divider-v" />

            {/* Location */}
            <div className="ct-item" style={{ cursor: "default" }}>
              <div className="ct-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(96,165,250,0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="ct-item-label">Location</div>
                <div className="ct-item-value">Karachi, Pakistan</div>
              </div>
            </div>

            {/* Let's Talk button */}
            <div className="ct-btn-wrap">
              <a href={`mailto:${email}`} className="ct-btn">
                Let's Talk
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </a>
              <div className="ct-btn-hint">
                <span className="green-dot" />
                I usually respond within 12 hours
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;