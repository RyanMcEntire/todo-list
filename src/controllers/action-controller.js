/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import Storage from '../model/storage';
import Manager from '../model/manager';
import Project from '../model/project';
import Task from '../model/task';

const getTaskFromInput = () => {
  const name = document.getElementById('taskName').value;
  const description = document.getElementById('taskDescription').value;
  const due = document.getElementById('taskDue').value;
  const priority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;
  const notes = document.getElementById('notes').value;

  return new Task(name, description, due, priority, notes);
};

const activeProject = Storage.getManager().getProject('default'); 

// const createDefaultProject = () => {
//   const defaultProject = new Project('Nothing Personal');
//   Manager.addProject(defaultProject);
//   activeProject = Manager.getProject('Nothing Personal');
// };

// const createDefaultProject = () => {
//   Manager.addProject(new Project('Nothing Personal'));
//   activeProject = Manager.getProject('Nothing Personal');
// };

// createDefaultProject();

const newTaskLogistics = (e) => {
  e.preventDefault();
  const newTask = getTaskFromInput();
  const currentProject = activeProject;
  Storage.addTask('default', newTask);
};

const consoleTableStorage = () => {
  console.table(Storage.storageBin); 
};

const taskProjectClickListener = () => {
  const consoleTableButton = document.getElementById('consoleTable');
  // newTaskForm.addEventListener('submit', addTask);
  consoleTableButton.addEventListener('click', consoleTableStorage);
};

function newProjectLogistics(e) {
  e.preventDefault();
  const newProjectName = document.querySelector('#projectName').value;
  
  Storage.addProject( new Project(newProjectName));
}

export { taskProjectClickListener, newProjectLogistics, newTaskLogistics };
