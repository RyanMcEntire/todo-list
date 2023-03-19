import Storage from '../model/storage';
import { makeTaskForm } from '../dom/formElements';

function updateCurrentProject(projectName) {
  Storage.getManager().setCurrentProject(projectName);
}

function appendDynamicElement(parent, element) {
  const parentElement = document.getElementById(parent);
  parentElement.appendChild(element);
}

function newTaskOnProjectClick(projectName) {
  updateCurrentProject(projectName);

  appendDynamicElement('taskFormContainer', makeTaskForm());
}

const processDynamicClick = (e) => {
  let project = null;
  if (e.target.value === 'projectCard') {
    project = e.target.getAttribute('data-projectName');
    updateCurrentProject(project);
  }
  if (e.target.value === 'projectDelete') {
    project = e.target.getAttribute('data-projectDelete');
    Storage.removeProject(project);
  }
  if (e.target.value === 'projectNewTask') {
    project = e.target.getAttribute('data-projectNewTask');
    newTaskOnProjectClick(project);
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
  console.log(e.target.getAttribute('data-projectCard'));
  console.log(Storage.getManager());
  console.log(e.target.value);
  console.log(project);
};

export default processDynamicClick;
