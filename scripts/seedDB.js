const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://family-app:CHC@2019_acs@ds147233.mlab.com:47233/heroku_534cwmf8"
);

const todoSeed = [
  {
    title: "The Dead Zone",
    author: "Stephen King",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  }
];

db.Todo
  .remove({})
  .then(() => db.Todo.collection.insertMany(todoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
