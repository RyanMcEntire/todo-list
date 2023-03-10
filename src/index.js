/* eslint-disable max-classes-per-file */
// const storage = [];

// class Task {
//   constructor(name, description, due, priority, notes) {
//     this.name = name;
//     this.description = description;
//     this.due = due;
//     this.priority = priority;
//     this.notes = notes;
//   }
// }

// class Project {
//   constructor(label, projectTasks) {
//     this.label = label;
//     this.tasks = projectTasks;
//   }
// }

// const project = new Project(`todo list`);

// const newTask = new Task('make list', 'finish stuff', 1, 2, 'keep working');

// const addTask = () => {
//   project.tasks = newTask;
//   storage.push(project);

//   console.table(storage);
//   console.table(storage[0].tasks.name);
// };

// addTask();

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

  deleteTaskFromProject(taskId) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === taskId) {
        this.tasks.splice(i, 1);
        break;
      }
    }
  }

  hasTask(newTask) {
    return this.tasks.some((task) => task.id === newTask.id);
  }
}

function projectExists(name, storage) {
  return storage.some((project) => project.name === name);
}

const getTaskFromInput = () => {
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const due = document.getElementById('due').value;
  const priority = document.getElementById('priority').value;
  const notes = document.getElementById('notes').value;
  return new Task(name, description, due, priority, notes);
};

// const getProjectFromInput = () => {
//   const project = document.getElementById('project').value;
//   return new Project(project);
// };

const newProject = new Project();
storage.push(newProject);

const addTask = (e) => {
  e.preventDefault();

  const newTask = getTaskFromInput();
  const currentProject = storage[0];
  currentProject.addTaskToProject(newTask);

  // storage[0].tasks = newTask;
  // storage[0].tasks.addTaskToProject(newTask)

  // storage.push(newProject);
  console.table(storage);
};

const newTaskForm = document.getElementById('newTaskForm');

newTaskForm.addEventListener('submit', addTask);
