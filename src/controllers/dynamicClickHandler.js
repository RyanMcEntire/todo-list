/* eslint-disable import/no-cycle */
import Storage from '../model/storage';
import { makeTaskForm } from '../dom/formElements';
import {
  addAllProjectCards,
  getCurrentProjectAndAppendTaskMain,
  appendTaskCardToMain,
} from './staticClickHandlers';

// functions that handle project button click events

function updateCurrentProject(projectName) {
  Storage.setCurrentProject(projectName);
  const projectNameHeader = document.getElementById('projectNameHeader');
  projectNameHeader.innerText = projectName;
}

function appendTaskForm(element) {
  const taskFormContainer = document.getElementById('taskFormContainer');
  const taskForm = document.getElementById('newTaskForm');
  if (!taskFormContainer.contains(taskForm)) {
    taskFormContainer.appendChild(element);
  }
  // while (parentElement.hasChildNodes()) parentElement.firstChild.remove();

  // parentElement.appendChild(element);
}

function newTaskOnProjectClick(projectName) {
  updateCurrentProject(projectName);

  appendTaskForm(makeTaskForm());
}

// click handler for all project cards

const updateProjectEventListeners = () => {
  const projectDisplayArea = document.getElementById('projectDisplayArea');
  projectDisplayArea.addEventListener('click', (e) => {
    let projectName = null;
    if (e.target.value === 'projectName') {
      projectName = e.target.getAttribute('data-projectName');
      updateCurrentProject(projectName);
      getCurrentProjectAndAppendTaskMain(projectName);
    }
    if (e.target.value === 'projectDelete') {
      projectName = e.target.getAttribute('data-projectDelete');
      Storage.removeProject(projectName);
      addAllProjectCards();
    }
    if (e.target.value === 'projectNewTask') {
      projectName = e.target.getAttribute('data-projectNewTask');
      newTaskOnProjectClick(projectName);
      getCurrentProjectAndAppendTaskMain(projectName);
    }

    // console.log(e.target.value);
    // console.log(projectName);
    // console.log(Storage.getManager().getCurrentProject());
  });
};

const handleTaskCardClick = (e) => {
  console.log(e.target.value);
};

function deleteTaskMain(e) {
  const taskToDelete = e.target.value;
  
  const manager = Storage.getManager();
  const projectName = manager.getCurrentProjectName();
  const project = manager.getProject(projectName);
  console.log(project)
  Storage.removeTask(projectName, taskToDelete); 
  const updatedProject = Storage.getManager().getProject(projectName);
  console.log(updatedProject); 
  appendTaskCardToMain(updatedProject);
}

export {
  updateProjectEventListeners,
  handleTaskCardClick,
  updateCurrentProject,
  deleteTaskMain,
};
