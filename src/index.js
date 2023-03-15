import './style/style.css';
import 'normalize.css';
import {
  appendProjectForm,
  appendTaskForm,
} from './dom/DOMelements';
import { taskProjectClickListener } from './controllers/action-controller';

appendProjectForm();
appendTaskForm();
