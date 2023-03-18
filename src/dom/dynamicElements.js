import Element from '../model/elementMaker';

function makeProjectCard(projectName) {
  return new Element('div')
    .addAttributes({
      class: 'projectCard',
      'data-projectCard': projectName,
    })
    .addChild(
      new Element('button')
        .addAttributes({
          class: 'deleteProjectButton',
          'data-projectDelete': projectName,
        })
        .addText('X')
    )
    .addChild(
      new Element('div')
        .addAttributes({
          class: 'projectName',
          'data-projectName': projectName,
        })
        .addText(projectName)
    )

    .addChild(
      new Element('button')
        .addAttributes({
          class: 'deleteProject',
          'data-projectNewTask': projectName,
        })
        .addText('+')
    )

    .build();
}

export default makeProjectCard;
