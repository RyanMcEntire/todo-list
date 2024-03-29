/* eslint-disable import/no-cycle */
import {
  newProjectLogistics,
  newTaskLogistics,
} from '../controllers/action-controller';
import Element from '../model/elementMaker';
import {
  clearTaskForm,
  closeProjectForm,
} from '../controllers/staticClickHandlers';

// PROJECT FORM
function makeProjectForm() {
  return new Element('form')
    .addAttributes({ class: 'form', id: 'newProjectForm' })
    .addChild(
      new Element('div')
        .addAttributes({ class: 'projectFormTopArea' })
        .addChild(new Element('h2').addText('New Project'))
        .addChild(
          new Element('button')
            .addAttributes({
              class: 'projectFormExit',
              id: 'projectFormExit',
            })
            .addText('X')
            .addEventListener('click', () => closeProjectForm())
        )
    )

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
          form: 'newProjectForm',
          type: 'submit',
          class: 'formButton',
          id: 'projectNameButton',
        })
        .addText('Create')
        .addEventListener('click', (e) => newProjectLogistics(e))
    )

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
    .addChild(
      new Element('label')
        .addAttributes({
          for: id,
        })
        .addText(id)
    );
}

// TASK FORM
function makeTaskForm() {
  return new Element('form')
    .addAttributes({
      class: 'form newTaskForm',
      id: 'newTaskForm',
    })
    .addChild(
      new Element('div')
        .addAttributes({
          class: 'taskHelperContainerContainer',
        })
        .addChild(
          new Element('div')
            .addAttributes({
              class: 'taskHelperContainer',
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
                            .addChild(
                              createRadioInput('high', 'priority'),
                              false
                            )
                            .addChild(
                              createRadioInput('normal', 'priority', true)
                            )
                            .addChild(
                              createRadioInput('low', 'priority', false)
                            )
                        )
                    )
                    .addChild(
                      new Element('div')
                        .addAttributes({
                          class: 'completeAndEdit',
                          id: 'completeAndEdit',
                        })
                        .addChild(
                          new Element('fieldset')
                            .addAttributes({
                              class: 'completed',
                              id: 'completedContainer',
                            })
                            .addChild(
                              new Element('legend').addText('completed')
                            )
                            .addChild(
                              new Element('div').addChild(
                                new Element('input').addAttributes({
                                  type: 'checkbox',
                                  id: 'completed',
                                  name: 'completed',
                                  checked: false,
                                })
                              )
                            )
                        )
                    )
                )
            )
        )
        .addChild(
          new Element('button')
            .addAttributes({
              class: 'taskFormClose',
              type: 'button',
            })
            .addText('X')
            .addEventListener('click', (e) => clearTaskForm(e))
        )
    )
    .addChild(
      new Element('button')
        .addAttributes({
          type: 'button',
          class: 'formButton',
          id: 'createTaskButton',
        })
        .addText('submit')
        .addEventListener('click', (e) => newTaskLogistics(e))
    )

    .build();
}

export { makeProjectForm, makeTaskForm };
