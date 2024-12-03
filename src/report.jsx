import React, { useState, useEffect, useRef } from 'react';
import './Dashboard-Report.css';
import maleUserImage from "./dist/img/male-user.png";
import addImage from "./img/add.png";
import editimage from "./img/edit.png";
import  Gobackimage from "./img/Go-Back.png";
const Report = ({ onFormSwitch })  => {
  const listContainerPRef = useRef(null);
  const listContainerCRef = useRef(null);
  const [savedTasksContainer, setSavedTasksContainer] = useState([]);

  const showTask = () => {
    listContainerPRef.current = JSON.parse(localStorage.getItem('SoftEngData'));
    listContainerCRef.current = JSON.parse(localStorage.getItem('SoftEngData'));
    setSavedTasksContainer(JSON.parse(localStorage.getItem('ArchiveData')));
  };

  useEffect(() => {
    showTask();
  }, []);

  const handleNewProject = (projectType) => {
    const containerId = `${projectType.toLowerCase()}-project-name`;
    const container = document.getElementById(containerId);

    if (container) {
      const divCount = container.querySelectorAll(`.${projectType.toLowerCase()}-project-name`).length;

      if (divCount < (projectType === 'Personal' ? 4 : 3)) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(`${projectType.toLowerCase()}-project-name`);
        container.appendChild(newDiv);
        newDiv.textContent = `${projectType} Project ${divCount + 1}`;
        localStorage.setItem('savedDiv', container.innerHTML);
      } else {
        alert(`You've reached the maximum limit of ${projectType} Projects.`);
      }
    }
  };

  const filterCheckedItems = (listContainer) => {
    if (listContainer && listContainer.current) {
      const liItems = listContainer.current.getElementsByTagName('li');
      for (let i = 0; i < liItems.length; i++) {
        const li = liItems[i];
        if (!li.classList.contains('checked')) {
          li.style.display = 'none';
        }
      }
    }
  };

  const showUncheckedItems = (listContainer) => {
    if (listContainer && listContainer.current) {
      const liItems = listContainer.current.getElementsByTagName('li');
      for (let i = 0; i < liItems.length; i++) {
        const li = liItems[i];
        if (li.classList.contains('checked')) {
          li.style.display = 'none';
        } else {
          li.style.display = 'list-item';
        }
      }
    }
  };

  useEffect(() => {
    filterCheckedItems(listContainerPRef);
    showUncheckedItems(listContainerCRef);
  }, [listContainerPRef, listContainerCRef]);

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
      <div className="progress-bar-holder-report">
        <div className="label-projectname ">PROJECT 1</div>
        <div className="progressbar"></div>
      </div>
  
      {/* Button Features */}
      <div className="edit-button-report">
        <img className="edit-picture" src={(editimage)} />
        <button type="button" onClick="" className="button-edit">
          Edit
        </button>
      </div>
  
      <div className="go-back-button-report">
        <img className="go-back-picture" src={(Gobackimage)}/>
        <button type="button" onClick="" className="button-show-all">
          Back
        </button>
      </div>
  
      {/* Report Holder */}
      <div className="report-holder">
        {/* Previous Holder */}
        <div className="previous-holder">
          <div className="previous-frame">
            <div className="text-wrapper">PREVIOUS</div>
            <div className="div">week 1</div>
          </div>
  
          <div className="previous-placeholder">
            <ul id="list-containerP"></ul>
          </div>
        </div>
  
        {/* Current Holder */}
        <div className="current-holder">
          <div className="current-frame">
            <div className="text-wrapper">CURRENT</div>
            <div className="div">week 1</div>
          </div>
  
          <div className="current-placeholder">
            <ul id="list-containerC"></ul>
          </div>
        </div>
  
        {/* Archive Holder */}
        <div className="archive-holder">
          <div className="archive-frame">
            <div className="text-wrapper">ARCHIVE</div>
            <div className="div">week 1</div>
          </div>
  
          <div className="archive-placeholder">
            <ul id="completed-tasks-list"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
