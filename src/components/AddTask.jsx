import React, { useState } from 'react';

// AddTask component definition
const AddTask = ({ addTask }) => {
  // State to hold the title of the new task
  const [title, setTitle] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (title.trim()) { // Check if the title is not empty or just whitespace
      addTask(title); // Call the addTask function passed as a prop with the new task title
      setTitle(''); // Reset the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Form to handle adding new tasks */}
      <input
        type="text"
        value={title} // Bind the input value to the title state
        onChange={(e) => setTitle(e.target.value)} // Update the title state on input change
        placeholder="Add a new task" // Placeholder text for the input field
      />
      <button type="submit">Add</button> {/* Button to submit the form */}
    </form>
  );
};

export default AddTask;
