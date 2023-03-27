/* eslint-disable no-console */
import { updateProjectEventListeners } from '../controllers/dynamicClickHandler';
import {
  processStaticClick,
  addAllProjectCards,
  getCurrentProjectAndAppendTaskMain,
} from '../controllers/staticClickHandlers';
import Element from '../model/elementMaker';
import Storage from '../model/storage';
import { upperSel } from './selectors';

function makeHeader() {
  return new Element('div')
    .addAttributes({ class: 'header', id: 'header' })
    .addChild(
      new Element('div').addAttributes({ class: 'projectFormContainer' })
    )
    .addChild(
      new Element('div')
        .addAttributes({ class: 'siteLogo' })
        .addChild(
          new Element('h1')
            .addAttributes({ class: 'siteLogo' })
            .addText('Clowdy Todo')
        )
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
                .addText('New Task')
                .addEventListener('click', (e) => processStaticClick(e))
            )
        )
        .addChild(
          new Element('div')
            .addAttributes({
              class: 'taskLegend',
              id: 'taskLegend',
            })
            .addChild(
              new Element('div')
                .addAttributes({
                  class: 'taskLeftSide',
                })
                .addChild(
                  new Element('div')
                    .addAttributes({
                      class: 'legendCheck',
                    })
                    .addText('✔️')
                )
                .addChild(
                  new Element('div').addAttributes({
                    class: 'legendPriority',
                  })
                )
                .addChild(
                  new Element('div')
                    .addAttributes({
                      class: 'taskCardMainTextArea textAreaLegend',
                    })
                    .addChild(
                      new Element('div')
                        .addAttributes({
                          class: 'legendName',
                        })
                        .addText('Task Name')
                    )
                    .addChild(
                      new Element('div')
                        .addAttributes({
                          class: 'legendDescription',
                        })
                        .addText('description')
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
                      class: 'legendDateDue',
                    })
                    .addText('Date Due')
                )
                .addChild(
                  new Element('div')
                    .addAttributes({
                      class: 'legendDueIn',
                    })
                    .addText('Due in')
                )
                .addChild(
                  new Element('div')
                    .addAttributes({
                      class: 'legendDelete',
                    })
                    .addText('Delete') 
                )
            )
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
            .addChild(
              new Element('div').addAttributes({
                class: 'taskCardContainer',
                id: 'taskCardContainer',
              })
            )
        )
    )
    .build();
}

const isValidElement = (element) => element instanceof HTMLElement;

function initCurrentProjectName() {
  const currentProject = Storage.getManager().getCurrentProject();
  const currentProjectName = String(currentProject);
  const projectNameHeader = upperSel().projHeader;
  projectNameHeader.innerText = currentProjectName;
}

const initializePage = () => {
  const elementTreeList = [makeHeader(), makeContent()];
  const currentProjectData = Storage.getManager().getCurrentProject();
  elementTreeList.forEach((tree) => {
    if (isValidElement(tree)) {
      document.body.appendChild(tree);
    } else {
      console.error(`Failed to append element: ${tree}`);
    }
  });
  updateProjectEventListeners();
  initCurrentProjectName();

  addAllProjectCards();
  getCurrentProjectAndAppendTaskMain(currentProjectData);
};

export default initializePage;
