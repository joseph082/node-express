  /** $ npm    comes with node
 *  $ npm --version
 * 
 * local dependency = only use it in a particular project
 * npm i <packageName> or npm install
 * 
 * global dependency = in any project
 * npm i -g <packageName>
 * on mac: $ sudo npm install -g <packageName>
 * 
 * package.json = manifest file that stores important info abt proj/package
 * manual approach = create it in the root, create properties, etc.
 * npm init (step by step, press enter to skip)
 * npm init -y (everything default)
 * 
 */


// $ npm run <scriptCommand in package.json>
const _ = require('lodash');

const items = [1, [2, [3, [4, [5, [6,]]]]]];

const newItems = _.flattenDeep(items); // [ 1, 2, 3, 4, 5, 6 ]
console.log(newItems);
console.log('hello people');
