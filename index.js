const express = require('express');

const PORT = 80;
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    author: 'Ainize Team',
    content: 'Pseudo-random number generator'
  });
});

app.listen(PORT, () => {
  console.log(`Listening to requests on http://localhost:${PORT}`);
});