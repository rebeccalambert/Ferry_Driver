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
    key('w', () => {this.game.ship.power([0, -1]);});
    key('s', () => {this.game.ship.power([0, 1]);});
    key('a', () => {this.game.ship.power([-1, 0]);});
    key('d', () => {this.game.ship.power([1, 0]);});
    key('space', () => {this.game.togglePause()});
    key('esc', () => {this.game.hitMenu()});
    key('enter', () => {this.game.exitMenu()});
  }

}

module.exports = GameView;