const Util = require("./util");
const MovingObject = require("./moving_object");


class Ship extends MovingObject {
  constructor (pos, game) {
    
    let options = {
      pos: pos.pos,
      vel: [0,0],
      color: "purple",
      radius: 10,
      speed: 1,
      points: 0,
      health: 100,
      game: game,
    }
    super(options)
    this.speed = 1;
  }

  relocate () {
    this.vel = [0, 0];
    this.pos = this.game.randomPosition().pos;
  }

  power (impulse) {
    this.vel[0] += (impulse[0]*this.speed);
    this.vel[1] += (impulse[1]*this.speed);
  }
}

// Util.inherits(Ship, MovingObject);

// function Ship (pos, game) {
//   this.RADIUS = 10;
//   this.COLOR = "purple";
//   this.SPEED = 1;
//   this.points = 0;
//   this.health = 100;
//   MovingObject.call(this, {pos: pos.pos, vel: [0, 0], color: this.COLOR, radius: this.RADIUS, game: game });
// }

// Ship.prototype.relocate = function() {
//   this.vel = [0, 0];
//   this.pos = this.game.randomPosition().pos;
// };

// Ship.prototype.power = function(impulse) {
//   this.vel[0] += (impulse[0]*this.SPEED);
//   this.vel[1] += (impulse[1]*this.SPEED);
// };

// Ship.prototype.collideWith = function (otherObject) {
//   if (otherObject instanceof Token) {
//     otherObject.relocate();
//     }
// };

module.exports = Ship;