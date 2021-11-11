// CommonJS, every file is a module (by default)
// Modules = Encapsulated Code (only share the minimum)

const names = require('./4-names');
//const {john, peter} = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade'); // actually runs addValues() that is ran in the file

console.log(data);
console.log(names);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
