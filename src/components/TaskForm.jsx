import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css';

function TaskForm({ onAddTask }) {
  const [taskInput, setTaskInput] = useState(''); // State variable to hold the input value

  // Function to handle input change
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Function to handle add button click
  const handleAddButtonClick = () => {
    // Call the parent function to add the task & Clear the input field after adding task
    onAddTask(taskInput);
    setTaskInput('');
  };

  return (
    <Form className="mb-3">
      <Form.Group className='d-flex mx-auto'>
       
        <Form.Control
          type="text"
          className='w-75 ms-5'
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
       
        <Button variant="primary" onClick={handleAddButtonClick}>Add Task</Button>
      </Form.Group>
    </Form>
  );
}

export default TaskForm;
