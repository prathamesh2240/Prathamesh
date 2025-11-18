const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello MERN Stack! This is my first practical viva experiment.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
