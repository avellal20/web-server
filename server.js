import express from "express";
import apiRouter from "./routes/api.js";
import pagesRouter from "./routes/pages.js";

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hi! Welcome to my website!");
});

app.get("/hello", (req, res) => {
  res.send("We are learning web programming in this course.");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//app.get("/status", (req, res) => {
//res.json({ status: "ok", uptime: process.uptime() });
//});

app.use("/api", apiRouter);

//app.get("/hello/:name", (req, res) => {
//const name = req.params.name;
//res.send(`Hello, ${name}!`);
//});

app.use("/pages", pagesRouter);

app.get("/repeat/:word", (req, res) => {
  const word = req.params.word;
  res.send(`${word} ${word} ${word}`);
});

app.get("/count", (req, res) => {
  const from = req.query.from || 1;
  const to = req.query.to || 10;

  res.send(`Counting from ${from} to ${to}.`);
});

app.get("/api/info", (req, res) => {
  res.json({
    name: "Amita",
    course: "Web Programming",
  });
});

app.get("/api/error", (req, res) => {
  res.status(400).send("Bad request.");
});

//app.get("/hello/:name", (req, res) => {
//const name = req.params.name;
//res.send(`Hello, ${name}!`);
//});

//app.get("users/:userId/posts/:postId", (req, res) => {
//const { userId, postId } = req.params;
//res.send(`User ${userId}, post ${postId}`);
//});

//app.get("/search", (req, res) => {
//const term = req.query.term || "nothing";
//const limit = Number.parseInt(req.query.limit) || 5;
//res.send(`Searching for "${term}", showing ${limit} results.`);
//});

//app.get("/hello/:name", (req, res) => {
// res.send(`Hello, ${req.params.nname}!`);
// });

app.get("/broken", (req, res) => {
  const user = undefined;
  res.send(user.name);
});

app.use((req, res) => {
  res.status(404).send("Page not found.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
