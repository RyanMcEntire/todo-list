import { makeProjectForm, makeTaskForm } from '../dom/formElements';
import Storage from '../model/storage';
import makeProjectCard from '../dom/dynamicElements';

function appendElement(parent, element) {
  const parentElement = document.getElementById(parent);
  parentElement.appendChild(element);
}




const consoleTableStorage = () => {
  console.table(Storage.getManager().getAllProjects());
};

const processStaticClick = (e) => {
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


const doTheThing = () => {
  const newProj = makeProjectCard('Personal');
  appendElement('projectDisplayArea', newProj)
}



export { processStaticClick as processClick, doTheThing }  
