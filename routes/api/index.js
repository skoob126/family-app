const router = require("express").Router();
const todoRoutes = require("./todos");

// todos routes
router.use("/todos", todoRoutes);

module.exports = router;
