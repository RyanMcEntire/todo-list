import Element from '../model/elementMaker';
import processDynamicClick from '../controllers/dynamicClickHandler';

function makeProjectCard(projectName) {
  return new Element('div')
    .addAttributes({
      class: 'projectCard',
      'data-projectCard': projectName,
      value: 'projectCard',
    })
    // .addEventListener('mousedown', (e) => processDynamicClick(e))
    .addChild(
      new Element('button')
        .addAttributes({
          class: 'deleteProjectButton',
          'data-projectDelete': projectName,
          value: 'projectDelete',
        })
        .addText('X')
        .addEventListener('mousedown', (e) => processDynamicClick(e))
    )
    .addChild(
      new Element('div')
        .addAttributes({
          class: 'projectName',
          'data-projectName': projectName,
        })
        .addText(projectName)
      .addEventListener('mousedown', (e) => processDynamicClick(e))
    )

    .addChild(
      new Element('button')
        .addAttributes({
          class: 'projectNewTask',
          'data-projectNewTask': projectName,
          value: 'projectNewTask',
        })
        .addText('+')
        .addEventListener('mousedown', (e) => processDynamicClick(e))
    )

    .build();
}

export default makeProjectCard;
