/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbi8vIGNvbnN0IHN0b3JhZ2UgPSBbXTtcblxuLy8gY2xhc3MgVGFzayB7XG4vLyAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBub3Rlcykge1xuLy8gICAgIHRoaXMubmFtZSA9IG5hbWU7XG4vLyAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuLy8gICAgIHRoaXMuZHVlID0gZHVlO1xuLy8gICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbi8vICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4vLyAgIH1cbi8vIH1cblxuLy8gY2xhc3MgUHJvamVjdCB7XG4vLyAgIGNvbnN0cnVjdG9yKGxhYmVsLCBwcm9qZWN0VGFza3MpIHtcbi8vICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4vLyAgICAgdGhpcy50YXNrcyA9IHByb2plY3RUYXNrcztcbi8vICAgfVxuLy8gfVxuXG4vLyBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoYHRvZG8gbGlzdGApO1xuXG4vLyBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soJ21ha2UgbGlzdCcsICdmaW5pc2ggc3R1ZmYnLCAxLCAyLCAna2VlcCB3b3JraW5nJyk7XG5cbi8vIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4vLyAgIHByb2plY3QudGFza3MgPSBuZXdUYXNrO1xuLy8gICBzdG9yYWdlLnB1c2gocHJvamVjdCk7XG5cbi8vICAgY29uc29sZS50YWJsZShzdG9yYWdlKTtcbi8vICAgY29uc29sZS50YWJsZShzdG9yYWdlWzBdLnRhc2tzLm5hbWUpO1xuLy8gfTtcblxuLy8gYWRkVGFzaygpO1xuXG5jb25zdCBzdG9yYWdlID0gW107XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZSA9IGR1ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgYWRkVGFza1RvUHJvamVjdChuZXdUYXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICB9XG5cbiAgZGVsZXRlVGFza0Zyb21Qcm9qZWN0KHRhc2tJZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudGFza3NbaV0uaWQgPT09IHRhc2tJZCkge1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFzVGFzayhuZXdUYXNrKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5pZCA9PT0gbmV3VGFzay5pZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvamVjdEV4aXN0cyhuYW1lLCBzdG9yYWdlKSB7XG4gIHJldHVybiBzdG9yYWdlLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG59XG5cbmNvbnN0IGdldFRhc2tGcm9tSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICBjb25zdCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlJykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJykudmFsdWU7XG4gIHJldHVybiBuZXcgVGFzayhuYW1lLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgbm90ZXMpO1xufTtcblxuLy8gY29uc3QgZ2V0UHJvamVjdEZyb21JbnB1dCA9ICgpID0+IHtcbi8vICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4vLyAgIHJldHVybiBuZXcgUHJvamVjdChwcm9qZWN0KTtcbi8vIH07XG5cbmNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgpO1xuc3RvcmFnZS5wdXNoKG5ld1Byb2plY3QpO1xuXG5jb25zdCBhZGRUYXNrID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSBnZXRUYXNrRnJvbUlucHV0KCk7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gc3RvcmFnZVswXTtcbiAgY3VycmVudFByb2plY3QuYWRkVGFza1RvUHJvamVjdChuZXdUYXNrKTtcblxuICAvLyBzdG9yYWdlWzBdLnRhc2tzID0gbmV3VGFzaztcbiAgLy8gc3RvcmFnZVswXS50YXNrcy5hZGRUYXNrVG9Qcm9qZWN0KG5ld1Rhc2spXG5cbiAgLy8gc3RvcmFnZS5wdXNoKG5ld1Byb2plY3QpO1xuICBjb25zb2xlLnRhYmxlKHN0b3JhZ2UpO1xufTtcblxuY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0Zvcm0nKTtcblxubmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkVGFzayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=