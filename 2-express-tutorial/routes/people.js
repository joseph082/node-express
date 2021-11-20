const express = require('express');

const router = express.Router();

const {
  getPeople, createPerson, createPersonPostman, updatePerson, deletePerson,
} = require('../controllers/people');
// const { people } = require('../data');
/*
// HTTP GET Method
router.get('/', getPeople);

router.post('/', createPerson);

router.post('/postman', createPersonPostman);

// PUT METHOD Update Data
router.put('/:id', updatePerson);

router.delete('/:id', deletePerson);*/

// another way

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
