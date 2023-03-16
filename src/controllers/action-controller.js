/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import Storage from '../model/storage';
import Project from '../model/project';
import Task from '../model/task';

const getTaskFromInput = () => {
  const name = document.getElementById('taskName').value;
  const description = document.getElementById('taskDescription').value;
  const due = document.getElementById('taskDue').value;
  const priority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;
  const completed = document.getElementById('completed').value;

  return new Task(name, description, due, priority, completed);
};

const newTaskLogistics = (e) => {
  e.preventDefault();
  const newTask = getTaskFromInput();
  Storage.addTask('default', newTask);
};

function newProjectLogistics(e) {
  e.preventDefault();
  const newProjectName = document.querySelector('#projectName').value;

  Storage.addProject(new Project(newProjectName));
  document.getElementById('newProjectForm').remove();
}





export { newProjectLogistics, newTaskLogistics };
