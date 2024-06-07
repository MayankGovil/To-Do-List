import React, { useState, useEffect } from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';
import DeleteConfirmationModal from './components/DeleteConfirmationModal';
import './App.css';

function App() {
  // State variables
  const [tasks, setTasks] = useState([]); // Holds the list of tasks
  const [filter, setFilter] = useState('All'); // Holds the current filter type
  const [showModal, setShowModal] = useState(false); // Manages visibility of the delete confirmation modal
  const [taskToDelete, setTaskToDelete] = useState(null); // Holds the index of the task to be deleted

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle adding a new task
  const handleAddTask = (taskInput) => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { title: taskInput, completed: false }]);
    }
  };

  // Function to handle toggling task completion status
  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  // Function to handle confirming deletion of a task
  const handleConfirmDeleteTask = () => {
    const newTasks = tasks.filter((_, i) => i !== taskToDelete);
    setTasks(newTasks);
    setShowModal(false);
  };

  // Function to handle initiating deletion of a task
  const handleDeleteTask = (index) => {
    setTaskToDelete(index);
    setShowModal(true);
  };

  // Function to handle changing the filter type
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  // Filter the tasks based on the selected filter type
  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <Container className="mt-4">
      <h1 className="text-center">Todo List</h1>
      {/* TaskForm component to add new tasks */}
      <TaskForm onAddTask={handleAddTask} />

      {/* ButtonGroup to toggle between filter options */}
      <ButtonGroup className="mb-3">
        <Button onClick={() => handleFilterChange('All')} active={filter === 'All'}>All Task</Button>
        <Button variant="info" onClick={() => handleFilterChange('Active')} active={filter === 'Active'}>Active Task</Button>
        <Button variant="success" onClick={() => handleFilterChange('Completed')} active={filter === 'Completed'}>Completed Task</Button>
      </ButtonGroup>

      {/* TaskTable component to display tasks */}
      <TaskTable
        tasks={filteredTasks}
        onDeleteTask={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />

      {/* DeleteConfirmationModal component for confirming task deletion */}
      <DeleteConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmDeleteTask}
      />
    </Container>
  );
}

export default App;
