import React, { useState } from "react";
import "./form.css";

export default function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;
        
        // Call the onAddTask function with the task details
        onAddTask({ title, description });

        // Clear the form fields after submitting
        setTitle("");
        setDescription("");
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h3 className="form-title">Add New Task</h3>
            <div>
                <label className="form-label">Title:</label>
                <input className="form-input"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea className="form-textarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button className="form-button" type="submit">Add Task</button>
        </form>
    );
}
