const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); // returns array of JSONs
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error }); // 500 but this is general server error
  }


};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  }
  catch (err) {
    res.status(500).json({ msg: err }); // 500 but this is general server error
  }

};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; // sets taskID to req.params.id
    // breaks if ID isn't a valid ObjectId
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error }); // 500 but this is general server error
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });
    if (!task) {
      return res.status(404).json();
    }
    res.status(200).json({ task });

  }
  catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    // Different kinds of Responses
    res.status(200).json({ task });
    // res.status(200).send();
    // res.status(200).json({ task: null, status: 'success' })
  }
  catch (error) {
    res.status(500).json({ msg: error });
  }
};




module.exports = {
  getAllTasks, createTask, getTask, updateTask, deleteTask
};
