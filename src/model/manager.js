/* eslint-disable no-console */
import Project from './project';

class Manager {
  constructor() {
    this.projectStorage = [];
    this.projectStorage.push(new Project('default'));
    this.currentProject = ['default'];
  }

  addProject(newProject) {
    const { projectName } = newProject;
    if (
      this.projectStorage.find((project) => project.projectName === projectName)
    )
      return;
    this.projectStorage.push(newProject);
  }

  setCurrentProject(project) {
    this.currentProject = [];
    this.currentProject.push(project);
  }

  getCurrentProject() {
    return this.currentProject;
  }

  removeProject(projectName) {
    const projectToBeDeleted = this.projectStorage.find(
      (project) => project.getNameOfProject() === projectName
    );
    this.projectStorage.splice(this.projectStorage.indexOf(projectToBeDeleted), 1);
  }

  getAllProjects() {
    return this.projectStorage;
  }

  getProject(projectName) {
    if (!projectName) {
      console.error('This project does not exist.');
    }
    return this.projectStorage.find(
      (project) => project.getNameOfProject() === projectName
    );
  }

  setProjects(projects) {
    this.projectStorage = projects;
  }

  contains(projectName) {
    return this.projectStorage.some(
      (project) => project.getNameOfProject() === projectName
    );
  }
}

export default Manager;
