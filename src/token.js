const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");
const Game = require("./game");

Util.inherits(Token, MovingObject);

function Token (pos, game) {
  this.COLOR = "yellow";
  this.RADIUS = 5;
  MovingObject.call(this,{pos: pos.pos, vel: [0, 0], color: this.COLOR, radius: this.RADIUS, game: game});
}

Token.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.points += 1;
    this.relocate();
  }
};

Token.prototype.relocate = function() {
    this.pos = this.game.randomPosition().pos;
  };


module.exports = Token;