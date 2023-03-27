/* eslint-disable import/no-cycle */
import Element from '../model/elementMaker';
import {
  handleTaskCardClick,
  deleteTaskMain,
  saveEdit,
} from '../controllers/dynamicClickHandler';
import { clearTaskForm } from '../controllers/staticClickHandlers';
// import processProjectCardClick from '../controllers/dynamicClickHandler';

function makeProjectCard(projectName) {
  return new Element('div')
    .addAttributes({
      class: 'projectCard',
      'data-projectCard': projectName,
      value: 'projectCard',
    })
    .addChild(
      new Element('button')
        .addAttributes({
          class: 'deleteProjectButton',
          'data-projectdelete': projectName,
          value: 'projectDelete',
        })
        .addText('X')
    )
    .addChild(
      new Element('button')
        .addAttributes({
          class: 'projectName',
          'data-projectname': projectName,
          value: 'projectName',
        })
        .addText(projectName)
    )
    .addChild(
      new Element('button')
        .addAttributes({
          class: 'projectNewTask',
          'data-projectnewtask': projectName,
          value: 'projectNewTask',
        })
        .addText('+')
    )
    .build();
}

function makeTaskCardMain(
  taskName,
  description,
  completed,
  priority,
  dueDate,
  DueDays
) {
  return new Element('div')
    .addAttributes({
      class: 'taskCard',
      'data-taskCard': taskName,
      value: taskName,
    })
    .addChild(
      new Element('div')
        .addAttributes({
          class: 'taskLeftSide',
        })
        .addChild(
          new Element('input').addAttributes({
            class: 'taskCardMainCompleteArea',
            type: 'checkbox',
            checked: completed,
            'data-taskCompleted': taskName,
          })
        )
        .addChild(
          new Element('div').addAttributes({
            class: 'taskCardMainPriorityArea',
            'data-taskPriority': priority,
          })
        )
        .addChild(
          new Element('div')
            .addAttributes({
              class: 'taskCardMainTextArea',
              'data-taskcardmaintext': taskName,
            })
            .addEventListener('click', (e) => handleTaskCardClick(e))
            .addChild(
              new Element('div')
                .addAttributes({
                  class: 'taskCardNameText',
                })
                .addText(taskName)
            )
            .addChild(
              new Element('div')
                .addAttributes({
                  class: 'taskCardDescription',
                })
                .addText(description)
            )
        )
    )
    .addChild(
      new Element('div')
        .addAttributes({
          class: 'taskRightSide',
        })
        .addChild(
          new Element('div')
            .addAttributes({
              class: 'taskCardMainDueDate',
            })
            .addText(`Due: ${dueDate}`)
        )
        .addChild(
          new Element('div')
            .addAttributes({
              class: 'taskCardMainDueDays',
            })
            .addText(DueDays)
        )
        .addChild(
          new Element('button')
            .addAttributes({
              class: 'taskCardMainDelete',
              'data-deletetask': taskName,
            })
            .addText('x')
            .addEventListener('click', (e) => deleteTaskMain(e))
        )
    )
    .build();
}

function createSaveButton(taskName) {
  return new Element('button')
    .addAttributes({
      style: 'button',
      class: 'saveButton',
      id: 'saveButton',
      'data-savebutton': taskName,
    })
    .addText('Save')
    .addEventListener('click', (e) => saveEdit(e, taskName))
    .build();
}

function createCancelButton() {
  return new Element('button')
    .addAttributes({
      style: 'button',
      class: 'cancelButton',
      id: 'cancelButton',
    })
    .addText('Cancel')
    .addEventListener('click', (e) => clearTaskForm(e))
    .build();
}

export {
  makeProjectCard,
  makeTaskCardMain,
  createSaveButton,
  createCancelButton,
};
