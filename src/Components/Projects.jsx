import React, { useEffect, useContext, useState } from "react";
import AppContext from "../Context/appContext";

// Card accent colors cycling
const ACCENTS = [
  { color: "#f72585", glow: "rgba(247,37,133,0.35)" },
  { color: "#4cc9f0", glow: "rgba(76,201,240,0.35)"  },
  { color: "#7209b7", glow: "rgba(114,9,183,0.35)"   },
  { color: "#4361ee", glow: "rgba(67,97,238,0.35)"   },
  { color: "#52d65e", glow: "rgba(82,214,94,0.35)"   },
  { color: "#f4c430", glow: "rgba(244,196,48,0.32)"  },
];

const Projects = () => {
  const { projects, fetchProjects } = useContext(AppContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      await fetchProjects();
      setLoading(false);
    };
    loadProjects();
  }, []);

  // lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const openModal  = (project) => { setSelectedProject(project); setModalOpen(true); };
  const closeModal = ()        => { setModalOpen(false); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── SECTION ── */
        .pj-section {
          position: relative;
          padding: 7rem 1.5rem 6rem;
          overflow: hidden;
          background:
            radial-gradient(ellipse 60% 50% at 90% 10%,  rgba(247,37,133,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 55% 50% at 5%  80%,  rgba(67,97,238,0.16)  0%, transparent 60%),
            radial-gradient(ellipse 50% 55% at 50% 50%,  rgba(114,9,183,0.1)   0%, transparent 65%),
            linear-gradient(160deg, #06040f 0%, #0b0820 50%, #0f0a22 100%);
        }
        .pj-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }

        /* orbs */
        .pj-orb {
          position: absolute; border-radius: 50%;
          filter: blur(90px); pointer-events: none;
        }
        .pj-orb-1 {
          width: 340px; height: 340px;
          background: radial-gradient(circle, rgba(247,37,133,0.3), transparent 70%);
          top: -60px; right: -80px;
          animation: pjFloat 10s ease-in-out infinite;
        }
        .pj-orb-2 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(67,97,238,0.28), transparent 70%);
          bottom: -50px; left: -70px;
          animation: pjFloat 12s ease-in-out infinite reverse;
        }
        @keyframes pjFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-28px); }
        }

        /* ── HEADING ── */
        .pj-head {
          text-align: center;
          margin-bottom: 4rem;
          position: relative; z-index: 1;
          animation: pjFadeUp 0.8s ease both;
        }
        .pj-eyebrow {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.35); margin-bottom: 0.7rem;
        }
        .pj-title {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(2.4rem, 7vw, 4rem);
          background: linear-gradient(135deg, #fff 0%, #c8a8f8 45%, #f72585 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1; margin: 0 0 1rem;
        }
        .pj-divider {
          width: 64px; height: 3px; margin: 0 auto; border-radius: 99px;
          background: linear-gradient(90deg, #f72585, #7209b7, #4361ee, #4cc9f0);
          background-size: 200%;
          animation: pjShimmer 3s linear infinite;
        }
        @keyframes pjShimmer { 0%{background-position:0%} 100%{background-position:200%} }

        /* ── GRID ── */
        .pj-grid {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── CARD ── */
        .pj-card {
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          display: flex; flex-direction: column;
          transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s, border-color 0.3s;
          animation: pjFadeUp 0.7s ease both;
        }
        .pj-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: var(--acc);
          box-shadow: 0 0 36px var(--glow), 0 22px 44px rgba(0,0,0,0.35);
        }

        /* top accent bar */
        .pj-card-bar {
          height: 3px;
          background: linear-gradient(90deg, var(--acc), transparent);
          transition: opacity 0.3s;
          opacity: 0.6;
        }
        .pj-card:hover .pj-card-bar { opacity: 1; }

        .pj-card-img {
          width: 100%; height: 200px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .pj-card:hover .pj-card-img { transform: scale(1.05); }
        .pj-card-img-wrap { overflow: hidden; }

        .pj-card-body {
          padding: 1.4rem 1.4rem 1.2rem;
          display: flex; flex-direction: column; flex: 1;
        }
        .pj-card-name {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1.05rem; color: #fff;
          margin-bottom: 0.65rem;
          transition: color 0.3s;
        }
        .pj-card:hover .pj-card-name { color: var(--acc); }

        .pj-card-desc {
          font-family: 'DM Sans', sans-serif; font-weight: 300;
          font-size: 0.88rem; color: rgba(255,255,255,0.5);
          line-height: 1.7; flex: 1; margin-bottom: 1.2rem;
        }

        .pj-card-btns { display: flex; gap: 0.6rem; flex-wrap: wrap; }
        .pj-btn {
          font-family: 'DM Sans', sans-serif; font-size: 0.8rem; font-weight: 600;
          padding: 0.4rem 1rem; border-radius: 99px;
          text-decoration: none; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          display: inline-flex; align-items: center; gap: 0.35rem;
        }
        .pj-btn:hover { transform: translateY(-2px); }
        .pj-btn-gh {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.85);
        }
        .pj-btn-gh:hover { background: rgba(255,255,255,0.17); color: #fff; }
        .pj-btn-live {
          background: linear-gradient(135deg, var(--acc), color-mix(in srgb, var(--acc) 60%, #7209b7));
          color: #fff; border: none;
          box-shadow: 0 0 14px var(--glow);
        }
        .pj-btn-live:hover { box-shadow: 0 0 26px var(--glow); }

        /* stagger */
        .pj-card:nth-child(1){animation-delay:0.05s}
        .pj-card:nth-child(2){animation-delay:0.12s}
        .pj-card:nth-child(3){animation-delay:0.19s}
        .pj-card:nth-child(4){animation-delay:0.26s}
        .pj-card:nth-child(5){animation-delay:0.33s}
        .pj-card:nth-child(6){animation-delay:0.40s}

        /* ── LOADER ── */
        .pj-loader {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; align-items: center;
          gap: 1rem; padding: 4rem 0; color: rgba(255,255,255,0.45);
          font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
        }
        .pj-spinner {
          width: 40px; height: 40px; border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.08);
          border-top-color: #f72585;
          animation: pjSpin 0.75s linear infinite;
        }
        @keyframes pjSpin { to { transform: rotate(360deg); } }

        /* ── MODAL OVERLAY ── */
        .pj-overlay {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center;
          padding: 1rem;
          animation: pjOverlayIn 0.25s ease both;
        }
        @keyframes pjOverlayIn { from{opacity:0} to{opacity:1} }

        .pj-modal {
          background: linear-gradient(160deg, #0f0b24 0%, #140d2e 100%);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          overflow: hidden;
          width: 100%; max-width: 700px;
          max-height: 90vh;
          display: flex; flex-direction: column;
          animation: pjModalIn 0.3s cubic-bezier(.34,1.4,.64,1) both;
          box-shadow: 0 0 60px rgba(247,37,133,0.2), 0 40px 80px rgba(0,0,0,0.5);
        }
        @keyframes pjModalIn {
          from { opacity:0; transform: scale(0.92) translateY(20px); }
          to   { opacity:1; transform: scale(1)    translateY(0); }
        }

        /* modal top bar */
        .pj-modal-bar {
          height: 3px;
          background: linear-gradient(90deg, #f72585, #7209b7, #4361ee, #4cc9f0);
          background-size: 200%;
          animation: pjShimmer 3s linear infinite;
          flex-shrink: 0;
        }

        .pj-modal-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.4rem 1.8rem 0;
          flex-shrink: 0;
        }
        .pj-modal-title {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 1.3rem;
          background: linear-gradient(135deg, #fff, #c8a8f8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .pj-modal-close {
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.7); font-size: 1.1rem;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s, color 0.2s;
        }
        .pj-modal-close:hover { background: rgba(247,37,133,0.2); color: #f72585; }

        .pj-modal-body {
          padding: 1.4rem 1.8rem 1.8rem;
          overflow-y: auto; flex: 1;
        }
        .pj-modal-img {
          width: 100%; max-height: 320px; object-fit: cover;
          border-radius: 14px; margin-bottom: 1.2rem;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .pj-modal-desc {
          font-family: 'DM Sans', sans-serif; font-weight: 300;
          font-size: 0.95rem; color: rgba(255,255,255,0.65);
          line-height: 1.8; margin: 0;
        }

        .pj-modal-footer {
          padding: 1rem 1.8rem 1.6rem;
          display: flex; gap: 0.75rem; flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }

        @keyframes pjFadeUp {
          from { opacity:0; transform: translateY(28px); }
          to   { opacity:1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .pj-grid { grid-template-columns: 1fr; }
          .pj-section { padding: 5rem 1rem 4rem; }
          .pj-modal-header, .pj-modal-body, .pj-modal-footer { padding-left: 1.2rem; padding-right: 1.2rem; }
        }
      `}</style>

      <section className="pj-section" id="projects">
        <div className="pj-orb pj-orb-1" />
        <div className="pj-orb pj-orb-2" />

        {/* Heading */}
        <div className="pj-head">
          <span className="pj-eyebrow">What I've built</span>
          <h2 className="pj-title">Projects</h2>
          <div className="pj-divider" />
        </div>

        {/* Grid */}
        {loading ? (
          <div className="pj-loader">
            <div className="pj-spinner" />
            Loading projects…
          </div>
        ) : projects.length === 0 ? (
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif", position: "relative", zIndex: 1 }}>
            No projects found.
          </p>
        ) : (
          <div className="pj-grid">
            {projects.map((project, i) => {
              const acc = ACCENTS[i % ACCENTS.length];
              return (
                <div
                  className="pj-card"
                  key={project._id}
                  style={{ "--acc": acc.color, "--glow": acc.glow }}
                  onClick={() => openModal(project)}
                >
                  <div className="pj-card-bar" />
                  <div className="pj-card-img-wrap">
                    <img className="pj-card-img" src={project.projectImg} alt={project.projectName} />
                  </div>
                  <div className="pj-card-body">
                    <div className="pj-card-name">{project.projectName}</div>
                    <p className="pj-card-desc">
                      {project.projectDesc.length > 180
                        ? project.projectDesc.slice(0, 180) + "…"
                        : project.projectDesc}
                    </p>
                    <div className="pj-card-btns">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer"
                          className="pj-btn pj-btn-gh"
                          onClick={(e) => e.stopPropagation()}>
                          ⌥ GitHub
                        </a>
                      )}
                      {project.projectLink && (
                        <a href={project.projectLink} target="_blank" rel="noreferrer"
                          className="pj-btn pj-btn-live"
                          onClick={(e) => e.stopPropagation()}>
                          ↗ Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ── CUSTOM MODAL ── */}
      {modalOpen && selectedProject && (
        <div className="pj-overlay" onClick={closeModal}>
          <div className="pj-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pj-modal-bar" />

            <div className="pj-modal-header">
              <div className="pj-modal-title">{selectedProject.projectName}</div>
              <button className="pj-modal-close" onClick={closeModal} aria-label="Close">✕</button>
            </div>

            <div className="pj-modal-body">
              <img
                className="pj-modal-img"
                src={selectedProject.projectImg}
                alt={selectedProject.projectName}
              />
              <p className="pj-modal-desc">{selectedProject.projectDesc}</p>
            </div>

            <div className="pj-modal-footer">
              {selectedProject.githubLink && (
                <a href={selectedProject.githubLink} target="_blank" rel="noreferrer"
                  className="pj-btn pj-btn-gh" style={{ fontSize: "0.9rem", padding: "0.5rem 1.3rem" }}>
                  ⌥ GitHub
                </a>
              )}
              {selectedProject.projectLink && (
                <a href={selectedProject.projectLink} target="_blank" rel="noreferrer"
                  className="pj-btn pj-btn-live"
                  style={{ "--acc": "#f72585", "--glow": "rgba(247,37,133,0.4)", fontSize: "0.9rem", padding: "0.5rem 1.3rem" }}>
                  ↗ Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;