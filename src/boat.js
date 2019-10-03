const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");


class Boat extends MovingObject {
  constructor (pos, game) {
    let options = {
      color: "grey",
      radius: 12,
      vel: [Util.getRandomInt(6), 0],
      pos: pos.pos,
      game: game,
    }
    super(options)
  }

  collideWith (otherObject) {
    if (otherObject instanceof Ship) {
      otherObject.relocate();
      otherObject.health -=50;
    }
  }
}

module.exports = Boat;