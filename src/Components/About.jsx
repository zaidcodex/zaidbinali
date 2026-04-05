import React from "react";

const About = () => {
  const stats = [
    { value: "2+",  label: "Years Experience" },
    { value: "15+", label: "Projects Built"   },
    { value: "10+", label: "Happy Clients"    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ab-section {
          position: relative;
          padding: 7rem 1.5rem 6rem;
          overflow: hidden;
          background:
            radial-gradient(ellipse 65% 55% at 0% 50%,  rgba(67,97,238,0.18)  0%, transparent 60%),
            radial-gradient(ellipse 55% 50% at 100% 20%, rgba(247,37,133,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 55% 100%, rgba(114,9,183,0.14)  0%, transparent 60%),
            linear-gradient(160deg, #06040f 0%, #0b0820 50%, #0f0a22 100%);
        }

        /* grid */
        .ab-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }

        /* floating orbs */
        .ab-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }
        .ab-orb-1 {
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(67,97,238,0.35), transparent 70%);
          top: -60px; left: -100px;
          animation: abFloat 9s ease-in-out infinite;
        }
        .ab-orb-2 {
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(247,37,133,0.3), transparent 70%);
          bottom: -40px; right: -80px;
          animation: abFloat 11s ease-in-out infinite reverse;
        }
        @keyframes abFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-28px); }
        }

        /* ── inner layout ── */
        .ab-inner {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3.5rem;
        }

        /* ── heading ── */
        .ab-head {
          text-align: center;
          animation: abFadeUp 0.8s ease both;
        }
        .ab-eyebrow {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 0.7rem;
        }
        .ab-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.4rem, 7vw, 4rem);
          background: linear-gradient(135deg, #fff 0%, #c8a8f8 45%, #4cc9f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin: 0 0 1rem;
        }
        .ab-divider {
          width: 64px;
          height: 3px;
          margin: 0 auto;
          border-radius: 99px;
          background: linear-gradient(90deg, #f72585, #7209b7, #4361ee, #4cc9f0);
          background-size: 200%;
          animation: abShimmer 3s linear infinite;
        }
        @keyframes abShimmer {
          0%   { background-position: 0% }
          100% { background-position: 200% }
        }

        /* ── card ── */
        .ab-card {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 24px;
          padding: 3rem 3rem 2.6rem;
          position: relative;
          overflow: hidden;
          animation: abFadeUp 0.8s 0.2s ease both;
          transition: border-color 0.3s;
        }
        .ab-card:hover {
          border-color: rgba(255,255,255,0.18);
        }
        /* accent corner */
        .ab-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 120px; height: 120px;
          background: radial-gradient(circle at top left, rgba(247,37,133,0.2), transparent 65%);
          border-radius: 0 0 100% 0;
        }

        /* quote mark */
        .ab-quote-mark {
          font-size: 5rem;
          line-height: 1;
          font-family: 'Syne', sans-serif;
          background: linear-gradient(135deg, #f72585, #7209b7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          display: block;
        }

        .ab-text {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(1rem, 2.2vw, 1.18rem);
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          line-height: 1.9;
          margin: 0;
        }
        .ab-text strong {
          font-weight: 500;
          color: rgba(255,255,255,0.9);
        }

        /* tags */
        .ab-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 2rem;
        }
        .ab-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          padding: 0.35rem 0.9rem;
          border-radius: 99px;
          border: 1px solid;
          letter-spacing: 0.3px;
        }
        .ab-tag-1 { color: #f72585; border-color: rgba(247,37,133,0.35); background: rgba(247,37,133,0.08); }
        .ab-tag-2 { color: #4cc9f0; border-color: rgba(76,201,240,0.35);  background: rgba(76,201,240,0.08); }
        .ab-tag-3 { color: #c8a8f8; border-color: rgba(200,168,248,0.35); background: rgba(200,168,248,0.08); }
        .ab-tag-4 { color: #52d65e; border-color: rgba(82,214,94,0.35);   background: rgba(82,214,94,0.08); }
        .ab-tag-5 { color: #f4c430; border-color: rgba(244,196,48,0.35);  background: rgba(244,196,48,0.08); }

        /* ── stats row ── */
        .ab-stats {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
          animation: abFadeUp 0.8s 0.35s ease both;
        }
        .ab-stat {
          flex: 1;
          min-width: 140px;
          max-width: 220px;
          text-align: center;
          padding: 1.6rem 1rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), border-color 0.3s, box-shadow 0.3s;
        }
        .ab-stat:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.18);
          box-shadow: 0 12px 32px rgba(0,0,0,0.3);
        }
        .ab-stat:nth-child(1) { --acc: #f72585; }
        .ab-stat:nth-child(2) { --acc: #4cc9f0; }
        .ab-stat:nth-child(3) { --acc: #7209b7; }

        .ab-stat-value {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 2.4rem;
          background: linear-gradient(135deg, var(--acc), #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .ab-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        @keyframes abFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .ab-card { padding: 2rem 1.4rem; }
          .ab-stats { gap: 1rem; }
          .ab-stat { min-width: 100px; padding: 1.2rem 0.8rem; }
          .ab-stat-value { font-size: 1.9rem; }
        }
      `}</style>

      <section className="ab-section" id="about">
        <div className="ab-orb ab-orb-1" />
        <div className="ab-orb ab-orb-2" />

        <div className="ab-inner">

          {/* Heading */}
          <div className="ab-head">
            <span className="ab-eyebrow">Who I am</span>
            <h2 className="ab-title">About Me</h2>
            <div className="ab-divider" />
          </div>

          {/* Text card */}
          <div className="ab-card">
            <span className="ab-quote-mark">"</span>
            <p className="ab-text">
              I am always on a quest to <strong>learn and grow</strong> as much as possible
              with the most current technologies and skills. Thanks to having worked for
              several years in <strong>customer experience</strong> in addition to my creative
              instinct, I possess an innate sense of <strong>empathy and intuition</strong>.
              This compels me to assure that the <strong>user experience</strong> is constantly
              the first priority of any project I am working on.
            </p>
            <div className="ab-tags">
              <span className="ab-tag ab-tag-1">UX Design</span>
              <span className="ab-tag ab-tag-2">Full Stack Dev</span>
              <span className="ab-tag ab-tag-3">React</span>
              <span className="ab-tag ab-tag-4">Node.js</span>
              <span className="ab-tag ab-tag-5">Problem Solver</span>
            </div>
          </div>

          {/* Stats */}
          <div className="ab-stats">
            {stats.map(({ value, label }) => (
              <div className="ab-stat" key={label}>
                <div className="ab-stat-value">{value}</div>
                <div className="ab-stat-label">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default About;