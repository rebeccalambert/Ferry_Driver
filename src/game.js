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
    this.menu = true;
    this.paused = false;
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
  }

  randomPosition () {
    return { pos: [Util.getRandomInt(this.DIM_X), Util.getRandomInt(this.DIM_Y) ]};
  }

  draw (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.allObjects().forEach(function(obj) {
      obj.draw(ctx);
    });
    if (this.paused) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
      ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
      ctx.font="45px Georgia";
      ctx.fillStyle = "rgba(0, 0, 0, .9)";
      ctx.fillText("PAUSED", this.DIM_X/2 - 430, this.DIM_Y/2 - 100)
      ctx.font="35px Georgia";
      ctx.fillText("- Use arrow keys to move ship (purple).", this.DIM_X/2 - 430, this.DIM_Y/2 - 30)
      ctx.fillText("- Avoid boats (grey), tornadoes (blue), and birds (white).", this.DIM_X/2 - 430, this.DIM_Y/2 + 30)
      ctx.fillText("- Hit 0 health - you lose.", this.DIM_X/2 - 430, this.DIM_Y/2 + 90)
      ctx.fillText("- Collect 10 tokens - you win!", this.DIM_X/2 - 430, this.DIM_Y/2 + 150)
    } 

    if (this.menu) {
      ctx.fillStyle = "lightblue";
      ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
      ctx.font="45px Georgia";
      ctx.fillStyle = "rgba(0, 0, 0, .8)";
      ctx.fillText("MENU - hit enter to start", this.DIM_X/2 - 250, this.DIM_Y/2)
      document.querySelector("h3").style.color = 'whitesmoke'; 
      document.querySelector("h2").style.color = 'whitesmoke'; 
    }
    if (this.ship.points > 9) {
      this.hitMenu;
      ctx.fillStyle = "lightblue";
      ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
      ctx.font="45px Georgia";
      ctx.fillStyle = "rgba(0, 0, 0, .8)";
      ctx.fillText("YOU WON! - press ESC to restart", this.DIM_X/2 - 325, this.DIM_Y/2)
    }
    if (this.ship.health < 1) {
      this.hitMenu;
      ctx.fillStyle = "lightblue";
      ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
      ctx.font="45px Georgia";
      ctx.fillStyle = "rgba(0, 0, 0, .8)";
      ctx.fillText("GAME OVER - press ESC to restart", this.DIM_X/2 - 350, this.DIM_Y/2)
    }
  }

  moveObjects () {
    if (this.paused || this.menu) { 
      return;
    } else {
      this.allObjects().forEach(function(obj) {
        obj.move(ctx);
      });
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
      document.querySelector("h2").innerHTML = this.ship.health;
      document.querySelector("h3").innerHTML = this.ship.points;
      if (this.ship.health < 2000) {
        document.querySelector("h2").style.color = '#ac0000'; 
      }
      if (this.ship.points > 9) {
        document.querySelector("h3").style.color = 'gold'; 
      }
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
    if (!this.paused) {
        this.paused = true;
      } else if (this.paused) {
        this.paused = false;
      }
  }

  hitMenu() {
    if (!this.menu) {
      this.menu = true;
    } 
  }
  
  exitMenu() {
    if (this.menu) {
      this.menu = false;
    } 
  }

}

module.exports = Game;