const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");

Util.inherits(Boat, MovingObject);

function Boat (pos, game) {
  this.COLOR = "grey";
  this.RADIUS = 15;
  this.RANDOMVECTOR = Util.randomVec(Math.random()*3);
  MovingObject.call(this,{pos: pos.pos, vel: [Util.getRandomInt(6), 0], color: this.COLOR, radius: this.RADIUS, game: game});
}

Boat.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
};

Boat.prototype.avoidBoats = function (otherObject) {
  
}

module.exports = Boat;