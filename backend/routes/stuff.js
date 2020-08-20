const express = require("express");
const stuffControllers = require("../controllers/stuff");

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const router = express.Router();

router
  .get("/", auth, stuffControllers.getAllStuff)
  .post("/", auth, multer, stuffControllers.createThing)
  .get("/:id", auth, stuffControllers.getOneThing)
  .put("/:id", auth, multer, stuffControllers.modifyThing)
  .delete("/:id", auth, stuffControllers.deleteThing);

module.exports = router;
