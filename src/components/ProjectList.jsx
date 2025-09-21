import React, {useState} from "react";
import projectData from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import SearchBar from "./SearchBar";
import "./ProjectList.css";

function ProjectList(){
    const [projects, setProjects] = useState(projectData);
    const [searchedProject, setSearchedProject] = useState("");
    const [editingProject, setEditingProject] = useState(null);

    //Handles adding a new project to the list 
    function addProject(newProject){
        const newId = projects.length > 0 ? projects[projects.length - 1].id + 1: 1;
        const projectWithId = {...newProject, id: newId};
        setProjects([...projects, projectWithId]);
    }

    //Remove project by ID
    function deleteProject(idToDelete) {
        setProjects((prev) => prev.filter((p) => p.id !== idToDelete));
    }

    //Update name/descrition 
    function updateProject(updatedProject) {
        setProjects((prev) => prev.map((p) => (p.id === updatedProject.id ? updatedProject : p)));
        setEditingProject(null);
    }

    //Filter projects by search and case-insensitive 
    const displayedProjects = projects.filter((project) => {
        if(!searchedProject) return true;
        return (
            project.title &&
            project.title.toLowerCase().includes(searchedProject.toLowerCase())
        );
    });

    return (
        <div>
            {/* Form for adding or editing projects */}
            <ProjectForm
            onAddProject={addProject}
            onUpdateProject={updateProject}
            editingProject={editingProject}
            />

            <div className="project-list">
                {/* Search input (live filter) */}
                <SearchBar onSearchSubmit={setSearchedProject} />
                {displayedProjects.length === 0 && searchedProject && (
                    <p className="no-results">No match found</p>
        )}
                {/* Render filtered project cards */}
                    {displayedProjects.map(proj => (
                        <ProjectCard
                        key={proj.id}
                        project={proj}
                        onEdit={() => setEditingProject(proj)}
                        onDelete={() => deleteProject(proj.id)}
                        onSave={updateProject}
                        />
                    ))}
            </div>
        </div>
    );
}

export default ProjectList;