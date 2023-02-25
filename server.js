const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hi</h1>');
});
app.get('/pratap', (req, res) => {
  res.send('<h1>Hi Pratap</h1>');
});
app.get('/naveen', (req, res) => {
  res.send('<h1>Hi Naveen</h1>');
});

app.listen(9981, () => {
  console.log('Server running on port 9981');
});




