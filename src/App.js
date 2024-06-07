import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';  // Import the AddTask component
import TaskList from './components/TaskList'; // Import the TaskList component
import './App.css';  // Import the CSS for styling

const App = () => {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to hold the current filter ('All', 'Active', 'Completed') by default we provide All to see the all the task which were added
  const [filter, setFilter] = useState('All');

  // useEffect hook to load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')); // get the task name from the local storage
    if (savedTasks) {
      setTasks(savedTasks); // Set the tasks state with saved tasks if they exist
    }
  }, []);

  // useEffect hook to save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the current tasks to localStorage
  }, []); // Only run this effect when the tasks state changes

  // Function to add a new task
  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false }; // Create a new task object
    setTasks([...tasks, newTask]); // Add the new task to the tasks state
  };

  // Function to toggle the completed status of a task
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task // Toggle the completed status of the task with the given id
    ));
  };

  // Function to delete a task
  const deleteTask = (id) => {
    window.confirm("Are you want to delete Task");
    setTasks(tasks.filter(task => task.id !== id)); // Remove the task with the given id from the tasks state
  };

  // Filter the tasks based on the current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed; // If the filter is 'Active', show only uncompleted tasks
    if (filter === 'Completed') return task.completed; // If the filter is 'Completed', show only completed tasks
    return true; // If the filter is 'All', show all tasks
  });

  return (
    <div className="app">
      <h1>Todo List</h1>
      {/* Component to add a new task */}
      <AddTask addTask={addTask} />
      {/* Component to display the list of tasks */}
      <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      {/* Buttons to filter tasks */}
      <div className="filters">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Active')}>Active</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
      </div>
    </div>
  );
};

export default App;
