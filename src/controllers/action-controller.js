/* eslint-disable import/no-cycle */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import Storage from '../model/storage';
import Project from '../model/project';
import Task from '../model/task';
import {
  addAllProjectCards,
  getCurrentProjectAndAppendTaskMain,
} from './staticClickHandlers';
import { updateCurrentProject } from './dynamicClickHandler';
import { taskFormSel, projForm } from '../dom/selectors';

const getTaskFromInput = () => {
  const ele = taskFormSel();
  const name = ele.name.value;
  const description = ele.description.value;
  const due = ele.due.value;
  const priority = ele.priorityStat.value;
  const completed = ele.completedStat.checked;

  return new Task(name, description, due, priority, completed);
};

const newTaskLogistics = (e) => {
  e.preventDefault();
  console.log('new Task Logistics submit');
  const newTask = getTaskFromInput();
  const currentProject = Storage.getManager().getCurrentProject();
  Storage.addTask(currentProject[0], newTask);
  const taskForm = taskFormSel().taskForm;
  taskForm.remove();

  getCurrentProjectAndAppendTaskMain(currentProject);
};

function newProjectLogistics(e) {
  e.preventDefault();
  const newProjectName = projForm().projName.value;

  Storage.addProject(new Project(newProjectName));
  projForm().form.remove();
  Storage.setCurrentProject(newProjectName);
  updateCurrentProject(newProjectName);
  addAllProjectCards();
  getCurrentProjectAndAppendTaskMain(newProjectName);
}

export { newProjectLogistics, newTaskLogistics, getTaskFromInput };
