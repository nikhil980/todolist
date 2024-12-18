const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

let tasks = [];

// POST endpoint to add tasks
app.post('/tasks', (req, res) => {
  const task = req.body.task;
  if(task!==''){
  tasks.push(task);
  }
  res.status(201).send({ message: 'Task added successfully', task });
});

// GET endpoint to fetch all tasks
app.get('/tasks', (req, res) => {
  res.status(200).send(tasks);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
