import Element from '../model/elementMaker';
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

export default makeProjectCard;
