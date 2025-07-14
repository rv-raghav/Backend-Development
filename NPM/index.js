// var generateName = require("sillyname");

import generateName from "sillyname";
import { randomSuperhero } from "superheroes";
const name = randomSuperhero();
console.log(`My superhero name is ${name}.`);

var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

