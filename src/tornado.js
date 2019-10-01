const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");

Util.inherits(Tornado, MovingObject);

function Tornado (pos, game) {
  this.COLOR = "blue";
  this.RADIUS = 15;
  this.RANDOMVECTOR = Util.randomVec(Math.random()*3);
  MovingObject.call(this,{pos: pos.pos, vel: this.RANDOMVECTOR, color: this.COLOR, radius: this.RADIUS, game: game});
}

Tornado.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    // otherObject.vel[0] = (otherObject.vel[0] * -1)
    // otherObject.vel[1] = (otherObject.vel[1] * -1) 
    otherObject.vel = Util.randomVec(Math.random()*3);
    }
};

Tornado.prototype.avoidTornados = function (otherObject) {
  
}

module.exports = Tornado;