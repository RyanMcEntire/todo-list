import Storage from '../model/storage';
import { makeTaskForm } from '../dom/formElements';

function updateCurrentProject(projectName) {
  const toBeMadeCurrent = Storage.getManager().getProject(projectName);
  Storage.getManager().setCurrentProject(toBeMadeCurrent);
}

function appendDynamicElement(parent, element) {
  const parentElement = document.getElementById(parent);
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
  // if (Object.keys(e.target.dataset).toString() === 'projectCard') {
  //   project = e.target.value;

  //   updateCurrentProject(project);
  // }
  // if (e.target === projectDelete) {
  //   project = e.target.dataset.projectDelete.toString();
  // }
  // if (e.target === projectNewTask) {
  //   project = e.target.dataset.projectCard.toString();
  // }

  // const project = e.target;
  // const projectNameArray = Object.keys(project);
  // const projectName = projectNameArray.toString();
  // const actions = {
  //   'data-projectCard': () => updateCurrentProject(projectName),
  //   'data-projectDelete': () => Storage.removeProject(projectName),
  //   'data-projectNewTask': () => newTaskOnProjectClick(projectName),
  // };
  // if (actions[project]) {
  //   actions[project]();
  // }
  // console.log(Storage.getManager().getProject('BUSINESS'));
  console.log(e.target.value);
  console.log(projectName);
  console.log(Storage.getManager().getCurrentProject());
};

export default processProjectCardClick;
