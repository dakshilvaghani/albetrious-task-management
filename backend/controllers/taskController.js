import Task from "../models/task.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, stage, date } = req.body;

    const task = await Task.create({
      title,
      description,
      stage,
      date,
    });

    res
      .status(200)
      .json({ status: true, task, message: "Task created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ _id: -1 });

    res.status(200).json({
      status: true,
      tasks,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Server error." });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    res.status(200).json({
      status: true,
      task,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date, stage } = req.body;

    console.log(req.body);
    const task = await Task.findById(id);

    task.title = title;
    task.description = description;
    task.date = date;
    task.stage = stage.toLowerCase();

    await task.save();

    res
      .status(200)
      .json({ status: true, message: "Task updated successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await Task.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ status: true, message: "Task deleted successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Server error." });
  }
};

export const filterTaskByDate = async (req, res) => {
  const { stage, date } = req.query;

  const filters = {};

  // Check for stage filter 
  if (stage) {
    filters.stage = stage; 
  }

  // Check for date filter
  if (date) {
    const startDate = new Date(date); 
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 1); 

    
    filters.date = { $gte: startDate, $lt: endDate };
  }

  try {
    const tasks = await Task.find(filters); 
    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
