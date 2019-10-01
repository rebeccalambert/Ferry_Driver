const Game = require("./game");

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  let that = this;
  that.bindKeyHandlers();
  setInterval(function() {
  that.game.step();
  that.game.draw(that.ctx);
  }, 20);
};

GameView.prototype.bindKeyHandlers = function() {
  key('up', () => {this.game.ship.power([0, -1]);});
  key('down', () => {this.game.ship.power([0, 1]);});
  key('left', () => {this.game.ship.power([-1, 0]);});
  key('right', () => {this.game.ship.power([1, 0]);});
  // key('b', () => { this.game.ship.vel = [0, 0]; });
};

module.exports = GameView;