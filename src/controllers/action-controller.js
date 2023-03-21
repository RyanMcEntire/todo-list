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
  const currentProject = Storage.getManager().getCurrentProject()
  // eslint-disable-next-line no-console
  console.log(currentProject[0])
  Storage.addTask(currentProject[0], newTask);
  const taskFormParent = document.getElementById('taskFormContainer');
  taskFormParent.firstChild.remove();
};

function newProjectLogistics(e) {
  e.preventDefault();
  const newProjectName = document.querySelector('#projectName').value;
  
  Storage.addProject(new Project(newProjectName));
  document.getElementById('newProjectForm').remove();
}




export { newProjectLogistics, newTaskLogistics, };
