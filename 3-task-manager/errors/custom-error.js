class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message); // calls Error(message) so can access parent method/properties
    this.statusCode = statusCode;
  }
};

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
}

module.exports = { createCustomError, CustomAPIError };