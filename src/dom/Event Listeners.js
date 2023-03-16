import { makeProjectForm, makeTaskForm } from './DOMelements';

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

const processClick = (e) => {
  const eventID = e.target.id;
  const actions = {
    callProjectModal: appendProjectForm,
    newTask: appendTaskForm,
  };
  if (actions[eventID]) {
    actions[eventID]();
  }
};

const createEventListener = (id) => {
  const element = document.getElementById(id);
  element.addEventListener('click', (e) => processClick(e));
};

export default createEventListener
