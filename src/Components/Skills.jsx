import React from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React",        icon: "⚛" },
      { name: "Next.js",      icon: "▲" },
      { name: "Tailwind CSS", icon: "✦" },
      { name: "JavaScript",   icon: "JS" },
      { name: "HTML5",        icon: "◈" },
      { name: "CSS3",         icon: "✢" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js",   icon: "⬡" },
      { name: "Express.js",icon: "∞" },
      { name: "MongoDB",   icon: "◉" },
      { name: "Firebase",  icon: "◆" },
      { name: "REST APIs", icon: "⟳" },
      { name: "JWT",       icon: "↯" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git",     icon: "G" },
      { name: "GitHub",  icon: "⌥" },
      { name: "Vercel",  icon: "▽" },
      { name: "VS Code", icon: "✦" },
      { name: "Postman", icon: "◉" },
      { name: "Figma",   icon: "✿" },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "Authentication",    icon: null },
      { name: "API Integration",   icon: null },
      { name: "Responsive Design", icon: null },
      { name: "UI/UX",             icon: null },
      { name: "Data Structures",   icon: null },
      { name: "Problem Solving",   icon: null },
    ],
  },
];

const stats = [
  { emoji: "🗂", label: "Projects Completed", value: "10+" },
  { emoji: "😊", label: "Happy Clients",       value: "5+"  },
  { emoji: "⭐", label: "Experience",           value: "2+ Years" },
];

const Skills = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerLine {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .sk-section {
          position: relative;
          width: 100%;
          background: #000000;
          font-family: 'DM Sans', sans-serif;
          padding: 30px 0 30px;
          overflow: hidden;
        }

        /* faint orbs */
        .sk-section::before {
          content: '';
          position: absolute;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,61,232,0.14), transparent 70%);
          top: -100px; left: -100px;
          filter: blur(90px);
          pointer-events: none;
        }
        .sk-section::after {
          content: '';
          position: absolute;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,61,232,0.1), transparent 70%);
          bottom: -80px; right: -80px;
          filter: blur(90px);
          pointer-events: none;
        }

        /* shimmer lines */
        .sk-top-line, .sk-bottom-line {
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
        .sk-top-line    { top: 0; }
        .sk-bottom-line { bottom: 0; animation-delay: -2s; }

        /* header */
        .sk-eyebrow {
          font-size: 0.72rem;
          position:relative;
          right:2;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #7c6ff7;
          margin-bottom: 6px;
          animation: fadeUp 0.6s ease both;
        }
        .sk-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          color: #fff;
          margin: 0 0 32px;
          animation: fadeUp 0.7s 0.05s ease both;
          text-align:start;
        }

        /* main layout */
        .sk-main {
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 24px;
          align-items: start;
          animation: fadeUp 0.7s 0.1s ease both;
        }
        @media (max-width: 900px) {
          .sk-main { grid-template-columns: 1fr; }
        }

        /* left: categories */
        .sk-categories {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px 24px;
        }
        @media (max-width: 900px) {
          .sk-categories { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .sk-categories { grid-template-columns: 1fr; }
        }

        .sk-cat-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: #fff;
          margin-bottom: 14px;
        }

        .sk-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .sk-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 5px 12px;
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
          cursor: default;
          white-space: nowrap;
        }
        .sk-pill:hover {
          background: rgba(108,61,232,0.12);
          border-color: rgba(108,61,232,0.4);
          color: #fff;
          transform: translateY(-2px);
        }
        .sk-pill-icon {
          font-size: 0.7rem;
          color: #7c6ff7;
          font-family: monospace;
          font-weight: 700;
          flex-shrink: 0;
          opacity: 0.85;
        }

        /* right: stats card */
        .sk-stats-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .sk-stat {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .sk-stat:last-child { border-bottom: none; padding-bottom: 0; }
        .sk-stat:first-child { padding-top: 0; }

        .sk-stat-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(108,61,232,0.15);
          border: 1px solid rgba(108,61,232,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .sk-stat-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.4);
          margin-bottom: 2px;
        }
        .sk-stat-value {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          color: #fff;
          line-height: 1;
        }

        .sk-tagline {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.06);
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          text-align: center;
          font-style: italic;
        }
      `}</style>

      <section className="sk-section" id="skills">
        <div className="sk-top-line" />
        <div className="sk-bottom-line" />

        <div className="px-4 px-lg-5" style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <p className="sk-eyebrow">My Expertise</p>
          <h2 className="sk-title">Skills &amp; Technologies</h2>

          {/* Main grid */}
          <div className="sk-main">

            {/* Left — skill categories */}
            <div className="sk-categories">
              {skillCategories.map((cat) => (
                <div key={cat.title}>
                  <div className="sk-cat-title">{cat.title}</div>
                  <div className="sk-pills">
                    {cat.skills.map((skill) => (
                      <span className="sk-pill" key={skill.name}>
                        {skill.icon && (
                          <span className="sk-pill-icon">{skill.icon}</span>
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right — stats card */}
            <div className="sk-stats-card">
              {stats.map((s) => (
                <div className="sk-stat" key={s.label}>
                  <div className="sk-stat-icon">{s.emoji}</div>
                  <div>
                    <div className="sk-stat-label">{s.label}</div>
                    <div className="sk-stat-value">{s.value}</div>
                  </div>
                </div>
              ))}
              {/* <div className="sk-tagline">Always learning, always building 🚀</div> */}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;