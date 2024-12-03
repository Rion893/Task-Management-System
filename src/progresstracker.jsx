
import React, { useState } from 'react';
import './progresstracker.css';

const ProgressTracker = () => {
    const [tasks, setTasks] = useState([
      { id: 1, text: 'Task 1', completed: false },
      { id: 2, text: 'Task 2', completed: false },
      { id: 3, text: 'Task 3', completed: false },
    ]);
  
    const toggleTaskCompletion = (taskId) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
  
      setTasks(updatedTasks);
    };
  
    return (
      <div className="task-tracker">
        <h2>Task Progress Tracker</h2>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? 'completed' : ''}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default ProgressTracker;