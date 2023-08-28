// const { exampleFolder } = require('./projects.js');
const { createTask } = require('./tasks.js');
const { createProject } = require('./projects.js');
const {
  clearChildren,
  updateAllTodoProjects,
  displayTodoProject,
} = require('./DOMUtilities.js');
const {
  saveToLocalStorage,
  getProjectFromLS,
  getAllTasksFromProjectLS,
  deepDeserializeObj,
} = require('./app_storage.js');

// === PART 1 - TODO PROJECT ===

// Select DOM Elements of interest
const newProjectButton = document.querySelector('#new-project-button'); // get project "+" button in variable

// Event projecteners for DOM Elements
newProjectButton.addEventListener('click', createTodoProject); // add click event projectener for project "+" button

// Creation
function createTodoProject() {
  const newTodoProject = createProject();
  saveToLocalStorage(newTodoProject);
  updateAllTodoProjects();
}

// logic to have projects be selectable in sidebar
// Attach the event listener to the parent element
document.addEventListener('DOMContentLoaded', function () {
  // Get the parent element
  let parent = document.getElementById('project-titles');

  // Attach the event listener to the parent element
  parent.addEventListener('click', (event) => {
    // Check if the clicked element is a li and has the data-project-id attribute
    if (
      event.target.tagName === 'LI' &&
      event.target.hasAttribute('data-project-id')
    ) {
      let projectId = event.target.getAttribute('data-project-id');
      let projectObj = getProjectFromLS(projectId);
      updateAllTodosInProject(projectObj);
      changeProjectTitle(projectObj.name);
      setProjectID(projectId);
    }
  });
});

// Change displayed project title and add custom html attribut for ID
function changeProjectTitle(newH1) {
  const titleDIV = document.getElementById('project-title-div');
  titleDIV.querySelector('h1').innerText = newH1;
}

// add custom html attribut for title div ID
function setProjectID(projectID) {
  const titleDIV = document.getElementById('project-title-div');
  titleDIV.setAttribute('data-project-id', projectID);
}

// Initialise Project of todos so they show on page
updateAllTodoProjects();

// === PART 2 - TODO ITEM DOM MANIPULATION AND DISPLAY ===

function createTodoTask() {
  console.log('clicked');
  // create the blank task
  const defaultTodoTask = createTask();

  // Save it local storage of project it was created from
  const currentProjectID = document
    .getElementById('project-title-div')
    .getAttribute('data-project-id');

  const selectedProject = deepDeserializeObj(localStorage[currentProjectID]);

  selectedProject.addTodo(defaultTodoTask);
  console.log(selectedProject);

  //update elements in project DIV
  updateAllTodosInProject(selectedProject);
}

// Select DOM Elements of interest
const newTaskButton = document.querySelector('#new-task-button');

// Event projecteners for DOM Elements
newTaskButton.addEventListener('click', createTodoTask);

