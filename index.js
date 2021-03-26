const express = require('express');
const data = require('./data');

const app = express();
const PORT = 4000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.app.use(express.static('build'));
app.get('/message', (req, res) => {
  // console.log('request in');
  res.status(200).json(data);
});

app.post('/message', (req, res) => {
  console.log(req.body);
  data.shift(req.body);
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
