/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nUtil.inherits(Bird, MovingObject);\n\nfunction Bird (pos, game) {\n  this.COLOR = \"white\";\n  this.RADIUS = 8;\n  this.RANDOMVECTOR = Util.randomVec(Math.random()*3);\n  MovingObject.call(this,{pos: pos.pos, vel: this.RANDOMVECTOR, color: this.COLOR, radius: this.RADIUS, game: game});\n}\n\nBird.prototype.collideWith = function (otherObject) {\n  if (otherObject instanceof Ship) {\n    // otherObject.relocate();\n    // otherObject.vel[0] = (otherObject.vel[0] * -1)\n    // otherObject.vel[1] = (otherObject.vel[1] * -1) \n\n    otherObject.vel[0] = (otherObject.vel[0] * .9);\n    otherObject.vel[1] = (otherObject.vel[1] * .9); \n    otherObject.health -= 10\n    }\n};\n\nBird.prototype.avoidBirds = function (otherObject) {\n  \n}\n\nmodule.exports = Bird;\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/boat.js":
/*!*********************!*\
  !*** ./src/boat.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nUtil.inherits(Boat, MovingObject);\n\nfunction Boat (pos, game) {\n  this.COLOR = \"grey\";\n  this.RADIUS = 12;\n  this.RANDOMVECTOR = Util.randomVec(Math.random()*3);\n  MovingObject.call(this,{pos: pos.pos, vel: [Util.getRandomInt(6), 0], color: this.COLOR, radius: this.RADIUS, game: game});\n}\n\nBoat.prototype.collideWith = function (otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n    otherObject.health -=50;\n  }\n};\n\nBoat.prototype.avoidBoats = function (otherObject) {\n  \n}\n\nmodule.exports = Boat;\n\n//# sourceURL=webpack:///./src/boat.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Boat = __webpack_require__(/*! ./boat */ \"./src/boat.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bird = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\nconst Tornado = __webpack_require__(/*! ./tornado */ \"./src/tornado.js\");\nconst Token = __webpack_require__(/*! ./token */ \"./src/token.js\");\n\nfunction Game () {\n  this.DIM_X = 900;\n  this.DIM_Y = 600;\n  this.NUM_BIRDS = 7;\n  this.NUM_BOATS = 4;\n  this.NUM_TORNADOS = 3;\n  this.NUM_TOKENS = 1;\n  this.enemies = [];\n  this.tokens = [];\n  // this.boats = [];\n  this.addEnemies();\n  // this.addTokens();\n  // this.addBoats();\n  this.ship = new Ship(this.randomPosition(), this);\n  this.drawScore();\n}\n\n\nGame.prototype.drawScore = function() {\n  let canvas = document.getElementById('game-canvas');\n  let ctx = canvas.getContext('2d');\n  ctx.font = \"16px Arial\";\n  ctx.fillStyle = \"#0095DD\";\n  ctx.fillText(\"Score: \"+ this.ship.points, 8, 20);\n}\n\n// Display.prototype.drawLives = function (context) {\n//   for (var i = this.game.lives; i > 0; i--) {\n//     var xCoord = 360 + (i * 50);\n//     context.drawImage(this.heartImage, xCoord, 525);\n//   }\n// }\n\nGame.prototype.addEnemies = function() {\n  for(let i = 0; i < this.NUM_BIRDS; i++) {\n    this.enemies.push(new Bird(this.randomPosition(), this));\n  }\n  for(let i = 0; i < this.NUM_BOATS; i++) {\n    this.enemies.push(new Boat(this.randomPosition(), this));\n  }\n  for(let i = 0; i < this.NUM_TORNADOS; i++) {\n    this.enemies.push(new Tornado(this.randomPosition(), this));\n  }\n  for(let i = 0; i < this.NUM_TOKENS; i++) {\n    this.enemies.push(new Token(this.randomPosition(), this));\n  }\n};\n\n// Game.prototype.addTokens = function() {\n//   for(let i = 0; i < this.NUM_TOKENS; i++) {\n//     this.tokens.push(new Token(this.randomPosition(), this));\n//   }\n// }\n\nGame.prototype.randomPosition = function() {\n  return { pos: [Util.getRandomInt(this.DIM_X), Util.getRandomInt(this.DIM_Y) ]};\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  this.allObjects().forEach(function(obj) {\n    obj.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function () {\n  this.allObjects().forEach(function(obj) {\n    obj.move(ctx);\n  });\n};\n\nGame.prototype.wrap = function(pos) {\n  let MARGIN = 50;\n  let x = pos[0];\n  let y = pos[1];\n  if (x>this.DIM_X+MARGIN) {\n    x = (x - this.DIM_X - MARGIN);\n  }\n  if (x < 0 - MARGIN) {\n    x = (x + this.DIM_X + MARGIN);\n  }\n  if (y>this.DIM_Y+MARGIN) {\n    y = (y - this.DIM_Y - MARGIN);\n  }\n  if (y < 0 - MARGIN) {\n    y = (y + this.DIM_Y + MARGIN);\n  }\n  return [x, y];\n};\n\nGame.prototype.checkCollisions = function() {\n  for (let i = 0; i < this.allObjects().length-1; i++) {\n    for (let j = i+1; j < this.allObjects().length; j++) {\n      if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {\n        this.allObjects()[i].collideWith(this.allObjects()[j]);\n      }\n    }\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n  \n};\n\nGame.prototype.remove = function(obj) {\n  this.enemies = this.enemies.filter( function (el) {\n    return el !== obj;\n  });\n};\n\nGame.prototype.allObjects = function() {\n  let objects = [this.ship];\n  return this.enemies.concat(objects);\n};\n\nGame.prototype.add = function(obj) {\n    this.enemies.push(obj);\n};\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  let that = this;\n  that.bindKeyHandlers();\n  setInterval(function() {\n  that.game.step();\n  that.game.draw(that.ctx);\n  }, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function() {\n  key('up', () => {this.game.ship.power([0, -1]);});\n  key('down', () => {this.game.ship.power([0, 1]);});\n  key('left', () => {this.game.ship.power([-1, 0]);});\n  key('right', () => {this.game.ship.power([1, 0]);});\n  // key('b', () => { this.game.ship.vel = [0, 0]; });\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Boat = __webpack_require__(/*! ./boat */ \"./src/boat.js\")\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nconsole.log(\"Webpack is working!\");\n\nwindow.addEventListener('DOMContentLoaded', function(){\n  let canvas = document.getElementById('game-canvas');\n  let ctx = canvas.getContext('2d');\n  let game_view = new GameView(ctx);\n  game_view.start();\n  window.ctx = ctx;\n  window.game_view = game_view;\n});\n\n\n\nwindow.MovingObject = MovingObject;\nwindow.Boat = Boat;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2);\n  ctx.strokeStyle = this.color;\n  ctx.lineWidth = 1;\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.pos = this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  if (Util.getDistance(this.pos, otherObject.pos) < (this.radius+otherObject.radius)) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\n// MovingObject.prototype.collideWith = function (otherObject) {\n// };\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nUtil.inherits(Ship, MovingObject);\n\nfunction Ship (pos, game) {\n  this.RADIUS = 10;\n  this.COLOR = \"purple\";\n  this.SPEED = 1;\n  this.points = 0;\n  this.health = 100;\n  MovingObject.call(this, {pos: pos.pos, vel: [0, 0], color: this.COLOR, radius: this.RADIUS, game: game });\n}\n\nShip.prototype.relocate = function() {\n  this.vel = [0, 0];\n  this.pos = this.game.randomPosition().pos;\n};\n\nShip.prototype.power = function(impulse) {\n  this.vel[0] += (impulse[0]*this.SPEED);\n  this.vel[1] += (impulse[1]*this.SPEED);\n};\n\n// Ship.prototype.collideWith = function (otherObject) {\n//   if (otherObject instanceof Token) {\n//     otherObject.relocate();\n//     }\n// };\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/token.js":
/*!**********************!*\
  !*** ./src/token.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nUtil.inherits(Token, MovingObject);\n\nfunction Token (pos, game) {\n  this.COLOR = \"yellow\";\n  this.RADIUS = 5;\n  MovingObject.call(this,{pos: pos.pos, vel: [0, 0], color: this.COLOR, radius: this.RADIUS, game: game});\n}\n\nToken.prototype.collideWith = function (otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.points += 1;\n    this.relocate();\n  }\n};\n\nToken.prototype.relocate = function() {\n    this.pos = this.game.randomPosition().pos;\n  };\n\n\nmodule.exports = Token;\n\n//# sourceURL=webpack:///./src/token.js?");

/***/ }),

