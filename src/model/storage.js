import Manager from './manager';
import Project from './project';
import Task from './task';

export default class Storage {
  static storageBin = [];

  static saveManager(managerStuff) {
    Storage.storageBin.push(managerStuff);
    localStorage.setItem('manager', JSON.stringify(managerStuff));
  }

  static getManager() {
    const manager = Object.assign(
      new Manager(),
      JSON.parse(localStorage.getItem('manager'))
    );
    manager.setProjects(
      manager
        .getAllProjects()
        .map((project) => Object.assign(new Project(), project))
    );
    manager
      .getAllProjects()
      .forEach((project) =>
        project.setTasks(
          project
            .getAllThisTasks()
            .map((task) => Object.assign(new Task(), task))
        )
      );
    return manager;
  }

  static setCurrentProject(project) {
    const manager = Storage.getManager();
    manager.setCurrentProject(project);
    Storage.saveManager(manager);
  }

  static addProject(project) {
    const manager = Storage.getManager();
    manager.addProject(project);
    Storage.saveManager(manager);
  }

  static removeProject(projectName) {
    const manager = Storage.getManager();
    manager.removeProject(projectName);
    Storage.saveManager(manager);
  }

  static addTask(projectName, task) {
    const manager = Storage.getManager();
    manager.getProject(projectName).addTaskToProject(task);
    Storage.saveManager(manager);
  }

  static removeTask(projectName, taskName) {
    const manager = Storage.getManager();
    manager.getProject(projectName).deleteTaskFromProject(taskName);
    Storage.saveManager(manager);
  }

  static changeTaskName(projectName, oldTaskName, newTaskName) {
    const manager = Storage.getManager();
    manager
      .getProject(projectName)
      .getTaskName(oldTaskName)
      .setTaskName(newTaskName);
    Storage.saveManager(manager);
  }

  static editTask(project, oldTaskName, newTask) {
    const oldTaskIndex = project.indexOf(oldTaskName);
    project.deleteTaskFromProject(oldTaskName);
    const managerNew = Storage.getManager();
    project.splice(oldTaskIndex, 0, newTask);
    Storage.saveManager(managerNew);
  }
}
