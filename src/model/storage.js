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

  static addProject(project) {
    const manager = Storage.getManager();
    manager.addProject(project);
    Storage.saveManager(manager);
  }

  static addTask(projectName, task) {
    const manager = Storage.getManager();
    manager.getProject(projectName).addTaskToProject(task);
    Storage.saveManager(manager);
  }
}
