const MovingObject = require("./moving_object");

class Ship extends MovingObject {
  constructor (pos, game) {
    
    let options = {
      pos: pos.pos,
      vel: [0,0],
      color: "purple",
      radius: 10,
      speed: 1,
      game: game,
    }
    super(options)
    this.speed = 1;
    this.points = 0;
    this.health = 100;

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

module.exports = Ship;