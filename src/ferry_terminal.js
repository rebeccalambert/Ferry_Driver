const MovingObject = require("./moving_object");
const Ship = require("./ship");

class FerryTerminal extends MovingObject {
  constructor (game) {
    let options = {
      pos: [850, 50], 
      vel: [0, 0], 
      color: "dark grey", 
      radius: 20, 
      game: game,
    };
    super(options);
  }

  draw (ctx) {
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.strokeStyle = "dark grey";
    ctx.lineWidth = 1;
    ctx.stroke();
    // ctx.fillStyle = ctx.createPattern(rock.png, "repeat");
    ctx.fill();
  }

  collideWith (otherObject) {
    if (otherObject instanceof Ship) {
      otherObject.points += 1;
    //   this.relocate();
    }
  };

//   relocate () {
//     this.pos = this.game.randomPosition().pos;
//   }
}

module.exports = FerryTerminal;