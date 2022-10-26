const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const faq = require("./data/faq.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/faq", (req, res) => {
  res.send(faq);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
