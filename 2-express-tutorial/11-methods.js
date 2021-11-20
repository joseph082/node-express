/**
 * HTTP Methods
 * GET (Default) - Read Data
 * POST - Insert Data
 * PUT - Update Data
 * DELETE - Delete Data
 * eg
 * GET /api/orders - get all orders
 * POST /api/orders - place an order (send data)
 * GET /api/orders/:id - get single order (path params)
 * PUT /api/orders/:id - update specific order (params + send data)
 * DELETE /api/orders/:id - delete order (path params)
 *
 */

const express = require('express');

const app = express();

const { people } = require('./data');

app.use(express.static('./methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// HTTP GET Method
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// HTTP POST Method
app.post('/login', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name !== '' && name !== undefined) {
    return res.status(200).send(`Welcome ${name}`);
  }
  return res.status(401).send('Please Provide Credentials');
});

// you usually want a payload / body in POST Method since you're sending data
// input.name is a key sent in request
// content-type is application/x-www-form-urlencoded

// parse json
app.use(express.json());

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (name === '' || name === undefined) {
    return res.status(400).json({ success: false, msg: 'Please Provide Name Value' });
  }
  return res.status(201).json({ success: true, person: name });
  // res.status(201).send('Success');
});

app.post('/api/postman/people', (req, res) => {
  const { name = '' } = req.body;
  if (name === '') {
    return res.status(400).json({ success: false, msg: 'Please Provide Name Value' });
  }
  return res.status(201).json({ success: true, data: [...people, name] });
});

// PUT METHOD Update Data
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name);
  // res.send('Hello World');
  const personID = Number(id);
  if (Number.isNaN(personID)) {
    return res.status(404).json({ success: false, msg: `No person with id ${id}` });
  }
  const person = people.find((person2) => person2.id === personID);
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.map((person2) => { // creates a new array with results of this
    if (person2.id === personID) {
      person2.name = name; // would change all people with same ID
      // not sanitizing name so it can be an array
    }
    return person2;
  });
  return res.status(200).json({ success: true, data: newPeople });
});

app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const personID = Number(id);
  if (Number.isNaN(personID)) {
    return res.status(404).json({ success: false, msg: `No person with id ${id}` });
  }
  const person = people.find((person2) => person2.id === personID);
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.filter((person2) => person2.id !== personID);
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
