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

  // draw (ctx) {
  // let boat_img = new Image();
  // // boat_img.src = 'boat.png';
  // // boat_img.onload = function(){
  //   ctx.drawImage('boat.png', 0, 0);
  //   }
  // }

  collideWith (otherObject) {
    if (otherObject instanceof Ship) {
      otherObject.relocate();
      otherObject.health -= 1000;
    }
  }
}

module.exports = Boat;