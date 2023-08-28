const { createProject } = require('./projects.js');
const { createTask } = require('./tasks.js');

// CUSTOM FUNCTION FOR SAVING AND ACCESSING OBJECTS ON BROWSER LOCALSTORAGE

// Function for serialising functions within the object
function serializeObjWithFunc(objWithFunction) {
  const serialisedObj = JSON.stringify(objWithFunction, function (key, val) {
    if (typeof val === 'function') {
      return val.toString();
    }
    return val;
  });
  return serialisedObj;
}

// Funciton to enable deep desterialisation of the values of the
function deepDeserializeObj(serializedString) {
  const parsedObject = JSON.parse(serializedString, (key, value) => {
    if (typeof value === 'string' && value.startsWith('function')) {
      return new Function(`return ${value}`)();
    }
    return value;
  });

  return parsedObject;
}

function saveToLocalStorage(todoProject) {
  // localStorage.setItem(todoProject.projectID, JSON.stringify(todoProject)); //needs to be saved to local storage as a string with projectID as the key
  localStorage.setItem(
    todoProject.projectID,
    serializeObjWithFunc(todoProject)
  );
}

function getProjectFromLS(projectID) {
  //
  const project = JSON.parse(localStorage.getItem(projectID), false);
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
    const defTodoProject = createProject('Default Project');
    const todo1 = createTask();
    const todo2 = createTask();
    defTodoProject.addTodo(todo1);
    defTodoProject.addTodo(todo2);
    // save to local storage
    saveToLocalStorage(defTodoProject);

    // make another default project with tasks
    const defTodoProject2 = createProject('Other Project');
    const todo3 = createTask('Todo Task #1');
    const todo4 = createTask('Todo Task #2');
    const todo5 = createTask('Todo Task #3');
    defTodoProject2.addTodo(todo3);
    defTodoProject2.addTodo(todo4);
    defTodoProject2.addTodo(todo5);
    // also save to local storage
    saveToLocalStorage(defTodoProject2);

    console.log(defTodoProject);
    console.log(serializeObjWithFunc(defTodoProject));

    // TK Will need to delete this eventually.Testing the deserialisation.
    // console.log(`Accessing Local storage for ID:${defTodoProject.projectID}`);
    const testDeserialisedObj = deepDeserializeObj(
      localStorage[defTodoProject.projectID]
    );
    console.log(testDeserialisedObj);

    console.log(testDeserialisedObj == defTodoProject);
    console.log(testDeserialisedObj === defTodoProject);
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
  deepDeserializeObj,
};
