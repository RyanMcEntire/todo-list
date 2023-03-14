/* eslint-disable no-plusplus */
class Project {
  constructor(name) {
    this.projectName = name;
    this.tasks = [];
  }

  addTaskToProject(newTask) {
    if (this.tasks.find((task) => task.getName() === newTask.name)) return;
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

  setTasks(tasks) {
    this.tasks = tasks;
  }

  hasTask(newTask) {
    return this.tasks.some((task) => task.id === newTask.id);
  }

  getName() {
    return this.projectName;
  }

  SetNameOfProject(newName) {
    this.projectName = newName;
  }

  getAllThisTasks() {
    return this.tasks;
  }
}

export default Project;
