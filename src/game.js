const Boat = require("./boat");
const Util = require("./util");
const Ship = require("./ship");

function Game () {
  this.DIM_X = 900;
  this.DIM_Y = 600;
  this.NUM_BOATS = 5;
  this.boats = [];
  this.addBoats();
  this.ship = new Ship(this.randomPosition(), this);
}

Game.prototype.addBoats = function() {
  for(let i = 0; i < this.NUM_BOATS; i++) {
    this.boats.push(new Boat(this.randomPosition(), this));
  }
};

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
  this.boats = this.boats.filter( function (el) {
    return el !== obj;
  });
};

Game.prototype.allObjects = function() {
  let objects = [this.ship];
  return this.boats.concat(objects);
};

Game.prototype.add = function(obj) {
    this.boats.push(obj);
};


module.exports = Game;