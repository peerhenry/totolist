/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("var req = __webpack_require__(1);\r\nreq.keys().forEach(function(key){\r\n    req(key);\r\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./test/test.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./test/test.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("var map = {\n\t\"./Actions/ActionsTest.ts\": 2,\n\t\"./Components/FormTest.tsx\": 5,\n\t\"./Components/TitleTest.tsx\": 6,\n\t\"./Components/TodoListTest.tsx\": 10,\n\t\"./Components/TodoTest.tsx\": 14\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\treturn map[req] || (function() { throw new Error(\"Cannot find module '\" + req + \"'.\") }());\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 1;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./test ^(.*\\.((tsx?)$))[^.]*$/gi\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./test_^(.*\\.((tsx?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nconst chai_1 = __webpack_require__(3);\r\nconst actions_1 = __webpack_require__(4);\r\nconst actions_2 = __webpack_require__(4);\r\nconst actions_3 = __webpack_require__(4);\r\ndescribe('toggle action function', () => {\r\n    it('should return the correct action', () => {\r\n        var result = actions_1.toggle(234);\r\n        chai_1.expect(result.id).to.equal(234);\r\n        chai_1.expect(result.type).to.equal('TODOS_TOGGLE');\r\n    });\r\n});\r\ndescribe('remove action function', () => {\r\n    it('should return the correct action', () => {\r\n        var result = actions_2.remove(234);\r\n        chai_1.expect(result.id).to.equal(234);\r\n        chai_1.expect(result.type).to.equal('TODOS_REMOVE');\r\n    });\r\n});\r\ndescribe('add action function', () => {\r\n    it('should return the correct action', () => {\r\n        var result = actions_3.add('Smiley');\r\n        chai_1.expect(result.id).to.equal(1);\r\n        chai_1.expect(result.text).to.equal('Smiley');\r\n        chai_1.expect(result.type).to.equal('TODOS_ADD');\r\n    });\r\n});\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./test/Actions/ActionsTest.ts\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./test/Actions/ActionsTest.ts?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = Chai;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"Chai\"\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///external_%22Chai%22?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("\"use strict\";\r\nexports.add = (text) => ({\r\n    type: \"TODOS_ADD\",\r\n    text\r\n});\r\nexports.toggle = (id) => ({\r\n    type: \"TODOS_TOGGLE\",\r\n    id\r\n});\r\nexports.remove = (id) => ({\r\n    type: \"TODOS_REMOVE\",\r\n    id\r\n});\r\nexports.requestTodos = dispatch => {\r\n    console.log('thunky thunky!');\r\n    dispatch({ type: \"TODOS_TOGGLE\", id: 1 });\r\n};\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Actions/Actions.ts\n// module id = 4\n// module chunks = 0\n//# sourceURL=webpack:///./src/Actions/Actions.ts?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("\"use strict\";\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./test/Components/FormTest.tsx\n// module id = 5\n// module chunks = 0\n//# sourceURL=webpack:///./test/Components/FormTest.tsx?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nconst chai_1 = __webpack_require__(3);\r\nconst React = __webpack_require__(7);\r\nconst enzyme_1 = __webpack_require__(8);\r\nconst Title_1 = __webpack_require__(9);\r\ndescribe('Title component', () => {\r\n    const title = enzyme_1.shallow(React.createElement(Title_1.default, null));\r\n    it('should render correct text', () => {\r\n        chai_1.expect(title.text()).to.equal('Look at my pretty app!');\r\n    });\r\n    it('should be of type h1', () => {\r\n        chai_1.expect(title.type()).to.equal('h1');\r\n    });\r\n});\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./test/Components/TitleTest.tsx\n// module id = 6\n// module chunks = 0\n//# sourceURL=webpack:///./test/Components/TitleTest.tsx?");

/***/ },
/* 7 */
/***/ function(module, exports) {

	eval("module.exports = React;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"React\"\n// module id = 7\n// module chunks = 0\n//# sourceURL=webpack:///external_%22React%22?");

/***/ },
/* 8 */
/***/ function(module, exports) {

	eval("module.exports = Enzyme;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"Enzyme\"\n// module id = 8\n// module chunks = 0\n//# sourceURL=webpack:///external_%22Enzyme%22?");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nconst React = __webpack_require__(7);\r\nconst Title = () => (React.createElement(\"h1\", null, \"Look at my pretty app!\"));\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = Title;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Components/Title.tsx\n// module id = 9\n// module chunks = 0\n//# sourceURL=webpack:///./src/Components/Title.tsx?");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nconst chai_1 = __webpack_require__(3);\r\nconst React = __webpack_require__(7);\r\nconst enzyme_1 = __webpack_require__(8);\r\nconst immutable_1 = __webpack_require__(11);\r\nconst TodoList_1 = __webpack_require__(12);\r\ndescribe('TodoList component', () => {\r\n    const todoList = enzyme_1.shallow(React.createElement(TodoList_1.default, {todos: immutable_1.List([{ id: 1, text: 'hello', isDone: false }]), onClick: (nr) => { }, remove: (nr) => { }}));\r\n    it('should be of type ul', () => {\r\n        chai_1.expect(todoList.type()).to.equal('ul');\r\n    });\r\n});\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./test/Components/TodoListTest.tsx\n// module id = 10\n// module chunks = 0\n//# sourceURL=webpack:///./test/Components/TodoListTest.tsx?");

/***/ },
/* 11 */
/***/ function(module, exports) {

	eval("module.exports = Immutable;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"Immutable\"\n// module id = 11\n// module chunks = 0\n//# sourceURL=webpack:///external_%22Immutable%22?");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nconst React = __webpack_require__(7);\r\nconst Todo_1 = __webpack_require__(13);\r\nconst TodoList = ({ todos, onClick, remove }) => {\r\n    return (React.createElement(\"ul\", {className: \"list-group\"}, todos.map(todo => (React.createElement(Todo_1.default, {key: todo.id, text: todo.text, isDone: todo.isDone, onClick: () => { onClick(todo.id); }, remove: () => { remove(todo.id); }})))));\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = TodoList;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Components/TodoList.tsx\n// module id = 12\n// module chunks = 0\n//# sourceURL=webpack:///./src/Components/TodoList.tsx?");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nconst React = __webpack_require__(7);\r\nconst Todo = ({ isDone, text, onClick, remove }) => (React.createElement(\"li\", {className: \"list-group-item\", style: { lineHeight: \"38px\" }, onClick: e => {\r\n    e.preventDefault();\r\n    onClick();\r\n}}, \r\n    React.createElement(\"div\", {style: { width: \"100%\" }}, \r\n        React.createElement(\"span\", {style: isDone ? { textDecoration: \"line-through\" } : {}}, text), \r\n        React.createElement(\"button\", {className: \"btn btn-default\", style: { float: \"right\", fontWeight: \"bold\" }, onClick: e => { remove(); }}, \"X\"))\r\n));\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = Todo;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Components/Todo.tsx\n// module id = 13\n// module chunks = 0\n//# sourceURL=webpack:///./src/Components/Todo.tsx?");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nconst chai_1 = __webpack_require__(3);\r\nconst React = __webpack_require__(7);\r\nconst enzyme_1 = __webpack_require__(8);\r\nconst Todo_1 = __webpack_require__(13);\r\ndescribe('Todo component', () => {\r\n    const todo = enzyme_1.shallow(React.createElement(Todo_1.default, {text: \"hello\", isDone: false, onClick: () => { }, remove: () => { }}));\r\n    it('should be of type li', () => {\r\n        chai_1.expect(todo.type()).to.equal('li');\r\n    });\r\n});\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./test/Components/TodoTest.tsx\n// module id = 14\n// module chunks = 0\n//# sourceURL=webpack:///./test/Components/TodoTest.tsx?");

/***/ }
/******/ ]);