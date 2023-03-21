/* eslint-disable no-console */
import updateProjectEventListeners from '../controllers/dynamicClickHandler';
import {
  processStaticClick,
  addAllProjectCards,
} from '../controllers/staticClickHandlers';
import Element from '../model/elementMaker';
import Storage from '../model/storage';

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
                .addEventListener('click', (e) => processStaticClick(e))
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
            .addChild(
              new Element('h2').addAttributes({
                id: 'projectNameHeader',
              })
            )
            .addChild(
              new Element('button')
                .addAttributes({
                  class: 'consoleTable',
                  id: 'consoleTable',
                })
                .addText('console.table()')
                .addEventListener('click', (e) => processStaticClick(e))
            )
            .addChild(
              new Element('button')
                .addAttributes({
                  class: 'newTask',
                  id: 'newTask',
                })
                .addText('New Task +')
                .addEventListener('click', (e) => processStaticClick(e))
            )
        )
        .addChild(
          new Element('div').addAttributes({
            class: 'borderDiv',
          })
        )
        .addChild(
          new Element('div')
            .addAttributes({
              class: 'taskView',
              id: 'taskView',
            })
            .addChild(
              new Element('div').addAttributes({
                class: 'taskFormContainer',
                id: 'taskFormContainer',
              })
            )
        )
    )
    .build();
}

const isValidElement = (element) => element instanceof HTMLElement;

function initCurrentProjectName() {
  const currentProject = Storage.getManager().getCurrentProject()
  const currentProjectName = String(currentProject)
  console.log(Storage.getManager());
  const projectNameHeader = document.getElementById('projectNameHeader');
  projectNameHeader.innerText = currentProjectName;
}

const initializePage = () => {
  const elementTreeList = [makeHeader(), makeContent()];

  elementTreeList.forEach((tree) => {
    if (isValidElement(tree)) {
      document.body.appendChild(tree);
    } else {
      console.error(`Failed to append element: ${tree}`);
    }
  });
  addAllProjectCards();
  updateProjectEventListeners();
  initCurrentProjectName();
};

export default initializePage;
