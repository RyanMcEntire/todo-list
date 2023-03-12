import { newProjectLogistics } from '../controllers/makers';
import Element from './elementMaker';

function makeProjectForm() {
  return new Element('form')
    .addAttributes({ class: 'form', id: 'newProjectForm' })
    .addChild(new Element('h2').addText('New Project'))
    .addChild(
      new Element('input').addAttributes({
        type: 'text',
        class: 'form',
        id: 'projectName',
        placeholder: 'Project Name',
      })
    )
    .addChild(
      new Element('button')
        .addAttributes({
          type: 'text',
          class: 'formButton',
          id: 'projectNameButton',
        })
        .addText('Create')
    )
    .addEventListener('submit', (e) => newProjectLogistics(e))
    .build();
}

function makeProjectFormContainer() {
  const projectForm = makeProjectForm();
  const projectFormContainer = document.querySelector('.projectFormContainer');
  projectFormContainer.appendChild(projectForm);
}

export default makeProjectFormContainer;
