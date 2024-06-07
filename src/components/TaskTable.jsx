// TaskTable.js
import React from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import '../App.css'

function TaskTable({ tasks, onDeleteTask, onToggleComplete }) {
    return (
        <Table striped bordered hover>
            <thead>
                <h3 className='py-2'>List of the Tasks</h3>
                <tr>
                    <th>Sno</th>
                    <th>Name of Task</th>
                    <th>Delete the Task</th>
                    <th>Status of Task</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td className='py-3'>{index + 1}</td>
                        <td className='td py-3'>
                            <Form.Check
                                type="checkbox"
                                className='px-2'
                                checked={task.completed}
                                onChange={() => onToggleComplete(index)} />
                            {/* Apply 'completed' class to title if task is completed */}
                            <span className={task.completed ? 'completed' : ''}>{task.title}</span>
                        </td>
                        <td>
                            <Button variant="danger" onClick={() => onDeleteTask(index)}>Delete</Button>
                        </td>
                        <td>
                            {/* Button to toggle task completion status */}
                            <Button variant={task.completed ? "success" : "info"} onClick={() => onToggleComplete(index)}>
                                {task.completed ? "Completed" : "Active"}
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TaskTable;
