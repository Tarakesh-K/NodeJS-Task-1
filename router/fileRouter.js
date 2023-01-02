const express = require("express");
const router = express.Router();
const fileModule = require("../modules/fileModule");

router.get("/view", fileModule.viewFile);
router.post("/create", fileModule.createFile);
router.get("/all", fileModule.allFiles);

module.exports = router;