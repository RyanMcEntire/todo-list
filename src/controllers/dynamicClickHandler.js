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
    // console.log,(projectName);
    // console.log(Storage.getManager().getCurrentProject());
  });
};

function eleId() {
  const name = document.getElementById('taskName');
  const description = document.getElementById('taskDescription');
  const due = document.getElementById('taskDue');
  const low = document.getElementById('low');
  const normal = document.getElementById('normal');
  const high = document.getElementById('high');
  const completed = document.getElementById('completed');
  return { name, description, due, normal, low, high, completed };
}

function initEditTask(projectName, taskName) {
  const manager = Storage.getManager();
  const project = manager.getProject(projectName);
  const task = project.getTask(taskName);
  console.log('task object => ', task);
  appendTaskForm(makeTaskForm());
  const ids = eleId();
  console.log(ids.name, ids.description, ids.due, ids.priority, ids.completed);
  ids.name.value = task.getName();
  ids.description.value = task.getDe
  // i could make this some kind of module next time
  // next project I'll work out how to do that

  // const name = document.getElementById('name');
  // const description = document.getElementById('description');
  // const due = document.getElementById('due');
  // const priority = document.getElementById('priority');
  // const completed = document.getElementById('completed');
  // eleId.name.value = task.getName();
}

const handleTaskCardClick = (e) => {
  const taskName = e.currentTarget.dataset.taskcard;
  console.log('task name=> ', taskName);
  const projectName = Storage.getManager().getCurrentProjectName();

  initEditTask(projectName, taskName);
};

function deleteTaskMain(e) {
  const taskToDelete = e.target.value;

  const manager = Storage.getManager();
  const projectName = manager.getCurrentProjectName();
  const project = manager.getProject(projectName);
  console.log(project);
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
