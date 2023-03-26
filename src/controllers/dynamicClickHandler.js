/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
import Storage from '../model/storage';
import { makeTaskForm } from '../dom/formElements';
import {
  addAllProjectCards,
  getCurrentProjectAndAppendTaskMain,
  appendTaskCardToMain,
  clearTaskForm,
} from './staticClickHandlers';
import { taskFormSel, upperSel, sidebarSel } from '../dom/selectors';
import { createSaveButton, createCancelButton } from '../dom/dynamicElements';
import { getTaskFromInput } from './action-controller';

// functions that handle project button click events
function updateCurrentProject(projectName) {
  Storage.setCurrentProject(projectName);
  const projectNameHeader = upperSel.projHeader;
  projectNameHeader.innerText = projectName;
}

function appendTaskForm(parent, element) {
  clearTaskForm();
  parent.appendChild(element);
}

function newTaskOnProjectClick(projectName) {
  updateCurrentProject(projectName);

  appendTaskForm(taskFormSel.taskFormCont, makeTaskForm());
}

// click handler for all project cards

const updateProjectEventListeners = () => {
  const projectDisplayArea = sidebarSel().projArea;
  console.log('proj display area', projectDisplayArea);
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

function appendTaskEditButtons(taskName) {
  const ele = taskFormSel();
  const completedBox = ele.completedContainer;
  const { completeAndEdit } = ele;
  const save = createSaveButton(taskName);
  const cancel = createCancelButton();
  completeAndEdit.insertBefore(save, completedBox);
  completeAndEdit.insertBefore(cancel, completedBox);
}

function initEditTask(projectName, taskName) {
  const cont = taskFormSel().taskFormCont;
  const manager = Storage.getManager();
  const project = manager.getProject(projectName);
  const task = project.getTask(taskName);
  appendTaskForm(cont, makeTaskForm());
  const ele = taskFormSel();
  ele.name.value = task.getName();
  ele.description.value = task.getDescription();
  ele.due.value = task.getDateDue();
  ele.completed.checked = task.getCompleted();
  if (ele.low.value === task.getPriority()) {
    ele.low.checked = true;
  }
  if (ele.normal.value === task.getPriority()) {
    ele.normal.checked = true;
  }
  if (ele.high.value === task.getPriority()) {
    ele.high.checked = true;
  }
  appendTaskEditButtons(taskName);
  ele.create.remove();
  return { taskName };
}

function saveEdit(e) {
  e.preventDefault();
  const manager = Storage.getManager();
  const projectName = manager.getCurrentProjectName();
  const project = manager.getProject(projectName);
  const oldTask = initEditTask().taskName;
  const newTask = getTaskFromInput();
  Storage.editTask(project, oldTask, newTask);
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
