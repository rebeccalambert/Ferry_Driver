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
    this.health = 10000;

    this.moving = {
      l: false,
      r: false,
      u: false, 
      d: false
    }

  }

  relocate () {
    this.vel = [0, 0];
    this.pos = this.game.randomPosition().pos;
  }

  power (impulse) {
    this.vel[0] += (impulse[0]*this.speed);
    this.vel[1] += (impulse[1]*this.speed);
  }

  move () {
    let impulseMultiplier = 0.1

    if (this.moving.l) {
      this.power([-impulseMultiplier, 0])
    }
    if (this.moving.r) {
      this.power([impulseMultiplier, 0])
    }
    if (this.moving.u) {
      this.power([0, -impulseMultiplier])

    }
    if (this.moving.d) {
      this.power([0, impulseMultiplier])
    }

    super.move()
  }

}

module.exports = Ship;