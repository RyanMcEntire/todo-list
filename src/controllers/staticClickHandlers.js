/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import { makeProjectForm, makeTaskForm } from '../dom/formElements';
import Storage from '../model/storage';
import { makeProjectCard, makeTaskCardMain } from '../dom/dynamicElements';
import { sidebarSel, contentSel, projForm } from '../dom/selectors';

function clearTaskForm() {
  const container = document.getElementById('taskFormContainer');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function appendElement(parentId, element) {
  clearTaskForm();
  const parentElement = document.getElementById(parentId);
  parentElement.appendChild(element);
}

function closeProjectForm() {
  const form = projForm().newForm;
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
  const container = sidebarSel().projArea;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  allProjects.forEach((project) => {
    const pName = project.getNameOfProject();
    const pCard = makeProjectCard(pName);

    container.appendChild(pCard);
  });
};

function loopAndAppend(allTasks) {
  const container = contentSel().taskCont;
  allTasks.forEach((task) => {
    const taskName = task.getName();
    const description = task.getDescription();
    const completed = task.getCompleted();
    const priority = task.getPriority();
    const dueDate = task.getDateDue();
    const DueDays = 'X days';
    const tCard = makeTaskCardMain(
      taskName,
      description,
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
}

const appendTaskCardToMain = (currentProject) => {
  const container = contentSel().taskCont;

  const allTasks = currentProject.getAllThisTasks();
  container.replaceChildren();
  loopAndAppend(allTasks);
};

function refreshTaskEditCards() {
  const manager = Storage.getManager();
  const currentProject = manager.getCurrentProject();
  const container = contentSel().taskCont;
  const allTasks = currentProject.getAllThisTasks();
  container.replaceChildren();
  loopAndAppend(allTasks);
}

// interprets the signal so i can call the real function
// my spaghetti code scramble got out of hand in the second half
// instead of reaching for a new class method i went for spaghetti
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
  appendTaskCardToMain,
  clearTaskForm,
  refreshTaskEditCards,
};
