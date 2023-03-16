import './style/style.css';
import 'normalize.css';
import createEventListener from './dom/Event Listeners';
import initializePage from './dom/staticElements';

initializePage();
createEventListener('newTask');
createEventListener('callProjectModal');
// appendProjectForm();
// appendTaskForm();
