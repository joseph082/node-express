const mongoose = require('mongoose');
// const pw = '';
// const encodedPW = encodeURIComponent(pw);

const connectDB = (url) => {
  return mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectDB;
