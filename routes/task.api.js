const express = require("express")
const router = express.Router()
const {createTask} = require("../controllers/task.controller")


router.get("/",)
router.post("/", createTask)
router.put("/:id",)
router.delete("/:id",)

module.exports=router