function createTask(
  title = 'default title',
  description = 'default description',
  dueDate = new Date(),
  priority = 0,
  parentTodoProjectID = null
) {
  const id = Math.floor(Math.random() * Date.now()).toString(16);

  let isComplete = false;

  const editTitle = function (newName) {
    title = newName;
  };

  const editDescription = function (newDescription) {
    description = newDescription;
  };

  const editDate = function (DDMMYY) {
    dueDate = new Date();
  };

  const changeCompleteStatus = function () {
    isComplete = !isComplete;
    return isComplete;
  };

  // Don't think that I actually need to do this...
  const changeParentTodoProjectID = function (newParentTodoProjectID) {
    this.parentTodoProjectID = newParentTodoProjectID;

    // when Project ID is added to this todo, also add this todo to the parent's project of todos

    // parentTodoProject.addTodo(this)
    // return parentTodoProject;
  };

  return {
    id,
    title,
    description,
    dueDate,
    priority,
    isComplete,
    editTitle,
    editDescription,
    editDate,
    changeCompleteStatus,
    parentTodoProjectID,
    changeParentTodoProjectID,
  };
}

// // Test Todos
// const sampleData = {
//     title: "Sample Todo",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     dueDate: new Date(),
//     priority: 3
// };

// const sampleData2 = {
//     title: "SECOND DATA",
//     description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     dueDate: new Date(),
//     priority: 3
// };

// const sampleData3 = {
//     title: "Third DATA",
//     description: " essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     dueDate: new Date(),
//     priority: 2
// };

// const simpleTodo = createTask(...Object.values(sampleData))
// const simpleTodo2 = createTask(...Object.values(sampleData2))
// const simpleTodo3 = createTask(...Object.values(sampleData3))

module.exports = { createTask };
