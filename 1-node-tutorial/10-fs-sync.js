// fs (file system) module
//synchonous - blocking

const { readFileSync, writeFileSync, read } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`,
  { flag: 'a' }); // a flag is to append now

console.log('done with this task.');
console.log('starting the next one.');

