import React from 'react';

// Task component definition
const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="task">
      {/* Checkbox to mark the task as complete or incomplete */}
      <input
        type="checkbox"
        checked={task.completed} // Checkbox is checked based on the task's completed status
        onChange={() => toggleComplete(task.id)} // Call toggleComplete function with task id when checkbox is changed
      />
      {/* Task title with conditional styling for completed tasks */}
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title} {/* Display the task title */}
      </span>
      {/* Button to delete the task */}
      <button onClick={() => deleteTask(task.id)}>Delete</button> {/* Call deleteTask function with task id when button is clicked */}
    </div>
  );
};

export default Task;
