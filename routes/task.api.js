const express = require("express");
const router = express.Router();
const {createTask, getTasks} = require("../controllers/task.controller");


router.get("/",getTasks);
router.post("/", createTask);
//router.put("/:id",)
//router.delete("/:id",)

module.exports=router;