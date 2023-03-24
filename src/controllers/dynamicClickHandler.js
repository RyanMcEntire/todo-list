/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
import Storage from '../model/storage';
import { makeTaskForm } from '../dom/formElements';
import {
  addAllProjectCards,
  getCurrentProjectAndAppendTaskMain,
  appendTaskCardToMain,
} from './staticClickHandlers';
import { taskFormSelectors } from '../dom/selectors';

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

function whichPriorityChecked() {
  const ids = taskFormSelectors();
  const buttons = ids.priority;
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].checked === true) {
      return buttons[i].name;
    }
  }
  return null;
}

function appendTaskEditButtons() {
  const container = taskFormSelectors().completeAndEdit;
  console.log('appendButtons > ', container);
}

function initEditTask(projectName, taskName) {
  const manager = Storage.getManager();
  const project = manager.getProject(projectName);
  const task = project.getTask(taskName);
  appendTaskForm(makeTaskForm());
  const ids = taskFormSelectors();
  ids.name.value = task.getName();
  ids.description.value = task.getDescription();
  ids.due.value = task.getDateDue();
  ids.completed.checked = task.getCompleted();
  if (ids.low.name === whichPriorityChecked()) {
    ids.low.checked = true;
  }
  if (ids.normal.name === whichPriorityChecked()) {
    ids.normal.checked = true;
  }
  if (ids.high.name === whichPriorityChecked()) {
    ids.high.checked = true;
  }
  appendTaskEditButtons();
}

const handleTaskCardClick = (e) => {
  const taskName = e.currentTarget.dataset.taskcard;
  e.stopPropagation();
  const projectName = Storage.getManager().getCurrentProjectName();
  console.log('card ', taskName);
  initEditTask(projectName, taskName);
};

function deleteTaskMain(e) {
  const taskToDelete = e.currentTarget.dataset.deletetask;
  console.log('delete Button ', e.currentTarget.value);
  const manager = Storage.getManager();
  const projectName = manager.getCurrentProjectName();
  Storage.removeTask(projectName, taskToDelete);
  const updatedProject = Storage.getManager().getProject(projectName);
  appendTaskCardToMain(updatedProject);
}

export {
  updateProjectEventListeners,
  handleTaskCardClick,
  updateCurrentProject,
  deleteTaskMain,
};
