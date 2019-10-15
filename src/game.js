const Boat = require("./boat");
const Util = require("./util");
const Ship = require("./ship");
const Bird = require("./bird");
const Tornado = require("./tornado");
const Token = require("./token");
// const FerryTerminal = require("./ferry_terminal");

class Game {
  constructor () {
    this.DIM_X = 900;
    this.DIM_Y = 600;
    this.NUM_BIRDS = 7;
    this.NUM_BOATS = 4;
    this.NUM_TORNADOS = 3;
    this.NUM_TOKENS = 1;
    this.enemies = [];
    this.tokens = [];
    this.addEnemies();
    this.ship = new Ship(this.randomPosition(), this);
    // this.drawScore();
    this.paused = false;
  }

  drawScore() {
    let canvas = document.getElementById('game-canvas');
    let ctx = canvas.getContext('2d');
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+ this.ship.points, 8, 20);
  }

  addEnemies() {
    for(let i = 0; i < this.NUM_BIRDS; i++) {
      this.enemies.push(new Bird(this.randomPosition(), this));
    }
    for(let i = 0; i < this.NUM_BOATS; i++) {
      this.enemies.push(new Boat(this.randomPosition(), this));
    }
    for(let i = 0; i < this.NUM_TORNADOS; i++) {
      this.enemies.push(new Tornado(this.randomPosition(), this));
    }
    for(let i = 0; i < this.NUM_TOKENS; i++) {
      this.enemies.push(new Token(this.randomPosition(), this));
    }
    // this.enemies.push(new FerryTerminal(this.randomPosition(), this));
  }

  randomPosition () {
    return { pos: [Util.getRandomInt(this.DIM_X), Util.getRandomInt(this.DIM_Y) ]};
  }

  draw (ctx) {
      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
      this.allObjects().forEach(function(obj) {
        obj.draw(ctx);
      });
    
  }

  moveObjects () {
    if (!this.paused) { 
      this.allObjects().forEach(function(obj) {
        obj.move(ctx);
      });
    } else {
      return;
    }
  }

  wrap (pos) {
    let MARGIN = 50;
    let x = pos[0];
    let y = pos[1];
    if (x>this.DIM_X+MARGIN) {
      x = (x - this.DIM_X - MARGIN);
    }
    if (x < 0 - MARGIN) {
      x = (x + this.DIM_X + MARGIN);
    }
    if (y>this.DIM_Y+MARGIN) {
      y = (y - this.DIM_Y - MARGIN);
    }
    if (y < 0 - MARGIN) {
      y = (y + this.DIM_Y + MARGIN);
    }
    return [x, y];
  }

  checkCollisions () {
    for (let i = 0; i < this.allObjects().length-1; i++) {
      for (let j = i+1; j < this.allObjects().length; j++) {
        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
          this.allObjects()[i].collideWith(this.allObjects()[j]);
        }
      }
    }
  }

  step () {
      this.moveObjects();
      this.checkCollisions();
  }

  remove (obj) {
    this.enemies = this.enemies.filter( function (el) {
      return el !== obj;
    });
  }

  allObjects () {
    let objects = [this.ship];
    return this.enemies.concat(objects);
    
  }

  add () {
    this.enemies.push(obj);
  }

  togglePause () {
    // console.log("hit toggle")
    if (!this.paused) {
        this.paused = true;
      } else if (this.paused) {
        this.paused= false;
      }
  }

}

module.exports = Game;