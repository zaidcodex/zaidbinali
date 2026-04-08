import React from 'react'
import AppContext from './appContext'
import { useState } from 'react'

const AppState = (props) => {
    // const [helloworld, setHelloworld] = useState("Helloworld")
      const [projects, setProjects] = useState([]);
    
    
        const loggedIn = async (username, password)=> {
  try {
    const response = await fetch("https://zaidalie-be-hosting.vercel.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password})
    });

 

    const data = await response.json(); // { authToken: "..." }
    console.log("Auth Token:", data.authToken);

    // Store token in localStorage/sessionStorage if needed
    localStorage.setItem("authToken", data.authToken);

    return data;
  } catch (err) {
    console.error("Error during login:", err.message);
    // alert("Login failed: " + err.message);
  }
}


const addProject = async (project) => {
    try {
      const response = await fetch("https://zaidalie-be-hosting.vercel.app/api/project/create-projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });

      const data = await response.json();
      if (response.ok) {
        // setProjects((prev) => [data, ...prev]); // add new project to state
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (err) {
      console.error("Error adding project:", err);
      return { success: false, message: err.message };
    }
  };



  const fetchProjects = async () => {
    try {
      const response = await fetch("https://zaidalie-be-hosting.vercel.app/api/project/get-projects");
      const data = await response.json();
      if (response.ok) {
        setProjects(data);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };


  // Update Project function
const updateProject = async (id, updatedData) => {
  try {
    const res = await fetch(`https://zaidalie-be-hosting.vercel.app/api/project/update-project/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
      throw new Error("Failed to update project");
    }

    const data = await res.json();
    console.log("✅ Project updated successfully:", data);
    return data;
  } catch (error) {
    console.error("❌ Error updating project:", error);
  }
};


const deleteProject = async (projectId) => {
  try {
    const response = await fetch(`https://zaidalie-be-hosting.vercel.app/api/project/delete-project/${projectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      console.log("✅", data.message);
    } else {
      console.error("❌", data.message);
    }
  } catch (error) {
    console.error("⚠️ Error deleting project:", error);
  }
};


    return (
        <AppContext.Provider value={{setProjects, deleteProject, updateProject, loggedIn, addProject, fetchProjects, projects}}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppState