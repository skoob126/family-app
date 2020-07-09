const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/User");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/user",userRouter);
// app.use(routes);



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://family-app:CHC@2019_acs@ds147233.mlab.com:47233/heroku_534cwmf8");
// Start the API server
app.listen(PORT, function() {
  console.log(`:get_work:  ==> API Server now listening on PORT ${PORT}!`);
});