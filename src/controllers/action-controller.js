/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
import selectors from '../dom/selectors';
import Manager from '../model/manager';
import Project from '../model/project';
import Task from '../model/task';

selectors();

const getTaskFromInput = () => {
  const name = document.getElementById('taskName').value;
  const description = document.getElementById('description').value;
  const due = document.getElementById('due').value;
  const priority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;
  const notes = document.getElementById('notes').value;

  return new Task(name, description, due, priority, notes);
};

let activeProject;

const createDefaultProject = () => {
  const defaultProject = new Project('Nothing Personal');
  Manager.addProject(defaultProject);
  activeProject = Manager.projectStorage[0];
};

createDefaultProject();

const addTask = (e) => {
  e.preventDefault();

  const newTask = getTaskFromInput();
  const currentProject = activeProject;
  currentProject.addTaskToProject(newTask);
};

const consoleTableStorage = () => {
  console.table(Manager.projectStorage);
};

const taskProjectClickListener = () => {
  const consoleTableButton = document.getElementById('consoleTable');
  // newProjectForm.addEventListener('submit', addProject);
  newTaskForm.addEventListener('submit', addTask);
  consoleTableButton.addEventListener('click', consoleTableStorage);
};

function newProjectLogistics(e) {
  e.preventDefault();
  const newProjectInput = document.querySelector('#projectName').value;
  const newProject = new Project(newProjectInput);
  Manager.addProject(newProject);
}

export { taskProjectClickListener, Project, Task, newProjectLogistics };
