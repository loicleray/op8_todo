/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/flatpickr/dist/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./node_modules/flatpickr/dist/esm/utils/dom.js");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dates */ "./node_modules/flatpickr/dist/esm/utils/dates.js");
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/polyfills */ "./node_modules/flatpickr/dist/esm/utils/polyfills.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
};







var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: __assign(__assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults), flatpickr.defaultConfig),
    l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({
    config: self.config,
    l10n: self.l10n
  });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self.onMouseOver = onMouseOver;
  self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement;
  self.createDay = createDay;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.updateValue = updateValue;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;
  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function (month, yr) {
        if (month === void 0) {
          month = self.currentMonth;
        }
        if (yr === void 0) {
          yr = self.currentYear;
        }
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }
  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile) build();
    bindEvents();
    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
      }
      updateValue(false);
    }
    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function getClosestActiveElement() {
    var _a;
    return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
  }
  function bindToInstance(fn) {
    return fn.bind(self);
  }
  function setCalendarWidth() {
    var config = self.config;
    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function () {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }
        if (self.daysContainer !== undefined) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === undefined || (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
      var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
      defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }
    if (e !== undefined && e.type !== "blur") {
      timeWrapper(e);
    }
    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();
    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(amPM === self.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self.hourElement === undefined || self.minuteElement === undefined) return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
      minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
      seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
    if (self.amPM !== undefined) {
      hours = ampm2military(hours, self.amPM.textContent);
    }
    var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
    if (self.config.maxTime !== undefined && self.config.minTime !== undefined && self.config.minTime > self.config.maxTime) {
      var minBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
      var maxBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
      var currentTime = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(hours, minutes, seconds);
      if (currentTime > maxBound && currentTime < minBound) {
        var result = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.parseSeconds)(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
      }
      if (limitMinHours) {
        var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
      }
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;
    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== undefined) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self.hourElement || !self.minuteElement || self.isMobile) return;
    self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours % 12 === 0) : hours);
    self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(minutes);
    if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours >= 12)];
    if (self.secondElement !== undefined) self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(seconds);
  }
  function onYearInput(event) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind(element, event, handler, options) {
    if (event instanceof Array) return event.forEach(function (ev) {
      return bind(element, ev, handler, options);
    });
    if (element instanceof Array) return element.forEach(function (el) {
      return bind(el, event, handler, options);
    });
    element.addEventListener(event, handler, options);
    self._handlers.push({
      remove: function () {
        return element.removeEventListener(event, handler, options);
      }
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function (evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
          return bind(el, "click", self[evt]);
        });
      });
    }
    if (self.isMobile) {
      setupMobile();
      return;
    }
    var debouncedResize = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(onResize, 50);
    self._debouncedChange = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
      if (self.config.mode === "range") onMouseOver((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e));
    });
    bind(self._input, "keydown", onKeyDown);
    if (self.calendarContainer !== undefined) {
      bind(self.calendarContainer, "keydown", onKeyDown);
    }
    if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, {
      capture: true
    });
    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }
    if (self.daysContainer !== undefined) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }
    if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
      var selText = function (e) {
        return (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).select();
      };
      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, {
        capture: true
      });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
        return self.secondElement && self.secondElement.select();
      });
      if (self.amPM !== undefined) {
        bind(self.amPM, "click", function (e) {
          updateTime(e);
        });
      }
    }
    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange) {
    var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;
    try {
      if (jumpTo !== undefined) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }
    if (triggerChange && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self.redraw();
  }
  function timeIncrement(e) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e, delta, inputElem) {
    var target = e && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;
    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-innerContainer");
      if (self.config.weekNumbers) {
        var _a = buildWeeks(),
          weekWrapper = _a.weekWrapper,
          weekNumbers = _a.weekNumbers;
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }
      self.rContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());
      if (!self.daysContainer) {
        self.daysContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }
      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }
    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;
    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
      if (self.config.inline) {
        if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
      }
      if (self.config.static) {
        var wrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-wrapper");
        if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput) wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }
    if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }
  function createDay(className, date, _dayNumber, i) {
    var dateIsEnabled = isEnabled(date, true),
      dayElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;
        if (self.config.mode === "range") {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "startRange", self.selectedDates[0] && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0], true) === 0);
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "endRange", self.selectedDates[1] && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay") dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
    }
    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range") onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    for (var m = startMonth; m != endMonth; m += delta) {
      var month = self.daysContainer.children[m];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;
      for (var i = startIndex; i != endIndex; i += delta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
      }
    }
    return undefined;
  }
  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;
    for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      var month = self.daysContainer.children[m];
      var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;
      for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
      }
    }
    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return undefined;
  }
  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== undefined ? current : dayFocused ? activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === undefined) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year),
      days = window.document.createDocumentFragment(),
      isMultiMonth = self.config.showMonths > 1,
      prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
      nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth,
      dayIndex = 0;
    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    var dayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self.daysContainer === undefined) {
      return;
    }
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.daysContainer);
    if (self.weekNumbers) (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekNumbers);
    var frag = document.createDocumentFragment();
    for (var i = 0; i < self.config.showMonths; i++) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }
    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;
    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;
    var shouldBuildMonth = function (month) {
      if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
        return false;
      }
      return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
    };
    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";
    for (var i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i)) continue;
      var month = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i).getMonth().toString();
      month.textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;
      if (self.currentMonth === i) {
        month.selected = true;
      }
      self.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;
    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "cur-month");
    } else {
      self.monthsDropdownContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", function (e) {
        var target = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }
    var yearInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("cur-year", {
      tabindex: "-1"
    });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }
    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }
    var currentMonth = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container: container,
      yearElement: yearElement,
      monthElement: monthElement
    };
  }
  function buildMonths() {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);
    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }
    for (var m = self.config.showMonths; m--;) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }
    self.monthNav.appendChild(self.nextMonthNav);
  }
  function buildMonthNav() {
    self.monthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function () {
        return self.__hidePrevMonthArrow;
      },
      set: function (bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function () {
        return self.__hideNextMonthArrow;
      },
      set: function (bool) {
        if (self.__hideNextMonthArrow !== bool) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }
  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
    var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
    self.timeContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":");
    var hourInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
    self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");
    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }
    if (!self.config.time_24hr) {
      self.amPM = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }
    return self.timeContainer;
  }
  function buildWeekdays() {
    if (!self.weekdayContainer) self.weekdayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdays");else (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekdayContainer);
    for (var i = self.config.showMonths; i--;) {
      var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }
    var firstDayOfWeek = self.l10n.firstDayOfWeek;
    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }
    for (var i = self.config.showMonths; i--;) {
      self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
  }
  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper: weekWrapper,
      weekNumbers: weekNumbers
    };
  }
  function changeMonth(value, isOffset) {
    if (isOffset === void 0) {
      isOffset = true;
    }
    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
    self.currentMonth += delta;
    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === void 0) {
      triggerChangeEvent = true;
    }
    if (toInitial === void 0) {
      toInitial = true;
    }
    self.input.value = "";
    if (self.altInput !== undefined) self.altInput.value = "";
    if (self.mobileInput !== undefined) self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = undefined;
    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }
    if (self.config.enableTime === true) {
      var _a = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config),
        hours = _a.hours,
        minutes = _a.minutes,
        seconds = _a.seconds;
      setHours(hours, minutes, seconds);
    }
    self.redraw();
    if (triggerChangeEvent) triggerEvent("onChange");
  }
  function close() {
    self.isOpen = false;
    if (!self.isMobile) {
      if (self.calendarContainer !== undefined) {
        self.calendarContainer.classList.remove("open");
      }
      if (self._input !== undefined) {
        self._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self.config !== undefined) triggerEvent("onDestroy");
    for (var i = self._handlers.length; i--;) {
      self._handlers[i].remove();
    }
    self._handlers = [];
    if (self.mobileInput) {
      if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = undefined;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }
    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }
    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }
    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
      try {
        delete self[k];
      } catch (_) {}
    });
  }
  function isCalendarElem(elem) {
    return self.calendarContainer.contains(elem);
  }
  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget_1 = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
        return elem.contains(eventTarget_1);
      });
      if (lostFocus && isIgnored) {
        if (self.config.allowInput) {
          self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        }
        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
          updateTime();
        }
        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) self.clear(false);
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
    var newYearNum = newYear,
      isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;
    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }
    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless) {
    var _a;
    if (timeless === void 0) {
      timeless = true;
    }
    var dateToCheck = self.parseDate(date, undefined, timeless);
    if (self.config.minDate && dateToCheck && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
    if (!self.config.enable && self.config.disable.length === 0) return true;
    if (dateToCheck === undefined) return false;
    var bool = !!self.config.enable,
      array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
    for (var i = 0, d = void 0; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string") {
        var parsed = self.parseDate(d, undefined, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e) {
    var isInput = e.target === self._input;
    var valueChanged = self._input.value.trimEnd() !== getDateStr();
    if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }
  function onKeyDown(e) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;
    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        self.close();
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else selectDate(e);
          break;
        case 27:
          e.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();
            var activeElement = getClosestActiveElement();
            if (self.daysContainer !== undefined && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey) focusOnDay(undefined, delta_1);else {
                e.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement) self.hourElement.focus();
          break;
        case 38:
        case 40:
          e.preventDefault();
          var delta = e.keyCode === 40 ? 1 : -1;
          if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement) self.hourElement.focus();
            updateTime(e);
            self._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function (x) {
              return x;
            });
            var i = elems.indexOf(eventTarget);
            if (i !== -1) {
              var target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();
              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();
            self._input.focus();
          }
          break;
        default:
          break;
      }
    }
    if (self.amPM !== undefined && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }
  function onMouseOver(elem, cellClass) {
    if (cellClass === void 0) {
      cellClass = "flatpickr-day";
    }
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled"))) return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
      initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
      rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
      rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0,
      maxRange = 0;
    for (var t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__.duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
      }
    }
    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function (dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function (c) {
          dayElem.classList.remove(c);
        });
        return;
      } else if (containsDisabled && !outOfRange) return;
      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
        dayElem.classList.remove(c);
      });
      if (elem !== undefined) {
        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.isBetween)(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
      }
    });
  }
  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
  }
  function open(e, positionElement) {
    if (positionElement === void 0) {
      positionElement = self._positionElement;
    }
    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self.mobileInput !== undefined) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }
    var wasOpen = self.isOpen;
    self.isOpen = true;
    if (!wasOpen) {
      self.calendarContainer.classList.add("open");
      self._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(function () {
          return self.hourElement.select();
        }, 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return function (date) {
      var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
      if (dateObj !== undefined) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function (d) {
          return isEnabled(d);
        });
        if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
        updateValue();
      }
      if (self.daysContainer) {
        redraw();
        if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    var boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function () {
        return self.config._enable;
      },
      set: function (dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function () {
        return self.config._disable;
      },
      set: function (dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.dateFormat;
      formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.altFormat;
      formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(self.config, "minDate", {
      get: function () {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function () {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });
    var minMaxTimeSetter = function (type) {
      return function (val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };
    Object.defineProperty(self.config, "minTime", {
      get: function () {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function () {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }
    Object.assign(self.config, formats, userConfig);
    for (var i = 0; i < boolOpts.length; i++) self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
    _types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.filter(function (hook) {
      return self.config[hook] !== undefined;
    }).forEach(function (hook) {
      self.config[hook] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var i = 0; i < self.config.plugins.length; i++) {
      var pluginConf = self.config.plugins[i](self) || {};
      for (var key in pluginConf) {
        if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(key) > -1) {
          self.config[key] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }
  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
    self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
    if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
      self.config.time_24hr = self.l10n.time_24hr;
    }
    self.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)(self);
    self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({
      config: self.config,
      l10n: self.l10n
    });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }
    if (self.calendarContainer === undefined) return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
        return acc + child.offsetHeight;
      }, 0),
      calendarWidth = self.calendarContainer.offsetWidth,
      configPos = self.config.position.split(" "),
      configPosVertical = configPos[0],
      configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
      inputBounds = positionElement.getBoundingClientRect(),
      distanceFromBottom = window.innerHeight - inputBounds.bottom,
      showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline) return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static) return;
    self.calendarContainer.style.top = top + "px";
    if (!rightMost) {
      self.calendarContainer.style.left = left + "px";
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === undefined) return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", false);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self.calendarContainer.style.left = centerLeft + "px";
      self.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    var editableSheet = null;
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      if (!sheet.cssRules) continue;
      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }
  function redraw() {
    if (self.config.noCalendar || self.isMobile) return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }
  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();
    var isSelectable = function (day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };
    var t = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.findParent)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), isSelectable);
    if (t === undefined) return;
    var target = t;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }
      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
        return a.getTime() - b.getTime();
      });
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();
    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [function () {
      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "click", self.open);
      } else {
        self._input.removeEventListener("focus", self.open);
        self._input.removeEventListener("click", self.open);
      }
    }]
  };
  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);
      for (var key in option) {
        if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function (x) {
          return x();
        });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
        return x();
      });else if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(option) > -1) self.config[option] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(value);
    }
    self.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array) dates = inputDate.map(function (d) {
      return self.parseDate(d, format);
    });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function (date) {
            return self.parseDate(date, format);
          });
          break;
        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
            return self.parseDate(date, format);
          });
          break;
        default:
          break;
      }
    } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function (d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
      return a.getTime() - b.getTime();
    });
  }
  function setDate(date, triggerChange, format) {
    if (triggerChange === void 0) {
      triggerChange = false;
    }
    if (format === void 0) {
      format = self.config.dateFormat;
    }
    if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(undefined, triggerChange);
    setHoursFromDate();
    if (self.selectedDates.length === 0) {
      self.clear(false);
    }
    updateValue(triggerChange);
    if (triggerChange) triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map(function (rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, undefined, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
        from: self.parseDate(rule.from, undefined),
        to: self.parseDate(rule.to, undefined)
      };
      return rule;
    }).filter(function (x) {
      return x;
    });
  }
  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self.input = getInputElem();
    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;
    if (self.config.altInput) {
      self.altInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }
    if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }
  function updatePositionElement() {
    self._positionElement = self.config.positionElement || self._input;
  }
  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }
    if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== undefined) self.altInput.type = "hidden";
    try {
      if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {}
    bind(self.mobileInput, "change", function (e) {
      self.setDate((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e) {
    if (self.isOpen === true) return self.close();
    self.open(e);
  }
  function triggerEvent(event, data) {
    if (self.config === undefined) return;
    var hooks = self.config[event];
    if (hooks !== undefined && hooks.length > 0) {
      for (var i = 0; hooks[i] && i < hooks.length; i++) hooks[i](self.selectedDates, self.input.value, self, data);
    }
    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    var e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }
  function isDateSelected(date) {
    for (var i = 0; i < self.selectedDates.length; i++) {
      var selectedDate = self.selectedDates[i];
      if (selectedDate instanceof Date && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, date) === 0) return "" + i;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
    return (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0]) >= 0 && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
    self.yearElements.forEach(function (yearElement, i) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }
      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }
  function getDateStr(specificFormat) {
    var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
    return self.selectedDates.map(function (dObj) {
      return self.formatDate(dObj, format);
    }).filter(function (d, i, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }
  function updateValue(triggerChange) {
    if (triggerChange === void 0) {
      triggerChange = true;
    }
    if (self.mobileInput !== undefined && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }
    self.input.value = getDateStr(self.config.dateFormat);
    if (self.altInput !== undefined) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }
    if (triggerChange !== false) triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }
  function timeWrapper(e) {
    e.preventDefault();
    var isKeyDown = e.type === "keydown",
      eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e),
      input = eventTarget;
    if (self.amPM !== undefined && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
    }
    var min = parseFloat(input.getAttribute("min")),
      max = parseFloat(input.getAttribute("max")),
      step = parseFloat(input.getAttribute("step")),
      curValue = parseInt(input.value, 10),
      delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement,
        isMinuteElem = input === self.minuteElement;
      if (newValue < min) {
        newValue = max + newValue + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!isHourElem) + ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(isHourElem) && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM));
        if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM) : min;
        if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
      }
      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
      }
      input.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(newValue);
    }
  }
  init();
  return self;
}
function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
    return x instanceof HTMLElement;
  });
  var instances = [];
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    try {
      if (node.getAttribute("data-fp-omit") !== null) continue;
      if (node._flatpickr !== undefined) {
        node._flatpickr.destroy();
        node._flatpickr = undefined;
      }
      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
    return _flatpickr(this, config);
  };
  HTMLElement.prototype.flatpickr = function (config) {
    return _flatpickr([this], config);
  };
}
var flatpickr = function (selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
  default: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"])
};
flatpickr.localize = function (l10n) {
  flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function (config) {
  flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({});
flatpickr.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)({});
flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function (config) {
    return _flatpickr(this, config);
  };
}
Date.prototype.fp_incr = function (days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatpickr);

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/l10n/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   english: () => (/* binding */ english)
/* harmony export */ });
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  months: {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function (nth) {
    var s = nth % 100;
    if (s > 3 && s < 21) return "th";
    switch (s % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (english);

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/types/options.js":
/*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HOOKS: () => (/* binding */ HOOKS),
/* harmony export */   defaults: () => (/* binding */ defaults)
/* harmony export */ });
var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function (err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function (givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: undefined,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dates.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateSecondsSinceMidnight: () => (/* binding */ calculateSecondsSinceMidnight),
/* harmony export */   compareDates: () => (/* binding */ compareDates),
/* harmony export */   compareTimes: () => (/* binding */ compareTimes),
/* harmony export */   createDateFormatter: () => (/* binding */ createDateFormatter),
/* harmony export */   createDateParser: () => (/* binding */ createDateParser),
/* harmony export */   duration: () => (/* binding */ duration),
/* harmony export */   getDefaultHours: () => (/* binding */ getDefaultHours),
/* harmony export */   isBetween: () => (/* binding */ isBetween),
/* harmony export */   parseSeconds: () => (/* binding */ parseSeconds)
/* harmony export */ });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");



var createDateFormatter = function (_a) {
  var _b = _a.config,
    config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b,
    _c = _a.l10n,
    l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c,
    _d = _a.isMobile,
    isMobile = _d === void 0 ? false : _d;
  return function (dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;
    if (config.formatDate !== undefined && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }
    return frmt.split("").map(function (c, i, arr) {
      return _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c] && arr[i - 1] !== "\\" ? _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function (_a) {
  var _b = _a.config,
    config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b,
    _c = _a.l10n,
    l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c;
  return function (date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date) return undefined;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
      var format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults).dateFormat;
      var datestr = String(date).trim();
      if (datestr === "today") {
        parsedDate = new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = void 0,
          ops = [];
        for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
          var token = format[i];
          var isBackSlash = token === "\\";
          var escaped = format[i - 1] === "\\" || isBackSlash;
          if (_formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token] && !escaped) {
            regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token];
            var match = new RegExp(regexStr).exec(date);
            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: _formatting__WEBPACK_IMPORTED_MODULE_0__.revFormat[token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash) regexStr += ".";
        }
        parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
        ops.forEach(function (_a) {
          var fn = _a.fn,
            val = _a.val;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : undefined;
      }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return undefined;
    }
    if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === void 0) {
    timeless = true;
  }
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
  return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
}
var isBetween = function (ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function (secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600),
    minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 86400000
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;
  if (config.minDate !== undefined) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
  }
  if (config.maxDate !== undefined) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
  }
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearNode: () => (/* binding */ clearNode),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createNumberInput: () => (/* binding */ createNumberInput),
/* harmony export */   findParent: () => (/* binding */ findParent),
/* harmony export */   getEventTarget: () => (/* binding */ getEventTarget),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass)
/* harmony export */ });
function toggleClass(elem, className, bool) {
  if (bool === true) return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== undefined) e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
  return undefined;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"),
    numInput = createElement("input", "numInput " + inputClassName),
    arrowUp = createElement("span", "arrowUp"),
    arrowDown = createElement("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== undefined) for (var key in opts) numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error) {
    return event.target;
  }
}

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/formatting.js":
/*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formats: () => (/* binding */ formats),
/* harmony export */   monthToStr: () => (/* binding */ monthToStr),
/* harmony export */   revFormat: () => (/* binding */ revFormat),
/* harmony export */   tokenRegex: () => (/* binding */ tokenRegex)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");

