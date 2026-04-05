import React, { useEffect, useRef } from "react";

const Carousel = () => {
  const canvasRef = useRef(null);

  // Animated particle field on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,180,255,${p.alpha})`;
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
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-root {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 560px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* layered gradient bg */
        .hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 30%, rgba(114,9,183,0.55) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 80% 70%, rgba(247,37,133,0.45) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 50% 10%, rgba(67,97,238,0.4) 0%, transparent 65%),
            linear-gradient(135deg, #050014 0%, #0d0628 40%, #130a2e 100%);
        }

        /* photo with mix-blend */
        .hero-photo {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0.18;
          mix-blend-mode: luminosity;
        }

        /* canvas particles */
        .hero-canvas {
          position: absolute; inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        /* glowing orbs */
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.55;
          animation: orbFloat 8s ease-in-out infinite;
        }
        .hero-orb-1 {
          width: 420px; height: 420px;
          background: radial-gradient(circle, #7209b7, transparent 70%);
          top: -80px; left: -80px;
          animation-delay: 0s;
        }
        .hero-orb-2 {
          width: 360px; height: 360px;
          background: radial-gradient(circle, #f72585, transparent 70%);
          bottom: -60px; right: -60px;
          animation-delay: -3s;
        }
        .hero-orb-3 {
          width: 280px; height: 280px;
          background: radial-gradient(circle, #4361ee, transparent 70%);
          top: 40%; left: 55%;
          animation-delay: -5s;
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-30px) scale(1.06); }
        }

        /* content */
        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 0 1.5rem;
          max-width: 860px;
          width: 100%;
        }

        /* eyebrow tag */
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 99px;
          padding: 0.35rem 1rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 1.6rem;
          animation: fadeUp 0.8s ease both;
        }
        .hero-tag-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #4cc9f0;
          box-shadow: 0 0 8px #4cc9f0;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.4); opacity: 0.6; }
        }

        /* name */
        .hero-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 9vw, 6.5rem);
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin: 0 0 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #e0c8ff 35%, #f72585 65%, #4cc9f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeUp 0.9s 0.15s ease both;
          filter: drop-shadow(0 0 40px rgba(247,37,133,0.35));
        }

        /* divider */
        .hero-divider {
          width: 80px;
          height: 3px;
          margin: 0 auto 1.4rem;
          border-radius: 99px;
          background: linear-gradient(90deg, #f72585, #7209b7, #4361ee, #4cc9f0);
          background-size: 200%;
          animation: fadeUp 0.9s 0.25s ease both, shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0%   { background-position: 0% }
          100% { background-position: 200% }
        }

        /* role */
        .hero-role {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(1.1rem, 3vw, 1.6rem);
          font-weight: 300;
          color: rgba(255,255,255,0.72);
          letter-spacing: 0.5px;
          margin-bottom: 2.4rem;
          animation: fadeUp 0.9s 0.35s ease both;
        }
        .hero-role strong {
          font-weight: 600;
          background: linear-gradient(90deg, #4cc9f0, #7209b7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* CTA buttons */
        .hero-ctas {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeUp 0.9s 0.5s ease both;
        }
        .hero-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          padding: 0.75rem 2rem;
          border-radius: 99px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.25s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .hero-btn-primary {
          background: linear-gradient(135deg, #f72585, #7209b7);
          color: #fff;
          box-shadow: 0 0 24px rgba(247,37,133,0.45);
          border: none;
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 40px rgba(247,37,133,0.65);
        }
        .hero-btn-outline {
          background: transparent;
          color: rgba(255,255,255,0.85);
          border: 1.5px solid rgba(255,255,255,0.22);
        }
        .hero-btn-outline:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-3px);
        }

        /* scroll hint */
        .hero-scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          animation: fadeUp 1s 0.9s ease both;
        }
        .hero-scroll span {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .hero-scroll-bar {
          width: 1.5px;
          height: 36px;
          background: linear-gradient(to bottom, rgba(247,37,133,0.8), transparent);
          border-radius: 99px;
          animation: scrollDrop 2s ease-in-out infinite;
        }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: top; opacity: 0; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* mobile tweaks */
        @media (max-width: 480px) {
          .hero-orb-1 { width: 260px; height: 260px; }
          .hero-orb-2 { width: 220px; height: 220px; }
          .hero-orb-3 { display: none; }
          .hero-btn { padding: 0.7rem 1.5rem; font-size: 0.88rem; }
        }
      `}</style>

      <div className="hero-root">
        {/* Layered bg */}
        <div className="hero-bg" />
        <img
          className="hero-photo"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
          alt=""
          aria-hidden="true"
        />

        {/* Glowing orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        {/* Particle canvas */}
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* Main content */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Available for work
          </div>

          <h1 className="hero-name">ZAID BIN ALI</h1>
          <div className="hero-divider" />

          <p className="hero-role">
            <strong>Full Stack Developer</strong> — crafting digital experiences
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="hero-btn hero-btn-primary">
              View Projects ↓
            </a>
            <a href="#contacts" className="hero-btn hero-btn-outline">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-bar" />
        </div>
      </div>
    </>
  );
};

export default Carousel;