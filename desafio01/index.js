const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.json({ message: "hello world 1" });
});

app.listen(3333);