import React from 'react';
import Report from './report';


class YourComponent extends React.Component {
  render() {
    return (
      <div>
        {/* Side Bar Menu */}
        <div className="box-sidebar-userSection">
          <div className="account-facade">
            <div className="username">User12345</div>
            <div className="user-fullName">User Full Name</div>
            <img className="user-icon" src="img/male-user.png" />

            <div className="user-section-menu">
              <div className="updates-wrapper">Updates</div>
              <div className="progress-wrapper">Progress</div>
              <div className="account-wrapper">Account</div>
              <div className="settings-wrapper">Settings</div>
            </div>
          </div>
        </div>

        <div className="box-sidebar-projectSection">
          <div className="personal-section">
            <div className="title-wrapper">Personal</div>
            <div className="new-proj">
              <div className="overlap-group">
                <div className="newProject-wrapper" id="newProject-wrapper">New Project</div>
                <img className="add" src="img/add.png" alt="Add" />
              </div>
              <div id="personal-project-name"></div>
            </div>
          </div>
        </div>

        <div className="box-sidebar-collabSection">
          <div className="collab-section">
            <div className="title-wrapper">Collab</div>
            <div className="group">
              <div className="overlap-group">
                <div className="newCollab-wrapper" id="newCollab-wrapper">New Project</div>
                <img className="add" src="img/add.png" alt="Add" />
              </div>
              <div id="collab-project-name"></div>
            </div>
          </div>
          <div className="feedback-wrapper">Feedback</div>
        </div>
        {/* End of Side Bar Menu */}

        {/* Progress Bar */}
        <div className="progress-bar-holder">
          <div className="label-projectname">PROJECT 1</div>
          <div className="progressbar"></div>
        </div>
        {/* End of Progress Bar */}

        {/* Main Feature */}
        {/* Button Features */}
        <div className="add-new-task-button">
          <img className="add-new-picture" src="img/add-new.png" alt="Add New" />
          <button type="button" onClick="" className="button-add-new-task">Add New Task</button>
        </div>

        <div className="edit-button">
          <img className="edit-picture" src="img/edit.png" alt="Edit" />
          <button type="button" onClick="" className="button-edit">Edit</button>
        </div>

        <div className="show-all-button">
          <img className="show-all-picture" src="img/bulleted-list.png" alt="Show All" />
          <button type="button" onClick="" className="button-show-all">Show All</button>
        </div>
        {/* End of Button Features */}
        <ul className="completed-tasks-list" id="completed-tasks-list"></ul>

        <div className="title">
          <div className="day-date" id="day-date" onDoubleClick={(e) => this.editContent(e)}>
            TODAY
          </div>
          <div className="calendar-date" onDoubleClick={(e) => this.editContent(e)}>
            mm-dd-yy
          </div>
        </div>

        <div className="todo-app">
          <div className="row">
            <input type="text" id="input-box" placeholder="Add Task" />
            <button onClick={() => this.addTask()} className="button-addtask" id="add-button">
              Add
            </button>
          </div>
          <ul id="list-container"></ul>
        </div>

        <div className="title2" id="title2"></div>
        <div id="div-container"></div>
        {/* End of Main Feature */}
      </div>
    );
  }

  addTask() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if (inputBox.value === "") {
      alert("You must write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;

      let editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      li.appendChild(editButton);

      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);

      listContainer.appendChild(li); // Add the task to the current tasks list

      inputBox.value = "";

      this.saveData();
    }
  }

  editContent(element) {
    // Get the current content of the div
    const currentContent = element.innerHTML;

    // Create an input element to edit the content
    const inputElement = document.createElement("input");
    inputElement.value = currentContent;

    // Replace the div's content with the input element
    element.innerHTML = "";
    element.appendChild(inputElement);

    // Focus on the input element for editing
    inputElement.focus();

    // Listen for blur event to save changes when input loses focus
    inputElement.addEventListener("blur", () => {
      const newContent = inputElement.value;
      element.innerHTML = newContent;
      this.saveData();
    });

    // Listen for Enter key press to save changes
    inputElement.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        const newContent = inputElement.value;
        element.innerHTML = newContent;
        this.saveData();
      }
    });
  }

  saveData() {
    const listContainer = document.getElementById("list-container");
    const savedTasksContainer = document.getElementById("completed-tasks-list");

    if (listContainer) {
      localStorage.setItem("SoftEngData", listContainer.innerHTML);
    }

    if (savedTasksContainer) {
      localStorage.setItem("ArchiveData", savedTasksContainer.innerHTML);
    }
  }

  showTask() {
    const listContainer = document.getElementById("list-container");
    const savedTasksContainer = document.getElementById("completed-tasks-list");

    if (listContainer && savedTasksContainer) {
      listContainer.innerHTML = localStorage.getItem("SoftEngData");
      savedTasksContainer.innerHTML = localStorage.getItem("ArchiveData");
    }
  }

  componentDidMount() {
    this.showTask();
  }
}

export default YourComponent;
