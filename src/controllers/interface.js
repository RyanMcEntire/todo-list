/* eslint-disable max-classes-per-file */

const storage = [];

class Task {
  constructor(name, description, due, priority, notes) {
    this.name = name;
    this.description = description;
    this.due = due;
    this.priority = priority;
    this.notes = notes;
  }
}

class Project {
  constructor(project) {
    this.tasks = project;
  }
}

const getTaskFromInput = () => {
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const due = document.getElementById('due').value;
  const priority = document.getElementById('priority').value;
  const notes = document.getElementById('notes').value;
  return new Task(name, description, due, priority, notes);
};

const getProjectFromInput = () => {
  const project = document.getElementById('project').value;
  return new Project(project);
};

const addTask = (e) => {
  e.preventDefault();

  const newProject = getProjectFromInput();
  const newTask = getTaskFromInput();
  newProject.tasks = newTask;

  storage.push(newProject);
  console.table(storage);
};

const newTaskForm = document.getElementById('newTaskForm');

newTaskForm.addEventListener('submit', addTask);
