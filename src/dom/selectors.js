function byId(id) {
  const element = document.getElementById(id);
  return element;
}
function allByName(name) {
  const element = document.getElementsByName(name);
  return element;
}
function allByClassName(className) {
  const element = document.getElementsByClassName(className);
  return element;
}

function taskFormSelectors() {
  const name = byId('taskName');
  // const name = document.getElementById('taskName');
  const description = byId('taskDescription');
  const due = byId('taskDue');
  const priority = allByName('priority');
  const low = byId('low');
  const normal = byId('normal');
  const high = byId('high');
  const completed = byId('completed'); 
  const completeAndEdit = allByClassName('completeAndEdit')[0];
  return {
    name,
    description,
    due,
    priority,
    normal,
    low,
    high,
    completed,
    completeAndEdit,
  };
}

export { taskFormSelectors };
