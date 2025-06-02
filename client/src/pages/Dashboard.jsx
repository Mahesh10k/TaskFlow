import React, { useEffect, useState } from "react";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import "../index.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch("https://taskflow-ymt0.onrender.com/api/tasks", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (res.ok) setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    }
  };

  const addTask = async (taskData) => {
    try {
      const res = await fetch("https://taskflow-ymt0.onrender.com/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(taskData),
      });
      const newTask = await res.json();
      if (res.ok) {
        setTasks((prev) => [...prev, newTask]);
      }
    } catch (error) {
      console.error("Failed to add task", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`https://taskflow-ymt0.onrender.com/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.ok) {
        setTasks((prev) => prev.filter((task) => task._id !== id));
      }
    } catch (error) {
      console.error("Failed to delete task", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Personal Task Dashboard</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />  
    </div>
  );
};

export default Dashboard;