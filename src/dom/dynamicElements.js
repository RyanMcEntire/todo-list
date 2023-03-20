import Element from '../model/elementMaker';
import processProjectCardClick from '../controllers/dynamicClickHandler';

function makeProjectCard(projectName) {
  return (
    new Element('div')
      .addAttributes({
        class: 'projectCard',
        'data-projectCard': projectName,
        value: 'projectCard',
      })
      // .addEventListener('mousedown', (e) => processProjectCardClick(e))
      .addChild(
        new Element('button')
          .addAttributes({
            class: 'deleteProjectButton',
            'data-projectDelete': projectName,
            value: 'projectDelete',
          })
          .addText('X')
          .addEventListener('click', (e) => processProjectCardClick(e))
      )
      .addChild(
        new Element('button')
          .addAttributes({
            class: 'projectName',
            'data-projectName': projectName,
            value: 'projectName',
          })
          .addText(projectName)
          .addEventListener('click', (e) => processProjectCardClick(e))
      )

      .addChild(
        new Element('button')
          .addAttributes({
            class: 'projectNewTask',
            'data-projectNewTask': projectName,
            value: 'projectNewTask',
          })
          .addText('+')
          .addEventListener('click', (e) => processProjectCardClick(e))
      )

      .build()
  );
}

export default makeProjectCard;
