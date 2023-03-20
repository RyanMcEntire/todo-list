import Storage from '../model/storage';
import { makeTaskForm } from '../dom/formElements';

function updateCurrentProject(projectName) {
  Storage.setCurrentProject(projectName);
}

function appendDynamicElement(parent, element) {
  const parentElement = document.getElementById(parent);
  while (parentElement.hasChildNodes()) parentElement.firstChild.remove();

  parentElement.appendChild(element);
}

function newTaskOnProjectClick(projectName) {
  updateCurrentProject(projectName);

  appendDynamicElement('taskFormContainer', makeTaskForm());
}
// click handler for all project cards
const processProjectCardClick = (e) => {
  let projectName = null;
  if (e.target.value === 'projectName') {
    projectName = e.target.getAttribute('data-projectName');
    updateCurrentProject(projectName);
  }
  if (e.target.value === 'projectDelete') {
    projectName = e.target.getAttribute('data-projectDelete');
    Storage.removeProject(projectName);
  }
  if (e.target.value === 'projectNewTask') {
    projectName = e.target.getAttribute('data-projectNewTask');
    newTaskOnProjectClick(projectName);
  }

  // console.log(e.target.value);
  // console.log(projectName);
  // console.log(Storage.getManager().getCurrentProject());
};

export default processProjectCardClick;
