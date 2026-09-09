import React from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    iconBg: "rgba(192,132,252,0.12)",
    title: "React / Next.js Web Apps",
    desc: "Build modern, responsive web applications with React and Next.js",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#60a5fa" stroke="none">
        <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"/>
      </svg>
    ),
    iconBg: "rgba(96,165,250,0.12)",
    title: "Admin Dashboards",
    desc: "Create powerful admin panels and dashboards with analytics & reporting",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    iconBg: "rgba(74,222,128,0.12)",
    title: "SaaS MVP Development",
    desc: "Build scalable SaaS products from idea to market",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    iconBg: "rgba(251,191,36,0.12)",
    title: "Backend APIs (Node.js)",
    desc: "Develop secure and scalable REST APIs with Node.js & Express",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    iconBg: "rgba(248,113,113,0.12)",
    title: "Database & Cloud Integration",
    desc: "MongoDB, Firebase, and cloud services integration",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    iconBg: "rgba(167,139,250,0.12)",
    title: "Bug Fixing & UI Improvements",
    desc: "Fix bugs and improve performance, speed and UI/UX",
  },
];

const Services = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerLine {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .svc-section {
          position: relative;
          width: 100%;
          background: #000000;
          font-family: 'DM Sans', sans-serif;
          padding: 30px 0 30px;
          overflow: hidden;
        }

        /* faint bg orbs matching hero */
        .svc-section::before {
          content: '';
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,61,232,0.18), transparent 70%);
          top: -100px; left: -100px;
          filter: blur(80px);
          pointer-events: none;
        }
        .svc-section::after {
          content: '';
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,61,232,0.12), transparent 70%);
          bottom: -80px; right: -80px;
          filter: blur(80px);
          pointer-events: none;
        }

        /* top thin line matching hero bottom line */
        .svc-top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
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

        /* bottom thin line */
        .svc-bottom-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
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
          animation-delay: -2s;
        }

        /* Header */
        .svc-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #7c6ff7;
          margin-bottom: 8px;
          animation: fadeUp 0.6s ease both;
        }
        .svc-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          color: #fff;
          margin: 0;
          animation: fadeUp 0.7s 0.05s ease both;
        }
        .svc-view-all {
          font-size: 0.9rem;
          font-weight: 600;
          color: #7c6ff7;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s, color 0.2s;
          white-space: nowrap;
          animation: fadeUp 0.7s 0.1s ease both;
        }
        .svc-view-all:hover { color: #a78bfa; gap: 10px; }

        /* Cards grid */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          margin-top: 40px;
        }
        @media (max-width: 1200px) {
          .svc-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .svc-grid { grid-template-columns: 1fr; }
        }

        /* Card */
        .svc-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 24px 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 0;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
          animation: fadeUp 0.7s ease both;
          position: relative;
          overflow: hidden;
        }
        .svc-card:hover {
          background: rgba(108,61,232,0.08);
          border-color: rgba(108,61,232,0.35);
          transform: translateY(-4px);
        }
        .svc-card:nth-child(1) { animation-delay: 0.05s; }
        .svc-card:nth-child(2) { animation-delay: 0.10s; }
        .svc-card:nth-child(3) { animation-delay: 0.15s; }
        .svc-card:nth-child(4) { animation-delay: 0.20s; }
        .svc-card:nth-child(5) { animation-delay: 0.25s; }
        .svc-card:nth-child(6) { animation-delay: 0.30s; }

        /* Icon box */
        .svc-icon-box {
          width: 52px; height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          flex-shrink: 0;
        }

        /* Card title */
        .svc-card-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.98rem;
          color: #fff;
          line-height: 1.35;
          margin-bottom: 10px;
        }

        /* Card desc */
        .svc-card-desc {
          font-size: 0.8rem;
          font-weight: 400;
          color: rgba(255,255,255,0.42);
          line-height: 1.65;
          flex: 1;
          margin-bottom: 18px;
        }

        /* Arrow */
        .svc-arrow {
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          font-size: 0.9rem;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          flex-shrink: 0;
          align-self: flex-start;
        }
        .svc-card:hover .svc-arrow {
          border-color: #6c3de8;
          background: rgba(108,61,232,0.15);
          color: #a78bfa;
        }
      `}</style>

      <section className="svc-section">
        <div className="svc-top-line" />
        <div className="svc-bottom-line" />

        <div className="px-4 px-lg-5">
          {/* Header row */}
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-2">
            <div>
              <p className="svc-eyebrow">What I Do</p>
              <h2 className="svc-title">Services I Offer</h2>
            </div>
            <a href="#services" className="svc-view-all">
              View All Services <span>→</span>
            </a>
          </div>

          {/* Cards */}
          <div className="svc-grid">
            {services.map((s, i) => (
              <div className="svc-card" key={i}>
                <div className="svc-icon-box" style={{ background: s.iconBg }}>
                  {s.icon}
                </div>
                <div className="svc-card-title">{s.title}</div>
                <div className="svc-card-desc">{s.desc}</div>
                <div className="svc-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;