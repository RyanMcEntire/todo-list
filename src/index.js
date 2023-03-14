import './style/style.css';
import 'normalize.css';
import {
  makeProjectFormContainer,
  makeTaskFormContainer,
} from './dom/DOMelements';
import { taskProjectClickListener } from './controllers/action-controller';

makeProjectFormContainer();
makeTaskFormContainer();
taskProjectClickListener();
