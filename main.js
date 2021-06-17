var express = require("express");
var logger = require("morgan");
var app = express();
const tweets = require("./routes/tweets");
const health = require("./routes/health");
const port = process.env.PORT || "3000";

// Logger - prints the requests
app.use(logger("dev")); 

// Checking if the server is alive (for testing service only)
app.get("/alive", (req, res) => res.send("Hi i'm alive"));

// Routings
app.use("/tweets", tweets);
app.use("/health", health);

// Default Router
app.use((req,res) =>{
  console.log("default router");
  res.status(200).json("Welcome to my home assignment");
});

// Catch errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json(err.message);
});

// Server up an listen to port
const server = app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});