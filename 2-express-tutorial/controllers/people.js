const { people } = require('../data');

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (name === '' || name === undefined) {
    return res.status(400).json({ success: false, msg: 'Please Provide Name Value' });
  }
  return res.status(201).json({ success: true, person: name });
  // res.status(201).send('Success');
};

const createPersonPostman = (req, res) => {
  const { name = '' } = req.body;
  if (name === '') {
    return res.status(400).json({ success: false, msg: 'Please Provide Name Value' });
  }
  return res.status(201).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
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
};

module.exports = {
  getPeople, createPerson, createPersonPostman, updatePerson, deletePerson,
};
