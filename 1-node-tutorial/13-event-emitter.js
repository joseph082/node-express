/**
 * Event-Driven Programming
 * Used heavily in Node.js
 * eg. in browser: button click, link hover, 
 * also on server side
 */

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on = listen for an event
customEmitter.on('response', (name,id) => {
  console.log(`data received ${name} with id: ${id}`);
}); // listening for event named response

customEmitter.on('response', () => {
  console.log(`some other logic here`);
}); // also listening for event named response

// emit = emit an event
// customEmitter.emit('response'); // emits event named response

customEmitter.emit('response','john',34); // emits event named response

// order matters. if emitted before .on(), nothing's listening for it


