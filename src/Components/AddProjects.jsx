import React, { useState, useContext } from "react";
import ProjectContext from "../Context/appContext";
import { toast } from "react-toastify";   // ⬅️ Add this
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const AddProjects = () => {
  const { addProject } = useContext(ProjectContext);

  const [project, setProject] = useState({
    projectName: "",
    projectDesc: "",
    projectImg: "",
    githubLink: "",
    projectLink: "",
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  // 🟡 Cloudinary Upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "portfolio");
    data.append("cloud_name", "drdk4hrkn");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/drdk4hrkn/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const uploadRes = await res.json();
      setProject({ ...project, projectImg: uploadRes.secure_url });
      setUploading(false);

      toast.success("Image uploaded successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
      setUploading(false);
      toast.error("Image upload failed!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addProject(project); // calling backend / context

    toast.success("Project added successfully!");  // ⬅️ toast

    setProject({
      projectName: "",
      projectDesc: "",
      projectImg: "",
      githubLink: "",
      projectLink: "",
    });
  };

  return (
    <div className="container mt-5 p-4 border rounded shadow-sm bg-light">
      <h2 className="mb-4 text-center">Add Project</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
            type="text"
            name="projectName"
            value={project.projectName}
            onChange={handleChange}
            placeholder="Project Name"
            className="form-control form-control-lg"
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            name="projectDesc"
            value={project.projectDesc}
            onChange={handleChange}
            placeholder="Project Description"
            className="form-control form-control-lg"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="form-control form-control-lg"
          />

          {uploading && (
            <div className="text-center mt-2 text-info">
              <div className="spinner-border spinner-border-sm me-2" role="status" />
              Uploading to Cloudinary...
            </div>
          )}

          {project.projectImg && (
            <img
              src={project.projectImg}
              alt="Preview"
              className="img-fluid mt-3 rounded"
              style={{ maxHeight: "200px" }}
            />
          )}
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="githubLink"
            value={project.githubLink}
            onChange={handleChange}
            placeholder="GitHub Link"
            className="form-control form-control-lg"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="projectLink"
            value={project.projectLink}
            onChange={handleChange}
            placeholder="Project Link"
            className="form-control form-control-lg"
          />
        </div>

        <div className="text-end">
          <button type="submit" className="btn btn-primary btn-lg px-4">
            Add Project
          </button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default AddProjects;
