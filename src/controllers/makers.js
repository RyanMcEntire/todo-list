/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
import selectors from '../dom/selectors';

selectors();

const taskMaker = () => {
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
    constructor(name) {
      this.projectName = name;
      this.tasks = [];
    }

    addTaskToProject(newTask) {
      this.tasks.push(newTask);
    }

    deleteTaskFromProject(taskName) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].name === taskName) {
          this.tasks.splice(i, 1);
          break;
        }
      }
    }

    hasTask(newTask) {
      return this.tasks.some((task) => task.id === newTask.id);
    }

    get projectName() {
      return this.name;
    }

    set projectName(newName) {
      this.name = newName;
    }

    get thisTasks() {
      return this.tasks;
    }
  }

 

  // check if function of the same name exists
  function projectExists(name, storage) {
    return storage.some((project) => project.name === name);
  }

  const getTaskFromInput = () => {
    const name = document.getElementById('taskName').value;
    const description = document.getElementById('description').value;
    const due = document.getElementById('due').value;
    const priority = document.getElementById('priority').value;
    const notes = document.getElementById('notes').value;
    return new Task(name, description, due, priority, notes);
  };

   let activeProject = storage[0];

  const createDefaultProject = () => {
    const newProject = new Project('Personal');
    storage.push(newProject);
  };

  createDefaultProject();

  const createNewProject = () => {
    const newProject = new Project();
    storage.push(newProject);
  };

  const getProjectFromInput = () => {
    const name = document.getElementById('projectName').value;
    return new Project(name);
  };

  const addProject = (e) => {
    e.preventDefault();
    const newProject = getProjectFromInput();
    storage.push(newProject);
    const i = (storage.length - 1)
    activeProject = storage[i];
  };

  const addTask = (e) => {
    e.preventDefault();

    const newTask = getTaskFromInput();
    const currentProject = activeProject;
    currentProject.addTaskToProject(newTask);

    console.table(storage);
  };

  const consoleTableStorage = () => {
    console.table(storage);
  };

  const consoleTableButton = document.getElementById('consoleTable');
  // const newTaskForm = document.getElementById('newTaskForm');
  newProjectForm.addEventListener('submit', addProject);
  newTaskForm.addEventListener('submit', addTask);
  consoleTableButton.addEventListener('click', consoleTableStorage);
};

export default taskMaker;
