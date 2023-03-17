import processClick from './eventListeners';
import Element from '../model/elementMaker';

function makeHeader() {
  return new Element('div')
    .addAttributes({ class: 'header', id: 'header' })
    .addChild(
      new Element('div').addAttributes({ class: 'projectFormContainer' })
    )
    .build();
}

function makeContent() {
  return new Element('div')
    .addAttributes({ class: 'content', id: 'content' })
    .addChild(
      new Element('div') // sidebar //
        .addAttributes({ class: 'sidebar', id: 'sidebar' })
        .addChild(
          new Element('div').addAttributes({
            class: 'sortInfoContainer',
            id: 'sortInfoContainer',
          })
        )
        .addChild(new Element('div').addAttributes({ class: 'borderDiv' }))
        .addChild(
          new Element('div').addAttributes({
            class: 'projectDisplayArea',
            id: 'projectDisplayArea',
          })
        ) 
        .addChild(
          new Element('div')
            .addAttributes({ class: 'newProjectFooter' })
            .addChild(
              new Element('div')
                .addAttributes({ class: 'createNewProjectLabel' })
                .addText('New Project')
            )
            .addChild(
              new Element('button')
                .addAttributes({
                  class: 'callNewProjectModal',
                  id: 'callNewProjectModal',
                })
                .addText('+')
                .addEventListener('click', (e) => processClick(e))
            )
        )
    )
    .addChild(
      new Element('div')
        .addAttributes({ class: 'contentArea', id: 'contentArea' })
        .addChild(
          new Element('div')
            .addAttributes({
              class: 'taskInfoArea',
            })
            .addChild(new Element('h2').addText('Will Be Dynamic Eventually'))
            .addChild(
              new Element('button')
                .addAttributes({
                  class: 'newTask',
                  id: 'newTask',
                })
                .addText('New Task +')
                .addEventListener('click', (e) => processClick(e))
            )
        )

        .addChild(
          new Element('div').addAttributes({
            id: 'taskView',
          })
        )
        .addChild(
          new Element('div').addAttributes({
            class: 'borderDiv',
          })
        )
        .addChild(
          new Element('div').addAttributes({
            id: 'taskFormContainer',
          })
        )
        .addChild(
          new Element('button')
            .addAttributes({
              class: 'consoleTable',
              id: 'consoleTable',
            })
            .addText('console.table()')
            .addEventListener('click', (e) => processClick(e))
        )
    )
    .build();
}

const isValidElement = (element) => {
  return element instanceof HTMLElement;
};

const initializePage = () => {
  const elementTreeList = [makeHeader(), makeContent()];

  elementTreeList.forEach((tree) => {
    if (isValidElement(tree)) {
      document.body.appendChild(tree);
    } else {
      console.error(`Failed to append element: ${tree}`);
    }
  });
};

export default initializePage;
