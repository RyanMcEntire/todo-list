import Project from "./project";
import Task from "./task";

 class Manager {
  constructor() {
    this.projectStorage = []; 
    this.projectStorage.push(new Project('default'))
  }

  addProject(newProject) {
    if (
      this.projectStorage.find(
        (project) => project.projectName === newProject.projectName
      )
    )
      return;
    this.projectStorage.push(newProject);
  }

  // addProject(newProject) {
  //   return this.projectStorage.push(newProject); 
  // }

  getAllProjects() {
    return this.projectStorage;
  }

  getProject(projectName) {
    return this.projectStorage.find(
      (project) => project.getName() === projectName
    );
  }
  
  setProjects(projects) {
    this.projectStorage = projects
  }

  contains(projectName) {
    return this.projectStorage.some(
      (project) => project.nameOfProject() === projectName
    );
  }
}

export default Manager