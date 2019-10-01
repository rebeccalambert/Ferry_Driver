const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");

Util.inherits(Bird, MovingObject);

function Bird (pos, game) {
  this.COLOR = "yellow";
  this.RADIUS = 15;
  this.RANDOMVECTOR = Util.randomVec(Math.random()*3);
  MovingObject.call(this,{pos: pos.pos, vel: this.RANDOMVECTOR, color: this.COLOR, radius: this.RADIUS, game: game});
}

Bird.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
};

Bird.prototype.avoidBirds = function (otherObject) {
  
}

module.exports = Bird;