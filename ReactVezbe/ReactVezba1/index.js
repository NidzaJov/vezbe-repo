const Maths = require('./src/maths').instance;
const MathsClass = require('./src/maths').Maths;

const x = Maths.add(5, 16);
const maths = new MathsClass();
console.log(x);
const y = maths.power(2, 3);
console.log(y);
