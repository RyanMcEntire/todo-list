function taskFormSelectors() {

}

function eleId() {
  const name = document.getElementById('taskName');
  const description = document.getElementById('taskDescription');
  const due = document.getElementById('taskDue');
  const priority = document.getElementsByName('priority');
  const low = document.getElementById('low');
  const normal = document.getElementById('normal');
  const high = document.getElementById('high');
  const completed = document.getElementById('completed');
  const completeAndEdit = document.getElementsByClassName('completeAndEdit')[0];
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

export { eleId }