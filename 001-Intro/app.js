import { add, subtract } from './math.js' //named exports
import { multiply as times } from './math.js'; //import and rename
import * as math from "./math.js" //import everything and rename as math
import greeting from './greetings.js';
import { greetings } from './greetings.js';

console.log("Hello world From Node js")
console.log("Hellow from Watch")
console.log("Hello I am not on auto save mode");
let a;

console.log(a)

console.log("1, start");
setTimeout(() => console.log("3, done working!!"), 1000)
console.log('2, still working');

console.log(add(30, 40))
console.log(subtract(10, 5))
console.log(times(2, 3))
console.log(math.add(10, 7))
console.log(greeting("Amina"))
console.log(greetings())