/***/ "./src/tornado.js":
/*!************************!*\
  !*** ./src/tornado.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nUtil.inherits(Tornado, MovingObject);\n\nfunction Tornado (pos, game) {\n  this.COLOR = \"blue\";\n  this.RADIUS = 15;\n  this.RANDOMVECTOR = Util.randomVec(Math.random()*3);\n  MovingObject.call(this,{pos: pos.pos, vel: this.RANDOMVECTOR, color: this.COLOR, radius: this.RADIUS, game: game});\n}\n\nTornado.prototype.collideWith = function (otherObject) {\n  if (otherObject instanceof Ship) {\n    // otherObject.vel[0] = (otherObject.vel[0] * -1)\n    // otherObject.vel[1] = (otherObject.vel[1] * -1) \n    otherObject.vel = Util.randomVec(Math.random()*6);\n    otherObject.health -= 20;\n    }\n};\n\nTornado.prototype.avoidTornados = function (otherObject) {\n  \n}\n\nmodule.exports = Tornado;\n\n//# sourceURL=webpack:///./src/tornado.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst Util = {\n    inherits(childClass, parentClass) {\n      function Surrogate(){}\n      Surrogate.prototype = parentClass.prototype;\n      childClass.prototype = new Surrogate();\n      childClass.prototype.constructor = childClass;\n    },\n  \n  \n    randomVec(length) {\n      const deg = 2 * Math.PI * Math.random();\n      return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    scale(vec, m) {\n      return [vec[0] * m, vec[1] * m];\n    },\n  \n    getRandomInt(max) {\n      return Math.floor(Math.random() * Math.floor(max));\n    },\n    \n    getDistance(pos1, pos2) {\n      let x = pos1[0] - pos2[0];\n      let y = pos1[1] - pos2[1];\n      return Math.sqrt(x*x + y*y);\n    }\n  \n  };\n  \n  module.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });