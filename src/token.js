const MovingObject = require("./moving_object");
const Ship = require("./ship");

class Token extends MovingObject {
  constructor (pos, game) {
    let options = {
      pos: pos.pos, 
      vel: [0, 0], 
      color: "yellow", 
      radius: 5, 
      game: game,
    };
    super(options);
  }

  collideWith (otherObject) {
    if (otherObject instanceof Ship) {
      otherObject.points += 1;
      this.relocate();
    }
  };

  relocate () {
    this.pos = this.game.randomPosition().pos;
  }
}

module.exports = Token;