/* eslint-disable no-console */
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



const addAllProjectCards = () => {
  const allProjects = Storage.getManager().getAllProjects();
  allProjects.forEach((project) => {
    const pName = project.getNameOfProject();
    const pCard = makeProjectCard(pName);


    
    const container = document.getElementById('projectDisplayArea');

    container.appendChild(pCard);
  });
};

export { processStaticClick, addAllProjectCards };
