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


// Util.inherits(Boat, MovingObject);

// function Boat (pos, game) {
//   this.COLOR = "grey";
//   this.RADIUS = 12;
//   this.RANDOMVECTOR = Util.randomVec(Math.random()*3);
//   MovingObject.call(this,{pos: pos.pos, vel: [Util.getRandomInt(6), 0], color: this.COLOR, radius: this.RADIUS, game: game});
// }

// Boat.prototype.collideWith = function (otherObject) {
//   if (otherObject instanceof Ship) {
//     otherObject.relocate();
//     otherObject.health -=50;
//   }
// };

// Boat.prototype.avoidBoats = function (otherObject) {
  
// }

module.exports = Boat;