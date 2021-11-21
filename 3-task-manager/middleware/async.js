const asyncWrapper = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (error) {
      next(error); // calls next middleware func
    }
  };
};

module.exports = asyncWrapper;
