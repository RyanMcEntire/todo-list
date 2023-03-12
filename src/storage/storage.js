import { taskMaker, Project } from '../controllers/makers';
import Manager from '../controllers/manager';


export default function newProjectLogistics(e) {
  e.preventDefault();
  const newProjectInput = document.querySelector('#projectName').value;
  const newProject = new Project(newProjectInput);
  Manager.addProject(newProject);
}
