const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name !== '' && name !== undefined) {
    return res.status(200).send(`Welcome ${name}`);
  }
  return res.status(401).send('Please Provide Credentials');
});

module.exports = router;
