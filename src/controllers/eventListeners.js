import { makeProjectForm, makeTaskForm } from '../dom/formElements';
import Storage from '../model/storage';
import makeProjectCard from '../dom/dynamicElements';
import Element from '../model/elementMaker';

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

// const doTheThing = () => {
//   const newProj = makeProjectCard('Personal');
//   appendElement('projectDisplayArea', newProj)
// }


const addAllProjectCards = () => {
  const allProjects = Storage.getManager().getAllProjects();
  allProjects.forEach((project) => {
    const pName = project.getNameOfProject();
    const pCard = makeProjectCard(pName);
    function border() {
      return new Element('div').addAttributes({
        class: 'borderDiv ',
      });
    }

    // console.log();

    const anchor = document.getElementById('sidebarScrollAnchor');
    const container = document.getElementById('projectDisplayArea');
    container.insertBefore(pCard, anchor);
    container.insertBefore(border(), anchor);
  });
};

export { processStaticClick as processClick, addAllProjectCards, };
