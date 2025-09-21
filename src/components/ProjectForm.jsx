import React, {useState} from "react";
import "./ProjectForm.css";

function ProjectForm({onAddProject}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    //Handle form submission 
    function handleSubmit(e){
        e.preventDefault();
        if(!title || !description || !image) return; //Prevent blank submission

        const newProject = {title, description, image};
        onAddProject(newProject);//Pass to ProjectList

        //Reset form
        setTitle("");
        setDescription("");
        setImage("");
    }

    return (
        <form className="project-form" onSubmit={handleSubmit}>
            <div>
                <input
                    className="title-input"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter project name"
                />
            </div>

            <div>
            <textarea
                className="description-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter project description"
            />
            </div>

            <div>
                <input  
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Add image URL"
                />
            </div>

            <button type="submit">Add Project</button>
        </form>
    );
}

export default ProjectForm;