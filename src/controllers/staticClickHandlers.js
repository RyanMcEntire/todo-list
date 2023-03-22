/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import { makeProjectForm, makeTaskForm } from '../dom/formElements';
import Storage from '../model/storage';
import { makeProjectCard, makeTaskCardMain } from '../dom/dynamicElements';

function clearTaskForm() {
  const container = document.getElementById('taskFormContainer');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function appendElement(parent, element) {
  clearTaskForm();
  const parentElement = document.getElementById(parent);
  parentElement.appendChild(element);
}

function closeProjectForm() {
  const form = document.getElementById('newProjectForm');
  form.remove();
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
  const container = document.getElementById('projectDisplayArea');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  allProjects.forEach((project) => {
    const pName = project.getNameOfProject();
    const pCard = makeProjectCard(pName);

    container.appendChild(pCard);
  });
};


// actually appends
const appendTaskCardToMain = (currentProject) => {
  const container = document.getElementById('taskCardContainer');
  
  const allTasks = currentProject.getAllThisTasks();
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  allTasks.forEach((task) => {
    const taskName = task.getName();
    const completed = task.getCompleted();
    const priority = task.getPriority();
    const dueDate = task.getDateDue();
    const DueDays = 'REPLACE ME';
    const tCard = makeTaskCardMain(
      taskName,
      completed,
      priority,
      dueDate,
      DueDays
    );
    const borderDiv = document.createElement('div');
    borderDiv.classList.add('taskBorderDiv'); 
    container.appendChild(borderDiv);
    container.appendChild(tCard);
  });
};

// interprets the signal so i can call the real function
function getCurrentProjectAndAppendTaskMain(currentProjectData) {
  const manager = Storage.getManager();
  const currentProjectName = String(currentProjectData);
  const currentProject = manager.getProject(currentProjectName);
  appendTaskCardToMain(currentProject);
}

export {
  processStaticClick,
  addAllProjectCards,
  closeProjectForm,
  getCurrentProjectAndAppendTaskMain,
};
