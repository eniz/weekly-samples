const path = require('path');
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3080;
const BASE_URL = "https://api.spacexdata.com/v3/launches?limit=10";

app.get("/api/launches", (req, res) => {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(json => { res.status(200).send(json) })
    .catch(error => {
      console.error(error);
      res.status(400).send(error);
    });
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(PORT, () => console.log(`Server up and running on ${PORT}`));