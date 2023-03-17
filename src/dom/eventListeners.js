import { makeProjectForm, makeTaskForm } from './formElements';
import Storage from '../model/storage';


function appendElement(parent, element) {
  const parentElement = document.getElementById(parent);
  parentElement.appendChild(element);
}

const consoleTableStorage = () => {
  return console.table(Storage.getManager().getAllProjects());
};

const processClick = (e) => {
  const eventID = e.target.id;
  const actions = {
    callNewProjectModal: () => appendElement('content', makeProjectForm()),
    newTask: () => appendElement('taskFormContainer', makeTaskForm()),
    consoleTable: () => consoleTableStorage(),
  };
  if (actions[eventID]) {
    actions[eventID]();
  }
};

export default processClick
