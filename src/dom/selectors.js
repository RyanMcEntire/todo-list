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

function taskFormSel() {
  return {
    taskFormCont: byId('taskFormContainer'),
    taskForm: byId('newTaskForm'),
    name: byId('taskName'),
    description: byId('taskDescription'),
    due: byId('taskDue'),
    priority: allByName('priority'),
    low: byId('low'),
    normal: byId('normal'),
    high: byId('high'),
    completed: byId('completed'),
    completedContainer: byId('completedContainer'),
    completeAndEdit: byId('completeAndEdit'),
    create: byId('createTaskButton'),
    save: byId('saveButton'),
    cancel: byId('cancelButton'),
    priorityStat: query('input[name="priority"]:checked'),
    completedStat: query('input[name="completed"]'),
  };
}

function contentSel() {
  return {
    taskCont: byId('taskCardContainer'),
  };
}

function sidebarSel() {
  return {
    projArea: byId('projectDisplayArea'),
  };
}

function upperSel() {
  return {
    projHeader: byId('projectNameHeader'),
  };
}

export { taskFormSel, contentSel, sidebarSel, upperSel };
