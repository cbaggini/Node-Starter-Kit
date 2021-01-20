const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Yay Node!");
});

app.get("/node", function (req, res) {
  res.send("This is node!");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("And this is CYF!");
});

app.get("/chocolate", function (req, res) {
  let chocAmount = req.query.amount;
  res.send(`Hello! You want ${chocAmount} pieces of chocolate`);
});

app.get("/multiply", function (req, res) {
  let value1 = req.query.value1;
  let value2 = req.query.value2;
  res.send(`Hello! Your result is ${value1*value2}`);
});


app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
