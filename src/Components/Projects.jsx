import React, { useEffect, useContext, useState } from "react";
import "./fonts.css";
import AppContext from "../Context/appContext";

const Projects = () => {
  const { projects, fetchProjects } = useContext(AppContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  const loadProjects = async () => {
    setLoading(true);
    await fetchProjects();   // fetch from backend/context
    setLoading(false);
  };

  loadProjects();
}, []);


  const openModal = (project) => {
    setSelectedProject(project);
    const modal = new window.bootstrap.Modal(
      document.getElementById("projectModal")
    );
    modal.show();
  };

  return (
    <div className="py-5" id="projects">
      <div className="container text-center">
        {/* Heading */}
        <h1
          className="zilla-slab-light fw-bold mb-4"
          style={{ fontSize: "42px", color: "#333" }}
        >
          Projects
        </h1>
        <hr className="mx-auto mb-5" />

        {/* Projects Row */}
        <div className="row justify-content-center">
         {loading ? (
    <div className="text-center my-5">
      <div className="spinner-border text-dark" role="status"></div>
      <p className="mt-2">Loading projects...</p>
    </div>
  ) : projects.length === 0 ? (
            <p className="text-center">No projects found</p>
          ) : (
            <div className="row">
              {projects.map((project) => (
                <div
                  className="col-12 col-sm-6 col-lg-4 mb-4 d-flex align-items-stretch"
                  key={project._id}
                  onClick={() => openModal(project)} // 👈 Opens modal on click
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="card shadow-sm border-0 h-100 transition-all"
                    style={{
                      width: "100%",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 6px rgba(0,0,0,0.1)";
                    }}
                  >
                    <h5
                      className="card-title libre-baskerville-regular my-3 text-center"
                      style={{ fontSize: "22px" }}
                    >
                      {project.projectName}
                    </h5>
                    <img
                      src={project.projectImg}
                      alt={project.projectName}
                      className="card-img-top rounded"
                      style={{
                        height: "260px",
                        objectFit: "cover",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <p
                        className="card-text libre-baskerville-regular"
                        style={{ fontSize: "16px" }}
                      >
                        {project.projectDesc.length > 200
                          ? project.projectDesc.slice(0, 200) + "..."
                          : project.projectDesc}
                      </p>
                      <div className="mt-3">
                        {project.githubLink && (<a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-dark btn-sm me-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>)}
                       {project.projectLink &&
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-dark btn-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </a>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-labelledby="projectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header">
              <h5 className="modal-title" id="projectModalLabel">
                {selectedProject?.projectName}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start">
              <img
                src={selectedProject?.projectImg}
                alt={selectedProject?.projectName}
                className="img-fluid rounded mb-3"
                style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
              />
              <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                {selectedProject?.projectDesc}
              </p>
            </div>
            <div className="modal-footer">
               {/* {selectedProject.githubLink && ( */}
                <a
                href={selectedProject?.githubLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                GitHub
              </a>
              {/* )} */}
              {/* {selectedProject?.projectLink && ( */}
                <a
                href={selectedProject?.projectLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark"
              >
                Live Demo
              </a>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
