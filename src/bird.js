const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");

Util.inherits(Bird, MovingObject);

function Bird (pos, game) {
  this.COLOR = "yellow";
  this.RADIUS = 8;
  this.RANDOMVECTOR = Util.randomVec(Math.random()*3);
  MovingObject.call(this,{pos: pos.pos, vel: this.RANDOMVECTOR, color: this.COLOR, radius: this.RADIUS, game: game});
}

Bird.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    // otherObject.relocate();
    // otherObject.vel[0] = (otherObject.vel[0] * -1)
    // otherObject.vel[1] = (otherObject.vel[1] * -1) 

    otherObject.vel[0] = (otherObject.vel[0] * .9)
    otherObject.vel[1] = (otherObject.vel[1] * .9)  
    }
};

Bird.prototype.avoidBirds = function (otherObject) {
  
}

module.exports = Bird;