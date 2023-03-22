/* eslint-disable import/no-cycle */
import Element from '../model/elementMaker';
import { handleTaskCardClick } from '../controllers/dynamicClickHandler';
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
          'data-projectDelete': projectName,
          value: 'projectDelete',
        })
        .addText('X')
    )
    .addChild(
      new Element('button')
        .addAttributes({
          class: 'projectName',
          'data-projectName': projectName,
          value: 'projectName',
        })
        .addText(projectName)
    )
    .addChild(
      new Element('button')
        .addAttributes({
          class: 'projectNewTask',
          'data-projectNewTask': projectName,
          value: 'projectNewTask',
        })
        .addText('+')
    )
    .build();
}

function makeTaskCardMain(taskName, completed, priority, dueDate, DueDays) {
  return new Element('div')
    .addAttributes({
      class: 'taskCard',
      'data-taskCard': taskName,
      value: 'taskCard',
    })
    .addEventListener('click', (e) => handleTaskCardClick(e))
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
            })
            .addText(taskName)
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
            .addText(`Due: ${  dueDate}`) 
        )
        .addChild(
          new Element('div').addAttributes({
            class: 'taskCardMainDueDays',
          })
          .addText(DueDays) 
        )
    )
    .build();
}

export { makeProjectCard, makeTaskCardMain };
