/* eslint-disable no-plusplus */
class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.tasks = [];
  }

  addTaskToProject(newTask) {
    const taskName = newTask.name;
    if (this.tasks.find((task) => task.getName() === taskName)) return;
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

  getTask(taskName) {
    return this.tasks.find((task) => task.getTaskName() === taskName);
  }

  getAllThisTasks = () => this.tasks;

  hasTask(newTask) {
    return this.tasks.some((task) => task.id === newTask.id);
  }

  getNameOfProject = () => this.projectName;

  SetNameOfProject(newName) {
    this.projectName = newName;
  }

  getTaskName() {
    return this.name;
  }
}

export default Project;