// Function to create a new todo task
function displayTodoTask(todoTask, parentDivID = 'task-card') {
  receivingElement = document.querySelector(`#${parentDivID}`);

  // Create the main container div
  const taskCardDiv = document.createElement('div');
  taskCardDiv.className = '';
  taskCardDiv.id = 'task-card';

  // Create the form element
  const form = document.createElement('form');
  form.action = '#';
  form.className = 'flex flex-row align-start w-full';

  // Create the checkbox div
  const checkboxDiv = document.createElement('div');
  checkboxDiv.className = 'mr-4';
  checkboxDiv.id = 'checkbox-div';

  // Create the checkbox input
  const checkboxInput = document.createElement('input');
  checkboxInput.type = 'checkbox';
  checkboxInput.name = 'completed-status';
  checkboxInput.id = 'completed-status';
  checkboxInput.className = 'accent-gray-600';
  checkboxDiv.appendChild(checkboxInput);

  // Append the checkbox div to the form
  form.appendChild(checkboxDiv);

  // Create the middle info div
  const middleInfoDiv = document.createElement('div');
  middleInfoDiv.className = 'flex flex-col place-content-between w-full';
  middleInfoDiv.id = 'middle-info';

  // Create the title info div
  const titleInfoDiv = document.createElement('div');
  titleInfoDiv.className = 'flex flex-row place-content-between w-full';
  titleInfoDiv.id = 'title-info';

  // Create the title left div
  const titleLeftDiv = document.createElement('div');
  titleLeftDiv.className = 'flex place-content-between gap-2';
  titleLeftDiv.id = 'title-left';

  // Create the title input
  const titleInput = document.createElement('input');
  titleInput.id = 'title-input';
  titleInput.className =
    'text-lg text-gray-800 bg-transparent font-medium w-full resize-none bg-none placeholder:text-gray-400 outline-0 focus:outline-none';
  titleInput.value = todoTask.title;
  titleInput.autocomplete = 'off';
  titleLeftDiv.appendChild(titleInput);

  // Append the title left div to the title info div
  titleInfoDiv.appendChild(titleLeftDiv);

  // Create the title right div
  const titleRightDiv = document.createElement('div');
  titleRightDiv.className = 'flex place-content-between gap-4';
  titleRightDiv.id = 'title-right';

  // Create the priority markers div
  const priorityMarkersDiv = document.createElement('div');
  priorityMarkersDiv.className = 'flex flex-col gap-1 h-full w-2';
  priorityMarkersDiv.id = 'priority-markers';

  // Create the priority marker elements
  for (let i = 0; i < 3; i++) {
    const markerDiv = document.createElement('div');
    markerDiv.className = 'grow';
    markerDiv.id = `marker${i + 1}`;
    markerDiv.classList.add(
      `bg-${i === 0 ? 'red' : i === 1 ? 'orange' : 'green'}-300`
    );
    priorityMarkersDiv.appendChild(markerDiv);
  }

  // Append the priority markers div to the title right div
  titleRightDiv.appendChild(priorityMarkersDiv);

  // Create the due time span element
  const dueTimeSpan = document.createElement('span');
  dueTimeSpan.className =
    'flex px-2 py-1 grow-0 shrink-0 tasks-center text-xs leading-none bg-gray-300 text-gray-600 rounded-full gap-1';
  dueTimeSpan.innerHTML = 'Due';

  // Create the time element within the due time span
  const timeElement = document.createElement('time');
  timeElement.className = 'text-gray-700 font-bold';
  timeElement.datetime = '2018-07-07T20:00:00';
  //   timeElement.textContent = todoTask.dueDate.toLocaleDateString('en-au', {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //     timeZone: 'utc',
  //   });

  dueTimeSpan.appendChild(timeElement);

  // Append the due time span to the title right div
  titleRightDiv.appendChild(dueTimeSpan);

  // Append the title right div to the title info div
  titleInfoDiv.appendChild(titleRightDiv);

  // Append the title info div to the middle info div
  middleInfoDiv.appendChild(titleInfoDiv);

  // Create the description info div
  const descInfoDiv = document.createElement('div');
  descInfoDiv.className = 'w-full pt-1';
  descInfoDiv.id = 'desc-info';

  // Create the description textarea
  const descTextarea = document.createElement('textarea');
  descTextarea.className =
    'w-full resize-none bg-transparent text-gray-400 placeholder:text-gray-400 outline-0 focus:outline-none';
  descTextarea.name = 'decription';
  descTextarea.id = 'decription';
  descTextarea.placeholder = 'Optional notes...';
  descInfoDiv.appendChild(descTextarea);

  // Append the description info div to the middle info div
  middleInfoDiv.appendChild(descInfoDiv);

  // Append the middle info div to the form
  form.appendChild(middleInfoDiv);

  // Append the form to the main container div
  taskCardDiv.appendChild(form);

  // Append the receiving DOM element
  receivingElement.appendChild(taskCardDiv);
}

function updateAllTodosInProject(project, parentDivID = 'task-card') {
  // Delete all children of parent element
  clearChildren(parentDivID);
  const todoTasks = getAllTasksFromProjectLS(project.projectID);

  // display all tasks in folder
  for (let i = 0; i < todoTasks.length; i++) {
    displayTodoTask(todoTasks[i], parentDivID);
  }
}
