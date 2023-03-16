import Project from "./project";

 class Manager {
  constructor() {
    this.projectStorage = []; 
    this.projectStorage.push(new Project('default'))
  }

  addProject(newProject) {
    const { projectName } = newProject;
    if (
      this.projectStorage.find((project) => project.projectName === projectName)
    )
      return;
    this.projectStorage.push(newProject);
  }

  getAllProjects() {
    return this.projectStorage;
  }

  getProject(projectName) {
    if (!projectName) {
      // error code thingy displayError('project)
    }
    return this.projectStorage.find(
      (project) => project.getName() === projectName
    );
  }
  
  setProjects(projects) {
    this.projectStorage = projects
  }

  contains(projectName) {
    return this.projectStorage.some(
      (project) => project.getName() === projectName
    );
  }
}

export default Manager