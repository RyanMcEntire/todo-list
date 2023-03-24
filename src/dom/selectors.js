function byId(id) {
  const element = document.getElementById(id);
  return element;
}
function allByName(name) {
  const element = document.getElementsByName(name);
  return element;
}

function query(q) {
  const element = document.querySelector(q);
  return element;
}

// I wanted to make a module like this when I started
// but i got distracted and never got around to it.
// Now i added it at the end of the project to try it out.
// and its fun! used at dynamicClickHandler.js line 63 & 82
// I'll have to give it a shot next project.
function taskFormSel() {
  const taskFormCont = byId('taskFormContainer');
  const taskForm = byId('newTaskForm');
  const name = byId('taskName');
  const description = byId('taskDescription');
  const due = byId('taskDue');
  const priority = allByName('priority');
  const low = byId('low');
  const normal = byId('normal');
  const high = byId('high');
  const completed = byId('completed');
  const completedContainer = byId('completedContainer');
  const completeAndEdit = byId('completeAndEdit');
  const create = byId('createTaskButton');
  const save = byId('saveButton');
  const cancel = byId('cancelButton');
  const priorityStat = query('input[name="priority"]:checked');
  const completedStat = query('input[name="completed"]');
  return {
    taskFormCont,
    taskForm,
    name,
    description,
    due,
    priority,
    normal,
    low,
    high,
    completed,
    completedContainer,
    completeAndEdit,
    create,
    save,
    cancel,
    priorityStat,
    completedStat,
  };
};

function contentSel() {
  const taskCont = byId('taskCardContainer');
  return { taskCont };
}

function sidebarSel() {
  const projArea = byId('projectDisplayArea');

  return { projArea };
}

function upperSel() {
  const projHeader = byId('projectNameHeader');
  return { projHeader };
}

export { taskFormSel, contentSel, sidebarSel, upperSel };
