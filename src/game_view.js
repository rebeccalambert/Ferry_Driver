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
    document.addEventListener("keydown", (e)=> {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          // this.game.ship.power([0, -1]);
          this.game.ship.moving.u = true;

          break
        case "ArrowDown":
          e.preventDefault();
          // this.game.ship.power([0, 1]);
          this.game.ship.moving.d = true;

          break

        case "ArrowLeft":
          e.preventDefault();
          this.game.ship.moving.l = true;
          // this.game.ship.power([-1, 0]);
          break
        case "ArrowRight":
          e.preventDefault();
          this.game.ship.moving.r = true;

          // this.game.ship.power([1, 0]);
          break
      }
    })
    document.addEventListener("keyup", (e)=> {
      switch (e.key) {
        case "ArrowUp":
          // this.game.ship.power([0, -1]);
          this.game.ship.moving.u = false;

          break
        case "ArrowDown":
          // this.game.ship.power([0, 1]);
          this.game.ship.moving.d = false;

          break

        case "ArrowLeft":
          this.game.ship.moving.l = false;
          // this.game.ship.power([-1, 0]);
          break
        case "ArrowRight":
          this.game.ship.moving.r = false;

          // this.game.ship.power([1, 0]);
          break
      }
    })
    key('space', () => {this.game.togglePause()});
    key('esc', () => {
      this.game.hitMenu(); 
      this.game = new Game();
    });
    key('enter', () => {this.game.exitMenu()});
  }

}

module.exports = GameView;