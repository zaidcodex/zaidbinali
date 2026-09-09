import React, { useEffect, useContext, useState } from "react";
import AppContext from "../Context/appContext";

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

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const openModal  = (project) => { setSelectedProject(project); setModalOpen(true); };
  const closeModal = ()        => { setModalOpen(false); };

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
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes overlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.93) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .pj-section {
          position: relative;
          width: 100%;
          background: #000000;
          font-family: 'DM Sans', sans-serif;
          padding: 30px 0 30px;
          overflow: hidden;
        }

        /* faint bg orbs */
        .pj-section::before {
          content: '';
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,61,232,0.15), transparent 70%);
          top: -100px; right: -100px;
          filter: blur(90px);
          pointer-events: none;
        }
        .pj-section::after {
          content: '';
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,61,232,0.1), transparent 70%);
          bottom: -80px; left: -80px;
          filter: blur(90px);
          pointer-events: none;
        }

        /* shimmer lines */
        .pj-top-line, .pj-bottom-line {
          position: absolute;
          left: 0; right: 0;
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
        .pj-top-line    { top: 0; }
        .pj-bottom-line { bottom: 0; animation-delay: -2s; }

        /* header */
        .pj-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #7c6ff7;
          margin-bottom: 6px;
          animation: fadeUp 0.6s ease both;
        }
        .pj-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          color: #fff;
          margin: 0;
          animation: fadeUp 0.7s 0.05s ease both;
        }
        .pj-view-all {
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
        .pj-view-all:hover { color: #a78bfa; gap: 10px; }

        /* grid — 4 columns */
        .pj-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 36px;
        }
        @media (max-width: 1100px) { .pj-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px)  { .pj-grid { grid-template-columns: 1fr; } }

        /* card */
        .pj-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          animation: fadeUp 0.7s ease both;
        }
        .pj-card:hover {
          border-color: rgba(108,61,232,0.4);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(108,61,232,0.2);
        }
        .pj-card:nth-child(1) { animation-delay: 0.05s; }
        .pj-card:nth-child(2) { animation-delay: 0.10s; }
        .pj-card:nth-child(3) { animation-delay: 0.15s; }
        .pj-card:nth-child(4) { animation-delay: 0.20s; }
        .pj-card:nth-child(5) { animation-delay: 0.25s; }
        .pj-card:nth-child(6) { animation-delay: 0.30s; }

        /* image */
        .pj-img-wrap { overflow: hidden; }
        .pj-card-img {
          width: 100%;
          height: 130px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .pj-card:hover .pj-card-img { transform: scale(1.05); }

        /* body */
        .pj-card-body {
          padding: 2px 13px 10px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .pj-card-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #fff;
          margin-bottom: 8px;
        }
        .pj-card-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.65;
          flex: 1;
          margin-bottom: 14px;
        }

        /* tech tags */
        .pj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .pj-tag {
          font-size: 0.72rem;
          font-weight: 500;
          color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 3px 10px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .pj-tag-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #7c6ff7;
          flex-shrink: 0;
        }

        /* links row */
        .pj-card-links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 14px;
          gap: 12px;
        }
        .pj-link {
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s;
        }
        .pj-link-demo { color: #7c6ff7; }
        .pj-link-demo:hover { color: #a78bfa; }
        .pj-link-gh { color: rgba(255,255,255,0.55); }
        .pj-link-gh:hover { color: #fff; }

        /* loader */
        .pj-loader {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 60px 0;
          color: rgba(255,255,255,0.4);
          font-size: 0.9rem;
        }
        .pj-spinner {
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.08);
          border-top-color: #6c3de8;
          animation: spin 0.75s linear infinite;
        }

        /* modal overlay */
        .pj-overlay {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center;
          padding: 1rem;
          animation: overlayIn 0.25s ease both;
        }
        .pj-modal {
          background: #0d0b1e;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          overflow: hidden;
          width: 100%; max-width: 680px;
          max-height: 90vh;
          display: flex; flex-direction: column;
          animation: modalIn 0.3s cubic-bezier(.34,1.4,.64,1) both;
          box-shadow: 0 0 60px rgba(108,61,232,0.25), 0 40px 80px rgba(0,0,0,0.5);
        }
        .pj-modal-bar {
          height: 2px;
          background: linear-gradient(90deg, transparent, #6c3de8, #a78bfa, #6c3de8, transparent);
          background-size: 200%;
          animation: shimmerLine 3s linear infinite;
          flex-shrink: 0;
        }
        .pj-modal-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 22px 0;
          flex-shrink: 0;
        }
        .pj-modal-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800; font-size: 1.2rem; color: #fff;
        }
        .pj-modal-close {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 1rem;
          transition: background 0.2s, color 0.2s;
        }
        .pj-modal-close:hover { background: rgba(108,61,232,0.25); color: #a78bfa; }
        .pj-modal-body {
          padding: 18px 22px 22px;
          overflow-y: auto; flex: 1;
        }
        .pj-modal-img {
          width: 100%; max-height: 300px; object-fit: cover;
          border-radius: 12px; margin-bottom: 14px;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .pj-modal-desc {
          font-size: 0.92rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.8; margin: 0;
        }
        .pj-modal-footer {
          padding: 14px 22px 20px;
          display: flex; gap: 10px; flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .pj-modal-btn {
          font-size: 0.88rem; font-weight: 600;
          padding: 8px 20px; border-radius: 8px;
          text-decoration: none; display: inline-flex; align-items: center; gap: 6px;
          transition: background 0.2s, transform 0.2s;
          cursor: pointer; border: none;
        }
        .pj-modal-btn:hover { transform: translateY(-1px); }
        .pj-modal-btn-demo {
          background: #6c3de8; color: #fff;
        }
        .pj-modal-btn-demo:hover { background: #5a2fd4; color: #fff; }
        .pj-modal-btn-gh {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.8);
        }
        .pj-modal-btn-gh:hover { background: rgba(255,255,255,0.12); color: #fff; }
      `}</style>

      <section className="pj-section" id="projects">
        <div className="pj-top-line" />
        <div className="pj-bottom-line" />

        <div className="px-4 px-lg-5">
          {/* Header */}
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-2">
            <div>
              <p className="pj-eyebrow">Featured Work</p>
              <h2 className="pj-title">Projects</h2>
            </div>
            <a href="#projects" className="pj-view-all">
              View All Projects <span>→</span>
            </a>
          </div>

          {/* Grid */}
          {loading ? (
            <div className="pj-loader">
              <div className="pj-spinner" />
              Loading projects…
            </div>
          ) : projects.length === 0 ? (
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", paddingTop: "40px" }}>
              No projects found.
            </p>
          ) : (
            <div className="pj-grid">
              {projects.map((project, i) => (
                <div
                  className="pj-card"
                  key={project._id}
                  onClick={() => openModal(project)}
                >
                  <div className="pj-img-wrap">
                    <img
                      className="pj-card-img"
                      src={project.projectImg}
                      alt={project.projectName}
                    />
                  </div>
                  <div className="pj-card-body">
                    <div className="pj-card-name">{project.projectName}</div>
                    <p className="pj-card-desc">
                      {project.projectDesc.length > 120
                        ? project.projectDesc.slice(0, 120) + "…"
                        : project.projectDesc}
                    </p>

                    {/* Tech tags — from project.tags array if available */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="pj-tags">
                        {project.tags.map((tag, ti) => (
                          <span className="pj-tag" key={ti}>
                            <span className="pj-tag-dot" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pj-card-links">
                      {project.projectLink && (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noreferrer"
                          className="pj-link pj-link-demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo ↗
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="pj-link pj-link-gh"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
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
              {selectedProject.projectLink && (
                <a href={selectedProject.projectLink} target="_blank" rel="noreferrer"
                  className="pj-modal-btn pj-modal-btn-demo">
                  Live Demo ↗
                </a>
              )}
              {selectedProject.githubLink && (
                <a href={selectedProject.githubLink} target="_blank" rel="noreferrer"
                  className="pj-modal-btn pj-modal-btn-gh">
                  GitHub ↗
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