/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((module) => {

function TodoItem(title, description, dueDate, priority) {
  this.id = Math.floor(Math.random() * Date.now()).toString(16);
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.isComplete = false;
  this.editTitle = function (newName) {
    this.title = newName;
  };
  this.editDescription = function (newDescription) {
    this.description = newDescription;
  };
  this.editDate = function (DDMMYY) {
    this.dueDate = new Date();
  };
  this.changeCompleteStatus = function () {
    this.isComplete = !this.isComplete;
    return this.isComplete;
  };
  return {
    id: this.id,
    title: this.title,
    description: this.description,
    dueDate: this.dueDate,
    priority: this.priority,
    isComplete: this.isComplete,
    editDate: this.editDate,
    editDescription: this.editDescription,
    editTitle: this.editTitle,
    changeCompleteStatus: this.changeCompleteStatus
  };
}
module.exports = TodoItem;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todoItem.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2l0ZW0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFNBQVNBLFFBQVFBLENBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtFQUNyRCxJQUFJLENBQUNDLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7RUFDN0QsSUFBSSxDQUFDVixLQUFLLEdBQUdBLEtBQUs7RUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVc7RUFDOUIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87RUFDdEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7RUFDeEIsSUFBSSxDQUFDUSxVQUFVLEdBQUcsS0FBSztFQUV2QixJQUFJLENBQUNDLFNBQVMsR0FBRyxVQUFTQyxPQUFPLEVBQUU7SUFDL0IsSUFBSSxDQUFDYixLQUFLLEdBQUdhLE9BQU87RUFDeEIsQ0FBQztFQUVELElBQUksQ0FBQ0MsZUFBZSxHQUFHLFVBQVNDLGNBQWMsRUFBRTtJQUM1QyxJQUFJLENBQUNkLFdBQVcsR0FBR2MsY0FBYztFQUNyQyxDQUFDO0VBRUQsSUFBSSxDQUFDQyxRQUFRLEdBQUcsVUFBU0MsTUFBTSxFQUFFO0lBQzdCLElBQUksQ0FBQ2YsT0FBTyxHQUFHLElBQUlNLElBQUksQ0FBQyxDQUFDO0VBQzdCLENBQUM7RUFFRCxJQUFJLENBQUNVLG9CQUFvQixHQUFHLFlBQVc7SUFDbkMsSUFBSSxDQUFDUCxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUNBLFVBQVU7SUFDbEMsT0FBTyxJQUFJLENBQUNBLFVBQVU7RUFDMUIsQ0FBQztFQUVELE9BQU87SUFDSFAsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtJQUNYSixLQUFLLEVBQUUsSUFBSSxDQUFDQSxLQUFLO0lBQ2pCQyxXQUFXLEVBQUUsSUFBSSxDQUFDQSxXQUFXO0lBQzdCQyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO0lBQ3JCQyxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO0lBQ3ZCUSxVQUFVLEVBQUUsSUFBSSxDQUFDQSxVQUFVO0lBQzNCSyxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO0lBQ3ZCRixlQUFlLEVBQUUsSUFBSSxDQUFDQSxlQUFlO0lBQ3JDRixTQUFTLEVBQUUsSUFBSSxDQUFDQSxTQUFTO0lBQ3pCTSxvQkFBb0IsRUFBRSxJQUFJLENBQUNBO0VBQy9CLENBQUM7QUFDTDtBQUVBQyxNQUFNLENBQUNDLE9BQU8sR0FBR3JCLFFBQVE7Ozs7OztVQ3ZDekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy90b2RvSXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRGF0ZS5ub3coKSkudG9TdHJpbmcoMTYpXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgIHRoaXMuZWRpdFRpdGxlID0gZnVuY3Rpb24obmV3TmFtZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3TmFtZTtcbiAgICB9O1xuXG4gICAgdGhpcy5lZGl0RGVzY3JpcHRpb24gPSBmdW5jdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfTtcblxuICAgIHRoaXMuZWRpdERhdGUgPSBmdW5jdGlvbihERE1NWVkpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3IERhdGUoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5jaGFuZ2VDb21wbGV0ZVN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSAhdGhpcy5pc0NvbXBsZXRlO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiB0aGlzLmR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgICBpc0NvbXBsZXRlOiB0aGlzLmlzQ29tcGxldGUsXG4gICAgICAgIGVkaXREYXRlOiB0aGlzLmVkaXREYXRlLFxuICAgICAgICBlZGl0RGVzY3JpcHRpb246IHRoaXMuZWRpdERlc2NyaXB0aW9uLFxuICAgICAgICBlZGl0VGl0bGU6IHRoaXMuZWRpdFRpdGxlLFxuICAgICAgICBjaGFuZ2VDb21wbGV0ZVN0YXR1czogdGhpcy5jaGFuZ2VDb21wbGV0ZVN0YXR1c1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0l0ZW07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RvZG9JdGVtLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIlRvZG9JdGVtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsImlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiaXNDb21wbGV0ZSIsImVkaXRUaXRsZSIsIm5ld05hbWUiLCJlZGl0RGVzY3JpcHRpb24iLCJuZXdEZXNjcmlwdGlvbiIsImVkaXREYXRlIiwiRERNTVlZIiwiY2hhbmdlQ29tcGxldGVTdGF0dXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==