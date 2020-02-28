const express = require('express');
const crypto = require('crypto');

const PORT = 80;
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    author: 'Ainize Team',
    content: 'Pseudo-random number generator',
    api: '/png',
    query: '?bits=2048&form=hex&count=10'
  });
});

app.get('/png', (req, res) => {
  const bits = Number(req.query.bits) || 2048;
  const form = req.query.form || 'hex';
  const count = Number(req.query.count) || 1;

  const bytes = [];

  for (let i = 0; i < count; i++) {
    bytes.push(crypto.randomBytes(bits));
  }

  switch (form) {
    case 'hex':
      res.status(200).json(bytes.map(e => e.toString('hex')));
      return;
    default:
      res.status(200).json(bytes);
      return;
  }
});

app.listen(PORT, () => {
  console.log(`Listening to requests on http://localhost:${PORT}`);
});