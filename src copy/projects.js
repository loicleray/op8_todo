function factoryTodoProject(name = 'New Project', ...todoTasks) {
  // Genrate Project ID
  const projectID = Math.floor(Math.random() * Date.now()).toString(8);

  // If multiple todo Tasks are given, make a project. Otherwise initine project with blank array of todo tasks.
  todoTasks = todoTasks || [];

  const addTodo = function (newTodoTask) {
    // takes a todo task object, but only save the todo task ID to the todo project.
    this.todoTasks.push(newTodoTask);
    // also save parent Project ID to the todo task
    newTodoTask.parentTodoProjectID = this.projectID;
  };
  const removeTodo = function (delTodoTask) {
    // TK this should parse the todotask ID inserted in function and remov eit
    this.todoTasks = this.todoTasks.filter((id) => id !== delTodoTask);
    // also need to remove the projectID from the deleted todo task's parent
    delTodoTask.parentTodoProjectID = null;
  };
  const editName = function (newName) {
    this.name = newName;
  };
  return {
    name,
    todoTasks,
    addTodo,
    removeTodo,
    editName,
    projectID,
  };
}

module.exports = { factoryTodoProject };
