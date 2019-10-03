const Boat = require("./boat");
const Util = require("./util");
const Ship = require("./ship");
const Bird = require("./bird");
const Tornado = require("./tornado");
const Token = require("./token");

function Game () {
  this.DIM_X = 900;
  this.DIM_Y = 600;
  this.NUM_BIRDS = 7;
  this.NUM_BOATS = 4;
  this.NUM_TORNADOS = 3;
  this.NUM_TOKENS = 1;
  this.enemies = [];
  this.tokens = [];
  // this.boats = [];
  this.addEnemies();
  // this.addTokens();
  // this.addBoats();
  this.ship = new Ship(this.randomPosition(), this);
  this.drawScore();
}


Game.prototype.drawScore = function() {
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+ this.ship.points, 8, 20);
}

// Display.prototype.drawLives = function (context) {
//   for (var i = this.game.lives; i > 0; i--) {
//     var xCoord = 360 + (i * 50);
//     context.drawImage(this.heartImage, xCoord, 525);
//   }
// }

Game.prototype.addEnemies = function() {
  for(let i = 0; i < this.NUM_BIRDS; i++) {
    this.enemies.push(new Bird(this.randomPosition(), this));
  }
  for(let i = 0; i < this.NUM_BOATS; i++) {
    this.enemies.push(new Boat(this.randomPosition(), this));
  }
  for(let i = 0; i < this.NUM_TORNADOS; i++) {
    this.enemies.push(new Tornado(this.randomPosition(), this));
  }
  for(let i = 0; i < this.NUM_TOKENS; i++) {
    this.enemies.push(new Token(this.randomPosition(), this));
  }
};

// Game.prototype.addTokens = function() {
//   for(let i = 0; i < this.NUM_TOKENS; i++) {
//     this.tokens.push(new Token(this.randomPosition(), this));
//   }
// }

Game.prototype.randomPosition = function() {
  return { pos: [Util.getRandomInt(this.DIM_X), Util.getRandomInt(this.DIM_Y) ]};
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.allObjects().forEach(function(obj) {
    obj.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.allObjects().forEach(function(obj) {
    obj.move(ctx);
  });
};

Game.prototype.wrap = function(pos) {
  let MARGIN = 50;
  let x = pos[0];
  let y = pos[1];
  if (x>this.DIM_X+MARGIN) {
    x = (x - this.DIM_X - MARGIN);
  }
  if (x < 0 - MARGIN) {
    x = (x + this.DIM_X + MARGIN);
  }
  if (y>this.DIM_Y+MARGIN) {
    y = (y - this.DIM_Y - MARGIN);
  }
  if (y < 0 - MARGIN) {
    y = (y + this.DIM_Y + MARGIN);
  }
  return [x, y];
};

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.allObjects().length-1; i++) {
    for (let j = i+1; j < this.allObjects().length; j++) {
      if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
        this.allObjects()[i].collideWith(this.allObjects()[j]);
      }
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
  
};

Game.prototype.remove = function(obj) {
  this.enemies = this.enemies.filter( function (el) {
    return el !== obj;
  });
};

Game.prototype.allObjects = function() {
  let objects = [this.ship];
  return this.enemies.concat(objects);
};

Game.prototype.add = function(obj) {
    this.enemies.push(obj);
};


module.exports = Game;