const { CustomAPIError } = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
   console.log(err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message }); //.message is from built in Error
  }
  return res.status(500).json({ msg: 'Something went wrong. Please try again.' }); //.message is from built in Error
};

module.exports = errorHandlerMiddleware;
