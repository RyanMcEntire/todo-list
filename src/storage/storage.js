storage = [
  Project { label: "todo list", 
            tasks:  { name: 'work on todo', 
                      description: 'work needs done', 
                      due: 1, 
                      priority: 1 
                    }
                    { name: 'work on todo', 
                      description: 'work needs done', 
                      due: 1, 
                      priority: 1 
                    } 
          }
]


// const storage = [];

// class Task {
//   constructor(name, description, due, priority, notes) {
//     this.name = name;
//     this.description = description;
//     this.due = due;
//     this.priority = priority;
//     this.notes = notes;
//   }
// }

// class Project {
//   constructor(label, projectTasks) {
//     this.label = label;
//     this.tasks = projectTasks;
//   }
// }

// const project = new Project(`todo list`);

// const newTask = new Task('make list', 'finish stuff', 1, 2, 'keep working');

// const addTask = () => {
//   project.tasks = newTask;
//   storage.push(project);

//   console.table(storage);
//   console.table(storage[0].tasks.name);
// };

// addTask();