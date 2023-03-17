import { makeProjectForm, makeTaskForm } from './formElements';

function appendProjectForm() {
  const projectForm = makeProjectForm();
  const parentElement = document.getElementById('content');
  parentElement.appendChild(projectForm);
}

function appendTaskForm() {
  const taskForm = makeTaskForm();
  const parentElement = document.getElementById('taskFormContainer');
  parentElement.appendChild(taskForm);
}

function appendElement(parent, element) {
  const parentElement = document.getElementById(parent);
  parentElement.appendChild(element);
}

const consoleTableStorage = () => {
  console.table(Storage.getManager().getAllProjects());
};

const processClick = (e) => {
  const eventID = e.target.id;
  const actions = {
    callNewProjectModal: appendProjectForm,
    newTask: appendElement('taskFormContainer', makeTaskForm()),
    consoleTable: consoleTableStorage,
  };
  if (actions[eventID]) {
    actions[eventID]();
  }
};

const createEventListener = (id) => {
  const Domlement = document.getElementById(id);
  DomElement.addEventListener('click', (e) => processClick(e));
};

// export default createEventListener;
export default processClick
