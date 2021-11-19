const logger = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); // response is 'Home'
  // res.send('Testing');
};

module.exports = logger;
