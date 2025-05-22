import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 5173;

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded();

app.use(`/public`, express.static('public'));

app.get(`/`, (req, res) => {
  res.send(`Hello World!`);
});

app.get(`/french`, (req, res) => {
  res.send(`Bonjour le monde!`);
});

app.patch(`/`, jsonParser, (req, res) => {
  const { name, age } = req.body;

  res.send(`Hello ${name}! You are ${age} years old.`);
});

app.post(`/`, urlencodedParser, (req, res) => {
  console.log(req.body);
  const { login, password, email } = req.body;

  res.send(`Dear ${login}! Your password is ${password} and your email is ${email}.`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
