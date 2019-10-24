const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");

class Tornado extends MovingObject {
  constructor (pos, game) {
    let options = {
      pos: pos.pos,
      vel: Util.randomVec(Math.random()*3),
      color: "blue",
      radius: 15,
      game: game,
    }
    super(options)
  }

  collideWith (otherObject) {
    if (otherObject instanceof Ship) {
      otherObject.vel = Util.randomVec(Math.random()*6);
      otherObject.health -= 40;
      }
  }
}

module.exports = Tornado;