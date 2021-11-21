const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
  // try {
  const tasks = await Task.find({}); // returns array of JSONs
  // res.status(200).json({ tasks, amount: tasks.length });
  // res.status(200).json({ status: 'success', data: { tasks, nBHits: tasks.length } });
  // res.status(200).json({ success: true, data: { tasks, nBHits: tasks.length } });
  res.status(200).json({ tasks });
  // }
  /* catch (error) {
    res.status(500).json({ msg: error }); // 500 but this is general server error
  }*/
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params; // sets taskID to req.params.id
  // breaks if ID isn't a valid ObjectId
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    // const error = new Error('Item Not Found');
    // error.status = 404;
    return next(createCustomError('Item Not Found', 404));
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });

});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  // Different kinds of Responses
  res.status(200).json({ task });
  // res.status(200).send();
  // res.status(200).json({ task: null, status: 'success' })
});

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true, overwrite: true });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks, createTask, getTask, updateTask, deleteTask, editTask
};
