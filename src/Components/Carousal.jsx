import React, { useEffect, useRef } from "react";
import img from './Image/myimg.png'

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,150,255,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbFloat {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-22px) scale(1.05); }
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.4); }
        }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          60%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: top; opacity: 0; }
        }
        @keyframes iconFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmerLine {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: #000000;
          font-family: 'DM Sans', sans-serif;
          display: flex;
          align-items: center;
        }

        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 70% 60% at 15% 40%, rgba(108,61,232,0.3) 0%, transparent 65%),
            radial-gradient(ellipse 55% 50% at 85% 60%, rgba(108,61,232,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 50% 70% at 50% 0%, rgba(67,97,238,0.18) 0%, transparent 60%);
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.38;
          pointer-events: none;
        }
        .orb-1 {
          width: 380px; height: 380px;
          background: radial-gradient(circle, #6c3de8, transparent 70%);
          top: -60px; left: -60px;
          animation: orbFloat 9s ease-in-out infinite;
          z-index: 1;
        }
        .orb-2 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #3a1fa0, transparent 70%);
          bottom: -40px; right: 0;
          animation: orbFloat 11s ease-in-out infinite;
          animation-delay: -4s;
          z-index: 1;
        }
        .orb-3 {
          width: 220px; height: 220px;
          background: radial-gradient(circle, #4361ee, transparent 70%);
          top: 35%; left: 40%;
          animation: orbFloat 7s ease-in-out infinite;
          animation-delay: -2s;
          z-index: 1;
        }

        .hero-canvas {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          z-index: 2; pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 100px 0 60px;
        }

        .badge-pill {
          display: inline-flex;
          align-items:center;
          gap: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.3px;
          animation: fadeUp 0.7s ease both;
        }
        .badge-pill .dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px #22c55e;
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .hero-headline {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.2rem, 3vw, 2rem);
          line-height: 1.08;
          color: #fff;
          margin: 0;
          animation: fadeUp 0.8s 0.1s ease both;
          text-align:start;
        }
        .hero-headline .accent {
          background: linear-gradient(90deg, #7c6ff7, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          font-size: 0.95rem;
          font-weight: 400;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          max-width: 480px;
          animation: fadeUp 0.8s 0.2s ease both;
        }

        .btn-hire {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 32px;
          border-radius: 10px;
          background: #6c3de8;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          animation: fadeUp 0.8s 0.3s ease both;
        }
        .btn-hire:hover { background: #5a2fd4; color: #fff; transform: translateY(-2px); }

        .btn-projects {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 10px;
          background: transparent;
          color: rgba(255,255,255,0.85);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.2);
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          animation: fadeUp 0.8s 0.35s ease both;
        }
        .btn-projects:hover {
          border-color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.05);
          color: #fff;
          transform: translateY(-2px);
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          animation: fadeUp 0.8s 0.45s ease both;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,0.5);
          font-size: 0.88rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        .social-link:hover { color: rgba(255,255,255,0.9); }
        .social-link svg { width: 18px; height: 18px; fill: currentColor; }

        .photo-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 1s 0.2s ease both;
        }

        .photo-circle {
          position: absolute;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, #4a20b0 0%, #2a0d6e 60%, transparent 100%);
          left: 50%; top: 50%;
          transform: translate(-50%, -52%);
          z-index: 0;
        }

        .hero-photo-img {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 420px;
          height: 400px;
          object-fit: cover;
          object-position: top center;
          display: block;
          margin: 0px ;
          margin-bottom: 84px ;
          border-radius:150px;
          filter: drop-shadow(0 20px 60px rgba(108,61,232,0.4));
        }

        .float-card {
          position: absolute;
          background: rgba(20,16,50,0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.85);
          font-size: 1.15rem;
          z-index: 3;
          box-shadow: 0 8px 32px rgba(0,0,0,0.35);
        }
        .float-card.code {
          width: 52px; height: 52px;
          top: 18%; left: 2%;
          animation: iconFloat 4s ease-in-out infinite;
          font-family: monospace; font-size: 0.9rem; color: #a78bfa; font-weight: 700;
        }
        .float-card.db {
          width: 52px; height: 52px;
          top: 30%; right: 2%;
          animation: iconFloat 5s ease-in-out infinite;
          animation-delay: -1.5s;
        }
        .float-card.terminal {
          width: 52px; height: 52px;
          bottom: 28%; left: 6%;
          animation: iconFloat 4.5s ease-in-out infinite;
          animation-delay: -0.8s;
          font-family: monospace; font-size: 0.85rem; color: #a78bfa; font-weight: 700;
        }

        .dot-deco {
          position: absolute;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          z-index: 2;
        }
        .dot-deco.d1 { top: 48%; left: 8%; }
        .dot-deco.d2 { top: 60%; right: 4%; }

        .avail-card {
          position: absolute;
          bottom: 10%;
          right: -5%;
          background: rgba(10,7,28,0.92);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 280px;
          z-index: 4;
          box-shadow: 0 8px 40px rgba(0,0,0,0.5);
          animation: fadeUp 1s 0.6s ease both;
        }
        .avail-card .info { flex: 1; }
        .avail-card .avail-title {
          display: flex; align-items: center; gap: 7px;
          font-size: 0.9rem; font-weight: 700; color: #fff;
          margin-bottom: 3px;
        }
        .avail-card .avail-title .green-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #22c55e; box-shadow: 0 0 6px #22c55e;
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        .avail-card .avail-sub {
          font-size: 0.78rem; color: rgba(255,255,255,0.45); margin: 0;
        }
        .btn-talk {
          background: #6c3de8;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 9px 16px;
          font-size: 0.82rem;
          font-weight: 700;
          white-space: nowrap;
          cursor: pointer;
          display: flex; align-items: center; gap: 6px;
          transition: background 0.2s;
          text-decoration: none;
        }
        .btn-talk:hover { background: #5a2fd4; color: #fff; }

        /* ── THIN SHIMMER BOTTOM LINE ── */
        .hero-bottom-line {
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
          z-index: 5;
        }

        .str{
        align-items:start;
        text-align:start;
        }

        @media (max-width: 768px) {
          .avail-card { right: 0; bottom: 5%; min-width: 240px; }
          .photo-circle { width: 240px; height: 240px; }
          .float-card.db { right: 0; }
          .str{
        text-align:center;
        }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-bg" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <canvas ref={canvasRef} className="hero-canvas" />

        <div className="hero-inner">
          <div className="px-4 px-lg-5">
            <div className="row align-items-center g-5">

              {/* ── LEFT ── */}
              <div className="col-12 col-lg-6 ">
                <div className="mb-4 str">
                  <span className="badge-pill">
                    <span className="rocket">🚀</span>
                    Available for Freelance Projects
                    <span className="dot" />
                  </span>
                </div>

                <h1 className="hero-headline mb-4 str">
                  I build fast, modern<br />
                  SaaS apps and admin<br />
                  dashboards that{" "}
                  <span className="accent">help<br />businesses grow.</span>
                </h1>

                <p className="hero-sub mb-4">
                  Full-stack developer specializing in React, Node.js, and modern
                  web technologies. I build scalable, user-friendly applications
                  that solve real-world problems.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a href="#contact" className="btn-hire">
                    Hire Me <span style={{ fontSize: "1.05rem" }}>↗</span>
                  </a>
                  <a href="#projects" className="btn-projects">
                    View Projects <span style={{ fontSize: "1.05rem" }}>↗</span>
                  </a>
                </div>

                <hr style={{ borderColor: "rgba(255,255,255,0.08)", margin: "1.2rem 0" }} />

                <div className="social-links">
                  <a href="https://github.com/zaidcodex/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/zaid-bin-ali-55587538b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://wa.me/923121235828" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a href="mailto:zaidalicodex@gmail.com" className="social-link">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.477.2-.908.52-1.214l.002-.002A1.634 1.634 0 0 1 1.636 3.82H2l10 7.5 10-7.5h.364c.454 0 .866.185 1.164.485l.002.001c.32.306.47.737.47 1.151z"/>
                    </svg>
                    Email
                  </a>
                </div>
              </div>

              {/* ── RIGHT ── */}
              <div className="col-12 col-lg-6">
                <div className="photo-col">
                  <div className="photo-circle" />

                  <div className="float-card code">&lt;/&gt;</div>
                  <div className="float-card db">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(167,139,250,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3"/>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                    </svg>
                  </div>
                  <div className="float-card terminal">&gt;_</div>

                  <div className="dot-deco d1" />
                  <div className="dot-deco d2" />

                  {/* Random guy photo from Unsplash */}
                  <img
                    // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=420&h=500&fit=crop&crop=top&q=80"
                    src={img}
                    alt="Developer"
                    className="hero-photo-img"
                  />

                  <div className="avail-card">
                    <div className="info">
                      <div className="avail-title">
                        <span className="green-dot" />
                        Available for work
                      </div>
                      <p className="avail-sub">I usually respond within 12 hours</p>
                    </div>
                    <a href="#contact" className="btn-talk">
                      Let's Talk
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Thin shimmer bottom line */}
        <div className="hero-bottom-line" />

      </section>
    </>
  );
};

export default Hero;