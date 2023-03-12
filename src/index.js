import './style/style.css'
import selectors from './dom/selectors';
import { taskMaker } from './controllers/makers';
import makeProjectFormContainer from './dom/DOMelements';


makeProjectFormContainer();  
selectors();
taskMaker();

 