import React, { useState } from 'react';
import './style.css';
import addNewImage from "./dist/img/addnew.png";

// Function component for the task list
function TaskList() {
  // State hooks for managing tasks, input, done count, clicked tasks, and editing index
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');
  const [doneCount, setDoneCount] = useState(0);
  const taskLimit = 5;
  const [clickedTasks, setClickedTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Function to add a new task
  const addTask = () => {
    // Display alert if no input is added
    if (inputTask.trim() === '') {
      alert('No Input Added');
      return;
    }

    // Display alert if the task limit is reached
    if (tasks.length >= taskLimit) {
      alert('Upgrade to Premium to add more tasks!');
      return;
    }

    // Update tasks, clicked tasks, and reset input
    setTasks([...tasks, inputTask]);
    setClickedTasks([...clickedTasks, false]);
    setInputTask('');
  };

  // Function to handle clicking on a task
  const handleTaskClick = (index) => {
    // Mark task as done if not already clicked and not in editing mode
    if (!clickedTasks[index] && editingIndex === null) {
      setDoneCount(Math.max(0, doneCount + 1));
      setClickedTasks(
        clickedTasks.map((task, i) =>
          i === index ? true : task
        )
      );
    }
  };

  // Function to handle clicking on the edit button
  const handleEditClick = (index) => {
    // Set editing mode and populate the input with the task content
    setEditingIndex(index);
    setInputTask(tasks[index]);
  };

  // Function to handle clicking on the delete button
  const handleDeleteClick = (index) => {
    // Create a copy of tasks, check if the task is done, update tasks and clicked tasks
    const newTasks = [...tasks];
    const isDone = clickedTasks[index];

    newTasks.splice(index, 1);
    setTasks(newTasks);

    // Update done count if the deleted task was marked as done
    if (isDone) {
      setDoneCount(Math.max(0, doneCount - 1));
    }

    // Remove the task from clicked tasks and exit editing mode
    setClickedTasks(clickedTasks.filter((_, i) => i !== index));
    setEditingIndex(null);
  };

  // Function to handle key press during editing
  const handleEditKeyPress = (e, index) => {
    // Save the edited task on Enter key press
    if (e.key === 'Enter') {
      saveEditedTask(index);
    }
  };

  // Function to save the edited task
  const saveEditedTask = (index) => {
    // Create a copy of tasks, update the edited task, exit editing mode, and reset input
    const updatedTasks = [...tasks];
    updatedTasks[index] = inputTask;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setInputTask('');
  };

  // Function to handle key press for adding a new task
  const handleKeyPress = (e) => {
    // Add a new task on Enter key press
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // JSX structure for the task list component
  return (
    <div className="ListContainer">
      {/* Display task title and done count */}
      <div className="taskTitle">
        <h2>TASKS</h2>
        <p>Done: {doneCount}/{tasks.length}</p>
      </div>
      


              {/* Display input field and add button for adding new tasks */}
              <div className="AddTask">
        <input
          type="text"
          id="inputTask"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add New Task"
          disabled={editingIndex !== null}
        />
        <button onClick={addTask} disabled={editingIndex !== null}>
          <img
            className="addNew"
            alt="addNewTask"
            src={addNewImage}
          />
          Add
        </button>
      </div>



      {/* Display the task list */}
      <div className="taskList">
        <ul id="list">
          {/* Map through tasks and create list items */}
          {tasks.map((task, index) => (
            <li
              key={index}
              className={(clickedTasks[index] ? 'checked ' : '') + (editingIndex === index ? 'editing ' : '')}
            >
              {editingIndex === index ? (
                // Display input field and buttons during editing mode
                <>
             
                  <input
                    type="text"
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                    onKeyDown={(e) => handleEditKeyPress(e, index)}
                  />
                  <div className="editingButtonsContainer">
                      <button onClick={() => saveEditedTask(index)} className="noChange">Save</button>
                      <button onClick={() => handleDeleteClick(index)} className="noChange">Delete</button>
                  </div>
                </>
              ) : (
                // Display task content and buttons during regular mode
                <> 

                 <div className="editingButtonsContainer">
                  <span onClick={() => handleTaskClick(index)} className={clickedTasks[index] ? 'doneText' : ''}>{task}</span>
                  <button className="editingButtons" onClick={() => handleEditClick(index)}>Edit</button>
                  <button className="editingButtons" onClick={() => handleDeleteClick(index)}>Delete</button>
                 </div>
                  
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

                
    </div>
  );
}

// Export the TaskList component
export default TaskList;
