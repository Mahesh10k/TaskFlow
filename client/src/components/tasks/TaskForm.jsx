import React, { useState } from "react";
import "../../index.css";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title is required");
      return;
    }

    const newTask = {
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate: dueDate || null,
    };

    onAddTask(newTask);

    
    alert(`Added ${newTask.title}`)
    setTitle("");
    setDescription("");
    setPriority("medium");
    setDueDate("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2 className="form-title">Add New Task</h2>

      {error && <p className="form-error">{error}</p>}

      <div className="form-group">
        <label htmlFor="title">
          Title <span className="required">*</span>
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Optional task description"
          rows="3"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="submit-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
