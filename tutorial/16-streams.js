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

const { createReadStream } = require('fs');
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' }); // this now reads 90000B at a time and uses utf8

// by default - reads 64KB at a time, 65536B
//fs.ReadStream Extends: <stream.Readable> which has data event
stream.on('data', (result) => {
  console.log(result);
});

stream.on('error',(err)=>{ // like if file path is wrong
  console.log(err);
});
