const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'john') {
    req.user = { name: 'john', id: 3 }; // attaches this to ur request for later funcs
    next();
  } else {
    res.status(401).send('Unauthorized'); // 401 = Unauthorized
  }
  // console.log('authorize');
  // next();
};

module.exports = authorize;
