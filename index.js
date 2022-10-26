const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const faq = require("./data/faq.json");
const blog = require("./data/blog.json");
const courses = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/faq", (req, res) => {
  res.send(faq);
});

app.get("/blog", (req, res) => {
  res.send(blog);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const courses_info = courses.find((course) => course.id == id);
  res.send(courses_info);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
