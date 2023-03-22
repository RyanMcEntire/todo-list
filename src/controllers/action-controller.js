/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import Storage from '../model/storage';
import Project from '../model/project';
import Task from '../model/task';
// eslint-disable-next-line import/no-cycle
import {
  addAllProjectCards,
  getCurrentProjectAndAppendTaskMain,
} from './staticClickHandlers';
import { updateCurrentProject } from './dynamicClickHandler';

const getTaskFromInput = () => {
  const name = document.getElementById('taskName').value;
  const description = document.getElementById('taskDescription').value;
  const due = document.getElementById('taskDue').value;
  const priority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;
  const completed = document.querySelector('input[name="completed"]').checked;

  return new Task(name, description, due, priority, completed);
};

const newTaskLogistics = (e) => {
  e.preventDefault();
  const newTask = getTaskFromInput();
  const currentProject = Storage.getManager().getCurrentProject();
  Storage.addTask(currentProject[0], newTask);
  const taskForm = document.getElementById('newTaskForm');
  taskForm.remove();

  getCurrentProjectAndAppendTaskMain(currentProject);
};

function newProjectLogistics(e) {
  e.preventDefault();
  const newProjectName = document.querySelector('#projectName').value;

  Storage.addProject(new Project(newProjectName));
  document.getElementById('newProjectForm').remove();
  Storage.setCurrentProject(newProjectName);
  updateCurrentProject(newProjectName);
  addAllProjectCards();
  getCurrentProjectAndAppendTaskMain(newProjectName);
}

export { newProjectLogistics, newTaskLogistics };
