import { endOfToday, format } from 'date-fns';
import {
  newProjectLogistics,
  newTaskLogistics,
  taskProjectClickListener,
} from '../controllers/action-controller';
import Element from '../model/elementMaker';

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
      class: 'form newTaskForm',
      id: 'newTaskForm',
    })
    .addChild(
      new Element('div')
        .addAttributes({ class: 'taskTextFields' })
        .addChild(
          new Element('div')
            .addAttributes({
              class: 'taskDescriptionArea',
            })
            .addChild(
              new Element('input').addAttributes({
                type: 'text',
                class: 'input',
                id: 'taskName',
                placeholder: 'Task Name',
              })
            )
            .addChild(
              new Element('textArea').addAttributes({
                name: 'description',
                class: 'input',
                id: 'taskDescription',
                placeholder: 'Task Description',
                maxlength: '400',
              })
            )
        )
        .addChild(
          new Element('div')
            .addAttributes({
              class: 'rightSideTaskFormArea',
            })
            .addChild(
              new Element('div')
                .addAttributes({
                  class: 'dateAndPriorityArea',
                })
                .addChild(
                  new Element('input').addAttributes({
                    type: 'date',
                    class: 'input',
                    id: 'taskDue',
                  })
                )
                .addChild(
                  new Element('fieldset')
                    .addAttributes({
                      class: 'priorityFieldSet',
                    })
                    .addChild(new Element('legend').addText('Priority'))
                    .addChild(createRadioInput('high', 'priority', false))
                    .addChild(createRadioInput('normal', 'priority', false))
                    .addChild(createRadioInput('low', 'priority', true))
                )
            )

            .addChild(
              new Element('fieldset')
                .addAttributes({
                  class: 'completed',
                })
                .addChild(new Element('legend').addText('completed'))
                .addChild(
                  new Element('div').addChild(
                    new Element('input').addAttributes({
                      type: 'checkbox',
                      id: 'completed',
                      name: 'completed',
                      value: 'completed',
                      checked: false,
                    })
                  )
                )
            )
        )
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

function appendTaskForm() {
  const taskForm = makeTaskForm();
  const parentElement = document.getElementById('taskFormContainer');
  parentElement.appendChild(taskForm);
}

function appendProjectForm() {
  const projectForm = makeProjectForm();
  const parentElement = document.getElementById('content');
  parentElement.appendChild(projectForm);
}

taskProjectClickListener();

export { appendProjectForm, appendTaskForm };
