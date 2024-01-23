const express = require("express");
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/app");
const router = express.Router();

router
  .get("/", getAllStudents)
  .get("/:stuId", getStudentById)
  .post("/", createStudent)
  .patch("/:stuId", updateStudent)
  .delete("/:stuId", deleteStudent);

module.exports = router;
