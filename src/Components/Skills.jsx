import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML",            img: "https://www.lianapenn.com/images/HTML5.png",            color: "#f72585", glow: "rgba(247,37,133,0.4)" },
    { name: "CSS",             img: "https://www.lianapenn.com/images/css3.png",             color: "#4361ee", glow: "rgba(67,97,238,0.4)"   },
    { name: "JavaScript",      img: "https://www.lianapenn.com/images/learn-javascript.png", color: "#f4c430", glow: "rgba(244,196,48,0.35)"  },
    { name: "Node.js/Express", img: "https://www.lianapenn.com/images/node-express.png",     color: "#52d65e", glow: "rgba(82,214,94,0.35)"   },
    { name: "React",           img: "https://www.lianapenn.com/images/react.png",            color: "#4cc9f0", glow: "rgba(76,201,240,0.4)"   },
    { name: "GitHub",          img: "https://www.lianapenn.com/images/github.png",           color: "#c9a0f0", glow: "rgba(201,160,240,0.35)" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .sk-section {
          background:
            radial-gradient(ellipse 70% 50% at 10% 20%, rgba(114,9,183,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 90% 80%, rgba(247,37,133,0.15) 0%, transparent 60%),
            linear-gradient(160deg, #07050f 0%, #0d0a1e 50%, #100820 100%);
          padding: 7rem 1.5rem 6rem;
          position: relative;
          overflow: hidden;
        }

        /* subtle grid overlay */
        .sk-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* ── BIO ── */
        .sk-bio {
          max-width: 780px;
          margin: 0 auto 5rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .sk-bio-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 4vw, 2.4rem);
          background: linear-gradient(135deg, #fff 0%, #d8b4fe 40%, #f72585 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.4rem;
          line-height: 1.2;
          animation: fadeUp 0.8s ease both;
        }
        .sk-bio-text {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.85;
          animation: fadeUp 0.8s 0.15s ease both;
        }
        .sk-bio-text strong {
          color: rgba(255,255,255,0.85);
          font-weight: 500;
        }

        /* ── SECTION HEADING ── */
        .sk-heading-wrap {
          text-align: center;
          margin-bottom: 3.5rem;
          position: relative;
          z-index: 1;
          animation: fadeUp 0.8s 0.2s ease both;
        }
        .sk-label {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 0.6rem;
        }
        .sk-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 6vw, 3.6rem);
          background: linear-gradient(135deg, #fff 0%, #c8a8f8 50%, #4cc9f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin: 0;
        }
        .sk-divider {
          width: 64px;
          height: 3px;
          margin: 1rem auto 0;
          border-radius: 99px;
          background: linear-gradient(90deg, #f72585, #7209b7, #4361ee, #4cc9f0);
          background-size: 200%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0%   { background-position: 0% }
          100% { background-position: 200% }
        }

        /* ── GRID ── */
        .sk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.25rem;
          max-width: 860px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── CARD ── */
        .sk-card {
          position: relative;
          border-radius: 18px;
          padding: 1.8rem 1rem 1.4rem;
          text-align: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          cursor: default;
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
          animation: fadeUp 0.7s ease both;
        }
        .sk-card::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--glow);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
        }
        .sk-card:hover {
          transform: translateY(-10px) scale(1.04);
          border-color: var(--color);
          box-shadow: 0 0 32px var(--glow), 0 20px 40px rgba(0,0,0,0.3);
        }
        .sk-card:hover::before { opacity: 0.12; }

        .sk-card-img {
          width: 76px;
          height: 76px;
          object-fit: contain;
          margin-bottom: 0.9rem;
          transition: transform 0.3s ease, filter 0.3s ease;
          filter: drop-shadow(0 0 0px var(--color));
        }
        .sk-card:hover .sk-card-img {
          transform: scale(1.1) rotate(-3deg);
          filter: drop-shadow(0 0 14px var(--color));
        }

        .sk-card-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.8);
          letter-spacing: 0.3px;
          transition: color 0.3s;
        }
        .sk-card:hover .sk-card-name {
          color: var(--color);
        }

        /* bottom glow bar */
        .sk-card-bar {
          position: absolute;
          bottom: 0; left: 20%; right: 20%;
          height: 2px;
          border-radius: 99px;
          background: var(--color);
          opacity: 0;
          transition: opacity 0.3s, left 0.3s, right 0.3s;
        }
        .sk-card:hover .sk-card-bar {
          opacity: 0.9;
          left: 10%; right: 10%;
        }

        /* stagger delays */
        .sk-card:nth-child(1) { animation-delay: 0.1s; }
        .sk-card:nth-child(2) { animation-delay: 0.18s; }
        .sk-card:nth-child(3) { animation-delay: 0.26s; }
        .sk-card:nth-child(4) { animation-delay: 0.34s; }
        .sk-card:nth-child(5) { animation-delay: 0.42s; }
        .sk-card:nth-child(6) { animation-delay: 0.50s; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          .sk-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .sk-section { padding: 5rem 1rem 4rem; }
        }
      `}</style>

      <section className="sk-section" id="skills">

        {/* Bio */}
        <div className="sk-bio">
          <h2 className="sk-bio-name">
            Hi, I'm Zaid Bin Ali — a passionate Web Developer & UX Designer based in Karachi.
          </h2>
          <p className="sk-bio-text">
            With a strong creative mindset and a background in <strong>technology and design</strong>,
            I love pushing boundaries to craft unique, user-focused digital experiences.
            I'm a <strong>fast learner</strong> who thrives in collaborative environments,
            combining analytical thinking, creativity, and calm problem-solving to deliver
            <strong> impactful, detail-driven results</strong> even under pressure.
          </p>
        </div>

        {/* Heading */}
        <div className="sk-heading-wrap">
          <span className="sk-label">What I work with</span>
          <h2 className="sk-title">Skills</h2>
          <div className="sk-divider" />
        </div>

        {/* Cards */}
        <div className="sk-grid">
          {skills.map((skill) => (
            <div
              className="sk-card"
              key={skill.name}
              style={{ "--color": skill.color, "--glow": skill.glow }}
            >
              <img className="sk-card-img" src={skill.img} alt={skill.name} />
              <div className="sk-card-name">{skill.name}</div>
              <div className="sk-card-bar" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;