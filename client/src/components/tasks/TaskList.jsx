import { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";
import "../../index.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

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
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("https://taskflow-ymt0.onrender.com/api/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Fetched Tasks:", res.data);
        setTasks(res.data);
      } catch (err) {
        console.error("Failed to fetch tasks:", err.response?.data || err.message);
        setTasks([]);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="task-list-container">
      <h2 className="task-list-title">Your Tasks</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task._id} task={task} onDelete={()=>deleteTask(task._id)}/>)
      ) : (
        <p className="no-tasks">No Tasks</p>
      )}
    </div>
  );
};

export default TaskList;