var doNothing = function () {
  return undefined;
};
var monthToStr = function (monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function (dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function (dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function (dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function (dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function (dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function (dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function (_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1000);
  },
  W: function (dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function (dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function (_, ISODate) {
    return new Date(ISODate);
  },
  d: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function (dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function (dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function (dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function (dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function (dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function (_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function (dateObj, year) {
    dateObj.setFullYear(2000 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function (date) {
    return date.toISOString();
  },
  D: function (date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function (date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function (date, locale, options) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(formats.h(date, locale, options));
  },
  H: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getHours());
  },
  J: function (date, locale) {
    return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function (date, locale) {
    return locale.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(date.getHours() > 11)];
  },
  M: function (date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getSeconds());
  },
  U: function (date) {
    return date.getTime() / 1000;
  },
  W: function (date, _, options) {
    return options.getWeek(date);
  },
  Y: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getFullYear(), 4);
  },
  d: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getDate());
  },
  h: function (date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMinutes());
  },
  j: function (date) {
    return date.getDate();
  },
  l: function (date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMonth() + 1);
  },
  n: function (date) {
    return date.getMonth() + 1;
  },
  s: function (date) {
    return date.getSeconds();
  },
  u: function (date) {
    return date.getTime();
  },
  w: function (date) {
    return date.getDay();
  },
  y: function (date) {
    return String(date.getFullYear()).substring(2);
  }
};

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/index.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayify: () => (/* binding */ arrayify),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   int: () => (/* binding */ int),
/* harmony export */   pad: () => (/* binding */ pad)
/* harmony export */ });
var pad = function (number, length) {
  if (length === void 0) {
    length = 2;
  }
  return ("000" + number).slice(length * -1);
};
var int = function (bool) {
  return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
  var t;
  return function () {
    var _this = this;
    var args = arguments;
    clearTimeout(t);
    t = setTimeout(function () {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function (obj) {
  return obj instanceof Array ? obj : [obj];
};

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/polyfills.js":
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
/***/ (() => {

"use strict";


if (typeof Object.assign !== "function") {
  Object.assign = function (target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    var _loop_1 = function (source) {
      if (source) {
        Object.keys(source).forEach(function (key) {
          return target[key] = source[key];
        });
      }
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var source = args_1[_a];
      _loop_1(source);
    }
    return target;
  };
}

/***/ }),

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/docMan.js ***!
  \***********************/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var TodoItem = __webpack_require__(/*! ./todoItem.js */ "./src/todoItem.js");
var flatpickr = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");

// flatpickr("#place-flatpicker", {});

// Select DOM Elements of interest
newItemButton = document.querySelector("#new-item-button");

// Event listeners for DOM Elements
newItemButton.addEventListener('click', createTodoItem);

// Function to create a new todo item
function createTodoItem() {
  receivingElement = document.querySelector("#item-card");
  var defautTodoItem = TodoItem.apply(void 0, _toConsumableArray(Object.values({
    title: "Test Todo!",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    dueDate: new Date(),
    priority: 3
  })));

  // Create the main container div
  var itemCardDiv = document.createElement('div');
  itemCardDiv.className = '';
  itemCardDiv.id = 'item-card';

  // Create the form element
  var form = document.createElement('form');
  form.action = '#';
  form.className = 'flex flex-row align-start w-full';

  // Create the checkbox div
  var checkboxDiv = document.createElement('div');
  checkboxDiv.className = 'mr-4';
  checkboxDiv.id = 'checkbox-div';

  // Create the checkbox input
  var checkboxInput = document.createElement('input');
  checkboxInput.type = 'checkbox';
  checkboxInput.name = 'completed-status';
  checkboxInput.id = 'completed-status';
  checkboxInput.className = 'accent-gray-600';
  checkboxDiv.appendChild(checkboxInput);

  // Append the checkbox div to the form
  form.appendChild(checkboxDiv);

  // Create the middle info div
  var middleInfoDiv = document.createElement('div');
  middleInfoDiv.className = 'flex flex-col place-content-between w-full';
  middleInfoDiv.id = 'middle-info';

  // Create the title info div
  var titleInfoDiv = document.createElement('div');
  titleInfoDiv.className = 'flex flex-row place-content-between w-full';
  titleInfoDiv.id = 'title-info';

  // Create the title left div
  var titleLeftDiv = document.createElement('div');
  titleLeftDiv.className = 'flex place-content-between gap-2';
  titleLeftDiv.id = 'title-left';

  // Create the title input
  var titleInput = document.createElement('input');
  titleInput.id = 'title-input';
  titleInput.className = 'text-lg text-gray-800 bg-transparent font-medium w-full resize-none bg-none placeholder:text-gray-400 outline-0 focus:outline-none';
  titleInput.value = defautTodoItem.title;
  titleInput.autocomplete = 'off';
  titleLeftDiv.appendChild(titleInput);

  // Append the title left div to the title info div
  titleInfoDiv.appendChild(titleLeftDiv);

  // Create the title right div
  var titleRightDiv = document.createElement('div');
  titleRightDiv.className = 'flex place-content-between gap-4';
  titleRightDiv.id = 'title-right';

  // Create the priority markers div
  var priorityMarkersDiv = document.createElement('div');
  priorityMarkersDiv.className = 'flex flex-col gap-1 h-full w-2';
  priorityMarkersDiv.id = 'priority-markers';

  // Create the priority marker elements
  for (var i = 0; i < 3; i++) {
    var markerDiv = document.createElement('div');
    markerDiv.className = 'grow';
    markerDiv.id = "marker".concat(i + 1);
    markerDiv.classList.add("bg-".concat(i === 0 ? 'red' : i === 1 ? 'orange' : 'green', "-300"));
    priorityMarkersDiv.appendChild(markerDiv);
  }

  // Append the priority markers div to the title right div
  titleRightDiv.appendChild(priorityMarkersDiv);

  // Create the due time span element
  var dueTimeSpan = document.createElement('span');
  dueTimeSpan.className = 'flex px-2 py-1 grow-0 shrink-0 items-center text-xs leading-none bg-gray-300 text-gray-600 rounded-full gap-1';
  dueTimeSpan.innerHTML = "Due";

  // Create the time element within the due time span
  var timeElement = document.createElement('time');
  timeElement.className = 'text-gray-700 font-bold';
  timeElement.datetime = '2018-07-07T20:00:00';
  timeElement.textContent = defautTodoItem.dueDate.toLocaleDateString('en-au', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'utc'
  });
  dueTimeSpan.appendChild(timeElement);

  // Append the due time span to the title right div
  titleRightDiv.appendChild(dueTimeSpan);

  // Append the title right div to the title info div
  titleInfoDiv.appendChild(titleRightDiv);

  // Append the title info div to the middle info div
  middleInfoDiv.appendChild(titleInfoDiv);

  // Create the description info div
  var descInfoDiv = document.createElement('div');
  descInfoDiv.className = 'w-full pt-1';
  descInfoDiv.id = 'desc-info';

  // Create the description textarea
  var descTextarea = document.createElement('textarea');
  descTextarea.className = 'w-full resize-none bg-transparent text-gray-400 placeholder:text-gray-400 outline-0 focus:outline-none';
  descTextarea.name = 'decription';
  descTextarea.id = 'decription';
  descTextarea.placeholder = 'Optional notes...';
  descInfoDiv.appendChild(descTextarea);

  // Append the description info div to the middle info div
  middleInfoDiv.appendChild(descInfoDiv);

  // Append the middle info div to the form
  form.appendChild(middleInfoDiv);

  // Append the form to the main container div
  itemCardDiv.appendChild(form);

  // Append the receiving DOM element
  receivingElement.appendChild(itemCardDiv);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNzZSxXQUFXLENBQUM7O0VBRXRDO0VBQ0FQLFlBQVksQ0FBQy9kLFdBQVcsQ0FBQ21lLGFBQWEsQ0FBQzs7RUFFdkM7RUFDQUwsYUFBYSxDQUFDOWQsV0FBVyxDQUFDK2QsWUFBWSxDQUFDOztFQUV2QztFQUNBLElBQU1ZLFdBQVcsR0FBRzVtQixRQUFRLENBQUNwRixhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2pEZ3NCLFdBQVcsQ0FBQ3pmLFNBQVMsR0FBRyxhQUFhO0VBQ3JDeWYsV0FBVyxDQUFDckMsRUFBRSxHQUFHLFdBQVc7O0VBRTVCO0VBQ0EsSUFBTXNDLFlBQVksR0FBRzdtQixRQUFRLENBQUNwRixhQUFhLENBQUMsVUFBVSxDQUFDO0VBQ3ZEaXNCLFlBQVksQ0FBQzFmLFNBQVMsR0FBRyx3R0FBd0c7RUFDakkwZixZQUFZLENBQUNuTCxJQUFJLEdBQUcsWUFBWTtFQUNoQ21MLFlBQVksQ0FBQ3RDLEVBQUUsR0FBRyxZQUFZO0VBQzlCc0MsWUFBWSxDQUFDNUwsV0FBVyxHQUFHLG1CQUFtQjtFQUM5QzJMLFdBQVcsQ0FBQzNlLFdBQVcsQ0FBQzRlLFlBQVksQ0FBQzs7RUFFckM7RUFDQWQsYUFBYSxDQUFDOWQsV0FBVyxDQUFDMmUsV0FBVyxDQUFDOztFQUV0QztFQUNBakIsSUFBSSxDQUFDMWQsV0FBVyxDQUFDOGQsYUFBYSxDQUFDOztFQUUvQjtFQUNBTCxXQUFXLENBQUN6ZCxXQUFXLENBQUMwZCxJQUFJLENBQUM7O0VBRTdCO0VBQ0FMLGdCQUFnQixDQUFDcmQsV0FBVyxDQUFDeWQsV0FBVyxDQUFDO0FBQzdDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9lc20vbDEwbi9kZWZhdWx0LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9lc20vdHlwZXMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3V0aWxzL2RhdGVzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9lc20vdXRpbHMvZG9tLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9lc20vdXRpbHMvZm9ybWF0dGluZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9lc20vdXRpbHMvcG9seWZpbGxzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy90b2RvSXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY01hbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5pbXBvcnQgeyBkZWZhdWx0cyBhcyBkZWZhdWx0T3B0aW9ucywgSE9PS1MsIH0gZnJvbSBcIi4vdHlwZXMvb3B0aW9uc1wiO1xuaW1wb3J0IEVuZ2xpc2ggZnJvbSBcIi4vbDEwbi9kZWZhdWx0XCI7XG5pbXBvcnQgeyBhcnJheWlmeSwgZGVib3VuY2UsIGludCwgcGFkIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IGNsZWFyTm9kZSwgY3JlYXRlRWxlbWVudCwgY3JlYXRlTnVtYmVySW5wdXQsIGZpbmRQYXJlbnQsIHRvZ2dsZUNsYXNzLCBnZXRFdmVudFRhcmdldCwgfSBmcm9tIFwiLi91dGlscy9kb21cIjtcbmltcG9ydCB7IGNvbXBhcmVEYXRlcywgY3JlYXRlRGF0ZVBhcnNlciwgY3JlYXRlRGF0ZUZvcm1hdHRlciwgZHVyYXRpb24sIGlzQmV0d2VlbiwgZ2V0RGVmYXVsdEhvdXJzLCBjYWxjdWxhdGVTZWNvbmRzU2luY2VNaWRuaWdodCwgcGFyc2VTZWNvbmRzLCB9IGZyb20gXCIuL3V0aWxzL2RhdGVzXCI7XG5pbXBvcnQgeyB0b2tlblJlZ2V4LCBtb250aFRvU3RyIH0gZnJvbSBcIi4vdXRpbHMvZm9ybWF0dGluZ1wiO1xuaW1wb3J0IFwiLi91dGlscy9wb2x5ZmlsbHNcIjtcbnZhciBERUJPVU5DRURfQ0hBTkdFX01TID0gMzAwO1xuZnVuY3Rpb24gRmxhdHBpY2tySW5zdGFuY2UoZWxlbWVudCwgaW5zdGFuY2VDb25maWcpIHtcbiAgICB2YXIgc2VsZiA9IHtcbiAgICAgICAgY29uZmlnOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBmbGF0cGlja3IuZGVmYXVsdENvbmZpZyksXG4gICAgICAgIGwxMG46IEVuZ2xpc2gsXG4gICAgfTtcbiAgICBzZWxmLnBhcnNlRGF0ZSA9IGNyZWF0ZURhdGVQYXJzZXIoeyBjb25maWc6IHNlbGYuY29uZmlnLCBsMTBuOiBzZWxmLmwxMG4gfSk7XG4gICAgc2VsZi5faGFuZGxlcnMgPSBbXTtcbiAgICBzZWxmLnBsdWdpbkVsZW1lbnRzID0gW107XG4gICAgc2VsZi5sb2FkZWRQbHVnaW5zID0gW107XG4gICAgc2VsZi5fYmluZCA9IGJpbmQ7XG4gICAgc2VsZi5fc2V0SG91cnNGcm9tRGF0ZSA9IHNldEhvdXJzRnJvbURhdGU7XG4gICAgc2VsZi5fcG9zaXRpb25DYWxlbmRhciA9IHBvc2l0aW9uQ2FsZW5kYXI7XG4gICAgc2VsZi5jaGFuZ2VNb250aCA9IGNoYW5nZU1vbnRoO1xuICAgIHNlbGYuY2hhbmdlWWVhciA9IGNoYW5nZVllYXI7XG4gICAgc2VsZi5jbGVhciA9IGNsZWFyO1xuICAgIHNlbGYuY2xvc2UgPSBjbG9zZTtcbiAgICBzZWxmLm9uTW91c2VPdmVyID0gb25Nb3VzZU92ZXI7XG4gICAgc2VsZi5fY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG4gICAgc2VsZi5jcmVhdGVEYXkgPSBjcmVhdGVEYXk7XG4gICAgc2VsZi5kZXN0cm95ID0gZGVzdHJveTtcbiAgICBzZWxmLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBzZWxmLmp1bXBUb0RhdGUgPSBqdW1wVG9EYXRlO1xuICAgIHNlbGYudXBkYXRlVmFsdWUgPSB1cGRhdGVWYWx1ZTtcbiAgICBzZWxmLm9wZW4gPSBvcGVuO1xuICAgIHNlbGYucmVkcmF3ID0gcmVkcmF3O1xuICAgIHNlbGYuc2V0ID0gc2V0O1xuICAgIHNlbGYuc2V0RGF0ZSA9IHNldERhdGU7XG4gICAgc2VsZi50b2dnbGUgPSB0b2dnbGU7XG4gICAgZnVuY3Rpb24gc2V0dXBIZWxwZXJGdW5jdGlvbnMoKSB7XG4gICAgICAgIHNlbGYudXRpbHMgPSB7XG4gICAgICAgICAgICBnZXREYXlzSW5Nb250aDogZnVuY3Rpb24gKG1vbnRoLCB5cikge1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gdm9pZCAwKSB7IG1vbnRoID0gc2VsZi5jdXJyZW50TW9udGg7IH1cbiAgICAgICAgICAgICAgICBpZiAoeXIgPT09IHZvaWQgMCkgeyB5ciA9IHNlbGYuY3VycmVudFllYXI7IH1cbiAgICAgICAgICAgICAgICBpZiAobW9udGggPT09IDEgJiYgKCh5ciAlIDQgPT09IDAgJiYgeXIgJSAxMDAgIT09IDApIHx8IHlyICUgNDAwID09PSAwKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI5O1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmwxMG4uZGF5c0luTW9udGhbbW9udGhdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgc2VsZi5lbGVtZW50ID0gc2VsZi5pbnB1dCA9IGVsZW1lbnQ7XG4gICAgICAgIHNlbGYuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHBhcnNlQ29uZmlnKCk7XG4gICAgICAgIHNldHVwTG9jYWxlKCk7XG4gICAgICAgIHNldHVwSW5wdXRzKCk7XG4gICAgICAgIHNldHVwRGF0ZXMoKTtcbiAgICAgICAgc2V0dXBIZWxwZXJGdW5jdGlvbnMoKTtcbiAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlKVxuICAgICAgICAgICAgYnVpbGQoKTtcbiAgICAgICAgYmluZEV2ZW50cygpO1xuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCB8fCBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xuICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbURhdGUoc2VsZi5jb25maWcubm9DYWxlbmRhciA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRDYWxlbmRhcldpZHRoKCk7XG4gICAgICAgIHZhciBpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIGlmICghc2VsZi5pc01vYmlsZSAmJiBpc1NhZmFyaSkge1xuICAgICAgICAgICAgcG9zaXRpb25DYWxlbmRhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uUmVhZHlcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RBY3RpdmVFbGVtZW50KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoKChfYSA9IHNlbGYuY2FsZW5kYXJDb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRSb290Tm9kZSgpKVxuICAgICAgICAgICAgLmFjdGl2ZUVsZW1lbnQgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJpbmRUb0luc3RhbmNlKGZuKSB7XG4gICAgICAgIHJldHVybiBmbi5iaW5kKHNlbGYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRDYWxlbmRhcldpZHRoKCkge1xuICAgICAgICB2YXIgY29uZmlnID0gc2VsZi5jb25maWc7XG4gICAgICAgIGlmIChjb25maWcud2Vla051bWJlcnMgPT09IGZhbHNlICYmIGNvbmZpZy5zaG93TW9udGhzID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29uZmlnLm5vQ2FsZW5kYXIgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRheXNXaWR0aCA9IChzZWxmLmRheXMub2Zmc2V0V2lkdGggKyAxKSAqIGNvbmZpZy5zaG93TW9udGhzO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuc3R5bGUud2lkdGggPSBkYXlzV2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUud2lkdGggPVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c1dpZHRoICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZi53ZWVrV3JhcHBlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi53ZWVrV3JhcHBlci5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ2aXNpYmlsaXR5XCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lKGUpIHtcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0RGF0ZSA9IHNlbGYuY29uZmlnLm1pbkRhdGUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhuZXcgRGF0ZSgpLCBzZWxmLmNvbmZpZy5taW5EYXRlKSA+PSAwXG4gICAgICAgICAgICAgICAgPyBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgOiBuZXcgRGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdHMgPSBnZXREZWZhdWx0SG91cnMoc2VsZi5jb25maWcpO1xuICAgICAgICAgICAgZGVmYXVsdERhdGUuc2V0SG91cnMoZGVmYXVsdHMuaG91cnMsIGRlZmF1bHRzLm1pbnV0ZXMsIGRlZmF1bHRzLnNlY29uZHMsIGRlZmF1bHREYXRlLmdldE1pbGxpc2Vjb25kcygpKTtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtkZWZhdWx0RGF0ZV07XG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IGRlZmF1bHREYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlICE9PSB1bmRlZmluZWQgJiYgZS50eXBlICE9PSBcImJsdXJcIikge1xuICAgICAgICAgICAgdGltZVdyYXBwZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZWYWx1ZSA9IHNlbGYuX2lucHV0LnZhbHVlO1xuICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcbiAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgaWYgKHNlbGYuX2lucHV0LnZhbHVlICE9PSBwcmV2VmFsdWUpIHtcbiAgICAgICAgICAgIHNlbGYuX2RlYm91bmNlZENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFtcG0ybWlsaXRhcnkoaG91ciwgYW1QTSkge1xuICAgICAgICByZXR1cm4gKGhvdXIgJSAxMikgKyAxMiAqIGludChhbVBNID09PSBzZWxmLmwxMG4uYW1QTVsxXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1pbGl0YXJ5MmFtcG0oaG91cikge1xuICAgICAgICBzd2l0Y2ggKGhvdXIgJSAyNCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBob3VyICUgMTI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0SG91cnNGcm9tSW5wdXRzKCkge1xuICAgICAgICBpZiAoc2VsZi5ob3VyRWxlbWVudCA9PT0gdW5kZWZpbmVkIHx8IHNlbGYubWludXRlRWxlbWVudCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgaG91cnMgPSAocGFyc2VJbnQoc2VsZi5ob3VyRWxlbWVudC52YWx1ZS5zbGljZSgtMiksIDEwKSB8fCAwKSAlIDI0LCBtaW51dGVzID0gKHBhcnNlSW50KHNlbGYubWludXRlRWxlbWVudC52YWx1ZSwgMTApIHx8IDApICUgNjAsIHNlY29uZHMgPSBzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAocGFyc2VJbnQoc2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlLCAxMCkgfHwgMCkgJSA2MFxuICAgICAgICAgICAgOiAwO1xuICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhvdXJzID0gYW1wbTJtaWxpdGFyeShob3Vycywgc2VsZi5hbVBNLnRleHRDb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGltaXRNaW5Ib3VycyA9IHNlbGYuY29uZmlnLm1pblRpbWUgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgICAgICBzZWxmLm1pbkRhdGVIYXNUaW1lICYmXG4gICAgICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogJiZcbiAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmosIHNlbGYuY29uZmlnLm1pbkRhdGUsIHRydWUpID09PVxuICAgICAgICAgICAgICAgICAgICAwKTtcbiAgICAgICAgdmFyIGxpbWl0TWF4SG91cnMgPSBzZWxmLmNvbmZpZy5tYXhUaW1lICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmXG4gICAgICAgICAgICAgICAgc2VsZi5tYXhEYXRlSGFzVGltZSAmJlxuICAgICAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICYmXG4gICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLmNvbmZpZy5tYXhEYXRlLCB0cnVlKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgMCk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhUaW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pblRpbWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgc2VsZi5jb25maWcubWluVGltZSA+IHNlbGYuY29uZmlnLm1heFRpbWUpIHtcbiAgICAgICAgICAgIHZhciBtaW5Cb3VuZCA9IGNhbGN1bGF0ZVNlY29uZHNTaW5jZU1pZG5pZ2h0KHNlbGYuY29uZmlnLm1pblRpbWUuZ2V0SG91cnMoKSwgc2VsZi5jb25maWcubWluVGltZS5nZXRNaW51dGVzKCksIHNlbGYuY29uZmlnLm1pblRpbWUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgICAgIHZhciBtYXhCb3VuZCA9IGNhbGN1bGF0ZVNlY29uZHNTaW5jZU1pZG5pZ2h0KHNlbGYuY29uZmlnLm1heFRpbWUuZ2V0SG91cnMoKSwgc2VsZi5jb25maWcubWF4VGltZS5nZXRNaW51dGVzKCksIHNlbGYuY29uZmlnLm1heFRpbWUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IGNhbGN1bGF0ZVNlY29uZHNTaW5jZU1pZG5pZ2h0KGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA+IG1heEJvdW5kICYmIGN1cnJlbnRUaW1lIDwgbWluQm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcGFyc2VTZWNvbmRzKG1pbkJvdW5kKTtcbiAgICAgICAgICAgICAgICBob3VycyA9IHJlc3VsdFswXTtcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gcmVzdWx0WzFdO1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSByZXN1bHRbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobGltaXRNYXhIb3Vycykge1xuICAgICAgICAgICAgICAgIHZhciBtYXhUaW1lID0gc2VsZi5jb25maWcubWF4VGltZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4VGltZVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1heERhdGU7XG4gICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1pbihob3VycywgbWF4VGltZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICBpZiAoaG91cnMgPT09IG1heFRpbWUuZ2V0SG91cnMoKSlcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGgubWluKG1pbnV0ZXMsIG1heFRpbWUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRlcyA9PT0gbWF4VGltZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLm1pbihzZWNvbmRzLCBtYXhUaW1lLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGltaXRNaW5Ib3Vycykge1xuICAgICAgICAgICAgICAgIHZhciBtaW5UaW1lID0gc2VsZi5jb25maWcubWluVGltZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWluVGltZVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1pbkRhdGU7XG4gICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1heChob3VycywgbWluVGltZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICBpZiAoaG91cnMgPT09IG1pblRpbWUuZ2V0SG91cnMoKSAmJiBtaW51dGVzIDwgbWluVGltZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBtaW5UaW1lLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRlcyA9PT0gbWluVGltZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLm1heChzZWNvbmRzLCBtaW5UaW1lLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopIHtcbiAgICAgICAgdmFyIGRhdGUgPSBkYXRlT2JqIHx8IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqO1xuICAgICAgICBpZiAoZGF0ZSAmJiBkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gICAgICAgIGlmIChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5zZXRIb3Vycyhob3VycyAlIDI0LCBtaW51dGVzLCBzZWNvbmRzIHx8IDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2VsZi5ob3VyRWxlbWVudCB8fCAhc2VsZi5taW51dGVFbGVtZW50IHx8IHNlbGYuaXNNb2JpbGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBwYWQoIXNlbGYuY29uZmlnLnRpbWVfMjRoclxuICAgICAgICAgICAgPyAoKDEyICsgaG91cnMpICUgMTIpICsgMTIgKiBpbnQoaG91cnMgJSAxMiA9PT0gMClcbiAgICAgICAgICAgIDogaG91cnMpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBwYWQobWludXRlcyk7XG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYubDEwbi5hbVBNW2ludChob3VycyA+PSAxMildO1xuICAgICAgICBpZiAoc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUgPSBwYWQoc2Vjb25kcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uWWVhcklucHV0KGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGV2ZW50KTtcbiAgICAgICAgdmFyIHllYXIgPSBwYXJzZUludChldmVudFRhcmdldC52YWx1ZSkgKyAoZXZlbnQuZGVsdGEgfHwgMCk7XG4gICAgICAgIGlmICh5ZWFyIC8gMTAwMCA+IDEgfHxcbiAgICAgICAgICAgIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiAhL1teXFxkXS8udGVzdCh5ZWFyLnRvU3RyaW5nKCkpKSkge1xuICAgICAgICAgICAgY2hhbmdlWWVhcih5ZWFyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBiaW5kKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmZvckVhY2goZnVuY3Rpb24gKGV2KSB7IHJldHVybiBiaW5kKGVsZW1lbnQsIGV2LCBoYW5kbGVyLCBvcHRpb25zKTsgfSk7XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gYmluZChlbCwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpOyB9KTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgc2VsZi5faGFuZGxlcnMucHVzaCh7XG4gICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7IH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmlnZ2VyQ2hhbmdlKCkge1xuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLndyYXApIHtcbiAgICAgICAgICAgIFtcIm9wZW5cIiwgXCJjbG9zZVwiLCBcInRvZ2dsZVwiLCBcImNsZWFyXCJdLmZvckVhY2goZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1cIiArIGV2dCArIFwiXVwiKSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5kKGVsLCBcImNsaWNrXCIsIHNlbGZbZXZ0XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5pc01vYmlsZSkge1xuICAgICAgICAgICAgc2V0dXBNb2JpbGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVib3VuY2VkUmVzaXplID0gZGVib3VuY2Uob25SZXNpemUsIDUwKTtcbiAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlID0gZGVib3VuY2UodHJpZ2dlckNoYW5nZSwgREVCT1VOQ0VEX0NIQU5HRV9NUyk7XG4gICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgJiYgIS9pUGhvbmV8aVBhZHxpUG9kL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSlcbiAgICAgICAgICAgIGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyKGdldEV2ZW50VGFyZ2V0KGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICAgICAgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYmluZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmlubGluZSAmJiAhc2VsZi5jb25maWcuc3RhdGljKVxuICAgICAgICAgICAgYmluZCh3aW5kb3csIFwicmVzaXplXCIsIGRlYm91bmNlZFJlc2l6ZSk7XG4gICAgICAgIGlmICh3aW5kb3cub250b3VjaHN0YXJ0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudCwgXCJ0b3VjaHN0YXJ0XCIsIGRvY3VtZW50Q2xpY2spO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudCwgXCJtb3VzZWRvd25cIiwgZG9jdW1lbnRDbGljayk7XG4gICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LCBcImZvY3VzXCIsIGRvY3VtZW50Q2xpY2ssIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmNsaWNrT3BlbnMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwiZm9jdXNcIiwgc2VsZi5vcGVuKTtcbiAgICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwiY2xpY2tcIiwgc2VsZi5vcGVuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aE5hdiwgXCJjbGlja1wiLCBvbk1vbnRoTmF2Q2xpY2spO1xuICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBbXCJrZXl1cFwiLCBcImluY3JlbWVudFwiXSwgb25ZZWFySW5wdXQpO1xuICAgICAgICAgICAgYmluZChzZWxmLmRheXNDb250YWluZXIsIFwiY2xpY2tcIiwgc2VsZWN0RGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYudGltZUNvbnRhaW5lciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgc2VsVGV4dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEV2ZW50VGFyZ2V0KGUpLnNlbGVjdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBbXCJpbmNyZW1lbnRcIl0sIHVwZGF0ZVRpbWUpO1xuICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFwiYmx1clwiLCB1cGRhdGVUaW1lLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgICAgICAgICBiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgXCJjbGlja1wiLCB0aW1lSW5jcmVtZW50KTtcbiAgICAgICAgICAgIGJpbmQoW3NlbGYuaG91ckVsZW1lbnQsIHNlbGYubWludXRlRWxlbWVudF0sIFtcImZvY3VzXCIsIFwiY2xpY2tcIl0sIHNlbFRleHQpO1xuICAgICAgICAgICAgaWYgKHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5zZWNvbmRFbGVtZW50LCBcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuc2Vjb25kRWxlbWVudCAmJiBzZWxmLnNlY29uZEVsZW1lbnQuc2VsZWN0KCk7IH0pO1xuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYmluZChzZWxmLmFtUE0sIFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZShlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jb25maWcuYWxsb3dJbnB1dCkge1xuICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJibHVyXCIsIG9uQmx1cik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24ganVtcFRvRGF0ZShqdW1wRGF0ZSwgdHJpZ2dlckNoYW5nZSkge1xuICAgICAgICB2YXIganVtcFRvID0ganVtcERhdGUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBzZWxmLnBhcnNlRGF0ZShqdW1wRGF0ZSlcbiAgICAgICAgICAgIDogc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogfHxcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZSAmJiBzZWxmLmNvbmZpZy5taW5EYXRlID4gc2VsZi5ub3dcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5taW5EYXRlXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWF4RGF0ZSAmJiBzZWxmLmNvbmZpZy5tYXhEYXRlIDwgc2VsZi5ub3dcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLm5vdyk7XG4gICAgICAgIHZhciBvbGRZZWFyID0gc2VsZi5jdXJyZW50WWVhcjtcbiAgICAgICAgdmFyIG9sZE1vbnRoID0gc2VsZi5jdXJyZW50TW9udGg7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoanVtcFRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0ganVtcFRvLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBqdW1wVG8uZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZS5tZXNzYWdlID0gXCJJbnZhbGlkIGRhdGUgc3VwcGxpZWQ6IFwiICsganVtcFRvO1xuICAgICAgICAgICAgc2VsZi5jb25maWcuZXJyb3JIYW5kbGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlICYmIHNlbGYuY3VycmVudFllYXIgIT09IG9sZFllYXIpIHtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uWWVhckNoYW5nZVwiKTtcbiAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSAmJlxuICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgIT09IG9sZFllYXIgfHwgc2VsZi5jdXJyZW50TW9udGggIT09IG9sZE1vbnRoKSkge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0aW1lSW5jcmVtZW50KGUpIHtcbiAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZ2V0RXZlbnRUYXJnZXQoZSk7XG4gICAgICAgIGlmICh+ZXZlbnRUYXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoXCJhcnJvd1wiKSlcbiAgICAgICAgICAgIGluY3JlbWVudE51bUlucHV0KGUsIGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFycm93VXBcIikgPyAxIDogLTEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbmNyZW1lbnROdW1JbnB1dChlLCBkZWx0YSwgaW5wdXRFbGVtKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlICYmIGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICB2YXIgaW5wdXQgPSBpbnB1dEVsZW0gfHxcbiAgICAgICAgICAgICh0YXJnZXQgJiYgdGFyZ2V0LnBhcmVudE5vZGUgJiYgdGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIHZhciBldmVudCA9IGNyZWF0ZUV2ZW50KFwiaW5jcmVtZW50XCIpO1xuICAgICAgICBldmVudC5kZWx0YSA9IGRlbHRhO1xuICAgICAgICBpbnB1dCAmJiBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGQoKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWNhbGVuZGFyXCIpO1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIGlmICghc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRNb250aE5hdigpKTtcbiAgICAgICAgICAgIHNlbGYuaW5uZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLndlZWtOdW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gYnVpbGRXZWVrcygpLCB3ZWVrV3JhcHBlciA9IF9hLndlZWtXcmFwcGVyLCB3ZWVrTnVtYmVycyA9IF9hLndlZWtOdW1iZXJzO1xuICAgICAgICAgICAgICAgIHNlbGYuaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2Vla1dyYXBwZXIpO1xuICAgICAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMgPSB3ZWVrTnVtYmVycztcbiAgICAgICAgICAgICAgICBzZWxmLndlZWtXcmFwcGVyID0gd2Vla1dyYXBwZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXJDb250YWluZXJcIik7XG4gICAgICAgICAgICBzZWxmLnJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRXZWVrZGF5cygpKTtcbiAgICAgICAgICAgIGlmICghc2VsZi5kYXlzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1kYXlzXCIpO1xuICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVpbGREYXlzKCk7XG4gICAgICAgICAgICBzZWxmLnJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5kYXlzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHNlbGYuaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5yQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuaW5uZXJDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZFRpbWUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyYW5nZU1vZGVcIiwgc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhbmltYXRlXCIsIHNlbGYuY29uZmlnLmFuaW1hdGUgPT09IHRydWUpO1xuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcIm11bHRpTW9udGhcIiwgc2VsZi5jb25maWcuc2hvd01vbnRocyA+IDEpO1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgdmFyIGN1c3RvbUFwcGVuZCA9IHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmFwcGVuZFRvLm5vZGVUeXBlICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUgfHwgc2VsZi5jb25maWcuc3RhdGljKSB7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuaW5saW5lID8gXCJpbmxpbmVcIiA6IFwic3RhdGljXCIpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmlubGluZSkge1xuICAgICAgICAgICAgICAgIGlmICghY3VzdG9tQXBwZW5kICYmIHNlbGYuZWxlbWVudC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgc2VsZi5faW5wdXQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmFwcGVuZFRvLmFwcGVuZENoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN0YXRpYykge1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13cmFwcGVyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHNlbGYuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmFsdElucHV0KVxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuYWx0SW5wdXQpO1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgIXNlbGYuY29uZmlnLmlubGluZSlcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hcHBlbmRUb1xuICAgICAgICAgICAgICAgIDogd2luZG93LmRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVEYXkoY2xhc3NOYW1lLCBkYXRlLCBfZGF5TnVtYmVyLCBpKSB7XG4gICAgICAgIHZhciBkYXRlSXNFbmFibGVkID0gaXNFbmFibGVkKGRhdGUsIHRydWUpLCBkYXlFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgY2xhc3NOYW1lLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcbiAgICAgICAgZGF5RWxlbWVudC5kYXRlT2JqID0gZGF0ZTtcbiAgICAgICAgZGF5RWxlbWVudC4kaSA9IGk7XG4gICAgICAgIGRheUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBzZWxmLmZvcm1hdERhdGUoZGF0ZSwgc2VsZi5jb25maWcuYXJpYURhdGVGb3JtYXQpKTtcbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpID09PSAtMSAmJlxuICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYubm93KSA9PT0gMCkge1xuICAgICAgICAgICAgc2VsZi50b2RheURhdGVFbGVtID0gZGF5RWxlbWVudDtcbiAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xuICAgICAgICAgICAgZGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJkYXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlSXNFbmFibGVkKSB7XG4gICAgICAgICAgICBkYXlFbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICBpZiAoaXNEYXRlU2VsZWN0ZWQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSBkYXlFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoZGF5RWxlbWVudCwgXCJzdGFydFJhbmdlXCIsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdHJ1ZSkgPT09IDApO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhkYXlFbGVtZW50LCBcImVuZFJhbmdlXCIsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSwgdHJ1ZSkgPT09IDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSBcIm5leHRNb250aERheVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgaWYgKGlzRGF0ZUluUmFuZ2UoZGF0ZSkgJiYgIWlzRGF0ZVNlbGVjdGVkKGRhdGUpKVxuICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYud2Vla051bWJlcnMgJiZcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLnNob3dNb250aHMgPT09IDEgJiZcbiAgICAgICAgICAgIGNsYXNzTmFtZSAhPT0gXCJwcmV2TW9udGhEYXlcIiAmJlxuICAgICAgICAgICAgaSAlIDcgPT09IDYpIHtcbiAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFwiPHNwYW4gY2xhc3M9J2ZsYXRwaWNrci1kYXknPlwiICsgc2VsZi5jb25maWcuZ2V0V2VlayhkYXRlKSArIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkRheUNyZWF0ZVwiLCBkYXlFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGRheUVsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvY3VzT25EYXlFbGVtKHRhcmdldE5vZGUpIHtcbiAgICAgICAgdGFyZ2V0Tm9kZS5mb2N1cygpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKVxuICAgICAgICAgICAgb25Nb3VzZU92ZXIodGFyZ2V0Tm9kZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEZpcnN0QXZhaWxhYmxlRGF5KGRlbHRhKSB7XG4gICAgICAgIHZhciBzdGFydE1vbnRoID0gZGVsdGEgPiAwID8gMCA6IHNlbGYuY29uZmlnLnNob3dNb250aHMgLSAxO1xuICAgICAgICB2YXIgZW5kTW9udGggPSBkZWx0YSA+IDAgPyBzZWxmLmNvbmZpZy5zaG93TW9udGhzIDogLTE7XG4gICAgICAgIGZvciAodmFyIG0gPSBzdGFydE1vbnRoOyBtICE9IGVuZE1vbnRoOyBtICs9IGRlbHRhKSB7XG4gICAgICAgICAgICB2YXIgbW9udGggPSBzZWxmLmRheXNDb250YWluZXIuY2hpbGRyZW5bbV07XG4gICAgICAgICAgICB2YXIgc3RhcnRJbmRleCA9IGRlbHRhID4gMCA/IDAgOiBtb250aC5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdmFyIGVuZEluZGV4ID0gZGVsdGEgPiAwID8gbW9udGguY2hpbGRyZW4ubGVuZ3RoIDogLTE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSAhPSBlbmRJbmRleDsgaSArPSBkZWx0YSkge1xuICAgICAgICAgICAgICAgIHZhciBjID0gbW9udGguY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgaWYgKGMuY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmIGlzRW5hYmxlZChjLmRhdGVPYmopKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXROZXh0QXZhaWxhYmxlRGF5KGN1cnJlbnQsIGRlbHRhKSB7XG4gICAgICAgIHZhciBnaXZlbk1vbnRoID0gY3VycmVudC5jbGFzc05hbWUuaW5kZXhPZihcIk1vbnRoXCIpID09PSAtMVxuICAgICAgICAgICAgPyBjdXJyZW50LmRhdGVPYmouZ2V0TW9udGgoKVxuICAgICAgICAgICAgOiBzZWxmLmN1cnJlbnRNb250aDtcbiAgICAgICAgdmFyIGVuZE1vbnRoID0gZGVsdGEgPiAwID8gc2VsZi5jb25maWcuc2hvd01vbnRocyA6IC0xO1xuICAgICAgICB2YXIgbG9vcERlbHRhID0gZGVsdGEgPiAwID8gMSA6IC0xO1xuICAgICAgICBmb3IgKHZhciBtID0gZ2l2ZW5Nb250aCAtIHNlbGYuY3VycmVudE1vbnRoOyBtICE9IGVuZE1vbnRoOyBtICs9IGxvb3BEZWx0YSkge1xuICAgICAgICAgICAgdmFyIG1vbnRoID0gc2VsZi5kYXlzQ29udGFpbmVyLmNoaWxkcmVuW21dO1xuICAgICAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSBnaXZlbk1vbnRoIC0gc2VsZi5jdXJyZW50TW9udGggPT09IG1cbiAgICAgICAgICAgICAgICA/IGN1cnJlbnQuJGkgKyBkZWx0YVxuICAgICAgICAgICAgICAgIDogZGVsdGEgPCAwXG4gICAgICAgICAgICAgICAgICAgID8gbW9udGguY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICB2YXIgbnVtTW9udGhEYXlzID0gbW9udGguY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPj0gMCAmJiBpIDwgbnVtTW9udGhEYXlzICYmIGkgIT0gKGRlbHRhID4gMCA/IG51bU1vbnRoRGF5cyA6IC0xKTsgaSArPSBsb29wRGVsdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IG1vbnRoLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmIChjLmNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQoYy5kYXRlT2JqKSAmJlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhjdXJyZW50LiRpIC0gaSkgPj0gTWF0aC5hYnMoZGVsdGEpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9jdXNPbkRheUVsZW0oYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5jaGFuZ2VNb250aChsb29wRGVsdGEpO1xuICAgICAgICBmb2N1c09uRGF5KGdldEZpcnN0QXZhaWxhYmxlRGF5KGxvb3BEZWx0YSksIDApO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb2N1c09uRGF5KGN1cnJlbnQsIG9mZnNldCkge1xuICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGdldENsb3Nlc3RBY3RpdmVFbGVtZW50KCk7XG4gICAgICAgIHZhciBkYXlGb2N1c2VkID0gaXNJblZpZXcoYWN0aXZlRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgdmFyIHN0YXJ0RWxlbSA9IGN1cnJlbnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBjdXJyZW50XG4gICAgICAgICAgICA6IGRheUZvY3VzZWRcbiAgICAgICAgICAgICAgICA/IGFjdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgICAgICA6IHNlbGYuc2VsZWN0ZWREYXRlRWxlbSAhPT0gdW5kZWZpbmVkICYmIGlzSW5WaWV3KHNlbGYuc2VsZWN0ZWREYXRlRWxlbSlcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLnNlbGVjdGVkRGF0ZUVsZW1cbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLnRvZGF5RGF0ZUVsZW0gIT09IHVuZGVmaW5lZCAmJiBpc0luVmlldyhzZWxmLnRvZGF5RGF0ZUVsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYudG9kYXlEYXRlRWxlbVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBnZXRGaXJzdEF2YWlsYWJsZURheShvZmZzZXQgPiAwID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKHN0YXJ0RWxlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZWxmLl9pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFkYXlGb2N1c2VkKSB7XG4gICAgICAgICAgICBmb2N1c09uRGF5RWxlbShzdGFydEVsZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2V0TmV4dEF2YWlsYWJsZURheShzdGFydEVsZW0sIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGRNb250aERheXMoeWVhciwgbW9udGgpIHtcbiAgICAgICAgdmFyIGZpcnN0T2ZNb250aCA9IChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkuZ2V0RGF5KCkgLSBzZWxmLmwxMG4uZmlyc3REYXlPZldlZWsgKyA3KSAlIDc7XG4gICAgICAgIHZhciBwcmV2TW9udGhEYXlzID0gc2VsZi51dGlscy5nZXREYXlzSW5Nb250aCgobW9udGggLSAxICsgMTIpICUgMTIsIHllYXIpO1xuICAgICAgICB2YXIgZGF5c0luTW9udGggPSBzZWxmLnV0aWxzLmdldERheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKSwgZGF5cyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIGlzTXVsdGlNb250aCA9IHNlbGYuY29uZmlnLnNob3dNb250aHMgPiAxLCBwcmV2TW9udGhEYXlDbGFzcyA9IGlzTXVsdGlNb250aCA/IFwicHJldk1vbnRoRGF5IGhpZGRlblwiIDogXCJwcmV2TW9udGhEYXlcIiwgbmV4dE1vbnRoRGF5Q2xhc3MgPSBpc011bHRpTW9udGggPyBcIm5leHRNb250aERheSBoaWRkZW5cIiA6IFwibmV4dE1vbnRoRGF5XCI7XG4gICAgICAgIHZhciBkYXlOdW1iZXIgPSBwcmV2TW9udGhEYXlzICsgMSAtIGZpcnN0T2ZNb250aCwgZGF5SW5kZXggPSAwO1xuICAgICAgICBmb3IgKDsgZGF5TnVtYmVyIDw9IHByZXZNb250aERheXM7IGRheU51bWJlcisrLCBkYXlJbmRleCsrKSB7XG4gICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKGNyZWF0ZURheShcImZsYXRwaWNrci1kYXkgXCIgKyBwcmV2TW9udGhEYXlDbGFzcywgbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXlOdW1iZXIpLCBkYXlOdW1iZXIsIGRheUluZGV4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChkYXlOdW1iZXIgPSAxOyBkYXlOdW1iZXIgPD0gZGF5c0luTW9udGg7IGRheU51bWJlcisrLCBkYXlJbmRleCsrKSB7XG4gICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKGNyZWF0ZURheShcImZsYXRwaWNrci1kYXlcIiwgbmV3IERhdGUoeWVhciwgbW9udGgsIGRheU51bWJlciksIGRheU51bWJlciwgZGF5SW5kZXgpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBkYXlOdW0gPSBkYXlzSW5Nb250aCArIDE7IGRheU51bSA8PSA0MiAtIGZpcnN0T2ZNb250aCAmJlxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLnNob3dNb250aHMgPT09IDEgfHwgZGF5SW5kZXggJSA3ICE9PSAwKTsgZGF5TnVtKyssIGRheUluZGV4KyspIHtcbiAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwiZmxhdHBpY2tyLWRheSBcIiArIG5leHRNb250aERheUNsYXNzLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIGRheU51bSAlIGRheXNJbk1vbnRoKSwgZGF5TnVtLCBkYXlJbmRleCkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkYXlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZGF5Q29udGFpbmVyXCIpO1xuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5cyk7XG4gICAgICAgIHJldHVybiBkYXlDb250YWluZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkRGF5cygpIHtcbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJOb2RlKHNlbGYuZGF5c0NvbnRhaW5lcik7XG4gICAgICAgIGlmIChzZWxmLndlZWtOdW1iZXJzKVxuICAgICAgICAgICAgY2xlYXJOb2RlKHNlbGYud2Vla051bWJlcnMpO1xuICAgICAgICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIDEpO1xuICAgICAgICAgICAgZC5zZXRNb250aChzZWxmLmN1cnJlbnRNb250aCArIGkpO1xuICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZChidWlsZE1vbnRoRGF5cyhkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSkpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgICAgc2VsZi5kYXlzID0gc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiYgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgb25Nb3VzZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZE1vbnRoU3dpdGNoKCkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuc2hvd01vbnRocyA+IDEgfHxcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vbnRoU2VsZWN0b3JUeXBlICE9PSBcImRyb3Bkb3duXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBzaG91bGRCdWlsZE1vbnRoID0gZnVuY3Rpb24gKG1vbnRoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICAgICAgbW9udGggPCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIShzZWxmLmNvbmZpZy5tYXhEYXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgICBtb250aCA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKSk7XG4gICAgICAgIH07XG4gICAgICAgIHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghc2hvdWxkQnVpbGRNb250aChpKSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBtb250aCA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJmbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aFwiKTtcbiAgICAgICAgICAgIG1vbnRoLnZhbHVlID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgaSkuZ2V0TW9udGgoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgbW9udGgudGV4dENvbnRlbnQgPSBtb250aFRvU3RyKGksIHNlbGYuY29uZmlnLnNob3J0aGFuZEN1cnJlbnRNb250aCwgc2VsZi5sMTBuKTtcbiAgICAgICAgICAgIG1vbnRoLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICBpZiAoc2VsZi5jdXJyZW50TW9udGggPT09IGkpIHtcbiAgICAgICAgICAgICAgICBtb250aC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZE1vbnRoKCkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1tb250aFwiKTtcbiAgICAgICAgdmFyIG1vbnRoTmF2RnJhZ21lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgbW9udGhFbGVtZW50O1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuc2hvd01vbnRocyA+IDEgfHxcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vbnRoU2VsZWN0b3JUeXBlID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgICBtb250aEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImN1ci1tb250aFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIFwiZmxhdHBpY2tyLW1vbnRoRHJvcGRvd24tbW9udGhzXCIpO1xuICAgICAgICAgICAgc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHNlbGYubDEwbi5tb250aEFyaWFMYWJlbCk7XG4gICAgICAgICAgICBiaW5kKHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIsIFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE1vbnRoID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VNb250aChzZWxlY3RlZE1vbnRoIC0gc2VsZi5jdXJyZW50TW9udGgpO1xuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgICAgIG1vbnRoRWxlbWVudCA9IHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHllYXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiY3VyLXllYXJcIiwgeyB0YWJpbmRleDogXCItMVwiIH0pO1xuICAgICAgICB2YXIgeWVhckVsZW1lbnQgPSB5ZWFySW5wdXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgeWVhckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBzZWxmLmwxMG4ueWVhckFyaWFMYWJlbCk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKSB7XG4gICAgICAgICAgICB5ZWFyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKSB7XG4gICAgICAgICAgICB5ZWFyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgeWVhckVsZW1lbnQuZGlzYWJsZWQgPVxuICAgICAgICAgICAgICAgICEhc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudE1vbnRoID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1jdXJyZW50LW1vbnRoXCIpO1xuICAgICAgICBjdXJyZW50TW9udGguYXBwZW5kQ2hpbGQobW9udGhFbGVtZW50KTtcbiAgICAgICAgY3VycmVudE1vbnRoLmFwcGVuZENoaWxkKHllYXJJbnB1dCk7XG4gICAgICAgIG1vbnRoTmF2RnJhZ21lbnQuYXBwZW5kQ2hpbGQoY3VycmVudE1vbnRoKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoTmF2RnJhZ21lbnQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgICB5ZWFyRWxlbWVudDogeWVhckVsZW1lbnQsXG4gICAgICAgICAgICBtb250aEVsZW1lbnQ6IG1vbnRoRWxlbWVudCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGRNb250aHMoKSB7XG4gICAgICAgIGNsZWFyTm9kZShzZWxmLm1vbnRoTmF2KTtcbiAgICAgICAgc2VsZi5tb250aE5hdi5hcHBlbmRDaGlsZChzZWxmLnByZXZNb250aE5hdik7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5zaG93TW9udGhzKSB7XG4gICAgICAgICAgICBzZWxmLnllYXJFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgc2VsZi5tb250aEVsZW1lbnRzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbSA9IHNlbGYuY29uZmlnLnNob3dNb250aHM7IG0tLTspIHtcbiAgICAgICAgICAgIHZhciBtb250aCA9IGJ1aWxkTW9udGgoKTtcbiAgICAgICAgICAgIHNlbGYueWVhckVsZW1lbnRzLnB1c2gobW9udGgueWVhckVsZW1lbnQpO1xuICAgICAgICAgICAgc2VsZi5tb250aEVsZW1lbnRzLnB1c2gobW9udGgubW9udGhFbGVtZW50KTtcbiAgICAgICAgICAgIHNlbGYubW9udGhOYXYuYXBwZW5kQ2hpbGQobW9udGguY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLm1vbnRoTmF2LmFwcGVuZENoaWxkKHNlbGYubmV4dE1vbnRoTmF2KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGRNb250aE5hdigpIHtcbiAgICAgICAgc2VsZi5tb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItbW9udGhzXCIpO1xuICAgICAgICBzZWxmLnllYXJFbGVtZW50cyA9IFtdO1xuICAgICAgICBzZWxmLm1vbnRoRWxlbWVudHMgPSBbXTtcbiAgICAgICAgc2VsZi5wcmV2TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1wcmV2LW1vbnRoXCIpO1xuICAgICAgICBzZWxmLnByZXZNb250aE5hdi5pbm5lckhUTUwgPSBzZWxmLmNvbmZpZy5wcmV2QXJyb3c7XG4gICAgICAgIHNlbGYubmV4dE1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItbmV4dC1tb250aFwiKTtcbiAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYuaW5uZXJIVE1MID0gc2VsZi5jb25maWcubmV4dEFycm93O1xuICAgICAgICBidWlsZE1vbnRocygpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJfaGlkZVByZXZNb250aEFycm93XCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdzsgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGJvb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdyAhPT0gYm9vbCkge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLnByZXZNb250aE5hdiwgXCJmbGF0cGlja3ItZGlzYWJsZWRcIiwgYm9vbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX19oaWRlUHJldk1vbnRoQXJyb3cgPSBib29sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJfaGlkZU5leHRNb250aEFycm93XCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdzsgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGJvb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdyAhPT0gYm9vbCkge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLm5leHRNb250aE5hdiwgXCJmbGF0cGlja3ItZGlzYWJsZWRcIiwgYm9vbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX19oaWRlTmV4dE1vbnRoQXJyb3cgPSBib29sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudCA9IHNlbGYueWVhckVsZW1lbnRzWzBdO1xuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG4gICAgICAgIHJldHVybiBzZWxmLm1vbnRoTmF2O1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZFRpbWUoKSB7XG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1RpbWVcIik7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKVxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm9DYWxlbmRhclwiKTtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0gZ2V0RGVmYXVsdEhvdXJzKHNlbGYuY29uZmlnKTtcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci10aW1lXCIpO1xuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgdmFyIHNlcGFyYXRvciA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yXCIsIFwiOlwiKTtcbiAgICAgICAgdmFyIGhvdXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLWhvdXJcIiwge1xuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHNlbGYubDEwbi5ob3VyQXJpYUxhYmVsLFxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudCA9IGhvdXJJbnB1dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuICAgICAgICB2YXIgbWludXRlSW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1taW51dGVcIiwge1xuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHNlbGYubDEwbi5taW51dGVBcmlhTGFiZWwsXG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQgPSBtaW51dGVJbnB1dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnRhYkluZGV4ID0gc2VsZi5taW51dGVFbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBwYWQoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmpcbiAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0SG91cnMoKVxuICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy50aW1lXzI0aHJcbiAgICAgICAgICAgICAgICA/IGRlZmF1bHRzLmhvdXJzXG4gICAgICAgICAgICAgICAgOiBtaWxpdGFyeTJhbXBtKGRlZmF1bHRzLmhvdXJzKSk7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxuICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRNaW51dGVzKClcbiAgICAgICAgICAgIDogZGVmYXVsdHMubWludXRlcyk7XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3RlcFwiLCBzZWxmLmNvbmZpZy5ob3VySW5jcmVtZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3RlcFwiLCBzZWxmLmNvbmZpZy5taW51dGVJbmNyZW1lbnQudG9TdHJpbmcoKSk7XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWluXCIsIHNlbGYuY29uZmlnLnRpbWVfMjRociA/IFwiMFwiIDogXCIxXCIpO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLCBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyBcIjIzXCIgOiBcIjEyXCIpO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjJcIik7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIwXCIpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiNTlcIik7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIyXCIpO1xuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cklucHV0KTtcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW51dGVJbnB1dCk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy50aW1lXzI0aHIpXG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWUyNGhyXCIpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlU2Vjb25kcykge1xuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNTZWNvbmRzXCIpO1xuICAgICAgICAgICAgdmFyIHNlY29uZElucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3Itc2Vjb25kXCIpO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50ID0gc2Vjb25kSW5wdXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxuICAgICAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0U2Vjb25kcygpXG4gICAgICAgICAgICAgICAgOiBkZWZhdWx0cy5zZWNvbmRzKTtcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdGVwXCIsIHNlbGYubWludXRlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKTtcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIwXCIpO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjU5XCIpO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjJcIik7XG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpKTtcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRJbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy50aW1lXzI0aHIpIHtcbiAgICAgICAgICAgIHNlbGYuYW1QTSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWFtLXBtXCIsIHNlbGYubDEwbi5hbVBNW2ludCgoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmpcbiAgICAgICAgICAgICAgICA/IHNlbGYuaG91ckVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyKSA+IDExKV0pO1xuICAgICAgICAgICAgc2VsZi5hbVBNLnRpdGxlID0gc2VsZi5sMTBuLnRvZ2dsZVRpdGxlO1xuICAgICAgICAgICAgc2VsZi5hbVBNLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbVBNKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZi50aW1lQ29udGFpbmVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZFdlZWtkYXlzKCkge1xuICAgICAgICBpZiAoIXNlbGYud2Vla2RheUNvbnRhaW5lcilcbiAgICAgICAgICAgIHNlbGYud2Vla2RheUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla2RheXNcIik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNsZWFyTm9kZShzZWxmLndlZWtkYXlDb250YWluZXIpO1xuICAgICAgICBmb3IgKHZhciBpID0gc2VsZi5jb25maWcuc2hvd01vbnRoczsgaS0tOykge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla2RheWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIHNlbGYud2Vla2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVdlZWtkYXlzKCk7XG4gICAgICAgIHJldHVybiBzZWxmLndlZWtkYXlDb250YWluZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVdlZWtkYXlzKCkge1xuICAgICAgICBpZiAoIXNlbGYud2Vla2RheUNvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmaXJzdERheU9mV2VlayA9IHNlbGYubDEwbi5maXJzdERheU9mV2VlaztcbiAgICAgICAgdmFyIHdlZWtkYXlzID0gX19zcHJlYWRBcnJheXMoc2VsZi5sMTBuLndlZWtkYXlzLnNob3J0aGFuZCk7XG4gICAgICAgIGlmIChmaXJzdERheU9mV2VlayA+IDAgJiYgZmlyc3REYXlPZldlZWsgPCB3ZWVrZGF5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdlZWtkYXlzID0gX19zcHJlYWRBcnJheXMod2Vla2RheXMuc3BsaWNlKGZpcnN0RGF5T2ZXZWVrLCB3ZWVrZGF5cy5sZW5ndGgpLCB3ZWVrZGF5cy5zcGxpY2UoMCwgZmlyc3REYXlPZldlZWspKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gc2VsZi5jb25maWcuc2hvd01vbnRoczsgaS0tOykge1xuICAgICAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyLmNoaWxkcmVuW2ldLmlubmVySFRNTCA9IFwiXFxuICAgICAgPHNwYW4gY2xhc3M9J2ZsYXRwaWNrci13ZWVrZGF5Jz5cXG4gICAgICAgIFwiICsgd2Vla2RheXMuam9pbihcIjwvc3Bhbj48c3BhbiBjbGFzcz0nZmxhdHBpY2tyLXdlZWtkYXknPlwiKSArIFwiXFxuICAgICAgPC9zcGFuPlxcbiAgICAgIFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkV2Vla3MoKSB7XG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1dlZWtzXCIpO1xuICAgICAgICB2YXIgd2Vla1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWt3cmFwcGVyXCIpO1xuICAgICAgICB3ZWVrV3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci13ZWVrZGF5XCIsIHNlbGYubDEwbi53ZWVrQWJicmV2aWF0aW9uKSk7XG4gICAgICAgIHZhciB3ZWVrTnVtYmVycyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla3NcIik7XG4gICAgICAgIHdlZWtXcmFwcGVyLmFwcGVuZENoaWxkKHdlZWtOdW1iZXJzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdlZWtXcmFwcGVyOiB3ZWVrV3JhcHBlcixcbiAgICAgICAgICAgIHdlZWtOdW1iZXJzOiB3ZWVrTnVtYmVycyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hhbmdlTW9udGgodmFsdWUsIGlzT2Zmc2V0KSB7XG4gICAgICAgIGlmIChpc09mZnNldCA9PT0gdm9pZCAwKSB7IGlzT2Zmc2V0ID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgZGVsdGEgPSBpc09mZnNldCA/IHZhbHVlIDogdmFsdWUgLSBzZWxmLmN1cnJlbnRNb250aDtcbiAgICAgICAgaWYgKChkZWx0YSA8IDAgJiYgc2VsZi5faGlkZVByZXZNb250aEFycm93ID09PSB0cnVlKSB8fFxuICAgICAgICAgICAgKGRlbHRhID4gMCAmJiBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgPT09IHRydWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzZWxmLmN1cnJlbnRNb250aCArPSBkZWx0YTtcbiAgICAgICAgaWYgKHNlbGYuY3VycmVudE1vbnRoIDwgMCB8fCBzZWxmLmN1cnJlbnRNb250aCA+IDExKSB7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyICs9IHNlbGYuY3VycmVudE1vbnRoID4gMTEgPyAxIDogLTE7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IChzZWxmLmN1cnJlbnRNb250aCArIDEyKSAlIDEyO1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIGJ1aWxkRGF5cygpO1xuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk1vbnRoQ2hhbmdlXCIpO1xuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyKHRyaWdnZXJDaGFuZ2VFdmVudCwgdG9Jbml0aWFsKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQgPT09IHZvaWQgMCkgeyB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSB0cnVlOyB9XG4gICAgICAgIGlmICh0b0luaXRpYWwgPT09IHZvaWQgMCkgeyB0b0luaXRpYWwgPSB0cnVlOyB9XG4gICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gW107XG4gICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodG9Jbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gZ2V0RGVmYXVsdEhvdXJzKHNlbGYuY29uZmlnKSwgaG91cnMgPSBfYS5ob3VycywgbWludXRlcyA9IF9hLm1pbnV0ZXMsIHNlY29uZHMgPSBfYS5zZWNvbmRzO1xuICAgICAgICAgICAgc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIHNlbGYuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIGlmICghc2VsZi5pc01vYmlsZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5faW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2lucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DbG9zZVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkRlc3Ryb3lcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSBzZWxmLl9oYW5kbGVycy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIHNlbGYuX2hhbmRsZXJzW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuX2hhbmRsZXJzID0gW107XG4gICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0KSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLm1vYmlsZUlucHV0KTtcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciAmJiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5zdGF0aWMgJiYgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5sYXN0Q2hpbGQgJiYgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgaWYgKHdyYXBwZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAod3JhcHBlci5maXJzdENoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLmZpcnN0Q2hpbGQsIHdyYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCkge1xuICAgICAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmFsdElucHV0KTtcbiAgICAgICAgICAgIGRlbGV0ZSBzZWxmLmFsdElucHV0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmlucHV0KSB7XG4gICAgICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBzZWxmLmlucHV0Ll90eXBlO1xuICAgICAgICAgICAgc2VsZi5pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiZmxhdHBpY2tyLWlucHV0XCIpO1xuICAgICAgICAgICAgc2VsZi5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcbiAgICAgICAgfVxuICAgICAgICBbXG4gICAgICAgICAgICBcIl9zaG93VGltZUlucHV0XCIsXG4gICAgICAgICAgICBcImxhdGVzdFNlbGVjdGVkRGF0ZU9ialwiLFxuICAgICAgICAgICAgXCJfaGlkZU5leHRNb250aEFycm93XCIsXG4gICAgICAgICAgICBcIl9oaWRlUHJldk1vbnRoQXJyb3dcIixcbiAgICAgICAgICAgIFwiX19oaWRlTmV4dE1vbnRoQXJyb3dcIixcbiAgICAgICAgICAgIFwiX19oaWRlUHJldk1vbnRoQXJyb3dcIixcbiAgICAgICAgICAgIFwiaXNNb2JpbGVcIixcbiAgICAgICAgICAgIFwiaXNPcGVuXCIsXG4gICAgICAgICAgICBcInNlbGVjdGVkRGF0ZUVsZW1cIixcbiAgICAgICAgICAgIFwibWluRGF0ZUhhc1RpbWVcIixcbiAgICAgICAgICAgIFwibWF4RGF0ZUhhc1RpbWVcIixcbiAgICAgICAgICAgIFwiZGF5c1wiLFxuICAgICAgICAgICAgXCJkYXlzQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBcIl9pbnB1dFwiLFxuICAgICAgICAgICAgXCJfcG9zaXRpb25FbGVtZW50XCIsXG4gICAgICAgICAgICBcImlubmVyQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBcInJDb250YWluZXJcIixcbiAgICAgICAgICAgIFwibW9udGhOYXZcIixcbiAgICAgICAgICAgIFwidG9kYXlEYXRlRWxlbVwiLFxuICAgICAgICAgICAgXCJjYWxlbmRhckNvbnRhaW5lclwiLFxuICAgICAgICAgICAgXCJ3ZWVrZGF5Q29udGFpbmVyXCIsXG4gICAgICAgICAgICBcInByZXZNb250aE5hdlwiLFxuICAgICAgICAgICAgXCJuZXh0TW9udGhOYXZcIixcbiAgICAgICAgICAgIFwibW9udGhzRHJvcGRvd25Db250YWluZXJcIixcbiAgICAgICAgICAgIFwiY3VycmVudE1vbnRoRWxlbWVudFwiLFxuICAgICAgICAgICAgXCJjdXJyZW50WWVhckVsZW1lbnRcIixcbiAgICAgICAgICAgIFwibmF2aWdhdGlvbkN1cnJlbnRNb250aFwiLFxuICAgICAgICAgICAgXCJzZWxlY3RlZERhdGVFbGVtXCIsXG4gICAgICAgICAgICBcImNvbmZpZ1wiLFxuICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNlbGZba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykgeyB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0NhbGVuZGFyRWxlbShlbGVtKSB7XG4gICAgICAgIHJldHVybiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGVsZW0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkb2N1bWVudENsaWNrKGUpIHtcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpIHtcbiAgICAgICAgICAgIHZhciBldmVudFRhcmdldF8xID0gZ2V0RXZlbnRUYXJnZXQoZSk7XG4gICAgICAgICAgICB2YXIgaXNDYWxlbmRhckVsZW1lbnQgPSBpc0NhbGVuZGFyRWxlbShldmVudFRhcmdldF8xKTtcbiAgICAgICAgICAgIHZhciBpc0lucHV0ID0gZXZlbnRUYXJnZXRfMSA9PT0gc2VsZi5pbnB1dCB8fFxuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0XzEgPT09IHNlbGYuYWx0SW5wdXQgfHxcbiAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuY29udGFpbnMoZXZlbnRUYXJnZXRfMSkgfHxcbiAgICAgICAgICAgICAgICAoZS5wYXRoICYmXG4gICAgICAgICAgICAgICAgICAgIGUucGF0aC5pbmRleE9mICYmXG4gICAgICAgICAgICAgICAgICAgICh+ZS5wYXRoLmluZGV4T2Yoc2VsZi5pbnB1dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIH5lLnBhdGguaW5kZXhPZihzZWxmLmFsdElucHV0KSkpO1xuICAgICAgICAgICAgdmFyIGxvc3RGb2N1cyA9ICFpc0lucHV0ICYmXG4gICAgICAgICAgICAgICAgIWlzQ2FsZW5kYXJFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgIWlzQ2FsZW5kYXJFbGVtKGUucmVsYXRlZFRhcmdldCk7XG4gICAgICAgICAgICB2YXIgaXNJZ25vcmVkID0gIXNlbGYuY29uZmlnLmlnbm9yZWRGb2N1c0VsZW1lbnRzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5jb250YWlucyhldmVudFRhcmdldF8xKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGxvc3RGb2N1cyAmJiBpc0lnbm9yZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYWxsb3dJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldERhdGUoc2VsZi5faW5wdXQudmFsdWUsIGZhbHNlLCBzZWxmLmNvbmZpZy5hbHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hbHRGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnRpbWVDb250YWluZXIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSAhPT0gXCJcIiAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VZZWFyKG5ld1llYXIpIHtcbiAgICAgICAgaWYgKCFuZXdZZWFyIHx8XG4gICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZSAmJiBuZXdZZWFyIDwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpKSB8fFxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUgJiYgbmV3WWVhciA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBuZXdZZWFyTnVtID0gbmV3WWVhciwgaXNOZXdZZWFyID0gc2VsZi5jdXJyZW50WWVhciAhPT0gbmV3WWVhck51bTtcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IG5ld1llYXJOdW0gfHwgc2VsZi5jdXJyZW50WWVhcjtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBNYXRoLm1pbihzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKCksIHNlbGYuY3VycmVudE1vbnRoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICYmXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gTWF0aC5tYXgoc2VsZi5jb25maWcubWluRGF0ZS5nZXRNb250aCgpLCBzZWxmLmN1cnJlbnRNb250aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmV3WWVhcikge1xuICAgICAgICAgICAgc2VsZi5yZWRyYXcoKTtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uWWVhckNoYW5nZVwiKTtcbiAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoZGF0ZSwgdGltZWxlc3MpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGltZWxlc3MgPT09IHZvaWQgMCkgeyB0aW1lbGVzcyA9IHRydWU7IH1cbiAgICAgICAgdmFyIGRhdGVUb0NoZWNrID0gc2VsZi5wYXJzZURhdGUoZGF0ZSwgdW5kZWZpbmVkLCB0aW1lbGVzcyk7XG4gICAgICAgIGlmICgoc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgJiZcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlVG9DaGVjaywgc2VsZi5jb25maWcubWluRGF0ZSwgdGltZWxlc3MgIT09IHVuZGVmaW5lZCA/IHRpbWVsZXNzIDogIXNlbGYubWluRGF0ZUhhc1RpbWUpIDwgMCkgfHxcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgJiZcbiAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZVRvQ2hlY2ssIHNlbGYuY29uZmlnLm1heERhdGUsIHRpbWVsZXNzICE9PSB1bmRlZmluZWQgPyB0aW1lbGVzcyA6ICFzZWxmLm1heERhdGVIYXNUaW1lKSA+IDApKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmVuYWJsZSAmJiBzZWxmLmNvbmZpZy5kaXNhYmxlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoZGF0ZVRvQ2hlY2sgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGJvb2wgPSAhIXNlbGYuY29uZmlnLmVuYWJsZSwgYXJyYXkgPSAoX2EgPSBzZWxmLmNvbmZpZy5lbmFibGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHNlbGYuY29uZmlnLmRpc2FibGU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBkID0gdm9pZCAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGQgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZCA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgZChkYXRlVG9DaGVjaykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XG4gICAgICAgICAgICBlbHNlIGlmIChkIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBkLmdldFRpbWUoKSA9PT0gZGF0ZVRvQ2hlY2suZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VkID0gc2VsZi5wYXJzZURhdGUoZCwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkICYmIHBhcnNlZC5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA/IGJvb2xcbiAgICAgICAgICAgICAgICAgICAgOiAhYm9vbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIGQuZnJvbSAmJlxuICAgICAgICAgICAgICAgIGQudG8gJiZcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjay5nZXRUaW1lKCkgPj0gZC5mcm9tLmdldFRpbWUoKSAmJlxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrLmdldFRpbWUoKSA8PSBkLnRvLmdldFRpbWUoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIWJvb2w7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzSW5WaWV3KGVsZW0pIHtcbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIChlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJmbGF0cGlja3ItZGlzYWJsZWRcIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmNvbnRhaW5zKGVsZW0pKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgICAgICB2YXIgaXNJbnB1dCA9IGUudGFyZ2V0ID09PSBzZWxmLl9pbnB1dDtcbiAgICAgICAgdmFyIHZhbHVlQ2hhbmdlZCA9IHNlbGYuX2lucHV0LnZhbHVlLnRyaW1FbmQoKSAhPT0gZ2V0RGF0ZVN0cigpO1xuICAgICAgICBpZiAoaXNJbnB1dCAmJlxuICAgICAgICAgICAgdmFsdWVDaGFuZ2VkICYmXG4gICAgICAgICAgICAhKGUucmVsYXRlZFRhcmdldCAmJiBpc0NhbGVuZGFyRWxlbShlLnJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgICAgICAgc2VsZi5zZXREYXRlKHNlbGYuX2lucHV0LnZhbHVlLCB0cnVlLCBlLnRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dFxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuYWx0Rm9ybWF0XG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgdmFyIGlzSW5wdXQgPSBzZWxmLmNvbmZpZy53cmFwXG4gICAgICAgICAgICA/IGVsZW1lbnQuY29udGFpbnMoZXZlbnRUYXJnZXQpXG4gICAgICAgICAgICA6IGV2ZW50VGFyZ2V0ID09PSBzZWxmLl9pbnB1dDtcbiAgICAgICAgdmFyIGFsbG93SW5wdXQgPSBzZWxmLmNvbmZpZy5hbGxvd0lucHV0O1xuICAgICAgICB2YXIgYWxsb3dLZXlkb3duID0gc2VsZi5pc09wZW4gJiYgKCFhbGxvd0lucHV0IHx8ICFpc0lucHV0KTtcbiAgICAgICAgdmFyIGFsbG93SW5saW5lS2V5ZG93biA9IHNlbGYuY29uZmlnLmlubGluZSAmJiBpc0lucHV0ICYmICFhbGxvd0lucHV0O1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBpc0lucHV0KSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dJbnB1dCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShzZWxmLl9pbnB1dC52YWx1ZSwgdHJ1ZSwgZXZlbnRUYXJnZXQgPT09IHNlbGYuYWx0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hbHRGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQ2FsZW5kYXJFbGVtKGV2ZW50VGFyZ2V0KSB8fFxuICAgICAgICAgICAgYWxsb3dLZXlkb3duIHx8XG4gICAgICAgICAgICBhbGxvd0lubGluZUtleWRvd24pIHtcbiAgICAgICAgICAgIHZhciBpc1RpbWVPYmogPSAhIXNlbGYudGltZUNvbnRhaW5lciAmJlxuICAgICAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5jb250YWlucyhldmVudFRhcmdldCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RpbWVPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzQW5kQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3REYXRlKGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzQW5kQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0lucHV0ICYmICFzZWxmLmNvbmZpZy5hbGxvd0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZU9iaiAmJiAhaXNJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBnZXRDbG9zZXN0QWN0aXZlRWxlbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFsbG93SW5wdXQgPT09IGZhbHNlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmVFbGVtZW50ICYmIGlzSW5WaWV3KGFjdGl2ZUVsZW1lbnQpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGUua2V5Q29kZSA9PT0gMzkgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmN0cmxLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25EYXkodW5kZWZpbmVkLCBkZWx0YV8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9udGgoZGVsdGFfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoZ2V0Rmlyc3RBdmFpbGFibGVEYXkoMSksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmhvdXJFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gZS5rZXlDb2RlID09PSA0MCA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChzZWxmLmRheXNDb250YWluZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LiRpICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldCA9PT0gc2VsZi5pbnB1dCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQgPT09IHNlbGYuYWx0SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIGRlbHRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGdldEZpcnN0QXZhaWxhYmxlRGF5KDEpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1RpbWVPYmopXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheSh1bmRlZmluZWQsIGRlbHRhICogNyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnRUYXJnZXQgPT09IHNlbGYuY3VycmVudFllYXJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgLSBkZWx0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVPYmogJiYgc2VsZi5ob3VyRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaW1lT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHNlbGYucGx1Z2luRWxlbWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGVsZW1zLmluZGV4T2YoZXZlbnRUYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGVsZW1zW2kgKyAoZS5zaGlmdEtleSA/IC0xIDogMSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGFyZ2V0IHx8IHNlbGYuX2lucHV0KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFzZWxmLmNvbmZpZy5ub0NhbGVuZGFyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5jb250YWlucyhldmVudFRhcmdldCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2lucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGV2ZW50VGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHNlbGYubDEwbi5hbVBNWzBdLmNoYXJBdCgwKTpcbiAgICAgICAgICAgICAgICBjYXNlIHNlbGYubDEwbi5hbVBNWzBdLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpOlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBzZWxmLmwxMG4uYW1QTVswXTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMV0uY2hhckF0KDApOlxuICAgICAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMV0uY2hhckF0KDApLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYubDEwbi5hbVBNWzFdO1xuICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSW5wdXQgfHwgaXNDYWxlbmRhckVsZW0oZXZlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbktleURvd25cIiwgZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZU92ZXIoZWxlbSwgY2VsbENsYXNzKSB7XG4gICAgICAgIGlmIChjZWxsQ2xhc3MgPT09IHZvaWQgMCkgeyBjZWxsQ2xhc3MgPSBcImZsYXRwaWNrci1kYXlcIjsgfVxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCAhPT0gMSB8fFxuICAgICAgICAgICAgKGVsZW0gJiZcbiAgICAgICAgICAgICAgICAoIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNlbGxDbGFzcykgfHxcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGlzYWJsZWRcIikpKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGhvdmVyRGF0ZSA9IGVsZW1cbiAgICAgICAgICAgID8gZWxlbS5kYXRlT2JqLmdldFRpbWUoKVxuICAgICAgICAgICAgOiBzZWxmLmRheXMuZmlyc3RFbGVtZW50Q2hpbGQuZGF0ZU9iai5nZXRUaW1lKCksIGluaXRpYWxEYXRlID0gc2VsZi5wYXJzZURhdGUoc2VsZi5zZWxlY3RlZERhdGVzWzBdLCB1bmRlZmluZWQsIHRydWUpLmdldFRpbWUoKSwgcmFuZ2VTdGFydERhdGUgPSBNYXRoLm1pbihob3ZlckRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpLCByYW5nZUVuZERhdGUgPSBNYXRoLm1heChob3ZlckRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpO1xuICAgICAgICB2YXIgY29udGFpbnNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgbWluUmFuZ2UgPSAwLCBtYXhSYW5nZSA9IDA7XG4gICAgICAgIGZvciAodmFyIHQgPSByYW5nZVN0YXJ0RGF0ZTsgdCA8IHJhbmdlRW5kRGF0ZTsgdCArPSBkdXJhdGlvbi5EQVkpIHtcbiAgICAgICAgICAgIGlmICghaXNFbmFibGVkKG5ldyBEYXRlKHQpLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zRGlzYWJsZWQgPVxuICAgICAgICAgICAgICAgICAgICBjb250YWluc0Rpc2FibGVkIHx8ICh0ID4gcmFuZ2VTdGFydERhdGUgJiYgdCA8IHJhbmdlRW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHQgPCBpbml0aWFsRGF0ZSAmJiAoIW1pblJhbmdlIHx8IHQgPiBtaW5SYW5nZSkpXG4gICAgICAgICAgICAgICAgICAgIG1pblJhbmdlID0gdDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID4gaW5pdGlhbERhdGUgJiYgKCFtYXhSYW5nZSB8fCB0IDwgbWF4UmFuZ2UpKVxuICAgICAgICAgICAgICAgICAgICBtYXhSYW5nZSA9IHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhvdmVyYWJsZUNlbGxzID0gQXJyYXkuZnJvbShzZWxmLnJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIio6bnRoLWNoaWxkKC1uK1wiICsgc2VsZi5jb25maWcuc2hvd01vbnRocyArIFwiKSA+IC5cIiArIGNlbGxDbGFzcykpO1xuICAgICAgICBob3ZlcmFibGVDZWxscy5mb3JFYWNoKGZ1bmN0aW9uIChkYXlFbGVtKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IGRheUVsZW0uZGF0ZU9iajtcbiAgICAgICAgICAgIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciBvdXRPZlJhbmdlID0gKG1pblJhbmdlID4gMCAmJiB0aW1lc3RhbXAgPCBtaW5SYW5nZSkgfHxcbiAgICAgICAgICAgICAgICAobWF4UmFuZ2UgPiAwICYmIHRpbWVzdGFtcCA+IG1heFJhbmdlKTtcbiAgICAgICAgICAgIGlmIChvdXRPZlJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwibm90QWxsb3dlZFwiKTtcbiAgICAgICAgICAgICAgICBbXCJpblJhbmdlXCIsIFwic3RhcnRSYW5nZVwiLCBcImVuZFJhbmdlXCJdLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRhaW5zRGlzYWJsZWQgJiYgIW91dE9mUmFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgW1wic3RhcnRSYW5nZVwiLCBcImluUmFuZ2VcIiwgXCJlbmRSYW5nZVwiLCBcIm5vdEFsbG93ZWRcIl0uZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVsZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChob3ZlckRhdGUgPD0gc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA/IFwic3RhcnRSYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJlbmRSYW5nZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbERhdGUgPCBob3ZlckRhdGUgJiYgdGltZXN0YW1wID09PSBpbml0aWFsRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwic3RhcnRSYW5nZVwiKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpbml0aWFsRGF0ZSA+IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlKVxuICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJlbmRSYW5nZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZXN0YW1wID49IG1pblJhbmdlICYmXG4gICAgICAgICAgICAgICAgICAgIChtYXhSYW5nZSA9PT0gMCB8fCB0aW1lc3RhbXAgPD0gbWF4UmFuZ2UpICYmXG4gICAgICAgICAgICAgICAgICAgIGlzQmV0d2Vlbih0aW1lc3RhbXAsIGluaXRpYWxEYXRlLCBob3ZlckRhdGUpKVxuICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgICAgIGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuc3RhdGljICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpXG4gICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9wZW4oZSwgcG9zaXRpb25FbGVtZW50KSB7XG4gICAgICAgIGlmIChwb3NpdGlvbkVsZW1lbnQgPT09IHZvaWQgMCkgeyBwb3NpdGlvbkVsZW1lbnQgPSBzZWxmLl9wb3NpdGlvbkVsZW1lbnQ7IH1cbiAgICAgICAgaWYgKHNlbGYuaXNNb2JpbGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICAgICAgICAgIGlmIChldmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk9wZW5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZi5faW5wdXQuZGlzYWJsZWQgfHwgc2VsZi5jb25maWcuaW5saW5lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdhc09wZW4gPSBzZWxmLmlzT3BlbjtcbiAgICAgICAgc2VsZi5pc09wZW4gPSB0cnVlO1xuICAgICAgICBpZiAoIXdhc09wZW4pIHtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgICAgICBzZWxmLl9pbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25PcGVuXCIpO1xuICAgICAgICAgICAgcG9zaXRpb25DYWxlbmRhcihwb3NpdGlvbkVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lID09PSB0cnVlICYmIHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbGxvd0lucHV0ID09PSBmYWxzZSAmJlxuICAgICAgICAgICAgICAgIChlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAgICAgIXNlbGYudGltZUNvbnRhaW5lci5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5ob3VyRWxlbWVudC5zZWxlY3QoKTsgfSwgNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1pbk1heERhdGVTZXR0ZXIodHlwZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRlT2JqID0gKHNlbGYuY29uZmlnW1wiX1wiICsgdHlwZSArIFwiRGF0ZVwiXSA9IHNlbGYucGFyc2VEYXRlKGRhdGUsIHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpKTtcbiAgICAgICAgICAgIHZhciBpbnZlcnNlRGF0ZU9iaiA9IHNlbGYuY29uZmlnW1wiX1wiICsgKHR5cGUgPT09IFwibWluXCIgPyBcIm1heFwiIDogXCJtaW5cIikgKyBcIkRhdGVcIl07XG4gICAgICAgICAgICBpZiAoZGF0ZU9iaiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZlt0eXBlID09PSBcIm1pblwiID8gXCJtaW5EYXRlSGFzVGltZVwiIDogXCJtYXhEYXRlSGFzVGltZVwiXSA9XG4gICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0SG91cnMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0TWludXRlcygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iai5nZXRTZWNvbmRzKCkgPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcykge1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IHNlbGYuc2VsZWN0ZWREYXRlcy5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGlzRW5hYmxlZChkKTsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICYmIHR5cGUgPT09IFwibWluXCIpXG4gICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbURhdGUoZGF0ZU9iaik7XG4gICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICByZWRyYXcoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZU9iaiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudFt0eXBlXSA9IGRhdGVPYmouZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHR5cGUpO1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LmRpc2FibGVkID1cbiAgICAgICAgICAgICAgICAgICAgISFpbnZlcnNlRGF0ZU9iaiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iaiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlRGF0ZU9iai5nZXRGdWxsWWVhcigpID09PSBkYXRlT2JqLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlQ29uZmlnKCkge1xuICAgICAgICB2YXIgYm9vbE9wdHMgPSBbXG4gICAgICAgICAgICBcIndyYXBcIixcbiAgICAgICAgICAgIFwid2Vla051bWJlcnNcIixcbiAgICAgICAgICAgIFwiYWxsb3dJbnB1dFwiLFxuICAgICAgICAgICAgXCJhbGxvd0ludmFsaWRQcmVsb2FkXCIsXG4gICAgICAgICAgICBcImNsaWNrT3BlbnNcIixcbiAgICAgICAgICAgIFwidGltZV8yNGhyXCIsXG4gICAgICAgICAgICBcImVuYWJsZVRpbWVcIixcbiAgICAgICAgICAgIFwibm9DYWxlbmRhclwiLFxuICAgICAgICAgICAgXCJhbHRJbnB1dFwiLFxuICAgICAgICAgICAgXCJzaG9ydGhhbmRDdXJyZW50TW9udGhcIixcbiAgICAgICAgICAgIFwiaW5saW5lXCIsXG4gICAgICAgICAgICBcInN0YXRpY1wiLFxuICAgICAgICAgICAgXCJlbmFibGVTZWNvbmRzXCIsXG4gICAgICAgICAgICBcImRpc2FibGVNb2JpbGVcIixcbiAgICAgICAgXTtcbiAgICAgICAgdmFyIHVzZXJDb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbGVtZW50LmRhdGFzZXQgfHwge30pKSksIGluc3RhbmNlQ29uZmlnKTtcbiAgICAgICAgdmFyIGZvcm1hdHMgPSB7fTtcbiAgICAgICAgc2VsZi5jb25maWcucGFyc2VEYXRlID0gdXNlckNvbmZpZy5wYXJzZURhdGU7XG4gICAgICAgIHNlbGYuY29uZmlnLmZvcm1hdERhdGUgPSB1c2VyQ29uZmlnLmZvcm1hdERhdGU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJlbmFibGVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fZW5hYmxlOyB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5fZW5hYmxlID0gcGFyc2VEYXRlUnVsZXMoZGF0ZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJkaXNhYmxlXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX2Rpc2FibGU7IH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlcykge1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLl9kaXNhYmxlID0gcGFyc2VEYXRlUnVsZXMoZGF0ZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0aW1lTW9kZSA9IHVzZXJDb25maWcubW9kZSA9PT0gXCJ0aW1lXCI7XG4gICAgICAgIGlmICghdXNlckNvbmZpZy5kYXRlRm9ybWF0ICYmICh1c2VyQ29uZmlnLmVuYWJsZVRpbWUgfHwgdGltZU1vZGUpKSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdERhdGVGb3JtYXQgPSBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy5kYXRlRm9ybWF0IHx8IGRlZmF1bHRPcHRpb25zLmRhdGVGb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXRzLmRhdGVGb3JtYXQgPVxuICAgICAgICAgICAgICAgIHVzZXJDb25maWcubm9DYWxlbmRhciB8fCB0aW1lTW9kZVxuICAgICAgICAgICAgICAgICAgICA/IFwiSDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0RGF0ZUZvcm1hdCArIFwiIEg6aVwiICsgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlNcIiA6IFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1c2VyQ29uZmlnLmFsdElucHV0ICYmXG4gICAgICAgICAgICAodXNlckNvbmZpZy5lbmFibGVUaW1lIHx8IHRpbWVNb2RlKSAmJlxuICAgICAgICAgICAgIXVzZXJDb25maWcuYWx0Rm9ybWF0KSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdEFsdEZvcm1hdCA9IGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLmFsdEZvcm1hdCB8fCBkZWZhdWx0T3B0aW9ucy5hbHRGb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXRzLmFsdEZvcm1hdCA9XG4gICAgICAgICAgICAgICAgdXNlckNvbmZpZy5ub0NhbGVuZGFyIHx8IHRpbWVNb2RlXG4gICAgICAgICAgICAgICAgICAgID8gXCJoOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTIEtcIiA6IFwiIEtcIilcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0QWx0Rm9ybWF0ICsgKFwiIGg6aVwiICsgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlNcIiA6IFwiXCIpICsgXCIgS1wiKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWluRGF0ZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9taW5EYXRlOyB9LFxuICAgICAgICAgICAgc2V0OiBtaW5NYXhEYXRlU2V0dGVyKFwibWluXCIpLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1heERhdGVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fbWF4RGF0ZTsgfSxcbiAgICAgICAgICAgIHNldDogbWluTWF4RGF0ZVNldHRlcihcIm1heFwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBtaW5NYXhUaW1lU2V0dGVyID0gZnVuY3Rpb24gKHR5cGUpIHsgcmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnW3R5cGUgPT09IFwibWluXCIgPyBcIl9taW5UaW1lXCIgOiBcIl9tYXhUaW1lXCJdID0gc2VsZi5wYXJzZURhdGUodmFsLCBcIkg6aTpTXCIpO1xuICAgICAgICB9OyB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWluVGltZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9taW5UaW1lOyB9LFxuICAgICAgICAgICAgc2V0OiBtaW5NYXhUaW1lU2V0dGVyKFwibWluXCIpLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1heFRpbWVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fbWF4VGltZTsgfSxcbiAgICAgICAgICAgIHNldDogbWluTWF4VGltZVNldHRlcihcIm1heFwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh1c2VyQ29uZmlnLm1vZGUgPT09IFwidGltZVwiKSB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5jb25maWcsIGZvcm1hdHMsIHVzZXJDb25maWcpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvb2xPcHRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID1cbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID09PSBcInRydWVcIjtcbiAgICAgICAgSE9PS1MuZmlsdGVyKGZ1bmN0aW9uIChob29rKSB7IHJldHVybiBzZWxmLmNvbmZpZ1tob29rXSAhPT0gdW5kZWZpbmVkOyB9KS5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZ1tob29rXSA9IGFycmF5aWZ5KHNlbGYuY29uZmlnW2hvb2tdIHx8IFtdKS5tYXAoYmluZFRvSW5zdGFuY2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5pc01vYmlsZSA9XG4gICAgICAgICAgICAhc2VsZi5jb25maWcuZGlzYWJsZU1vYmlsZSAmJlxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5pbmxpbmUgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiICYmXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmVuYWJsZSAmJlxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy53ZWVrTnVtYmVycyAmJlxuICAgICAgICAgICAgICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmNvbmZpZy5wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGx1Z2luQ29uZiA9IHNlbGYuY29uZmlnLnBsdWdpbnNbaV0oc2VsZikgfHwge307XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGx1Z2luQ29uZikge1xuICAgICAgICAgICAgICAgIGlmIChIT09LUy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1trZXldID0gYXJyYXlpZnkocGx1Z2luQ29uZltrZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChiaW5kVG9JbnN0YW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoc2VsZi5jb25maWdba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1c2VyQ29uZmlnW2tleV0gPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2tleV0gPSBwbHVnaW5Db25mW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF1c2VyQ29uZmlnLmFsdElucHV0Q2xhc3MpIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmFsdElucHV0Q2xhc3MgPVxuICAgICAgICAgICAgICAgIGdldElucHV0RWxlbSgpLmNsYXNzTmFtZSArIFwiIFwiICsgc2VsZi5jb25maWcuYWx0SW5wdXRDbGFzcztcbiAgICAgICAgfVxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblBhcnNlQ29uZmlnXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRJbnB1dEVsZW0oKSB7XG4gICAgICAgIHJldHVybiBzZWxmLmNvbmZpZy53cmFwXG4gICAgICAgICAgICA/IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWlucHV0XVwiKVxuICAgICAgICAgICAgOiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXR1cExvY2FsZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmNvbmZpZy5sb2NhbGUgIT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBmbGF0cGlja3IubDEwbnNbc2VsZi5jb25maWcubG9jYWxlXSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmVycm9ySGFuZGxlcihuZXcgRXJyb3IoXCJmbGF0cGlja3I6IGludmFsaWQgbG9jYWxlIFwiICsgc2VsZi5jb25maWcubG9jYWxlKSk7XG4gICAgICAgIHNlbGYubDEwbiA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBmbGF0cGlja3IubDEwbnMuZGVmYXVsdCksICh0eXBlb2Ygc2VsZi5jb25maWcubG9jYWxlID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICA/IHNlbGYuY29uZmlnLmxvY2FsZVxuICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5sb2NhbGUgIT09IFwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgPyBmbGF0cGlja3IubDEwbnNbc2VsZi5jb25maWcubG9jYWxlXVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkKSk7XG4gICAgICAgIHRva2VuUmVnZXguRCA9IFwiKFwiICsgc2VsZi5sMTBuLndlZWtkYXlzLnNob3J0aGFuZC5qb2luKFwifFwiKSArIFwiKVwiO1xuICAgICAgICB0b2tlblJlZ2V4LmwgPSBcIihcIiArIHNlbGYubDEwbi53ZWVrZGF5cy5sb25naGFuZC5qb2luKFwifFwiKSArIFwiKVwiO1xuICAgICAgICB0b2tlblJlZ2V4Lk0gPSBcIihcIiArIHNlbGYubDEwbi5tb250aHMuc2hvcnRoYW5kLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gICAgICAgIHRva2VuUmVnZXguRiA9IFwiKFwiICsgc2VsZi5sMTBuLm1vbnRocy5sb25naGFuZC5qb2luKFwifFwiKSArIFwiKVwiO1xuICAgICAgICB0b2tlblJlZ2V4LksgPSBcIihcIiArIHNlbGYubDEwbi5hbVBNWzBdICsgXCJ8XCIgKyBzZWxmLmwxMG4uYW1QTVsxXSArIFwifFwiICsgc2VsZi5sMTBuLmFtUE1bMF0udG9Mb3dlckNhc2UoKSArIFwifFwiICsgc2VsZi5sMTBuLmFtUE1bMV0udG9Mb3dlckNhc2UoKSArIFwiKVwiO1xuICAgICAgICB2YXIgdXNlckNvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBpbnN0YW5jZUNvbmZpZyksIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZWxlbWVudC5kYXRhc2V0IHx8IHt9KSkpO1xuICAgICAgICBpZiAodXNlckNvbmZpZy50aW1lXzI0aHIgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcudGltZV8yNGhyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLnRpbWVfMjRociA9IHNlbGYubDEwbi50aW1lXzI0aHI7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5mb3JtYXREYXRlID0gY3JlYXRlRGF0ZUZvcm1hdHRlcihzZWxmKTtcbiAgICAgICAgc2VsZi5wYXJzZURhdGUgPSBjcmVhdGVEYXRlUGFyc2VyKHsgY29uZmlnOiBzZWxmLmNvbmZpZywgbDEwbjogc2VsZi5sMTBuIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb3NpdGlvbkNhbGVuZGFyKGN1c3RvbVBvc2l0aW9uRWxlbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIHNlbGYuY29uZmlnLnBvc2l0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIHNlbGYuY29uZmlnLnBvc2l0aW9uKHNlbGYsIGN1c3RvbVBvc2l0aW9uRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25QcmVDYWxlbmRhclBvc2l0aW9uXCIpO1xuICAgICAgICB2YXIgcG9zaXRpb25FbGVtZW50ID0gY3VzdG9tUG9zaXRpb25FbGVtZW50IHx8IHNlbGYuX3Bvc2l0aW9uRWxlbWVudDtcbiAgICAgICAgdmFyIGNhbGVuZGFySGVpZ2h0ID0gQXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2hpbGRyZW4sIChmdW5jdGlvbiAoYWNjLCBjaGlsZCkgeyByZXR1cm4gYWNjICsgY2hpbGQub2Zmc2V0SGVpZ2h0OyB9KSwgMCksIGNhbGVuZGFyV2lkdGggPSBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLm9mZnNldFdpZHRoLCBjb25maWdQb3MgPSBzZWxmLmNvbmZpZy5wb3NpdGlvbi5zcGxpdChcIiBcIiksIGNvbmZpZ1Bvc1ZlcnRpY2FsID0gY29uZmlnUG9zWzBdLCBjb25maWdQb3NIb3Jpem9udGFsID0gY29uZmlnUG9zLmxlbmd0aCA+IDEgPyBjb25maWdQb3NbMV0gOiBudWxsLCBpbnB1dEJvdW5kcyA9IHBvc2l0aW9uRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgZGlzdGFuY2VGcm9tQm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0IC0gaW5wdXRCb3VuZHMuYm90dG9tLCBzaG93T25Ub3AgPSBjb25maWdQb3NWZXJ0aWNhbCA9PT0gXCJhYm92ZVwiIHx8XG4gICAgICAgICAgICAoY29uZmlnUG9zVmVydGljYWwgIT09IFwiYmVsb3dcIiAmJlxuICAgICAgICAgICAgICAgIGRpc3RhbmNlRnJvbUJvdHRvbSA8IGNhbGVuZGFySGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgaW5wdXRCb3VuZHMudG9wID4gY2FsZW5kYXJIZWlnaHQpO1xuICAgICAgICB2YXIgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ICtcbiAgICAgICAgICAgIGlucHV0Qm91bmRzLnRvcCArXG4gICAgICAgICAgICAoIXNob3dPblRvcCA/IHBvc2l0aW9uRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAyIDogLWNhbGVuZGFySGVpZ2h0IC0gMik7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dUb3BcIiwgIXNob3dPblRvcCk7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dCb3R0b21cIiwgc2hvd09uVG9wKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmlubGluZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGxlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgKyBpbnB1dEJvdW5kcy5sZWZ0O1xuICAgICAgICB2YXIgaXNDZW50ZXIgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlzUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNvbmZpZ1Bvc0hvcml6b250YWwgPT09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIGxlZnQgLT0gKGNhbGVuZGFyV2lkdGggLSBpbnB1dEJvdW5kcy53aWR0aCkgLyAyO1xuICAgICAgICAgICAgaXNDZW50ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZ1Bvc0hvcml6b250YWwgPT09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgbGVmdCAtPSBjYWxlbmRhcldpZHRoIC0gaW5wdXRCb3VuZHMud2lkdGg7XG4gICAgICAgICAgICBpc1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93TGVmdFwiLCAhaXNDZW50ZXIgJiYgIWlzUmlnaHQpO1xuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93Q2VudGVyXCIsIGlzQ2VudGVyKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd1JpZ2h0XCIsIGlzUmlnaHQpO1xuICAgICAgICB2YXIgcmlnaHQgPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAod2luZG93LnBhZ2VYT2Zmc2V0ICsgaW5wdXRCb3VuZHMucmlnaHQpO1xuICAgICAgICB2YXIgcmlnaHRNb3N0ID0gbGVmdCArIGNhbGVuZGFyV2lkdGggPiB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIGNlbnRlck1vc3QgPSByaWdodCArIGNhbGVuZGFyV2lkdGggPiB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyaWdodE1vc3RcIiwgcmlnaHRNb3N0KTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN0YXRpYylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XG4gICAgICAgIGlmICghcmlnaHRNb3N0KSB7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFjZW50ZXJNb3N0KSB7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSByaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkb2MgPSBnZXREb2N1bWVudFN0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIGlmIChkb2MgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgYm9keVdpZHRoID0gd2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB2YXIgY2VudGVyTGVmdCA9IE1hdGgubWF4KDAsIGJvZHlXaWR0aCAvIDIgLSBjYWxlbmRhcldpZHRoIC8gMik7XG4gICAgICAgICAgICB2YXIgY2VudGVyQmVmb3JlID0gXCIuZmxhdHBpY2tyLWNhbGVuZGFyLmNlbnRlck1vc3Q6YmVmb3JlXCI7XG4gICAgICAgICAgICB2YXIgY2VudGVyQWZ0ZXIgPSBcIi5mbGF0cGlja3ItY2FsZW5kYXIuY2VudGVyTW9zdDphZnRlclwiO1xuICAgICAgICAgICAgdmFyIGNlbnRlckluZGV4ID0gZG9jLmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBjZW50ZXJTdHlsZSA9IFwie2xlZnQ6XCIgKyBpbnB1dEJvdW5kcy5sZWZ0ICsgXCJweDtyaWdodDphdXRvO31cIjtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwicmlnaHRNb3N0XCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiY2VudGVyTW9zdFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGRvYy5pbnNlcnRSdWxlKGNlbnRlckJlZm9yZSArIFwiLFwiICsgY2VudGVyQWZ0ZXIgKyBjZW50ZXJTdHlsZSwgY2VudGVySW5kZXgpO1xuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gY2VudGVyTGVmdCArIFwicHhcIjtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXREb2N1bWVudFN0eWxlU2hlZXQoKSB7XG4gICAgICAgIHZhciBlZGl0YWJsZVNoZWV0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgICAgICAgICBpZiAoIXNoZWV0LmNzc1J1bGVzKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzaGVldC5jc3NSdWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVkaXRhYmxlU2hlZXQgPSBzaGVldDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlZGl0YWJsZVNoZWV0ICE9IG51bGwgPyBlZGl0YWJsZVNoZWV0IDogY3JlYXRlU3R5bGVTaGVldCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0KCkge1xuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICByZXR1cm4gc3R5bGUuc2hlZXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlZHJhdygpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgfHwgc2VsZi5pc01vYmlsZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG4gICAgICAgIGJ1aWxkRGF5cygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb2N1c0FuZENsb3NlKCkge1xuICAgICAgICBzZWxmLl9pbnB1dC5mb2N1cygpO1xuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgIT09IC0xIHx8XG4gICAgICAgICAgICBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNlbGYuY2xvc2UsIDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNlbGVjdERhdGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHZhciBpc1NlbGVjdGFibGUgPSBmdW5jdGlvbiAoZGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5LmNsYXNzTGlzdCAmJlxuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGF5XCIpICYmXG4gICAgICAgICAgICAgICAgIWRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGlzYWJsZWRcIikgJiZcbiAgICAgICAgICAgICAgICAhZGF5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdEFsbG93ZWRcIik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0ID0gZmluZFBhcmVudChnZXRFdmVudFRhcmdldChlKSwgaXNTZWxlY3RhYmxlKTtcbiAgICAgICAgaWYgKHQgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHRhcmdldCA9IHQ7XG4gICAgICAgIHZhciBzZWxlY3RlZERhdGUgPSAoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBuZXcgRGF0ZSh0YXJnZXQuZGF0ZU9iai5nZXRUaW1lKCkpKTtcbiAgICAgICAgdmFyIHNob3VsZENoYW5nZU1vbnRoID0gKHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpIDwgc2VsZi5jdXJyZW50TW9udGggfHxcbiAgICAgICAgICAgIHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpID5cbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCArIHNlbGYuY29uZmlnLnNob3dNb250aHMgLSAxKSAmJlxuICAgICAgICAgICAgc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiO1xuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSB0YXJnZXQ7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiKVxuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gW3NlbGVjdGVkRGF0ZV07XG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwibXVsdGlwbGVcIikge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBpc0RhdGVTZWxlY3RlZChzZWxlY3RlZERhdGUpO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXgpXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnNwbGljZShwYXJzZUludChzZWxlY3RlZEluZGV4KSwgMSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnB1c2goc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jbGVhcihmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBzZWxlY3RlZERhdGU7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMucHVzaChzZWxlY3RlZERhdGUpO1xuICAgICAgICAgICAgaWYgKGNvbXBhcmVEYXRlcyhzZWxlY3RlZERhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdHJ1ZSkgIT09IDApXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xuICAgICAgICBpZiAoc2hvdWxkQ2hhbmdlTW9udGgpIHtcbiAgICAgICAgICAgIHZhciBpc05ld1llYXIgPSBzZWxmLmN1cnJlbnRZZWFyICE9PSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZWN0ZWREYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICBpZiAoaXNOZXdZZWFyKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuICAgICAgICBidWlsZERheXMoKTtcbiAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgaWYgKCFzaG91bGRDaGFuZ2VNb250aCAmJlxuICAgICAgICAgICAgc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiICYmXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5zaG93TW9udGhzID09PSAxKVxuICAgICAgICAgICAgZm9jdXNPbkRheUVsZW0odGFyZ2V0KTtcbiAgICAgICAgZWxzZSBpZiAoc2VsZi5zZWxlY3RlZERhdGVFbGVtICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVFbGVtICYmIHNlbGYuc2VsZWN0ZWREYXRlRWxlbS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgICAgdmFyIHNpbmdsZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiYgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiZcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAyICYmXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XG4gICAgICAgICAgICBpZiAoc2luZ2xlIHx8IHJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZm9jdXNBbmRDbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyaWdnZXJDaGFuZ2UoKTtcbiAgICB9XG4gICAgdmFyIENBTExCQUNLUyA9IHtcbiAgICAgICAgbG9jYWxlOiBbc2V0dXBMb2NhbGUsIHVwZGF0ZVdlZWtkYXlzXSxcbiAgICAgICAgc2hvd01vbnRoczogW2J1aWxkTW9udGhzLCBzZXRDYWxlbmRhcldpZHRoLCBidWlsZFdlZWtkYXlzXSxcbiAgICAgICAgbWluRGF0ZTogW2p1bXBUb0RhdGVdLFxuICAgICAgICBtYXhEYXRlOiBbanVtcFRvRGF0ZV0sXG4gICAgICAgIHBvc2l0aW9uRWxlbWVudDogW3VwZGF0ZVBvc2l0aW9uRWxlbWVudF0sXG4gICAgICAgIGNsaWNrT3BlbnM6IFtcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xpY2tPcGVucyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImZvY3VzXCIsIHNlbGYub3Blbik7XG4gICAgICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwiY2xpY2tcIiwgc2VsZi5vcGVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2lucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBzZWxmLm9wZW4pO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZi5vcGVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH07XG4gICAgZnVuY3Rpb24gc2V0KG9wdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG9wdGlvbiAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNlbGYuY29uZmlnLCBvcHRpb24pO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChDQUxMQkFDS1Nba2V5XSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBDQUxMQkFDS1Nba2V5XS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4KCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5jb25maWdbb3B0aW9uXSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKENBTExCQUNLU1tvcHRpb25dICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgQ0FMTEJBQ0tTW29wdGlvbl0uZm9yRWFjaChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCgpOyB9KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKEhPT0tTLmluZGV4T2Yob3B0aW9uKSA+IC0xKVxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW29wdGlvbl0gPSBhcnJheWlmeSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcbiAgICAgICAgdXBkYXRlVmFsdWUodHJ1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFNlbGVjdGVkRGF0ZShpbnB1dERhdGUsIGZvcm1hdCkge1xuICAgICAgICB2YXIgZGF0ZXMgPSBbXTtcbiAgICAgICAgaWYgKGlucHV0RGF0ZSBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICAgICAgZGF0ZXMgPSBpbnB1dERhdGUubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBzZWxmLnBhcnNlRGF0ZShkLCBmb3JtYXQpOyB9KTtcbiAgICAgICAgZWxzZSBpZiAoaW5wdXREYXRlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgaW5wdXREYXRlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgZGF0ZXMgPSBbc2VsZi5wYXJzZURhdGUoaW5wdXREYXRlLCBmb3JtYXQpXTtcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGlucHV0RGF0ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzZWxmLmNvbmZpZy5tb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNpbmdsZVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGVzID0gW3NlbGYucGFyc2VEYXRlKGlucHV0RGF0ZSwgZm9ybWF0KV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtdWx0aXBsZVwiOlxuICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KHNlbGYuY29uZmlnLmNvbmp1bmN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyYW5nZVwiOlxuICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KHNlbGYubDEwbi5yYW5nZVNlcGFyYXRvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHNlbGYucGFyc2VEYXRlKGRhdGUsIGZvcm1hdCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIHN1cHBsaWVkOiBcIiArIEpTT04uc3RyaW5naWZ5KGlucHV0RGF0ZSkpKTtcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gKHNlbGYuY29uZmlnLmFsbG93SW52YWxpZFByZWxvYWRcbiAgICAgICAgICAgID8gZGF0ZXNcbiAgICAgICAgICAgIDogZGF0ZXMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIGluc3RhbmNlb2YgRGF0ZSAmJiBpc0VuYWJsZWQoZCwgZmFsc2UpOyB9KSk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpXG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldERhdGUoZGF0ZSwgdHJpZ2dlckNoYW5nZSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlID09PSB2b2lkIDApIHsgdHJpZ2dlckNoYW5nZSA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0OyB9XG4gICAgICAgIGlmICgoZGF0ZSAhPT0gMCAmJiAhZGF0ZSkgfHwgKGRhdGUgaW5zdGFuY2VvZiBBcnJheSAmJiBkYXRlLmxlbmd0aCA9PT0gMCkpXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jbGVhcih0cmlnZ2VyQ2hhbmdlKTtcbiAgICAgICAgc2V0U2VsZWN0ZWREYXRlKGRhdGUsIGZvcm1hdCk7XG4gICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID1cbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlc1tzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICAgIGp1bXBUb0RhdGUodW5kZWZpbmVkLCB0cmlnZ2VyQ2hhbmdlKTtcbiAgICAgICAgc2V0SG91cnNGcm9tRGF0ZSgpO1xuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2VsZi5jbGVhcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlVmFsdWUodHJpZ2dlckNoYW5nZSk7XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlKVxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlRGF0ZVJ1bGVzKGFycikge1xuICAgICAgICByZXR1cm4gYXJyXG4gICAgICAgICAgICAuc2xpY2UoKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBydWxlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIHJ1bGUgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgICAgICAgICBydWxlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnBhcnNlRGF0ZShydWxlLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocnVsZSAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBydWxlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgcnVsZS5mcm9tICYmXG4gICAgICAgICAgICAgICAgcnVsZS50bylcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiBzZWxmLnBhcnNlRGF0ZShydWxlLmZyb20sIHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIHRvOiBzZWxmLnBhcnNlRGF0ZShydWxlLnRvLCB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXR1cERhdGVzKCkge1xuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgc2VsZi5ub3cgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLmNvbmZpZy5ub3cpIHx8IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBwcmVsb2FkZWREYXRlID0gc2VsZi5jb25maWcuZGVmYXVsdERhdGUgfHxcbiAgICAgICAgICAgICgoc2VsZi5pbnB1dC5ub2RlTmFtZSA9PT0gXCJJTlBVVFwiIHx8XG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5ub2RlTmFtZSA9PT0gXCJURVhUQVJFQVwiKSAmJlxuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQucGxhY2Vob2xkZXIgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnZhbHVlID09PSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgOiBzZWxmLmlucHV0LnZhbHVlKTtcbiAgICAgICAgaWYgKHByZWxvYWRlZERhdGUpXG4gICAgICAgICAgICBzZXRTZWxlY3RlZERhdGUocHJlbG9hZGVkRGF0ZSwgc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XG4gICAgICAgIHNlbGYuX2luaXRpYWxEYXRlID1cbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBzZWxmLnNlbGVjdGVkRGF0ZXNbMF1cbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRUaW1lKCkgPiBzZWxmLm5vdy5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5taW5EYXRlXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWF4RGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRUaW1lKCkgPCBzZWxmLm5vdy5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLm5vdztcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IHNlbGYuX2luaXRpYWxEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF07XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5UaW1lICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5UaW1lID0gc2VsZi5wYXJzZURhdGUoc2VsZi5jb25maWcubWluVGltZSwgXCJIOmlcIik7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhUaW1lICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhUaW1lID0gc2VsZi5wYXJzZURhdGUoc2VsZi5jb25maWcubWF4VGltZSwgXCJIOmlcIik7XG4gICAgICAgIHNlbGYubWluRGF0ZUhhc1RpbWUgPVxuICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5taW5EYXRlICYmXG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0SG91cnMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCkgPiAwIHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0U2Vjb25kcygpID4gMCk7XG4gICAgICAgIHNlbGYubWF4RGF0ZUhhc1RpbWUgPVxuICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5tYXhEYXRlICYmXG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0SG91cnMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCkgPiAwIHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heERhdGUuZ2V0U2Vjb25kcygpID4gMCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldHVwSW5wdXRzKCkge1xuICAgICAgICBzZWxmLmlucHV0ID0gZ2V0SW5wdXRFbGVtKCk7XG4gICAgICAgIGlmICghc2VsZi5pbnB1dCkge1xuICAgICAgICAgICAgc2VsZi5jb25maWcuZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgZWxlbWVudCBzcGVjaWZpZWRcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuaW5wdXQuX3R5cGUgPSBzZWxmLmlucHV0LnR5cGU7XG4gICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBzZWxmLmlucHV0LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItaW5wdXRcIik7XG4gICAgICAgIHNlbGYuX2lucHV0ID0gc2VsZi5pbnB1dDtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFsdElucHV0KSB7XG4gICAgICAgICAgICBzZWxmLmFsdElucHV0ID0gY3JlYXRlRWxlbWVudChzZWxmLmlucHV0Lm5vZGVOYW1lLCBzZWxmLmNvbmZpZy5hbHRJbnB1dENsYXNzKTtcbiAgICAgICAgICAgIHNlbGYuX2lucHV0ID0gc2VsZi5hbHRJbnB1dDtcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucGxhY2Vob2xkZXIgPSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5kaXNhYmxlZCA9IHNlbGYuaW5wdXQuZGlzYWJsZWQ7XG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnJlcXVpcmVkID0gc2VsZi5pbnB1dC5yZXF1aXJlZDtcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudGFiSW5kZXggPSBzZWxmLmlucHV0LnRhYkluZGV4O1xuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICBzZWxmLmlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiBzZWxmLmlucHV0LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLmFsdElucHV0LCBzZWxmLmlucHV0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpXG4gICAgICAgICAgICBzZWxmLl9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCBcInJlYWRvbmx5XCIpO1xuICAgICAgICB1cGRhdGVQb3NpdGlvbkVsZW1lbnQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb25FbGVtZW50KCkge1xuICAgICAgICBzZWxmLl9wb3NpdGlvbkVsZW1lbnQgPSBzZWxmLmNvbmZpZy5wb3NpdGlvbkVsZW1lbnQgfHwgc2VsZi5faW5wdXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldHVwTW9iaWxlKCkge1xuICAgICAgICB2YXIgaW5wdXRUeXBlID0gc2VsZi5jb25maWcuZW5hYmxlVGltZVxuICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyXG4gICAgICAgICAgICAgICAgPyBcInRpbWVcIlxuICAgICAgICAgICAgICAgIDogXCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICA6IFwiZGF0ZVwiO1xuICAgICAgICBzZWxmLm1vYmlsZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHNlbGYuaW5wdXQuY2xhc3NOYW1lICsgXCIgZmxhdHBpY2tyLW1vYmlsZVwiKTtcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC50YWJJbmRleCA9IDE7XG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5kaXNhYmxlZCA9IHNlbGYuaW5wdXQuZGlzYWJsZWQ7XG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQucmVxdWlyZWQgPSBzZWxmLmlucHV0LnJlcXVpcmVkO1xuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcbiAgICAgICAgc2VsZi5tb2JpbGVGb3JtYXRTdHIgPVxuICAgICAgICAgICAgaW5wdXRUeXBlID09PSBcImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgICAgICA/IFwiWS1tLWRcXFxcVEg6aTpTXCJcbiAgICAgICAgICAgICAgICA6IGlucHV0VHlwZSA9PT0gXCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcIlktbS1kXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkg6aTpTXCI7XG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5kZWZhdWx0VmFsdWUgPSBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID0gc2VsZi5mb3JtYXREYXRlKHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKVxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5taW4gPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5jb25maWcubWluRGF0ZSwgXCJZLW0tZFwiKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUpXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0Lm1heCA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5tYXhEYXRlLCBcIlktbS1kXCIpO1xuICAgICAgICBpZiAoc2VsZi5pbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKVxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5zdGVwID0gU3RyaW5nKHNlbGYuaW5wdXQuZ2V0QXR0cmlidXRlKFwic3RlcFwiKSk7XG4gICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGlmIChzZWxmLmFsdElucHV0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHNlbGYuaW5wdXQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYubW9iaWxlSW5wdXQsIHNlbGYuaW5wdXQubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkgeyB9XG4gICAgICAgIGJpbmQoc2VsZi5tb2JpbGVJbnB1dCwgXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShnZXRFdmVudFRhcmdldChlKS52YWx1ZSwgZmFsc2UsIHNlbGYubW9iaWxlRm9ybWF0U3RyKTtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DbG9zZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgICAgIGlmIChzZWxmLmlzT3BlbiA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNsb3NlKCk7XG4gICAgICAgIHNlbGYub3BlbihlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJpZ2dlckV2ZW50KGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgaG9va3MgPSBzZWxmLmNvbmZpZ1tldmVudF07XG4gICAgICAgIGlmIChob29rcyAhPT0gdW5kZWZpbmVkICYmIGhvb2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBob29rc1tpXSAmJiBpIDwgaG9va3MubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaG9va3NbaV0oc2VsZi5zZWxlY3RlZERhdGVzLCBzZWxmLmlucHV0LnZhbHVlLCBzZWxmLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQgPT09IFwib25DaGFuZ2VcIikge1xuICAgICAgICAgICAgc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudChcImlucHV0XCIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7XG4gICAgICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICAgICAgZS5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0RhdGVTZWxlY3RlZChkYXRlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWREYXRlID0gc2VsZi5zZWxlY3RlZERhdGVzW2ldO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZSBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoc2VsZWN0ZWREYXRlLCBkYXRlKSA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0RhdGVJblJhbmdlKGRhdGUpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiB8fCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIDwgMilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIChjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdKSA+PSAwICYmXG4gICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdKSA8PSAwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgfHwgc2VsZi5pc01vYmlsZSB8fCAhc2VsZi5tb250aE5hdilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2VsZi55ZWFyRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoeWVhckVsZW1lbnQsIGkpIHtcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIDEpO1xuICAgICAgICAgICAgZC5zZXRNb250aChzZWxmLmN1cnJlbnRNb250aCArIGkpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnNob3dNb250aHMgPiAxIHx8XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcubW9udGhTZWxlY3RvclR5cGUgPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICBtb250aFRvU3RyKGQuZ2V0TW9udGgoKSwgc2VsZi5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoLCBzZWxmLmwxMG4pICsgXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLnZhbHVlID0gZC5nZXRNb250aCgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5ZWFyRWxlbWVudC52YWx1ZSA9IGQuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93ID1cbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmN1cnJlbnRNb250aCA8PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKClcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmN1cnJlbnRZZWFyIDwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgc2VsZi5faGlkZU5leHRNb250aEFycm93ID1cbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heERhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmN1cnJlbnRNb250aCArIDEgPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKClcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmN1cnJlbnRZZWFyID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RGF0ZVN0cihzcGVjaWZpY0Zvcm1hdCkge1xuICAgICAgICB2YXIgZm9ybWF0ID0gc3BlY2lmaWNGb3JtYXQgfHxcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5hbHRJbnB1dCA/IHNlbGYuY29uZmlnLmFsdEZvcm1hdCA6IHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xuICAgICAgICByZXR1cm4gc2VsZi5zZWxlY3RlZERhdGVzXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkT2JqKSB7IHJldHVybiBzZWxmLmZvcm1hdERhdGUoZE9iaiwgZm9ybWF0KTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQsIGksIGFycikge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiB8fFxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgfHxcbiAgICAgICAgICAgICAgICBhcnIuaW5kZXhPZihkKSA9PT0gaTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIlxuICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5jb25qdW5jdGlvblxuICAgICAgICAgICAgOiBzZWxmLmwxMG4ucmFuZ2VTZXBhcmF0b3IpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVWYWx1ZSh0cmlnZ2VyQ2hhbmdlKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlID09PSB2b2lkIDApIHsgdHJpZ2dlckNoYW5nZSA9IHRydWU7IH1cbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZCAmJiBzZWxmLm1vYmlsZUZvcm1hdFN0cikge1xuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9XG4gICAgICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmlucHV0LnZhbHVlID0gZ2V0RGF0ZVN0cihzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC52YWx1ZSA9IGdldERhdGVTdHIoc2VsZi5jb25maWcuYWx0Rm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSAhPT0gZmFsc2UpXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblZhbHVlVXBkYXRlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vbnRoTmF2Q2xpY2soZSkge1xuICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgdmFyIGlzUHJldk1vbnRoID0gc2VsZi5wcmV2TW9udGhOYXYuY29udGFpbnMoZXZlbnRUYXJnZXQpO1xuICAgICAgICB2YXIgaXNOZXh0TW9udGggPSBzZWxmLm5leHRNb250aE5hdi5jb250YWlucyhldmVudFRhcmdldCk7XG4gICAgICAgIGlmIChpc1ByZXZNb250aCB8fCBpc05leHRNb250aCkge1xuICAgICAgICAgICAgY2hhbmdlTW9udGgoaXNQcmV2TW9udGggPyAtMSA6IDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGYueWVhckVsZW1lbnRzLmluZGV4T2YoZXZlbnRUYXJnZXQpID49IDApIHtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFycm93VXBcIikpIHtcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dEb3duXCIpKSB7XG4gICAgICAgICAgICBzZWxmLmNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRpbWVXcmFwcGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaXNLZXlEb3duID0gZS50eXBlID09PSBcImtleWRvd25cIiwgZXZlbnRUYXJnZXQgPSBnZXRFdmVudFRhcmdldChlKSwgaW5wdXQgPSBldmVudFRhcmdldDtcbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGV2ZW50VGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcbiAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgc2VsZi5sMTBuLmFtUE1baW50KHNlbGYuYW1QTS50ZXh0Q29udGVudCA9PT0gc2VsZi5sMTBuLmFtUE1bMF0pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWluID0gcGFyc2VGbG9hdChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpLCBtYXggPSBwYXJzZUZsb2F0KGlucHV0LmdldEF0dHJpYnV0ZShcIm1heFwiKSksIHN0ZXAgPSBwYXJzZUZsb2F0KGlucHV0LmdldEF0dHJpYnV0ZShcInN0ZXBcIikpLCBjdXJWYWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbHVlLCAxMCksIGRlbHRhID0gZS5kZWx0YSB8fFxuICAgICAgICAgICAgKGlzS2V5RG93biA/IChlLndoaWNoID09PSAzOCA/IDEgOiAtMSkgOiAwKTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VyVmFsdWUgKyBzdGVwICogZGVsdGE7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQudmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5wdXQudmFsdWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB2YXIgaXNIb3VyRWxlbSA9IGlucHV0ID09PSBzZWxmLmhvdXJFbGVtZW50LCBpc01pbnV0ZUVsZW0gPSBpbnB1dCA9PT0gc2VsZi5taW51dGVFbGVtZW50O1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICBtYXggK1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50KCFpc0hvdXJFbGVtKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW50KGlzSG91ckVsZW0pICYmIGludCghc2VsZi5hbVBNKSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzTWludXRlRWxlbSlcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50TnVtSW5wdXQodW5kZWZpbmVkLCAtMSwgc2VsZi5ob3VyRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPT09IHNlbGYuaG91ckVsZW1lbnQgPyBuZXdWYWx1ZSAtIG1heCAtIGludCghc2VsZi5hbVBNKSA6IG1pbjtcbiAgICAgICAgICAgICAgICBpZiAoaXNNaW51dGVFbGVtKVxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dCh1bmRlZmluZWQsIDEsIHNlbGYuaG91ckVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAmJlxuICAgICAgICAgICAgICAgIGlzSG91ckVsZW0gJiZcbiAgICAgICAgICAgICAgICAoc3RlcCA9PT0gMVxuICAgICAgICAgICAgICAgICAgICA/IG5ld1ZhbHVlICsgY3VyVmFsdWUgPT09IDIzXG4gICAgICAgICAgICAgICAgICAgIDogTWF0aC5hYnMobmV3VmFsdWUgLSBjdXJWYWx1ZSkgPiBzdGVwKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubDEwbi5hbVBNW2ludChzZWxmLmFtUE0udGV4dENvbnRlbnQgPT09IHNlbGYubDEwbi5hbVBNWzBdKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHBhZChuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdCgpO1xuICAgIHJldHVybiBzZWxmO1xufVxuZnVuY3Rpb24gX2ZsYXRwaWNrcihub2RlTGlzdCwgY29uZmlnKSB7XG4gICAgdmFyIG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgICAgIC5jYWxsKG5vZGVMaXN0KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7IH0pO1xuICAgIHZhciBpbnN0YW5jZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZwLW9taXRcIikgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBpZiAobm9kZS5fZmxhdHBpY2tyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBub2RlLl9mbGF0cGlja3IuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrciA9IEZsYXRwaWNrckluc3RhbmNlKG5vZGUsIGNvbmZpZyB8fCB7fSk7XG4gICAgICAgICAgICBpbnN0YW5jZXMucHVzaChub2RlLl9mbGF0cGlja3IpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZXMubGVuZ3RoID09PSAxID8gaW5zdGFuY2VzWzBdIDogaW5zdGFuY2VzO1xufVxuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIHR5cGVvZiBIVE1MQ29sbGVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIHR5cGVvZiBOb2RlTGlzdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5mbGF0cGlja3IgPSBOb2RlTGlzdC5wcm90b3R5cGUuZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xuICAgIH07XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmZsYXRwaWNrciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IoW3RoaXNdLCBjb25maWcpO1xuICAgIH07XG59XG52YXIgZmxhdHBpY2tyID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgY29uZmlnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKFtzZWxlY3Rvcl0sIGNvbmZpZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcihzZWxlY3RvciwgY29uZmlnKTtcbiAgICB9XG59O1xuZmxhdHBpY2tyLmRlZmF1bHRDb25maWcgPSB7fTtcbmZsYXRwaWNrci5sMTBucyA9IHtcbiAgICBlbjogX19hc3NpZ24oe30sIEVuZ2xpc2gpLFxuICAgIGRlZmF1bHQ6IF9fYXNzaWduKHt9LCBFbmdsaXNoKSxcbn07XG5mbGF0cGlja3IubG9jYWxpemUgPSBmdW5jdGlvbiAobDEwbikge1xuICAgIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0KSwgbDEwbik7XG59O1xuZmxhdHBpY2tyLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKSwgY29uZmlnKTtcbn07XG5mbGF0cGlja3IucGFyc2VEYXRlID0gY3JlYXRlRGF0ZVBhcnNlcih7fSk7XG5mbGF0cGlja3IuZm9ybWF0RGF0ZSA9IGNyZWF0ZURhdGVGb3JtYXR0ZXIoe30pO1xuZmxhdHBpY2tyLmNvbXBhcmVEYXRlcyA9IGNvbXBhcmVEYXRlcztcbmlmICh0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBqUXVlcnkuZm4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBqUXVlcnkuZm4uZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xuICAgIH07XG59XG5EYXRlLnByb3RvdHlwZS5mcF9pbmNyID0gZnVuY3Rpb24gKGRheXMpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpICsgKHR5cGVvZiBkYXlzID09PSBcInN0cmluZ1wiID8gcGFyc2VJbnQoZGF5cywgMTApIDogZGF5cykpO1xufTtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luZG93LmZsYXRwaWNrciA9IGZsYXRwaWNrcjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZsYXRwaWNrcjtcbiIsImV4cG9ydCB2YXIgZW5nbGlzaCA9IHtcbiAgICB3ZWVrZGF5czoge1xuICAgICAgICBzaG9ydGhhbmQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgICAgICAgbG9uZ2hhbmQ6IFtcbiAgICAgICAgICAgIFwiU3VuZGF5XCIsXG4gICAgICAgICAgICBcIk1vbmRheVwiLFxuICAgICAgICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgXCJGcmlkYXlcIixcbiAgICAgICAgICAgIFwiU2F0dXJkYXlcIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIG1vbnRoczoge1xuICAgICAgICBzaG9ydGhhbmQ6IFtcbiAgICAgICAgICAgIFwiSmFuXCIsXG4gICAgICAgICAgICBcIkZlYlwiLFxuICAgICAgICAgICAgXCJNYXJcIixcbiAgICAgICAgICAgIFwiQXByXCIsXG4gICAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgICAgXCJKdW5cIixcbiAgICAgICAgICAgIFwiSnVsXCIsXG4gICAgICAgICAgICBcIkF1Z1wiLFxuICAgICAgICAgICAgXCJTZXBcIixcbiAgICAgICAgICAgIFwiT2N0XCIsXG4gICAgICAgICAgICBcIk5vdlwiLFxuICAgICAgICAgICAgXCJEZWNcIixcbiAgICAgICAgXSxcbiAgICAgICAgbG9uZ2hhbmQ6IFtcbiAgICAgICAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICAgICAgXCJNYXJjaFwiLFxuICAgICAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgIFwiSnVuZVwiLFxuICAgICAgICAgICAgXCJKdWx5XCIsXG4gICAgICAgICAgICBcIkF1Z3VzdFwiLFxuICAgICAgICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICAgICAgXCJEZWNlbWJlclwiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgZGF5c0luTW9udGg6IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcbiAgICBmaXJzdERheU9mV2VlazogMCxcbiAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnRoKSB7XG4gICAgICAgIHZhciBzID0gbnRoICUgMTAwO1xuICAgICAgICBpZiAocyA+IDMgJiYgcyA8IDIxKVxuICAgICAgICAgICAgcmV0dXJuIFwidGhcIjtcbiAgICAgICAgc3dpdGNoIChzICUgMTApIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdFwiO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5kXCI7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidGhcIjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmFuZ2VTZXBhcmF0b3I6IFwiIHRvIFwiLFxuICAgIHdlZWtBYmJyZXZpYXRpb246IFwiV2tcIixcbiAgICBzY3JvbGxUaXRsZTogXCJTY3JvbGwgdG8gaW5jcmVtZW50XCIsXG4gICAgdG9nZ2xlVGl0bGU6IFwiQ2xpY2sgdG8gdG9nZ2xlXCIsXG4gICAgYW1QTTogW1wiQU1cIiwgXCJQTVwiXSxcbiAgICB5ZWFyQXJpYUxhYmVsOiBcIlllYXJcIixcbiAgICBtb250aEFyaWFMYWJlbDogXCJNb250aFwiLFxuICAgIGhvdXJBcmlhTGFiZWw6IFwiSG91clwiLFxuICAgIG1pbnV0ZUFyaWFMYWJlbDogXCJNaW51dGVcIixcbiAgICB0aW1lXzI0aHI6IGZhbHNlLFxufTtcbmV4cG9ydCBkZWZhdWx0IGVuZ2xpc2g7XG4iLCJleHBvcnQgdmFyIEhPT0tTID0gW1xuICAgIFwib25DaGFuZ2VcIixcbiAgICBcIm9uQ2xvc2VcIixcbiAgICBcIm9uRGF5Q3JlYXRlXCIsXG4gICAgXCJvbkRlc3Ryb3lcIixcbiAgICBcIm9uS2V5RG93blwiLFxuICAgIFwib25Nb250aENoYW5nZVwiLFxuICAgIFwib25PcGVuXCIsXG4gICAgXCJvblBhcnNlQ29uZmlnXCIsXG4gICAgXCJvblJlYWR5XCIsXG4gICAgXCJvblZhbHVlVXBkYXRlXCIsXG4gICAgXCJvblllYXJDaGFuZ2VcIixcbiAgICBcIm9uUHJlQ2FsZW5kYXJQb3NpdGlvblwiLFxuXTtcbmV4cG9ydCB2YXIgZGVmYXVsdHMgPSB7XG4gICAgX2Rpc2FibGU6IFtdLFxuICAgIGFsbG93SW5wdXQ6IGZhbHNlLFxuICAgIGFsbG93SW52YWxpZFByZWxvYWQ6IGZhbHNlLFxuICAgIGFsdEZvcm1hdDogXCJGIGosIFlcIixcbiAgICBhbHRJbnB1dDogZmFsc2UsXG4gICAgYWx0SW5wdXRDbGFzczogXCJmb3JtLWNvbnRyb2wgaW5wdXRcIixcbiAgICBhbmltYXRlOiB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpID09PSAtMSxcbiAgICBhcmlhRGF0ZUZvcm1hdDogXCJGIGosIFlcIixcbiAgICBhdXRvRmlsbERlZmF1bHRUaW1lOiB0cnVlLFxuICAgIGNsaWNrT3BlbnM6IHRydWUsXG4gICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcbiAgICBjb25qdW5jdGlvbjogXCIsIFwiLFxuICAgIGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcbiAgICBkZWZhdWx0SG91cjogMTIsXG4gICAgZGVmYXVsdE1pbnV0ZTogMCxcbiAgICBkZWZhdWx0U2Vjb25kczogMCxcbiAgICBkaXNhYmxlOiBbXSxcbiAgICBkaXNhYmxlTW9iaWxlOiBmYWxzZSxcbiAgICBlbmFibGVTZWNvbmRzOiBmYWxzZSxcbiAgICBlbmFibGVUaW1lOiBmYWxzZSxcbiAgICBlcnJvckhhbmRsZXI6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUud2FybihlcnIpO1xuICAgIH0sXG4gICAgZ2V0V2VlazogZnVuY3Rpb24gKGdpdmVuRGF0ZSkge1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGdpdmVuRGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAzIC0gKChkYXRlLmdldERheSgpICsgNikgJSA3KSk7XG4gICAgICAgIHZhciB3ZWVrMSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgNCk7XG4gICAgICAgIHJldHVybiAoMSArXG4gICAgICAgICAgICBNYXRoLnJvdW5kKCgoZGF0ZS5nZXRUaW1lKCkgLSB3ZWVrMS5nZXRUaW1lKCkpIC8gODY0MDAwMDAgLVxuICAgICAgICAgICAgICAgIDMgK1xuICAgICAgICAgICAgICAgICgod2VlazEuZ2V0RGF5KCkgKyA2KSAlIDcpKSAvXG4gICAgICAgICAgICAgICAgNykpO1xuICAgIH0sXG4gICAgaG91ckluY3JlbWVudDogMSxcbiAgICBpZ25vcmVkRm9jdXNFbGVtZW50czogW10sXG4gICAgaW5saW5lOiBmYWxzZSxcbiAgICBsb2NhbGU6IFwiZGVmYXVsdFwiLFxuICAgIG1pbnV0ZUluY3JlbWVudDogNSxcbiAgICBtb2RlOiBcInNpbmdsZVwiLFxuICAgIG1vbnRoU2VsZWN0b3JUeXBlOiBcImRyb3Bkb3duXCIsXG4gICAgbmV4dEFycm93OiBcIjxzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcgMTcnPjxnPjwvZz48cGF0aCBkPSdNMTMuMjA3IDguNDcybC03Ljg1NCA3Ljg1NC0wLjcwNy0wLjcwNyA3LjE0Ni03LjE0Ni03LjE0Ni03LjE0OCAwLjcwNy0wLjcwNyA3Ljg1NCA3Ljg1NHonIC8+PC9zdmc+XCIsXG4gICAgbm9DYWxlbmRhcjogZmFsc2UsXG4gICAgbm93OiBuZXcgRGF0ZSgpLFxuICAgIG9uQ2hhbmdlOiBbXSxcbiAgICBvbkNsb3NlOiBbXSxcbiAgICBvbkRheUNyZWF0ZTogW10sXG4gICAgb25EZXN0cm95OiBbXSxcbiAgICBvbktleURvd246IFtdLFxuICAgIG9uTW9udGhDaGFuZ2U6IFtdLFxuICAgIG9uT3BlbjogW10sXG4gICAgb25QYXJzZUNvbmZpZzogW10sXG4gICAgb25SZWFkeTogW10sXG4gICAgb25WYWx1ZVVwZGF0ZTogW10sXG4gICAgb25ZZWFyQ2hhbmdlOiBbXSxcbiAgICBvblByZUNhbGVuZGFyUG9zaXRpb246IFtdLFxuICAgIHBsdWdpbnM6IFtdLFxuICAgIHBvc2l0aW9uOiBcImF1dG9cIixcbiAgICBwb3NpdGlvbkVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBwcmV2QXJyb3c6IFwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J001LjIwNyA4LjQ3MWw3LjE0NiA3LjE0Ny0wLjcwNyAwLjcwNy03Ljg1My03Ljg1NCA3Ljg1NC03Ljg1MyAwLjcwNyAwLjcwNy03LjE0NyA3LjE0NnonIC8+PC9zdmc+XCIsXG4gICAgc2hvcnRoYW5kQ3VycmVudE1vbnRoOiBmYWxzZSxcbiAgICBzaG93TW9udGhzOiAxLFxuICAgIHN0YXRpYzogZmFsc2UsXG4gICAgdGltZV8yNGhyOiBmYWxzZSxcbiAgICB3ZWVrTnVtYmVyczogZmFsc2UsXG4gICAgd3JhcDogZmFsc2UsXG59O1xuIiwiaW1wb3J0IHsgdG9rZW5SZWdleCwgcmV2Rm9ybWF0LCBmb3JtYXRzLCB9IGZyb20gXCIuL2Zvcm1hdHRpbmdcIjtcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSBcIi4uL3R5cGVzL29wdGlvbnNcIjtcbmltcG9ydCB7IGVuZ2xpc2ggfSBmcm9tIFwiLi4vbDEwbi9kZWZhdWx0XCI7XG5leHBvcnQgdmFyIGNyZWF0ZURhdGVGb3JtYXR0ZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5jb25maWcsIGNvbmZpZyA9IF9iID09PSB2b2lkIDAgPyBkZWZhdWx0cyA6IF9iLCBfYyA9IF9hLmwxMG4sIGwxMG4gPSBfYyA9PT0gdm9pZCAwID8gZW5nbGlzaCA6IF9jLCBfZCA9IF9hLmlzTW9iaWxlLCBpc01vYmlsZSA9IF9kID09PSB2b2lkIDAgPyBmYWxzZSA6IF9kO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0ZU9iaiwgZnJtdCwgb3ZlcnJpZGVMb2NhbGUpIHtcbiAgICAgICAgdmFyIGxvY2FsZSA9IG92ZXJyaWRlTG9jYWxlIHx8IGwxMG47XG4gICAgICAgIGlmIChjb25maWcuZm9ybWF0RGF0ZSAhPT0gdW5kZWZpbmVkICYmICFpc01vYmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5mb3JtYXREYXRlKGRhdGVPYmosIGZybXQsIGxvY2FsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZybXRcbiAgICAgICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYywgaSwgYXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0c1tjXSAmJiBhcnJbaSAtIDFdICE9PSBcIlxcXFxcIlxuICAgICAgICAgICAgICAgID8gZm9ybWF0c1tjXShkYXRlT2JqLCBsb2NhbGUsIGNvbmZpZylcbiAgICAgICAgICAgICAgICA6IGMgIT09IFwiXFxcXFwiXG4gICAgICAgICAgICAgICAgICAgID8gY1xuICAgICAgICAgICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9O1xufTtcbmV4cG9ydCB2YXIgY3JlYXRlRGF0ZVBhcnNlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiA9IF9hLmNvbmZpZywgY29uZmlnID0gX2IgPT09IHZvaWQgMCA/IGRlZmF1bHRzIDogX2IsIF9jID0gX2EubDEwbiwgbDEwbiA9IF9jID09PSB2b2lkIDAgPyBlbmdsaXNoIDogX2M7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlLCBnaXZlbkZvcm1hdCwgdGltZWxlc3MsIGN1c3RvbUxvY2FsZSkge1xuICAgICAgICBpZiAoZGF0ZSAhPT0gMCAmJiAhZGF0ZSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBsb2NhbGUgPSBjdXN0b21Mb2NhbGUgfHwgbDEwbjtcbiAgICAgICAgdmFyIHBhcnNlZERhdGU7XG4gICAgICAgIHZhciBkYXRlT3JpZyA9IGRhdGU7XG4gICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRlICE9PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICBkYXRlLnRvRml4ZWQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSBnaXZlbkZvcm1hdCB8fCAoY29uZmlnIHx8IGRlZmF1bHRzKS5kYXRlRm9ybWF0O1xuICAgICAgICAgICAgdmFyIGRhdGVzdHIgPSBTdHJpbmcoZGF0ZSkudHJpbSgpO1xuICAgICAgICAgICAgaWYgKGRhdGVzdHIgPT09IFwidG9kYXlcIikge1xuICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRpbWVsZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZyAmJiBjb25maWcucGFyc2VEYXRlKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IGNvbmZpZy5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKC9aJC8udGVzdChkYXRlc3RyKSB8fFxuICAgICAgICAgICAgICAgIC9HTVQkLy50ZXN0KGRhdGVzdHIpKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZWQgPSB2b2lkIDAsIG9wcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBtYXRjaEluZGV4ID0gMCwgcmVnZXhTdHIgPSBcIlwiOyBpIDwgZm9ybWF0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IGZvcm1hdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQmFja1NsYXNoID0gdG9rZW4gPT09IFwiXFxcXFwiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZCA9IGZvcm1hdFtpIC0gMV0gPT09IFwiXFxcXFwiIHx8IGlzQmFja1NsYXNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5SZWdleFt0b2tlbl0gJiYgIWVzY2FwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4U3RyICs9IHRva2VuUmVnZXhbdG9rZW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gbmV3IFJlZ0V4cChyZWdleFN0cikuZXhlYyhkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiAobWF0Y2hlZCA9IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BzW3Rva2VuICE9PSBcIllcIiA/IFwicHVzaFwiIDogXCJ1bnNoaWZ0XCJdKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IHJldkZvcm1hdFt0b2tlbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogbWF0Y2hbKyttYXRjaEluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNCYWNrU2xhc2gpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdleFN0ciArPSBcIi5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICFjb25maWcgfHwgIWNvbmZpZy5ub0NhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSwgMCwgMCwgMCwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSk7XG4gICAgICAgICAgICAgICAgb3BzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IF9hLmZuLCB2YWwgPSBfYS52YWw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkRGF0ZSA9IGZuKHBhcnNlZERhdGUsIHZhbCwgbG9jYWxlKSB8fCBwYXJzZWREYXRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gbWF0Y2hlZCA/IHBhcnNlZERhdGUgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEocGFyc2VkRGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKHBhcnNlZERhdGUuZ2V0VGltZSgpKSkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIHByb3ZpZGVkOiBcIiArIGRhdGVPcmlnKSk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lbGVzcyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHBhcnNlZERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiBwYXJzZWREYXRlO1xuICAgIH07XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVEYXRlcyhkYXRlMSwgZGF0ZTIsIHRpbWVsZXNzKSB7XG4gICAgaWYgKHRpbWVsZXNzID09PSB2b2lkIDApIHsgdGltZWxlc3MgPSB0cnVlOyB9XG4gICAgaWYgKHRpbWVsZXNzICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKGRhdGUxLmdldFRpbWUoKSkuc2V0SG91cnMoMCwgMCwgMCwgMCkgLVxuICAgICAgICAgICAgbmV3IERhdGUoZGF0ZTIuZ2V0VGltZSgpKS5zZXRIb3VycygwLCAwLCAwLCAwKSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlMS5nZXRUaW1lKCkgLSBkYXRlMi5nZXRUaW1lKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVRpbWVzKGRhdGUxLCBkYXRlMikge1xuICAgIHJldHVybiAoMzYwMCAqIChkYXRlMS5nZXRIb3VycygpIC0gZGF0ZTIuZ2V0SG91cnMoKSkgK1xuICAgICAgICA2MCAqIChkYXRlMS5nZXRNaW51dGVzKCkgLSBkYXRlMi5nZXRNaW51dGVzKCkpICtcbiAgICAgICAgZGF0ZTEuZ2V0U2Vjb25kcygpIC1cbiAgICAgICAgZGF0ZTIuZ2V0U2Vjb25kcygpKTtcbn1cbmV4cG9ydCB2YXIgaXNCZXR3ZWVuID0gZnVuY3Rpb24gKHRzLCB0czEsIHRzMikge1xuICAgIHJldHVybiB0cyA+IE1hdGgubWluKHRzMSwgdHMyKSAmJiB0cyA8IE1hdGgubWF4KHRzMSwgdHMyKTtcbn07XG5leHBvcnQgdmFyIGNhbGN1bGF0ZVNlY29uZHNTaW5jZU1pZG5pZ2h0ID0gZnVuY3Rpb24gKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gICAgcmV0dXJuIGhvdXJzICogMzYwMCArIG1pbnV0ZXMgKiA2MCArIHNlY29uZHM7XG59O1xuZXhwb3J0IHZhciBwYXJzZVNlY29uZHMgPSBmdW5jdGlvbiAoc2Vjb25kc1NpbmNlTWlkbmlnaHQpIHtcbiAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHNlY29uZHNTaW5jZU1pZG5pZ2h0IC8gMzYwMCksIG1pbnV0ZXMgPSAoc2Vjb25kc1NpbmNlTWlkbmlnaHQgLSBob3VycyAqIDM2MDApIC8gNjA7XG4gICAgcmV0dXJuIFtob3VycywgbWludXRlcywgc2Vjb25kc1NpbmNlTWlkbmlnaHQgLSBob3VycyAqIDM2MDAgLSBtaW51dGVzICogNjBdO1xufTtcbmV4cG9ydCB2YXIgZHVyYXRpb24gPSB7XG4gICAgREFZOiA4NjQwMDAwMCxcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEhvdXJzKGNvbmZpZykge1xuICAgIHZhciBob3VycyA9IGNvbmZpZy5kZWZhdWx0SG91cjtcbiAgICB2YXIgbWludXRlcyA9IGNvbmZpZy5kZWZhdWx0TWludXRlO1xuICAgIHZhciBzZWNvbmRzID0gY29uZmlnLmRlZmF1bHRTZWNvbmRzO1xuICAgIGlmIChjb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBtaW5Ib3VyID0gY29uZmlnLm1pbkRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgdmFyIG1pbk1pbnV0ZXMgPSBjb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHZhciBtaW5TZWNvbmRzID0gY29uZmlnLm1pbkRhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgICBpZiAoaG91cnMgPCBtaW5Ib3VyKSB7XG4gICAgICAgICAgICBob3VycyA9IG1pbkhvdXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXJzID09PSBtaW5Ib3VyICYmIG1pbnV0ZXMgPCBtaW5NaW51dGVzKSB7XG4gICAgICAgICAgICBtaW51dGVzID0gbWluTWludXRlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG91cnMgPT09IG1pbkhvdXIgJiYgbWludXRlcyA9PT0gbWluTWludXRlcyAmJiBzZWNvbmRzIDwgbWluU2Vjb25kcylcbiAgICAgICAgICAgIHNlY29uZHMgPSBjb25maWcubWluRGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgfVxuICAgIGlmIChjb25maWcubWF4RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBtYXhIciA9IGNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCk7XG4gICAgICAgIHZhciBtYXhNaW51dGVzID0gY29uZmlnLm1heERhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICBob3VycyA9IE1hdGgubWluKGhvdXJzLCBtYXhIcik7XG4gICAgICAgIGlmIChob3VycyA9PT0gbWF4SHIpXG4gICAgICAgICAgICBtaW51dGVzID0gTWF0aC5taW4obWF4TWludXRlcywgbWludXRlcyk7XG4gICAgICAgIGlmIChob3VycyA9PT0gbWF4SHIgJiYgbWludXRlcyA9PT0gbWF4TWludXRlcylcbiAgICAgICAgICAgIHNlY29uZHMgPSBjb25maWcubWF4RGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgfVxuICAgIHJldHVybiB7IGhvdXJzOiBob3VycywgbWludXRlczogbWludXRlcywgc2Vjb25kczogc2Vjb25kcyB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSwgYm9vbCkge1xuICAgIGlmIChib29sID09PSB0cnVlKVxuICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgY29udGVudCkge1xuICAgIHZhciBlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgXCJcIjtcbiAgICBjb250ZW50ID0gY29udGVudCB8fCBcIlwiO1xuICAgIGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGlmIChjb250ZW50ICE9PSB1bmRlZmluZWQpXG4gICAgICAgIGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTm9kZShub2RlKSB7XG4gICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZClcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYXJlbnQobm9kZSwgY29uZGl0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbihub2RlKSlcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKVxuICAgICAgICByZXR1cm4gZmluZFBhcmVudChub2RlLnBhcmVudE5vZGUsIGNvbmRpdGlvbik7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOdW1iZXJJbnB1dChpbnB1dENsYXNzTmFtZSwgb3B0cykge1xuICAgIHZhciB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm51bUlucHV0V3JhcHBlclwiKSwgbnVtSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJudW1JbnB1dCBcIiArIGlucHV0Q2xhc3NOYW1lKSwgYXJyb3dVcCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiYXJyb3dVcFwiKSwgYXJyb3dEb3duID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJhcnJvd0Rvd25cIik7XG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgOS4wXCIpID09PSAtMSkge1xuICAgICAgICBudW1JbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG51bUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgbnVtSW5wdXQucGF0dGVybiA9IFwiXFxcXGQqXCI7XG4gICAgfVxuICAgIGlmIChvcHRzICE9PSB1bmRlZmluZWQpXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvcHRzKVxuICAgICAgICAgICAgbnVtSW5wdXQuc2V0QXR0cmlidXRlKGtleSwgb3B0c1trZXldKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG51bUlucHV0KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFycm93VXApO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJyb3dEb3duKTtcbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFRhcmdldChldmVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnQuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICAgICAgICByZXR1cm4gcGF0aFswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBpbnQsIHBhZCB9IGZyb20gXCIuLi91dGlsc1wiO1xudmFyIGRvTm90aGluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfTtcbmV4cG9ydCB2YXIgbW9udGhUb1N0ciA9IGZ1bmN0aW9uIChtb250aE51bWJlciwgc2hvcnRoYW5kLCBsb2NhbGUpIHsgcmV0dXJuIGxvY2FsZS5tb250aHNbc2hvcnRoYW5kID8gXCJzaG9ydGhhbmRcIiA6IFwibG9uZ2hhbmRcIl1bbW9udGhOdW1iZXJdOyB9O1xuZXhwb3J0IHZhciByZXZGb3JtYXQgPSB7XG4gICAgRDogZG9Ob3RoaW5nLFxuICAgIEY6IGZ1bmN0aW9uIChkYXRlT2JqLCBtb250aE5hbWUsIGxvY2FsZSkge1xuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKGxvY2FsZS5tb250aHMubG9uZ2hhbmQuaW5kZXhPZihtb250aE5hbWUpKTtcbiAgICB9LFxuICAgIEc6IGZ1bmN0aW9uIChkYXRlT2JqLCBob3VyKSB7XG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMoKGRhdGVPYmouZ2V0SG91cnMoKSA+PSAxMiA/IDEyIDogMCkgKyBwYXJzZUZsb2F0KGhvdXIpKTtcbiAgICB9LFxuICAgIEg6IGZ1bmN0aW9uIChkYXRlT2JqLCBob3VyKSB7XG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMocGFyc2VGbG9hdChob3VyKSk7XG4gICAgfSxcbiAgICBKOiBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF5KSB7XG4gICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xuICAgIH0sXG4gICAgSzogZnVuY3Rpb24gKGRhdGVPYmosIGFtUE0sIGxvY2FsZSkge1xuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKChkYXRlT2JqLmdldEhvdXJzKCkgJSAxMikgK1xuICAgICAgICAgICAgMTIgKiBpbnQobmV3IFJlZ0V4cChsb2NhbGUuYW1QTVsxXSwgXCJpXCIpLnRlc3QoYW1QTSkpKTtcbiAgICB9LFxuICAgIE06IGZ1bmN0aW9uIChkYXRlT2JqLCBzaG9ydE1vbnRoLCBsb2NhbGUpIHtcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChsb2NhbGUubW9udGhzLnNob3J0aGFuZC5pbmRleE9mKHNob3J0TW9udGgpKTtcbiAgICB9LFxuICAgIFM6IGZ1bmN0aW9uIChkYXRlT2JqLCBzZWNvbmRzKSB7XG4gICAgICAgIGRhdGVPYmouc2V0U2Vjb25kcyhwYXJzZUZsb2F0KHNlY29uZHMpKTtcbiAgICB9LFxuICAgIFU6IGZ1bmN0aW9uIChfLCB1bml4U2Vjb25kcykgeyByZXR1cm4gbmV3IERhdGUocGFyc2VGbG9hdCh1bml4U2Vjb25kcykgKiAxMDAwKTsgfSxcbiAgICBXOiBmdW5jdGlvbiAoZGF0ZU9iaiwgd2Vla051bSwgbG9jYWxlKSB7XG4gICAgICAgIHZhciB3ZWVrTnVtYmVyID0gcGFyc2VJbnQod2Vla051bSk7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCAwLCAyICsgKHdlZWtOdW1iZXIgLSAxKSAqIDcsIDAsIDAsIDAsIDApO1xuICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXRlLmdldERheSgpICsgbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcbiAgICBZOiBmdW5jdGlvbiAoZGF0ZU9iaiwgeWVhcikge1xuICAgICAgICBkYXRlT2JqLnNldEZ1bGxZZWFyKHBhcnNlRmxvYXQoeWVhcikpO1xuICAgIH0sXG4gICAgWjogZnVuY3Rpb24gKF8sIElTT0RhdGUpIHsgcmV0dXJuIG5ldyBEYXRlKElTT0RhdGUpOyB9LFxuICAgIGQ6IGZ1bmN0aW9uIChkYXRlT2JqLCBkYXkpIHtcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XG4gICAgfSxcbiAgICBoOiBmdW5jdGlvbiAoZGF0ZU9iaiwgaG91cikge1xuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKChkYXRlT2JqLmdldEhvdXJzKCkgPj0gMTIgPyAxMiA6IDApICsgcGFyc2VGbG9hdChob3VyKSk7XG4gICAgfSxcbiAgICBpOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbWludXRlcykge1xuICAgICAgICBkYXRlT2JqLnNldE1pbnV0ZXMocGFyc2VGbG9hdChtaW51dGVzKSk7XG4gICAgfSxcbiAgICBqOiBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF5KSB7XG4gICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xuICAgIH0sXG4gICAgbDogZG9Ob3RoaW5nLFxuICAgIG06IGZ1bmN0aW9uIChkYXRlT2JqLCBtb250aCkge1xuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XG4gICAgfSxcbiAgICBuOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbW9udGgpIHtcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChwYXJzZUZsb2F0KG1vbnRoKSAtIDEpO1xuICAgIH0sXG4gICAgczogZnVuY3Rpb24gKGRhdGVPYmosIHNlY29uZHMpIHtcbiAgICAgICAgZGF0ZU9iai5zZXRTZWNvbmRzKHBhcnNlRmxvYXQoc2Vjb25kcykpO1xuICAgIH0sXG4gICAgdTogZnVuY3Rpb24gKF8sIHVuaXhNaWxsU2Vjb25kcykge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUocGFyc2VGbG9hdCh1bml4TWlsbFNlY29uZHMpKTtcbiAgICB9LFxuICAgIHc6IGRvTm90aGluZyxcbiAgICB5OiBmdW5jdGlvbiAoZGF0ZU9iaiwgeWVhcikge1xuICAgICAgICBkYXRlT2JqLnNldEZ1bGxZZWFyKDIwMDAgKyBwYXJzZUZsb2F0KHllYXIpKTtcbiAgICB9LFxufTtcbmV4cG9ydCB2YXIgdG9rZW5SZWdleCA9IHtcbiAgICBEOiBcIlwiLFxuICAgIEY6IFwiXCIsXG4gICAgRzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBIOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIEo6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXFxcXHcrXCIsXG4gICAgSzogXCJcIixcbiAgICBNOiBcIlwiLFxuICAgIFM6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgVTogXCIoLispXCIsXG4gICAgVzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBZOiBcIihcXFxcZHs0fSlcIixcbiAgICBaOiBcIiguKylcIixcbiAgICBkOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIGg6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgaTogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBqOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIGw6IFwiXCIsXG4gICAgbTogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBuOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIHM6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgdTogXCIoLispXCIsXG4gICAgdzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICB5OiBcIihcXFxcZHsyfSlcIixcbn07XG5leHBvcnQgdmFyIGZvcm1hdHMgPSB7XG4gICAgWjogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTsgfSxcbiAgICBEOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXMuc2hvcnRoYW5kW2Zvcm1hdHMudyhkYXRlLCBsb2NhbGUsIG9wdGlvbnMpXTtcbiAgICB9LFxuICAgIEY6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG1vbnRoVG9TdHIoZm9ybWF0cy5uKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykgLSAxLCBmYWxzZSwgbG9jYWxlKTtcbiAgICB9LFxuICAgIEc6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHBhZChmb3JtYXRzLmgoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSk7XG4gICAgfSxcbiAgICBIOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSk7IH0sXG4gICAgSjogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm9yZGluYWwgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBkYXRlLmdldERhdGUoKSArIGxvY2FsZS5vcmRpbmFsKGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgOiBkYXRlLmdldERhdGUoKTtcbiAgICB9LFxuICAgIEs6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUpIHsgcmV0dXJuIGxvY2FsZS5hbVBNW2ludChkYXRlLmdldEhvdXJzKCkgPiAxMSldOyB9LFxuICAgIE06IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIG1vbnRoVG9TdHIoZGF0ZS5nZXRNb250aCgpLCB0cnVlLCBsb2NhbGUpO1xuICAgIH0sXG4gICAgUzogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldFNlY29uZHMoKSk7IH0sXG4gICAgVTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC8gMTAwMDsgfSxcbiAgICBXOiBmdW5jdGlvbiAoZGF0ZSwgXywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5nZXRXZWVrKGRhdGUpO1xuICAgIH0sXG4gICAgWTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldEZ1bGxZZWFyKCksIDQpOyB9LFxuICAgIGQ6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpOyB9LFxuICAgIGg6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiAoZGF0ZS5nZXRIb3VycygpICUgMTIgPyBkYXRlLmdldEhvdXJzKCkgJSAxMiA6IDEyKTsgfSxcbiAgICBpOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0TWludXRlcygpKTsgfSxcbiAgICBqOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXREYXRlKCk7IH0sXG4gICAgbDogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzLmxvbmdoYW5kW2RhdGUuZ2V0RGF5KCldO1xuICAgIH0sXG4gICAgbTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKTsgfSxcbiAgICBuOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRNb250aCgpICsgMTsgfSxcbiAgICBzOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRTZWNvbmRzKCk7IH0sXG4gICAgdTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0VGltZSgpOyB9LFxuICAgIHc6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldERheSgpOyB9LFxuICAgIHk6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKS5zdWJzdHJpbmcoMik7IH0sXG59O1xuIiwiZXhwb3J0IHZhciBwYWQgPSBmdW5jdGlvbiAobnVtYmVyLCBsZW5ndGgpIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHsgbGVuZ3RoID0gMjsgfVxuICAgIHJldHVybiAoXCIwMDBcIiArIG51bWJlcikuc2xpY2UobGVuZ3RoICogLTEpO1xufTtcbmV4cG9ydCB2YXIgaW50ID0gZnVuY3Rpb24gKGJvb2wpIHsgcmV0dXJuIChib29sID09PSB0cnVlID8gMSA6IDApOyB9O1xuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZuLCB3YWl0KSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZm4uYXBwbHkoX3RoaXMsIGFyZ3MpOyB9LCB3YWl0KTtcbiAgICB9O1xufVxuZXhwb3J0IHZhciBhcnJheWlmeSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgPyBvYmogOiBbb2JqXTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbmlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKHRhcmdldFtrZXldID0gc291cmNlW2tleV0pOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBhcmdzXzEgPSBhcmdzOyBfYSA8IGFyZ3NfMS5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmdzXzFbX2FdO1xuICAgICAgICAgICAgX2xvb3BfMShzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbn1cbiIsImZ1bmN0aW9uIFRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRGF0ZS5ub3coKSkudG9TdHJpbmcoMTYpXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgIHRoaXMuZWRpdFRpdGxlID0gZnVuY3Rpb24obmV3TmFtZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3TmFtZTtcbiAgICB9O1xuXG4gICAgdGhpcy5lZGl0RGVzY3JpcHRpb24gPSBmdW5jdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfTtcblxuICAgIHRoaXMuZWRpdERhdGUgPSBmdW5jdGlvbihERE1NWVkpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3IERhdGUoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5jaGFuZ2VDb21wbGV0ZVN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSAhdGhpcy5pc0NvbXBsZXRlO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiB0aGlzLmR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgICBpc0NvbXBsZXRlOiB0aGlzLmlzQ29tcGxldGUsXG4gICAgICAgIGVkaXREYXRlOiB0aGlzLmVkaXREYXRlLFxuICAgICAgICBlZGl0RGVzY3JpcHRpb246IHRoaXMuZWRpdERlc2NyaXB0aW9uLFxuICAgICAgICBlZGl0VGl0bGU6IHRoaXMuZWRpdFRpdGxlLFxuICAgICAgICBjaGFuZ2VDb21wbGV0ZVN0YXR1czogdGhpcy5jaGFuZ2VDb21wbGV0ZVN0YXR1c1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0l0ZW07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IFRvZG9JdGVtID0gcmVxdWlyZSgnLi90b2RvSXRlbS5qcycpO1xuY29uc3QgZmxhdHBpY2tyID0gcmVxdWlyZShcImZsYXRwaWNrclwiKTtcblxuLy8gZmxhdHBpY2tyKFwiI3BsYWNlLWZsYXRwaWNrZXJcIiwge30pO1xuXG4vLyBTZWxlY3QgRE9NIEVsZW1lbnRzIG9mIGludGVyZXN0XG5uZXdJdGVtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctaXRlbS1idXR0b25cIilcblxuLy8gRXZlbnQgbGlzdGVuZXJzIGZvciBET00gRWxlbWVudHNcbm5ld0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUb2RvSXRlbSlcblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IHRvZG8gaXRlbVxuZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0oKSB7XG5cbiAgICByZWNlaXZpbmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpdGVtLWNhcmRcIilcbiAgICBcbiAgICBjb25zdCBkZWZhdXRUb2RvSXRlbSA9IFRvZG9JdGVtKC4uLk9iamVjdC52YWx1ZXMoXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlRlc3QgVG9kbyFcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cIixcbiAgICAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBwcmlvcml0eTogM1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG1haW4gY29udGFpbmVyIGRpdlxuICAgIGNvbnN0IGl0ZW1DYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbUNhcmREaXYuY2xhc3NOYW1lID0gJyc7XG4gICAgaXRlbUNhcmREaXYuaWQgPSAnaXRlbS1jYXJkJztcblxuICAgIC8vIENyZWF0ZSB0aGUgZm9ybSBlbGVtZW50XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmFjdGlvbiA9ICcjJztcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdmbGV4IGZsZXgtcm93IGFsaWduLXN0YXJ0IHctZnVsbCc7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGNoZWNrYm94IGRpdlxuICAgIGNvbnN0IGNoZWNrYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tib3hEaXYuY2xhc3NOYW1lID0gJ21yLTQnO1xuICAgIGNoZWNrYm94RGl2LmlkID0gJ2NoZWNrYm94LWRpdic7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGNoZWNrYm94IGlucHV0XG4gICAgY29uc3QgY2hlY2tib3hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3hJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveElucHV0Lm5hbWUgPSAnY29tcGxldGVkLXN0YXR1cyc7XG4gICAgY2hlY2tib3hJbnB1dC5pZCA9ICdjb21wbGV0ZWQtc3RhdHVzJztcbiAgICBjaGVja2JveElucHV0LmNsYXNzTmFtZSA9ICdhY2NlbnQtZ3JheS02MDAnO1xuICAgIGNoZWNrYm94RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94SW5wdXQpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBjaGVja2JveCBkaXYgdG8gdGhlIGZvcm1cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNoZWNrYm94RGl2KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgbWlkZGxlIGluZm8gZGl2XG4gICAgY29uc3QgbWlkZGxlSW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZGRsZUluZm9EaXYuY2xhc3NOYW1lID0gJ2ZsZXggZmxleC1jb2wgcGxhY2UtY29udGVudC1iZXR3ZWVuIHctZnVsbCc7XG4gICAgbWlkZGxlSW5mb0Rpdi5pZCA9ICdtaWRkbGUtaW5mbyc7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRpdGxlIGluZm8gZGl2XG4gICAgY29uc3QgdGl0bGVJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVJbmZvRGl2LmNsYXNzTmFtZSA9ICdmbGV4IGZsZXgtcm93IHBsYWNlLWNvbnRlbnQtYmV0d2VlbiB3LWZ1bGwnO1xuICAgIHRpdGxlSW5mb0Rpdi5pZCA9ICd0aXRsZS1pbmZvJztcblxuICAgIC8vIENyZWF0ZSB0aGUgdGl0bGUgbGVmdCBkaXZcbiAgICBjb25zdCB0aXRsZUxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUxlZnREaXYuY2xhc3NOYW1lID0gJ2ZsZXggcGxhY2UtY29udGVudC1iZXR3ZWVuIGdhcC0yJztcbiAgICB0aXRsZUxlZnREaXYuaWQgPSAndGl0bGUtbGVmdCc7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRpdGxlIGlucHV0XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZS1pbnB1dCc7XG4gICAgdGl0bGVJbnB1dC5jbGFzc05hbWUgPSAndGV4dC1sZyB0ZXh0LWdyYXktODAwIGJnLXRyYW5zcGFyZW50IGZvbnQtbWVkaXVtIHctZnVsbCByZXNpemUtbm9uZSBiZy1ub25lIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgb3V0bGluZS0wIGZvY3VzOm91dGxpbmUtbm9uZSc7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IGRlZmF1dFRvZG9JdGVtLnRpdGxlO1xuICAgIHRpdGxlSW5wdXQuYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgdGl0bGVMZWZ0RGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSB0aXRsZSBsZWZ0IGRpdiB0byB0aGUgdGl0bGUgaW5mbyBkaXZcbiAgICB0aXRsZUluZm9EaXYuYXBwZW5kQ2hpbGQodGl0bGVMZWZ0RGl2KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdGl0bGUgcmlnaHQgZGl2XG4gICAgY29uc3QgdGl0bGVSaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlUmlnaHREaXYuY2xhc3NOYW1lID0gJ2ZsZXggcGxhY2UtY29udGVudC1iZXR3ZWVuIGdhcC00JztcbiAgICB0aXRsZVJpZ2h0RGl2LmlkID0gJ3RpdGxlLXJpZ2h0JztcblxuICAgIC8vIENyZWF0ZSB0aGUgcHJpb3JpdHkgbWFya2VycyBkaXZcbiAgICBjb25zdCBwcmlvcml0eU1hcmtlcnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eU1hcmtlcnNEaXYuY2xhc3NOYW1lID0gJ2ZsZXggZmxleC1jb2wgZ2FwLTEgaC1mdWxsIHctMic7XG4gICAgcHJpb3JpdHlNYXJrZXJzRGl2LmlkID0gJ3ByaW9yaXR5LW1hcmtlcnMnO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBwcmlvcml0eSBtYXJrZXIgZWxlbWVudHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBtYXJrZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFya2VyRGl2LmNsYXNzTmFtZSA9ICdncm93JztcbiAgICAgICAgbWFya2VyRGl2LmlkID0gYG1hcmtlciR7aSArIDF9YDtcbiAgICAgICAgbWFya2VyRGl2LmNsYXNzTGlzdC5hZGQoYGJnLSR7aSA9PT0gMCA/ICdyZWQnIDogaSA9PT0gMSA/ICdvcmFuZ2UnIDogJ2dyZWVuJ30tMzAwYCk7XG4gICAgICAgIHByaW9yaXR5TWFya2Vyc0Rpdi5hcHBlbmRDaGlsZChtYXJrZXJEaXYpO1xuICAgIH1cblxuICAgIC8vIEFwcGVuZCB0aGUgcHJpb3JpdHkgbWFya2VycyBkaXYgdG8gdGhlIHRpdGxlIHJpZ2h0IGRpdlxuICAgIHRpdGxlUmlnaHREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlNYXJrZXJzRGl2KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZHVlIHRpbWUgc3BhbiBlbGVtZW50XG4gICAgY29uc3QgZHVlVGltZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHVlVGltZVNwYW4uY2xhc3NOYW1lID0gJ2ZsZXggcHgtMiBweS0xIGdyb3ctMCBzaHJpbmstMCBpdGVtcy1jZW50ZXIgdGV4dC14cyBsZWFkaW5nLW5vbmUgYmctZ3JheS0zMDAgdGV4dC1ncmF5LTYwMCByb3VuZGVkLWZ1bGwgZ2FwLTEnO1xuICAgIGR1ZVRpbWVTcGFuLmlubmVySFRNTCA9IFwiRHVlXCJcblxuICAgIC8vIENyZWF0ZSB0aGUgdGltZSBlbGVtZW50IHdpdGhpbiB0aGUgZHVlIHRpbWUgc3BhblxuICAgIGNvbnN0IHRpbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGltZScpO1xuICAgIHRpbWVFbGVtZW50LmNsYXNzTmFtZSA9ICd0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZCc7XG4gICAgdGltZUVsZW1lbnQuZGF0ZXRpbWUgPSAnMjAxOC0wNy0wN1QyMDowMDowMCc7XG4gICAgdGltZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkZWZhdXRUb2RvSXRlbS5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAgICAgJ2VuLWF1JyxcbiAgICAgICAge1xuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lOiAndXRjJ1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgXG4gICAgZHVlVGltZVNwYW4uYXBwZW5kQ2hpbGQodGltZUVsZW1lbnQpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBkdWUgdGltZSBzcGFuIHRvIHRoZSB0aXRsZSByaWdodCBkaXZcbiAgICB0aXRsZVJpZ2h0RGl2LmFwcGVuZENoaWxkKGR1ZVRpbWVTcGFuKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgdGl0bGUgcmlnaHQgZGl2IHRvIHRoZSB0aXRsZSBpbmZvIGRpdlxuICAgIHRpdGxlSW5mb0Rpdi5hcHBlbmRDaGlsZCh0aXRsZVJpZ2h0RGl2KTtcblxuICAgIC8vIEFwcGVuZCB0aGUgdGl0bGUgaW5mbyBkaXYgdG8gdGhlIG1pZGRsZSBpbmZvIGRpdlxuICAgIG1pZGRsZUluZm9EaXYuYXBwZW5kQ2hpbGQodGl0bGVJbmZvRGl2KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZGVzY3JpcHRpb24gaW5mbyBkaXZcbiAgICBjb25zdCBkZXNjSW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NJbmZvRGl2LmNsYXNzTmFtZSA9ICd3LWZ1bGwgcHQtMSc7XG4gICAgZGVzY0luZm9EaXYuaWQgPSAnZGVzYy1pbmZvJztcblxuICAgIC8vIENyZWF0ZSB0aGUgZGVzY3JpcHRpb24gdGV4dGFyZWFcbiAgICBjb25zdCBkZXNjVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NUZXh0YXJlYS5jbGFzc05hbWUgPSAndy1mdWxsIHJlc2l6ZS1ub25lIGJnLXRyYW5zcGFyZW50IHRleHQtZ3JheS00MDAgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTQwMCBvdXRsaW5lLTAgZm9jdXM6b3V0bGluZS1ub25lJztcbiAgICBkZXNjVGV4dGFyZWEubmFtZSA9ICdkZWNyaXB0aW9uJztcbiAgICBkZXNjVGV4dGFyZWEuaWQgPSAnZGVjcmlwdGlvbic7XG4gICAgZGVzY1RleHRhcmVhLnBsYWNlaG9sZGVyID0gJ09wdGlvbmFsIG5vdGVzLi4uJztcbiAgICBkZXNjSW5mb0Rpdi5hcHBlbmRDaGlsZChkZXNjVGV4dGFyZWEpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBkZXNjcmlwdGlvbiBpbmZvIGRpdiB0byB0aGUgbWlkZGxlIGluZm8gZGl2XG4gICAgbWlkZGxlSW5mb0Rpdi5hcHBlbmRDaGlsZChkZXNjSW5mb0Rpdik7XG5cbiAgICAvLyBBcHBlbmQgdGhlIG1pZGRsZSBpbmZvIGRpdiB0byB0aGUgZm9ybVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWlkZGxlSW5mb0Rpdik7XG5cbiAgICAvLyBBcHBlbmQgdGhlIGZvcm0gdG8gdGhlIG1haW4gY29udGFpbmVyIGRpdlxuICAgIGl0ZW1DYXJkRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy8gQXBwZW5kIHRoZSByZWNlaXZpbmcgRE9NIGVsZW1lbnRcbiAgICByZWNlaXZpbmdFbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1DYXJkRGl2KTtcbn1cbiJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfX3NwcmVhZEFycmF5cyIsImlsIiwiciIsIkFycmF5IiwiayIsImEiLCJqIiwiamwiLCJkZWZhdWx0cyIsImRlZmF1bHRPcHRpb25zIiwiSE9PS1MiLCJFbmdsaXNoIiwiYXJyYXlpZnkiLCJkZWJvdW5jZSIsImludCIsInBhZCIsImNsZWFyTm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVOdW1iZXJJbnB1dCIsImZpbmRQYXJlbnQiLCJ0b2dnbGVDbGFzcyIsImdldEV2ZW50VGFyZ2V0IiwiY29tcGFyZURhdGVzIiwiY3JlYXRlRGF0ZVBhcnNlciIsImNyZWF0ZURhdGVGb3JtYXR0ZXIiLCJkdXJhdGlvbiIsImlzQmV0d2VlbiIsImdldERlZmF1bHRIb3VycyIsImNhbGN1bGF0ZVNlY29uZHNTaW5jZU1pZG5pZ2h0IiwicGFyc2VTZWNvbmRzIiwidG9rZW5SZWdleCIsIm1vbnRoVG9TdHIiLCJERUJPVU5DRURfQ0hBTkdFX01TIiwiRmxhdHBpY2tySW5zdGFuY2UiLCJlbGVtZW50IiwiaW5zdGFuY2VDb25maWciLCJzZWxmIiwiY29uZmlnIiwiZmxhdHBpY2tyIiwiZGVmYXVsdENvbmZpZyIsImwxMG4iLCJwYXJzZURhdGUiLCJfaGFuZGxlcnMiLCJwbHVnaW5FbGVtZW50cyIsImxvYWRlZFBsdWdpbnMiLCJfYmluZCIsImJpbmQiLCJfc2V0SG91cnNGcm9tRGF0ZSIsInNldEhvdXJzRnJvbURhdGUiLCJfcG9zaXRpb25DYWxlbmRhciIsInBvc2l0aW9uQ2FsZW5kYXIiLCJjaGFuZ2VNb250aCIsImNoYW5nZVllYXIiLCJjbGVhciIsImNsb3NlIiwib25Nb3VzZU92ZXIiLCJfY3JlYXRlRWxlbWVudCIsImNyZWF0ZURheSIsImRlc3Ryb3kiLCJpc0VuYWJsZWQiLCJqdW1wVG9EYXRlIiwidXBkYXRlVmFsdWUiLCJvcGVuIiwicmVkcmF3Iiwic2V0Iiwic2V0RGF0ZSIsInRvZ2dsZSIsInNldHVwSGVscGVyRnVuY3Rpb25zIiwidXRpbHMiLCJnZXREYXlzSW5Nb250aCIsIm1vbnRoIiwieXIiLCJjdXJyZW50TW9udGgiLCJjdXJyZW50WWVhciIsImRheXNJbk1vbnRoIiwiaW5pdCIsImlucHV0IiwiaXNPcGVuIiwicGFyc2VDb25maWciLCJzZXR1cExvY2FsZSIsInNldHVwSW5wdXRzIiwic2V0dXBEYXRlcyIsImlzTW9iaWxlIiwiYnVpbGQiLCJiaW5kRXZlbnRzIiwic2VsZWN0ZWREYXRlcyIsIm5vQ2FsZW5kYXIiLCJlbmFibGVUaW1lIiwibGF0ZXN0U2VsZWN0ZWREYXRlT2JqIiwidW5kZWZpbmVkIiwic2V0Q2FsZW5kYXJXaWR0aCIsImlzU2FmYXJpIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRyaWdnZXJFdmVudCIsImdldENsb3Nlc3RBY3RpdmVFbGVtZW50IiwiX2EiLCJjYWxlbmRhckNvbnRhaW5lciIsImdldFJvb3ROb2RlIiwiYWN0aXZlRWxlbWVudCIsImRvY3VtZW50IiwiYmluZFRvSW5zdGFuY2UiLCJmbiIsIndlZWtOdW1iZXJzIiwic2hvd01vbnRocyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImRpc3BsYXkiLCJkYXlzQ29udGFpbmVyIiwiZGF5c1dpZHRoIiwiZGF5cyIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJ3ZWVrV3JhcHBlciIsInJlbW92ZVByb3BlcnR5IiwidXBkYXRlVGltZSIsImUiLCJkZWZhdWx0RGF0ZSIsIm1pbkRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsInNldEhvdXJzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInR5cGUiLCJ0aW1lV3JhcHBlciIsInByZXZWYWx1ZSIsIl9pbnB1dCIsInZhbHVlIiwic2V0SG91cnNGcm9tSW5wdXRzIiwiX2RlYm91bmNlZENoYW5nZSIsImFtcG0ybWlsaXRhcnkiLCJob3VyIiwiYW1QTSIsIm1pbGl0YXJ5MmFtcG0iLCJob3VyRWxlbWVudCIsIm1pbnV0ZUVsZW1lbnQiLCJwYXJzZUludCIsInNsaWNlIiwic2Vjb25kRWxlbWVudCIsInRleHRDb250ZW50IiwibGltaXRNaW5Ib3VycyIsIm1pblRpbWUiLCJtaW5EYXRlSGFzVGltZSIsImxpbWl0TWF4SG91cnMiLCJtYXhUaW1lIiwibWF4RGF0ZSIsIm1heERhdGVIYXNUaW1lIiwibWluQm91bmQiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwibWF4Qm91bmQiLCJjdXJyZW50VGltZSIsInJlc3VsdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJkYXRlT2JqIiwiZGF0ZSIsInRpbWVfMjRociIsIm9uWWVhcklucHV0IiwiZXZlbnQiLCJldmVudFRhcmdldCIsInllYXIiLCJkZWx0YSIsImtleSIsInRvU3RyaW5nIiwiaGFuZGxlciIsIm9wdGlvbnMiLCJmb3JFYWNoIiwiZXYiLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRyaWdnZXJDaGFuZ2UiLCJ3cmFwIiwiZXZ0IiwicXVlcnlTZWxlY3RvckFsbCIsInNldHVwTW9iaWxlIiwiZGVib3VuY2VkUmVzaXplIiwib25SZXNpemUiLCJtb2RlIiwib25LZXlEb3duIiwiaW5saW5lIiwic3RhdGljIiwib250b3VjaHN0YXJ0IiwiZG9jdW1lbnRDbGljayIsImNhcHR1cmUiLCJjbGlja09wZW5zIiwibW9udGhOYXYiLCJvbk1vbnRoTmF2Q2xpY2siLCJzZWxlY3REYXRlIiwidGltZUNvbnRhaW5lciIsInNlbFRleHQiLCJzZWxlY3QiLCJ0aW1lSW5jcmVtZW50IiwiYWxsb3dJbnB1dCIsIm9uQmx1ciIsImp1bXBEYXRlIiwianVtcFRvIiwibm93Iiwib2xkWWVhciIsIm9sZE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsIm1lc3NhZ2UiLCJlcnJvckhhbmRsZXIiLCJidWlsZE1vbnRoU3dpdGNoIiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsImluY3JlbWVudE51bUlucHV0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpbnB1dEVsZW0iLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiZmlyc3RDaGlsZCIsImNyZWF0ZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInRhYkluZGV4IiwiYXBwZW5kQ2hpbGQiLCJidWlsZE1vbnRoTmF2IiwiaW5uZXJDb250YWluZXIiLCJidWlsZFdlZWtzIiwickNvbnRhaW5lciIsImJ1aWxkV2Vla2RheXMiLCJidWlsZERheXMiLCJidWlsZFRpbWUiLCJhbmltYXRlIiwiY3VzdG9tQXBwZW5kIiwiYXBwZW5kVG8iLCJub2RlVHlwZSIsImFkZCIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwid3JhcHBlciIsImFsdElucHV0IiwiYm9keSIsIl9kYXlOdW1iZXIiLCJkYXRlSXNFbmFibGVkIiwiZGF5RWxlbWVudCIsImdldERhdGUiLCIkaSIsInNldEF0dHJpYnV0ZSIsImZvcm1hdERhdGUiLCJhcmlhRGF0ZUZvcm1hdCIsInRvZGF5RGF0ZUVsZW0iLCJpc0RhdGVTZWxlY3RlZCIsInNlbGVjdGVkRGF0ZUVsZW0iLCJpc0RhdGVJblJhbmdlIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiZ2V0V2VlayIsImZvY3VzT25EYXlFbGVtIiwidGFyZ2V0Tm9kZSIsImZvY3VzIiwiZ2V0Rmlyc3RBdmFpbGFibGVEYXkiLCJzdGFydE1vbnRoIiwiZW5kTW9udGgiLCJtIiwiY2hpbGRyZW4iLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJjIiwiZ2V0TmV4dEF2YWlsYWJsZURheSIsImN1cnJlbnQiLCJnaXZlbk1vbnRoIiwibG9vcERlbHRhIiwibnVtTW9udGhEYXlzIiwiYWJzIiwiZm9jdXNPbkRheSIsIm9mZnNldCIsImRheUZvY3VzZWQiLCJpc0luVmlldyIsInN0YXJ0RWxlbSIsImJ1aWxkTW9udGhEYXlzIiwiZmlyc3RPZk1vbnRoIiwiZ2V0RGF5IiwiZmlyc3REYXlPZldlZWsiLCJwcmV2TW9udGhEYXlzIiwiaXNNdWx0aU1vbnRoIiwicHJldk1vbnRoRGF5Q2xhc3MiLCJuZXh0TW9udGhEYXlDbGFzcyIsImRheU51bWJlciIsImRheUluZGV4IiwiZGF5TnVtIiwiZGF5Q29udGFpbmVyIiwiZnJhZyIsImQiLCJzZXRNb250aCIsIm1vbnRoU2VsZWN0b3JUeXBlIiwic2hvdWxkQnVpbGRNb250aCIsIm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwic2hvcnRoYW5kQ3VycmVudE1vbnRoIiwic2VsZWN0ZWQiLCJidWlsZE1vbnRoIiwiY29udGFpbmVyIiwibW9udGhOYXZGcmFnbWVudCIsIm1vbnRoRWxlbWVudCIsIm1vbnRoQXJpYUxhYmVsIiwic2VsZWN0ZWRNb250aCIsInllYXJJbnB1dCIsInRhYmluZGV4IiwieWVhckVsZW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInllYXJBcmlhTGFiZWwiLCJkaXNhYmxlZCIsImJ1aWxkTW9udGhzIiwicHJldk1vbnRoTmF2IiwieWVhckVsZW1lbnRzIiwibW9udGhFbGVtZW50cyIsIm5leHRNb250aE5hdiIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiX19oaWRlUHJldk1vbnRoQXJyb3ciLCJib29sIiwiX19oaWRlTmV4dE1vbnRoQXJyb3ciLCJjdXJyZW50WWVhckVsZW1lbnQiLCJ1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoIiwic2VwYXJhdG9yIiwiaG91cklucHV0IiwiaG91ckFyaWFMYWJlbCIsIm1pbnV0ZUlucHV0IiwibWludXRlQXJpYUxhYmVsIiwiaG91ckluY3JlbWVudCIsIm1pbnV0ZUluY3JlbWVudCIsImVuYWJsZVNlY29uZHMiLCJzZWNvbmRJbnB1dCIsImdldEF0dHJpYnV0ZSIsImRlZmF1bHRIb3VyIiwidGl0bGUiLCJ0b2dnbGVUaXRsZSIsIndlZWtkYXlDb250YWluZXIiLCJ1cGRhdGVXZWVrZGF5cyIsIndlZWtkYXlzIiwic2hvcnRoYW5kIiwic3BsaWNlIiwiam9pbiIsIndlZWtBYmJyZXZpYXRpb24iLCJpc09mZnNldCIsIl9oaWRlUHJldk1vbnRoQXJyb3ciLCJfaGlkZU5leHRNb250aEFycm93IiwidHJpZ2dlckNoYW5nZUV2ZW50IiwidG9Jbml0aWFsIiwibW9iaWxlSW5wdXQiLCJfaW5pdGlhbERhdGUiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsIl90eXBlIiwicmVtb3ZlQXR0cmlidXRlIiwiXyIsImlzQ2FsZW5kYXJFbGVtIiwiZWxlbSIsImV2ZW50VGFyZ2V0XzEiLCJpc0NhbGVuZGFyRWxlbWVudCIsImlzSW5wdXQiLCJwYXRoIiwibG9zdEZvY3VzIiwicmVsYXRlZFRhcmdldCIsImlzSWdub3JlZCIsImlnbm9yZWRGb2N1c0VsZW1lbnRzIiwic29tZSIsImFsdEZvcm1hdCIsImRhdGVGb3JtYXQiLCJuZXdZZWFyIiwibmV3WWVhck51bSIsImlzTmV3WWVhciIsInRpbWVsZXNzIiwiZGF0ZVRvQ2hlY2siLCJlbmFibGUiLCJkaXNhYmxlIiwiYXJyYXkiLCJwYXJzZWQiLCJmcm9tIiwidG8iLCJ2YWx1ZUNoYW5nZWQiLCJ0cmltRW5kIiwiZ2V0RGF0ZVN0ciIsImFsbG93S2V5ZG93biIsImFsbG93SW5saW5lS2V5ZG93biIsImtleUNvZGUiLCJibHVyIiwiaXNUaW1lT2JqIiwicHJldmVudERlZmF1bHQiLCJmb2N1c0FuZENsb3NlIiwiZGVsdGFfMSIsImN0cmxLZXkiLCJzdG9wUHJvcGFnYXRpb24iLCJlbGVtcyIsImNvbmNhdCIsImZpbHRlciIsIngiLCJzaGlmdEtleSIsImNoYXJBdCIsInRvTG93ZXJDYXNlIiwiY2VsbENsYXNzIiwiaG92ZXJEYXRlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbml0aWFsRGF0ZSIsInJhbmdlU3RhcnREYXRlIiwicmFuZ2VFbmREYXRlIiwiY29udGFpbnNEaXNhYmxlZCIsIm1pblJhbmdlIiwibWF4UmFuZ2UiLCJEQVkiLCJob3ZlcmFibGVDZWxscyIsImRheUVsZW0iLCJ0aW1lc3RhbXAiLCJvdXRPZlJhbmdlIiwicG9zaXRpb25FbGVtZW50IiwiX3Bvc2l0aW9uRWxlbWVudCIsImNsaWNrIiwid2FzT3BlbiIsInNldFRpbWVvdXQiLCJtaW5NYXhEYXRlU2V0dGVyIiwiaW52ZXJzZURhdGVPYmoiLCJib29sT3B0cyIsInVzZXJDb25maWciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJkYXRhc2V0IiwiZm9ybWF0cyIsIl9lbmFibGUiLCJkYXRlcyIsInBhcnNlRGF0ZVJ1bGVzIiwiX2Rpc2FibGUiLCJ0aW1lTW9kZSIsImRlZmF1bHREYXRlRm9ybWF0IiwiZGVmYXVsdEFsdEZvcm1hdCIsIl9taW5EYXRlIiwiX21heERhdGUiLCJtaW5NYXhUaW1lU2V0dGVyIiwidmFsIiwiX21pblRpbWUiLCJfbWF4VGltZSIsImhvb2siLCJtYXAiLCJkaXNhYmxlTW9iaWxlIiwicGx1Z2lucyIsInBsdWdpbkNvbmYiLCJhbHRJbnB1dENsYXNzIiwiZ2V0SW5wdXRFbGVtIiwicXVlcnlTZWxlY3RvciIsImxvY2FsZSIsImwxMG5zIiwiRXJyb3IiLCJkZWZhdWx0IiwiRCIsImwiLCJsb25naGFuZCIsIk0iLCJtb250aHMiLCJGIiwiSyIsImN1c3RvbVBvc2l0aW9uRWxlbWVudCIsInBvc2l0aW9uIiwiY2FsZW5kYXJIZWlnaHQiLCJyZWR1Y2UiLCJhY2MiLCJjaGlsZCIsIm9mZnNldEhlaWdodCIsImNhbGVuZGFyV2lkdGgiLCJjb25maWdQb3MiLCJzcGxpdCIsImNvbmZpZ1Bvc1ZlcnRpY2FsIiwiY29uZmlnUG9zSG9yaXpvbnRhbCIsImlucHV0Qm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGlzdGFuY2VGcm9tQm90dG9tIiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJzaG93T25Ub3AiLCJ0b3AiLCJwYWdlWU9mZnNldCIsImxlZnQiLCJwYWdlWE9mZnNldCIsImlzQ2VudGVyIiwiaXNSaWdodCIsInJpZ2h0IiwicmlnaHRNb3N0IiwiY2VudGVyTW9zdCIsImRvYyIsImdldERvY3VtZW50U3R5bGVTaGVldCIsImJvZHlXaWR0aCIsImNlbnRlckxlZnQiLCJjZW50ZXJCZWZvcmUiLCJjZW50ZXJBZnRlciIsImNlbnRlckluZGV4IiwiY3NzUnVsZXMiLCJjZW50ZXJTdHlsZSIsImluc2VydFJ1bGUiLCJlZGl0YWJsZVNoZWV0Iiwic3R5bGVTaGVldHMiLCJzaGVldCIsImVyciIsImNyZWF0ZVN0eWxlU2hlZXQiLCJoZWFkIiwibXNNYXhUb3VjaFBvaW50cyIsImlzU2VsZWN0YWJsZSIsImRheSIsInNlbGVjdGVkRGF0ZSIsInNob3VsZENoYW5nZU1vbnRoIiwic2VsZWN0ZWRJbmRleCIsInNvcnQiLCJiIiwiY2xvc2VPblNlbGVjdCIsInNpbmdsZSIsInJhbmdlIiwiQ0FMTEJBQ0tTIiwidXBkYXRlUG9zaXRpb25FbGVtZW50Iiwib3B0aW9uIiwic2V0U2VsZWN0ZWREYXRlIiwiaW5wdXREYXRlIiwiZm9ybWF0IiwiY29uanVuY3Rpb24iLCJyYW5nZVNlcGFyYXRvciIsImFsbG93SW52YWxpZFByZWxvYWQiLCJhcnIiLCJydWxlIiwicHJlbG9hZGVkRGF0ZSIsIm5vZGVOYW1lIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImlucHV0VHlwZSIsIm1vYmlsZUZvcm1hdFN0ciIsImRlZmF1bHRWYWx1ZSIsInN0ZXAiLCJTdHJpbmciLCJkYXRhIiwiaG9va3MiLCJuYW1lIiwiaW5pdEV2ZW50Iiwic3BlY2lmaWNGb3JtYXQiLCJkT2JqIiwiaXNQcmV2TW9udGgiLCJpc05leHRNb250aCIsImlzS2V5RG93biIsInBhcnNlRmxvYXQiLCJjdXJWYWx1ZSIsIndoaWNoIiwibmV3VmFsdWUiLCJpc0hvdXJFbGVtIiwiaXNNaW51dGVFbGVtIiwiX2ZsYXRwaWNrciIsIm5vZGVMaXN0Iiwibm9kZXMiLCJIVE1MRWxlbWVudCIsImluc3RhbmNlcyIsIm5vZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJIVE1MQ29sbGVjdGlvbiIsIk5vZGVMaXN0Iiwic2VsZWN0b3IiLCJOb2RlIiwiZW4iLCJsb2NhbGl6ZSIsInNldERlZmF1bHRzIiwialF1ZXJ5IiwiZnBfaW5jciIsImVuZ2xpc2giLCJvcmRpbmFsIiwibnRoIiwic2Nyb2xsVGl0bGUiLCJhdXRvRmlsbERlZmF1bHRUaW1lIiwiZGVmYXVsdE1pbnV0ZSIsImRlZmF1bHRTZWNvbmRzIiwid2FybiIsImdpdmVuRGF0ZSIsIndlZWsxIiwicm91bmQiLCJvbkNoYW5nZSIsIm9uQ2xvc2UiLCJvbkRheUNyZWF0ZSIsIm9uRGVzdHJveSIsIm9uTW9udGhDaGFuZ2UiLCJvbk9wZW4iLCJvblBhcnNlQ29uZmlnIiwib25SZWFkeSIsIm9uVmFsdWVVcGRhdGUiLCJvblllYXJDaGFuZ2UiLCJvblByZUNhbGVuZGFyUG9zaXRpb24iLCJyZXZGb3JtYXQiLCJfYiIsIl9jIiwiX2QiLCJmcm10Iiwib3ZlcnJpZGVMb2NhbGUiLCJnaXZlbkZvcm1hdCIsImN1c3RvbUxvY2FsZSIsInBhcnNlZERhdGUiLCJkYXRlT3JpZyIsInRvRml4ZWQiLCJkYXRlc3RyIiwidHJpbSIsIm1hdGNoZWQiLCJvcHMiLCJtYXRjaEluZGV4IiwicmVnZXhTdHIiLCJ0b2tlbiIsImlzQmFja1NsYXNoIiwiZXNjYXBlZCIsIm1hdGNoIiwiUmVnRXhwIiwiZXhlYyIsImlzTmFOIiwiZGF0ZTEiLCJkYXRlMiIsImNvbXBhcmVUaW1lcyIsInRzIiwidHMxIiwidHMyIiwic2Vjb25kc1NpbmNlTWlkbmlnaHQiLCJmbG9vciIsIm1pbkhvdXIiLCJtaW5NaW51dGVzIiwibWluU2Vjb25kcyIsIm1heEhyIiwibWF4TWludXRlcyIsInRhZyIsImNvbnRlbnQiLCJjb25kaXRpb24iLCJpbnB1dENsYXNzTmFtZSIsIm9wdHMiLCJudW1JbnB1dCIsImFycm93VXAiLCJhcnJvd0Rvd24iLCJwYXR0ZXJuIiwiY29tcG9zZWRQYXRoIiwiZG9Ob3RoaW5nIiwibW9udGhOdW1iZXIiLCJtb250aE5hbWUiLCJHIiwiSCIsIkoiLCJzaG9ydE1vbnRoIiwiUyIsInNldFNlY29uZHMiLCJVIiwidW5peFNlY29uZHMiLCJXIiwid2Vla051bSIsIndlZWtOdW1iZXIiLCJZIiwic2V0RnVsbFllYXIiLCJaIiwiSVNPRGF0ZSIsImgiLCJzZXRNaW51dGVzIiwidSIsInVuaXhNaWxsU2Vjb25kcyIsInciLCJ5IiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJudW1iZXIiLCJ3YWl0IiwiX3RoaXMiLCJhcmdzIiwiY2xlYXJUaW1lb3V0Iiwib2JqIiwiX2kiLCJUeXBlRXJyb3IiLCJfbG9vcF8xIiwic291cmNlIiwia2V5cyIsImFyZ3NfMSIsIlRvZG9JdGVtIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJpZCIsInJhbmRvbSIsImlzQ29tcGxldGUiLCJlZGl0VGl0bGUiLCJuZXdOYW1lIiwiZWRpdERlc2NyaXB0aW9uIiwibmV3RGVzY3JpcHRpb24iLCJlZGl0RGF0ZSIsIkRETU1ZWSIsImNoYW5nZUNvbXBsZXRlU3RhdHVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJuZXdJdGVtQnV0dG9uIiwiY3JlYXRlVG9kb0l0ZW0iLCJyZWNlaXZpbmdFbGVtZW50IiwiZGVmYXV0VG9kb0l0ZW0iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ2YWx1ZXMiLCJpdGVtQ2FyZERpdiIsImZvcm0iLCJhY3Rpb24iLCJjaGVja2JveERpdiIsImNoZWNrYm94SW5wdXQiLCJtaWRkbGVJbmZvRGl2IiwidGl0bGVJbmZvRGl2IiwidGl0bGVMZWZ0RGl2IiwidGl0bGVJbnB1dCIsImF1dG9jb21wbGV0ZSIsInRpdGxlUmlnaHREaXYiLCJwcmlvcml0eU1hcmtlcnNEaXYiLCJtYXJrZXJEaXYiLCJkdWVUaW1lU3BhbiIsInRpbWVFbGVtZW50IiwiZGF0ZXRpbWUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0aW1lWm9uZSIsImRlc2NJbmZvRGl2IiwiZGVzY1RleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==