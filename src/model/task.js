export default class Task {
  constructor(name, description, due, priority, completed) {
    this.name = name;
    this.description = description;
    this.due = due;
    this.priority = priority;
    this.completed = completed;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setDateDue(dueDate) {
    this.due = dueDate;
  }

  getDateDue() {
    return this.due;
  }
}
