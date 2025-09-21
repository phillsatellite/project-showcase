import React, { useState, useEffect } from "react";
import "./ProjectCard.css";

function ProjectCard({ project, onDelete = () => {}, onSave = () => {} }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(project.title || "");
  const [description, setDescription] = useState(project.description || "");

  //Update local state if any changes are made
  useEffect(() => {
    setTitle(project.title || "");
    setDescription(project.description || "");
  }, [project.id, project.title, project.description]);

  //Handle save - updates parent and exits edit 
  function handleSave() {
    onSave({ ...project, title, description });
    setIsEditing(false);
  }

  //Cancel and reset form
  function handleCancel() {
    setTitle(project.title || "");
    setDescription(project.description || "");
    setIsEditing(false);
  }

  return (
    <div className="ProjectCard">
        {/* Show image if available */}
      {project.image && (
        <img className="projectImage" src={project.image} alt={project.title} />
      )}

      <div className="content">
        {!isEditing ? (
          <>
            {/* Edit & Delete buttons */}
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="actions">
              <button type="button" className="edit" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button type="button" className="delete" onClick={onDelete}>
                Delete
              </button>
            </div>
          </>
        ) : (
          <>
            <input
              className="edit-input"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="edit-textarea"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {/* Save & Cancel buttons */}
            <div className="actions">
              <button type="button" className="save" onClick={handleSave}>
                Save
              </button>
              <button type="button" className="cancel" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;