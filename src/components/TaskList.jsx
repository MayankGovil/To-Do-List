import React from 'react'; // Import React to use JSX and React components
import Task from './Task'; // Import the Task component

// TaskList component definition

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
    return (
        <div className="task-list">
            {/* Map through the tasks array and render a Task component for each task */}
            {tasks.map((task) => (
                <Task 
                key={task.id} // Unique key for each task to help React identify which items have changed
                
                task={task} // Pass the task object as a prop to the Task component
                toggleComplete={toggleComplete} // Pass the toggleComplete function as a prop to the Task component
                deleteTask={deleteTask} // Pass the deleteTask function as a prop to the Task component
              />
            ))}
             {/*  Pass the task data, toggleComplete function, and deleteTask function as props to each Task component */}
        </div>
    );
};

export default TaskList;
