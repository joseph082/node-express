const os = require('os');

// info abt current user
const user = os.userInfo();
console.log(user);

//method that returns sys uptime in secs
console.log(`The System Uptime is ${os.uptime()} seconds.`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
