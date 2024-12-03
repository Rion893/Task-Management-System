import React, { useState, useEffect } from 'react';
import './Dashboard-Report.css';
import maleUserImage from "./dist/img/male-user.png";
import addImage from "./img/add.png";
import addImage2 from "./img/add-new.png";
import editImage from "./img/edit.png";
import showallimage from "./img/bulleted-list.png";

const Dashboard = ({ onFormSwitch }) => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [savedTasks, setSavedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = () => {
    if (inputValue === '') {
      alert('You must write something!');
    } else {
      const newTask = { id: tasks.length + 1, text: inputValue };
      setTasks([...tasks, newTask]);
      setInputValue('');

      saveData();
    }
  };

  const editContent = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);

    saveData();
  };

  const showTask = () => {
    // Show the tasks in the console
    console.log(tasks);
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    saveData();
  };

  const handleMoveToSaved = (taskId) => {
    const taskToMove = tasks.find((task) => task.id === taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setSavedTasks([...savedTasks, taskToMove]);

    saveData();
  };

  const saveData = () => {
    localStorage.setItem('dashboardTasks', JSON.stringify(tasks));
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  };

  const loadData = () => {
    const storedTasks = localStorage.getItem('dashboardTasks');
    const storedSavedTasks = localStorage.getItem('savedTasks');

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }

    if (storedSavedTasks) {
      setSavedTasks(JSON.parse(storedSavedTasks));
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
    {/* Side Bar Menu */}
    <div className="box-sidebar-userSection">
        <div className="account-facade">
          <div className="username">User12345</div>
          <div className="user-fullName">User Full Name</div>
          <img className="user-icon" src={(maleUserImage)} />
  
          <div className="user-section-menu">
            <div className="updates-wrapper">Updates</div>
            <div className="progress-wrapper" onClick={() => onFormSwitch('report')}>Progress</div>
            <div className="account-wrapper">Account</div>
            <div className="settings-wrapper">Settings</div>
          </div>
        </div>
      </div>
  
   {/* Personal Section */}
   <div className="box-sidebar-projectSection">
        <div className="personal-section">
          <div className="title-wrapper">Personal</div>
          <div className="new-proj">
            <div className="overlap-group">
              <div className="newProject-wrapper" id="newProject-wrapper">
                New Project
              </div>
              <img className="add" src={(addImage)} />
            </div>
            <div id="personal-project-name"></div>
          </div>
        </div>
      </div>
  
      {/* Collab Section */}
      <div className="box-sidebar-collabSection">
        <div className="collab-section">
          <div className="title-wrapper">Collab</div>
          <div className="group">
            <div className="overlap-group">
              <div className="newCollab-wrapper" id="newCollab-wrapper">
                New Project
              </div>
              <img className="add" src={(addImage)} />
            </div>
            <div id="collab-project-name"></div>
          </div>
        </div>
        <div className="feedback-wrapper">Feedback</div>
      </div>
  
      {/* Progress Bar */}
      <div className="progress-bar-holder">
        <div className="label-projectname ">PROJECT 1</div>
        <div className="progressbar"></div>
      </div>
    

      {/* Main Feature */}
      {/* Button Features */}
       {/* Add Task */}
       {/* Add Task */}
       <div className="add-new-task-button">
        <img className="add-new-picture" src={addImage2} />
        <button type="button" onClick={addTask} className="button-add-new-task">
          Add New Task
        </button>
      </div>

        {/* Edit Button */}
        <div className="edit-button">
        <img className="edit-picture" src={editImage} />
        <button type="button" className="button-edit" onClick={() => {
          const taskId = "edit"; // Replace with actual task ID
          const newText = prompt('Edit the task:', tasks.find((task) => task.id === taskId).text);
          if (newText !== null) {
            editContent(taskId, newText);
          }
        }}>
          Edit
        </button>
      </div>

      {/* Show All Button */}
      <div className="show-all-button">
  <img className="show-all-picture" src={showallimage} />
  <button
    type="button"
    className="button-show-all"
    onClick={() => showTask()}
  >
    Show All
  </button>
</div>
      {/* Completed Tasks List */}
      <ul className="completed-tasks-list">
        {completedTasks.map((task, index) => (
          <li key={index} className="checked">
            {task}
          </li>
        ))}
      </ul>

      {/* Title */}
      <div className="title">
        <div className="day-date" onDoubleClick={() => editContent("TODAY")}>
          TODAY
        </div>
        <div className="calendar-date" onDoubleClick={() => editContent("mm-dd-yy")}>
          mm-dd-yy
        </div>
      </div>

      {/* Todo App */}
      <div className="todo-app">
        <div className="row">
          <input type="text" id="input-box" placeholder="Add Task" />
          <button onClick={addTask} className="button-addtask" id="add-button">
            Add
          </button>
        </div>
        <ul id="list-container"></ul>
      </div>


          <div class="title2" id="title2">

          </div>
        <div id="div-container">
        </div>  

        </div>

  );
};
export default Dashboard;
