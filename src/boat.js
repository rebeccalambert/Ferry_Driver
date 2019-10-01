const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");

Util.inherits(Boat, MovingObject);

function Boat (pos, game) {
  this.COLOR = "grey";
  this.RADIUS = 15;
  this.RANDOMVECTOR = Util.randomVec(Math.random()*3);
  MovingObject.call(this,{pos: pos.pos, vel: this.RANDOMVECTOR, color: this.COLOR, radius: this.RADIUS, game: game});
}

Boat.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  } else {
    MovingObject.call(this,{pos: pos.pos, vel: this.RANDOMVECTOR, color: this.COLOR, radius: this.RADIUS, game: game});
  }
};

module.exports = Boat;