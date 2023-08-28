/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((module) => {

function TodoList(name) {
  var _this = this;
  this.name = name;
  for (var _len = arguments.length, todoItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    todoItems[_key - 1] = arguments[_key];
  }
  this.todoItems = todoItems || [];
  var addTodo = function addTodo(newTodoItem) {
    _this.todoItems.push(newTodoItem);
  };
  function removeTodo(delTodoItem) {
    this.todoItems = this.todoItems.filter(function (item) {
      return item.title !== delTodoItem.title;
    });
  }
  ;
  function editName(newName) {
    this.name = newName;
  }
  ;
  return {
    name: name,
    todoItems: todoItems,
    addTodo: addTodo,
    removeTodo: removeTodo,
    editName: editName
  };
}
;
module.exports = TodoList;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todoList.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFNBQVNBLFFBQVFBLENBQUNDLElBQUksRUFBZTtFQUFBLElBQUFDLEtBQUE7RUFDakMsSUFBSSxDQUFDRCxJQUFJLEdBQUdBLElBQUk7RUFBQyxTQUFBRSxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQURNQyxTQUFTLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7SUFBVEYsU0FBUyxDQUFBRSxJQUFBLFFBQUFKLFNBQUEsQ0FBQUksSUFBQTtFQUFBO0VBRWhDLElBQUksQ0FBQ0YsU0FBUyxHQUFHQSxTQUFTLElBQUksRUFBRTtFQUVoQyxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsV0FBVyxFQUFLO0lBQzdCUixLQUFJLENBQUNJLFNBQVMsQ0FBQ0ssSUFBSSxDQUFDRCxXQUFXLENBQUM7RUFDcEMsQ0FBQztFQUdELFNBQVNFLFVBQVVBLENBQUNDLFdBQVcsRUFBQztJQUM1QixJQUFJLENBQUNQLFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVMsQ0FBQ1EsTUFBTSxDQUNwQyxVQUFDQyxJQUFJO01BQUEsT0FBS0EsSUFBSSxDQUFDQyxLQUFLLEtBQUtILFdBQVcsQ0FBQ0csS0FBSztJQUFBLENBQzVDLENBQUM7RUFDTDtFQUFDO0VBR0QsU0FBU0MsUUFBUUEsQ0FBQ0MsT0FBTyxFQUFDO0lBQ3RCLElBQUksQ0FBQ2pCLElBQUksR0FBR2lCLE9BQU87RUFDdkI7RUFBQztFQUVELE9BQU87SUFBQ2pCLElBQUksRUFBSkEsSUFBSTtJQUFFSyxTQUFTLEVBQVRBLFNBQVM7SUFBRUcsT0FBTyxFQUFQQSxPQUFPO0lBQUVHLFVBQVUsRUFBVkEsVUFBVTtJQUFFSyxRQUFRLEVBQVJBO0VBQVEsQ0FBQztBQUMzRDtBQUFDO0FBRURFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHcEIsUUFBUTs7Ozs7O1VDdkJ6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gVG9kb0xpc3QobmFtZSwgLi4udG9kb0l0ZW1zKXtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9kb0l0ZW1zID0gdG9kb0l0ZW1zIHx8IFtdO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9IChuZXdUb2RvSXRlbSkgPT4ge1xuICAgICAgICB0aGlzLnRvZG9JdGVtcy5wdXNoKG5ld1RvZG9JdGVtKVxuICAgIH07XG4gICAgXG5cbiAgICBmdW5jdGlvbiByZW1vdmVUb2RvKGRlbFRvZG9JdGVtKXtcbiAgICAgICAgdGhpcy50b2RvSXRlbXMgPSB0aGlzLnRvZG9JdGVtcy5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0udGl0bGUgIT09IGRlbFRvZG9JdGVtLnRpdGxlXG4gICAgICAgICk7XG4gICAgfTtcbiAgICAgIFxuICAgICAgICBcbiAgICBmdW5jdGlvbiBlZGl0TmFtZShuZXdOYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZVxuICAgIH07XG5cbiAgICByZXR1cm4ge25hbWUsIHRvZG9JdGVtcywgYWRkVG9kbywgcmVtb3ZlVG9kbywgZWRpdE5hbWV9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdG9kb0xpc3QuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiVG9kb0xpc3QiLCJuYW1lIiwiX3RoaXMiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidG9kb0l0ZW1zIiwiQXJyYXkiLCJfa2V5IiwiYWRkVG9kbyIsIm5ld1RvZG9JdGVtIiwicHVzaCIsInJlbW92ZVRvZG8iLCJkZWxUb2RvSXRlbSIsImZpbHRlciIsIml0ZW0iLCJ0aXRsZSIsImVkaXROYW1lIiwibmV3TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9