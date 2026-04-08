import React, { useEffect, useContext, useState } from "react";
import AppContext from "../Context/appContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const ViewProjects = () => {
  const { projects, fetchProjects, updateProject, deleteProject, setProjects } =
    useContext(AppContext);


  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectId, setProjectId] = useState("");

  const [editedProject, setEditedProject] = useState({
    projectName: "",
    projectDesc: "",
    githubLink: "",
    projectLink: "",
    projectImg: "",
  });

  const [uploading, setUploading] = useState(false);

  // Fetch all projects
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await fetchProjects();
      } catch (err) {
        toast.error("Failed to fetch projects!");
      }
      setLoading(false);
    };
    fetchData();
  }, []);
 
  // Modal open
  const handleModalOpen = (project) => {
    setSelectedProject(project);
    setEditedProject({ ...project });
    setProjectId(project._id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProject(null);
    setProjectId("");
  };

  // Input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProject((prev) => ({ ...prev, [name]: value }));
  };

  // Upload image to Cloudinary
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "portfolio");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/drdk4hrkn/image/upload",
        { method: "POST", body: formData }
      );

      const data = await res.json();

      if (data.secure_url) {
        setEditedProject((prev) => ({
          ...prev,
          projectImg: data.secure_url,
        }));

        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Image upload failed!");
      }
    } catch (err) {
      console.error("Upload failed:", err);
      toast.error("Image upload failed!");
    } finally {
      setUploading(false);
    }
  };

  // Update Project
  const handleUpdate = async () => {
    try {
      await updateProject(projectId, editedProject);

      setProjects((prevProjects) =>
        prevProjects.map((proj) =>
          proj._id === projectId ? { ...proj, ...editedProject } : proj
        )
      );

      toast.success("Project updated successfully!");

      setModalOpen(false);
      setProjectId("");
    } catch (err) {
      console.error("Error updating project:", err);
      toast.error("Failed to update project!");
    }
  };

  // Delete Project
  const handleDelete = async () => {
    try {
      await deleteProject(projectId);

      setProjects((prevProjects) =>
        prevProjects.filter((proj) => proj._id !== projectId)
      );

      toast.success("Project deleted successfully!");

      setModalOpen(false);
      setProjectId("");
    } catch (err) {
      console.error("Error deleting project:", err);
      toast.error("Failed to delete project!");
    }
  };

  return (
    <div className="py-5" id="projects">
      <div className="container text-center">
        <h1
          className="zilla-slab-light fw-bold mb-4"
          style={{ fontSize: "42px", color: "#333" }}
        >
          Projects
        </h1>
        <hr className="mx-auto mb-5" />

        {loading ? (
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : projects.length === 0 ? (
          <p className="text-center">No projects found</p>
        ) : (
          <div className="row justify-content-center">
            {projects.map((project) => (
              <div
                className="col-12 col-sm-6 col-lg-4 mb-4 d-flex align-items-stretch"
                key={project._id}
                onClick={() => handleModalOpen(project)}
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

                    <div className="mt-3 text-center">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-dark btn-sm me-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}

                      {project.projectLink && (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-dark btn-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={handleModalClose}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title">Edit Project</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalClose}
                ></button>
              </div>

              <div className="modal-body text-start">
                <img
                  src={editedProject.projectImg}
                  alt={editedProject.projectName}
                  className="img-fluid rounded mb-3"
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />

                <div className="mb-3">
                  <label className="form-label">Project Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="projectName"
                    value={editedProject.projectName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="projectDesc"
                    value={editedProject.projectDesc}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Project Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="form-control form-control-lg"
                  />
                  {uploading && (
                    <div className="text-center mt-2 text-info">
                      <div
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      />
                      Uploading to Cloudinary...
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">GitHub Link</label>
                  <input
                    type="text"
                    className="form-control"
                    name="githubLink"
                    value={editedProject.githubLink}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Live Demo Link</label>
                  <input
                    type="text"
                    className="form-control"
                    name="projectLink"
                    value={editedProject.projectLink}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default ViewProjects;
