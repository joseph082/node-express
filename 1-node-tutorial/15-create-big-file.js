/**
 * Streams - used to read or write sequentially
 * 4 Types in Node.js:
 * - Writeable
 * - Readable
 * - Duplex = both writeable/readable
 * - Transform = where data can be modified when writing/reading
 * Streams extend EventEmitter so can use events on streams 
 * 
 */

const { writeFileSync } = require('fs');

for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big.txt', `Hello World ${i}\n`, { flag: 'a' });
}

