// async - non-blocking
const { readFile, writeFile } = require('fs');
console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => { // wo utf8 encoding -> returns a buffer
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result,'done w this task');

    });
  });
});
console.log('starting next task.');
