/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
import Storage from '../model/storage';
import { makeTaskForm } from '../dom/formElements';
import {
  addAllProjectCards,
  getCurrentProjectAndAppendTaskMain,
  appendTaskCardToMain,
} from './staticClickHandlers';
import { taskFormSel } from '../dom/selectors';
import { createSaveButton, createCancelButton } from '../dom/dynamicElements';
import { getTaskFromInput } from './action-controller';

// functions that handle project button click events

function updateCurrentProject(projectName) {
  Storage.setCurrentProject(projectName);
  const projectNameHeader = document.getElementById('projectNameHeader');
  projectNameHeader.innerText = projectName;
}

function appendTaskForm(element) {
  const ele = taskFormSel();
  console.log('testies', ele);
  const taskFormContainer = ele.taskFormCont;
  const taskForm = ele.taskForm;

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
  });
};

function whichPriorityChecked() {
  const ids = taskFormSel();
  const buttons = ids.priority;
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].checked === true) {
      return buttons[i].name;
    }
  }
  return null;
}

function appendTaskEditButtons(taskName) {
  const ele = taskFormSel();
  const completedBox = ele.completedContainer;
  const { completeAndEdit } = ele;
  console.log(typeof completeAndEdit);
  console.log('appendButtons > ', completedBox);
  const save = createSaveButton(taskName);
  const cancel = createCancelButton();
  completeAndEdit.insertBefore(save, completedBox);
  completeAndEdit.insertBefore(cancel, completedBox);
}

function initEditTask(projectName, taskName) {
  const manager = Storage.getManager();
  const project = manager.getProject(projectName);
  const task = project.getTask(taskName);
  console.log('test1');
  // FAILING
  appendTaskForm(makeTaskForm());
  // FAILING
  console.log('test2');
  const ids = taskFormSel();

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
  appendTaskEditButtons(taskName);
  ids.create.remove();
  return { taskName };
}

function saveEdit() {
  const manager = Storage.getManager();
  const projectName = manager.getCurrentProjectName();
  const project = manager.getProject(projectName);
  const oldTask = initEditTask().taskName;
  const newTask = getTaskFromInput();
  Storage.editTask(projectName, oldTask, newTask);
  appendTaskCardToMain(project);
}

function cancelEdit() {
  taskFormSel().taskFormCont.remove();
}

const handleTaskCardClick = (e) => {
  const taskName = e.currentTarget.dataset.taskcardmaintext;
  const projectName = Storage.getManager().getCurrentProjectName();
  initEditTask(projectName, taskName);
};

function deleteTaskMain(e) {
  const taskToDelete = e.currentTarget.dataset.deletetask;
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
  saveEdit,
  cancelEdit,
};

for (let i = 0; i < 5; i++) {
  // code here
}
