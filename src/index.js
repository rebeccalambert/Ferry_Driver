const MovingObject = require("./moving_object");
const Boat = require("./boat")
const Game = require("./game");
const GameView = require("./game_view");

console.log("Webpack is working!");

window.addEventListener('DOMContentLoaded', function(){
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  let game_view = new GameView(ctx);
  game_view.start();
  window.ctx = ctx;
  window.game_view = game_view;

});



window.MovingObject = MovingObject;
window.Boat = Boat;
window.Game = Game;
window.GameView = GameView;