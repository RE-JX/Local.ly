//server entry file
const bodyParser = require(`body-parser`);
const express = require(`express`);
const app = require(`express`)();
const path = require(`path`);
const mongoose = require(`mongoose`);
const port = 8080;

//-----------middleware----------------------
//-------------------------------------------

app.use(bodyParser.json());

app.use((req, res, next) => {
  next();
});

app.use(`/`, express.static(__dirname + `/client`));

app.use(`/public`, express.static(__dirname + '/node_modules'));

//-----------web routes----------------------
//-------------------------------------------

app.get(`/`, (req, res) => {
  res.status(200).sendFile(path.join(__dirname + `/client/index.html`));
});

//-----------server listen-------------------
//-------------------------------------------

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

