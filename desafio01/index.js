const express = require('express');
const app = express();

app.use(express.json());

var projects = [];

// Middlewares
function checkIfProjectExists (req, res, next) {
  const { id } = req.params;
  
  if(!projects.find(project => project.id == id)) {
    return res.status(400).json({ error: `Project with id ${id} not found` });
  }

  return next();
}

function logNumberOfRequests(req, res, next) {
  console.count("Number of Requests");

  return next();
}

app.use(logNumberOfRequests);

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

app.put('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id == id);

  project.title = title;
  return res.json(project);
});

app.delete('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const projectId = projects.findIndex(project => project.id == id);

  projects.splice(projectId, 1);
  return res.send();
});

app.post('/projects/:id/tasks', checkIfProjectExists, (req, res) => {

});

app.listen(3333);