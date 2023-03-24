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

  // i've misnamed this. it just retrieves an array with the name
  // I can save a lot of spaghetti if I return the right type of value
  getCurrentProject() {
    return this.currentProject;
  }

  getCurrentProjectName() {
    console.log(String(this.currentProject));
    return String(this.currentProject)

  }

  removeProject(projectName) {
    const projectToBeDeleted = this.projectStorage.find(
      (project) => project.getNameOfProject() === projectName
    );
    this.projectStorage.splice(
      this.projectStorage.indexOf(projectToBeDeleted),
      1
    );
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
}

export default Manager;
