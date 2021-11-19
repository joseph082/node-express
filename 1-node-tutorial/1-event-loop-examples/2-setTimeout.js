// started operating system process
console.log('first'); // first
setTimeout(() => {
  console.log('second'); // runs third
}, 0);
console.log('third'); // runs second
// completed and exited operating system process
