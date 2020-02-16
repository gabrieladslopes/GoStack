const express = require('express');
const app = express();

app.use(express.json());

var projects = [];

// Routes
app.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  }

  projects.push(project);
  
  return res.json(project);
});

app.get('/projects', (req, res) => {
  return res.json(projects);
});

app.put('/projects/:id', (req, res) => {

});

app.delete('/projects/:id', (req, res) => {

});

app.post('/projects/:id/tasks', (req, res) => {

});

app.listen(3333);