import "../../index.css";

const TaskItem = ({ task, onDelete }) => (
  <div className="task-card">
    <div>
      <h3 className="task-title">{task.title}</h3>
      <p className="task-desc">{task.description}</p>
    </div>
    <button className="delete-btn" onClick={() => onDelete(task._id)}>
      Delete❌
    </button>
  </div>
);

export default TaskItem;
