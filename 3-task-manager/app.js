const express = require('express');
const app = express();

const tasks = require('./routes/task');
const connectDB = require('./db/connect');

require('dotenv').config();

const notFound = require('./middleware/not-found');

// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App')
});

app.use('/api/v1/tasks', tasks);

app.use(notFound);

const port = 3000;
const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }

};

start();



/**
 * REST API = Representational State Transfer
 * often fuzzy and u can deviate from it bc u might need to
 * CRUD - Create Read Update Delete
 * GET api/tasks
 * POST api/tasks
 * GET api/tasks/:id
 * PUT/PATCH api/tasks/:id
 * DELETE api/tasks/:id
 */

/**
 * MongoDB
 * NoSQL, Non Relational DB
 * Store JSON unlike traditional databases with rows/columns
 * U have collections instead of tables
 * and documents (which rep a single item) instead of rows
 * Easy to get Started
 * Free Cloud Hosting on Atlas
 *
 * Database - Collections - Documents
 * Documents have Dynamic Schema, so in same collection, they don't need same set of fields (ie structure)
 *
 * Mongoose
 * Model = Wrapper for Schema
 * Instance of Model is a document
 *
 * Queries AREN'T Promises but can act like them
 *
 * PUT / PATCH both used for updating
 * but PUT is for total replacement
 * while PATCH for partial update
 */
