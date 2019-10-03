const Game = require("./game");

class GameView {
  constructor (ctx) {
    this.game = new Game();
    this.ctx = ctx;
  }

  
  start () {
    let that = this;
    that.bindKeyHandlers();
    setInterval(function() {
      that.game.step();
      that.game.draw(that.ctx);
    }, 20);
  }
  
  bindKeyHandlers () {
    key('up', () => {this.game.ship.power([0, -1]);});
    key('down', () => {this.game.ship.power([0, 1]);});
    key('left', () => {this.game.ship.power([-1, 0]);});
    key('right', () => {this.game.ship.power([1, 0]);});
  }
}

module.exports = GameView;