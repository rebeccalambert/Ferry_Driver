const Util = require("./util");

class MovingObject {
  constructor (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  }


  draw (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  move () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  }

  isCollidedWith (otherObject) {
    if (Util.getDistance(this.pos, otherObject.pos) < (this.radius+otherObject.radius)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = MovingObject;