
const Util = {
    inherits(childClass, parentClass) {
      function Surrogate(){}
      Surrogate.prototype = parentClass.prototype;
      childClass.prototype = new Surrogate();
      childClass.prototype.constructor = childClass;
    },
  
  
    randomVec(length) {
      const deg = 2 * Math.PI * Math.random();
      return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    scale(vec, m) {
      return [vec[0] * m, vec[1] * m];
    },
  
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    
    getDistance(pos1, pos2) {
      let x = pos1[0] - pos2[0];
      let y = pos1[1] - pos2[1];
      return Math.sqrt(x*x + y*y);
    }
  
  };
  
  module.exports = Util;