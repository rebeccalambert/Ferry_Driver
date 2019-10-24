const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");

class Bird extends MovingObject {
  constructor (pos, game) {
    let options = {
      color: "white",
      radius: 8,
      vel: Util.randomVec(Math.random()*3),
      pos: pos.pos,
      game: game,
    }
    super(options);
  }

  collideWith (otherObject) {
    if (otherObject instanceof Ship) {
      otherObject.vel[0] = (otherObject.vel[0] * .9);
      otherObject.vel[1] = (otherObject.vel[1] * .9); 
      otherObject.health -= 10
      }
  }
}

module.exports = Bird;