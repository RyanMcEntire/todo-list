export default class Manager {
  static projectStorage = [];

  static addProject(project) {
    Manager.projectStorage.push(project)
  }
}