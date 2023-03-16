import processClick from './Event Listeners';

function makeHeader() {
  return new Element('div')
    .addAttributes({ class: 'header', id: 'header' })
    .addChild(
      new Element('div').addAttributes({ class: 'sidebar', id: 'sidebar' })
    )
    .build();
}

function makeContent() {
  return new Element('div')
    .addAttributes({ class: 'content', id: 'content' })
    .build();
}

function makeSidebar() {
  return new Element('div')
    .addAttributes({ class: 'sidebar', id: 'sidebar' })
    .addChild(
      new Element('div').addAttributes({ class: 'sortManagerContainer' })
    )
    .addChild(new Element('div').addAttributes({ class: 'borderDiv' }))
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
            .addEventListener('submit', (e) => processClick(e))
        )
        .build()
    );
}

function makeContentArea() {
  return new Element('div')
    .addAttributes({ class: 'contentArea', id: 'contentArea' })
    .addChild(
      new Element('div')
        .addAttributes({
          class: 'taskInfoArea',
        })
        .addChild(new Element('h2').addText('Will Be Dynamic Eventually'))
    )
    .addChild(
      new Element('button')
        .addAttributes({
          class: 'newTask',
          id: 'newTask',
        })
        .addText('New Task +')
        .addEventListener('submit', (e) => processClick(e))
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
        .addEventListener('submit', (e) => processClick(e))
    );
}

// const initializePage = () => {
//   makeHeader();
//   makeContent();
//   makeSidebar();
// };



const initializePage = () => {
  const elementTreeList = [
    makeHeader(),
    makeContent(),
    makeSidebar(),
    makeContentArea(),
  ];

  elementTreeList.forEach((tree) => {
    document.body.appendChild(tree);
  });
};

export default initializePage;
