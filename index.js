// const  getRandomJoke = require ("give-me-a-joke");

// getRandomJoke.getRandomDadJoke(function (joke) {
//   console.log(joke);
// });

//Note ************** Never use require() in ES6 module. It will throw an error. Use import instead of require() in ES6 module.
//       And also never use import in commonJS module. It will also throw an error. Use require() instead of import in commonJS module.
//       And never use require and import in the same file because it will also throw an error. Use either require or import in the same file but not both.

// import { generate } from "random-words";

// console.log(generate());

import {sum, g, PI} from "./math.js";

console.log(sum(1,3));
console.log(g);
console.log(PI);







