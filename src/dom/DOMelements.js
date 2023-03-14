import { endOfToday, format } from 'date-fns';
import {
  newProjectLogistics,
  newTaskLogistics,
} from '../controllers/action-controller';
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

function createRadioInput(id, name, isChecked) {
  return new Element('div')
    .addChild(
      new Element('input').addAttributes({
        type: 'radio',
        id,
        name,
        value: id,
        checked: isChecked,
      })
    )
    .addChild(new Element('label').addAttributes({ for: id }).addText(id));
}

function makeTaskForm() {
  return new Element('form')
    .addAttributes({
      class: 'form',
      id: 'newTaskForm',
    })
    .addChild(new Element('h2').addText('New Task'))
    .addChild(
      new Element('input').addAttributes({
        type: 'text',
        class: 'input',
        id: 'taskName',
        placeholder: 'Task Name',
      })
    )
    .addChild(
      new Element('input').addAttributes({
        type: 'text',
        class: 'input',
        id: 'taskDescription',
        placeholder: 'Task Description',
      })
    )
    .addChild(
      new Element('input').addAttributes({
        type: 'date',
        class: 'input',
        id: 'taskDue',
      })
    )
    .addChild(
      new Element('fieldset')
        .addChild(new Element('legend').addText('Priority'))
        .addChild(createRadioInput('high', 'priority', false))
        .addChild(createRadioInput('normal', 'priority', false))
        .addChild(createRadioInput('low', 'priority', true))
    )
    .addChild(
      new Element('fieldset')
        .addChild(new Element('legend').addText('completed'))
        .addChild(createRadioInput('yes', 'completed', false))
        .addChild(createRadioInput('no', 'completed', true))
    )
    .addChild(
      new Element('input').addAttributes({
        type: 'text',
        class: 'input',
        id: 'notes',
        placeholder: 'notes',
      })
    )
    .addChild(
      new Element('button')
        .addAttributes({
          type: 'submit',
          class: 'formButton',
          id: 'createTaskButton',
        })
        .addText('submit')
    )
    .addEventListener('submit', (e) => newTaskLogistics(e))
    .build();
}

function makeTaskFormContainer() {
  const taskForm = makeTaskForm();
  const header = document.getElementById('header');
  header.appendChild(taskForm);
}

export { makeProjectFormContainer, makeTaskFormContainer };
