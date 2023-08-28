const { factoryTodoProject } = require('./projects.js');
const { factoryTodoTask } = require('./tasks.js');

function saveToLocalStorage(todoProject) {
  localStorage.setItem(todoProject.projectID, JSON.stringify(todoProject)); //needs to be saved to local storage as a string with projectID as the key
}

function getProjectFromLS(projectID) {
  const project = JSON.parse(localStorage.getItem(projectID));
  return project;
}

function getAllTasksFromProjectLS(projectID) {
  const project = JSON.parse(localStorage.getItem(projectID));
  const todoTasks = project.todoTasks;
  return todoTasks;
}

// localStorage IIFE
(function initiateLSM() {
  // create initial data if none currenlyt exists in the browser's local storage
  if (localStorage.length == 0) {
    console.log('Currently no tasks in storage.');
    console.log('Building data now.');

    // Populate local storage with a default Todo Project containing sample Todos
    const defTodoProject = factoryTodoProject('Default Project');
    const todo1 = factoryTodoTask();
    const todo2 = factoryTodoTask();
    defTodoProject.addTodo(todo1);
    defTodoProject.addTodo(todo2);
    // save to local storage
    saveToLocalStorage(defTodoProject);

    // make another default project with tasks
    const defTodoProject2 = factoryTodoProject('Other Project');
    const todo3 = factoryTodoTask('Todo Task #1');
    const todo4 = factoryTodoTask('Todo Task #2');
    const todo5 = factoryTodoTask('Todo Task #3');
    defTodoProject2.addTodo(todo3);
    defTodoProject2.addTodo(todo4);
    defTodoProject2.addTodo(todo5);

    saveToLocalStorage(defTodoProject2);
  } else {
    console.log(
      'Already tasks in localStorage. Continuing from previous project'
    );
  }
})();

module.exports = {
  saveToLocalStorage,
  getProjectFromLS,
  getAllTasksFromProjectLS,
};
