const { createTask } = require('./tasks.js');
const { createProject } = require('./projects.js');
const {
  saveToLocalStorage,
  getProjectFromLS,
  getAllTasksFromProjectLS,
} = require('./app_storage.js');

// clear the children of a fiven parent ele
function clearChildren(parentNodeID) {
  const parentDiv = document.getElementById(`${parentNodeID}`);
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
}

// Project Utilities

function displayTodoProject(todoProject, parentDivID = 'project-titles') {
  const parentUl = document.getElementById(parentDivID);

  const projectElement = document.createElement('li');

  projectElement.setAttribute('data-project-id', todoProject.projectID);
  projectElement.classList.add(
    'flex',
    'item-center',
    'text-gray-800',
    'font-medium',
    'hover:bg-gray-300',
    'p-2',
    'rounded-lg',
    'transition'
  );

  const iconElement = document.createElement('i');
  iconElement.classList.add('fa-solid', 'fa-list-check', 'mr-2');

  projectElement.innerText = todoProject['name'];

  projectElement.prepend(iconElement);
  parentUl.appendChild(projectElement);
}

function updateAllTodoProjects() {
  // clear contents
  clearChildren('project-titles');

  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const value = JSON.parse(localStorage[key]); //need to parse string as json

      displayTodoProject(value);
    }
  }
}

// Todo Utilities

module.exports = { clearChildren, updateAllTodoProjects, displayTodoProject };
