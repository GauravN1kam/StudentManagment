const StudentSchema = require("../model/data");

const getAllStudents = async (req, res) => {
  try {
    const students = await StudentSchema.find({}).sort({ stuId: 1 });
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await StudentSchema.find({
      stuId: parseInt(req.params.stuId),
    });
    if (student) {
      res.status(200).json({ student });
    } else {
      res.status(404).json({
        msg: `no student with id : ${parseInt(req.params.stuId)} found`,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = await StudentSchema.create(req.body);
    res.status(201).json({ student });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateStudent = async (req, res) => {
  try {
    const query = { stuId: parseInt(req.params.stuId) };
    const student = await StudentSchema.findOneAndUpdate(query, req.body);
    if (student) {
      res.status(200).json({ student });
    } else {
      res
        .status(404)
        .json({ msg: `no student with id : ${req.params.stuId} found` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteStudent = async (req, res) => {
  try {
    console.log(req.params.stuId);
    const student = await StudentSchema.findOneAndDelete({
      stuId: parseInt(req.params.stuId),
    });
    if (student) {
      res.status(200).json({ student });
    } else {
      res
        .status(404)
        .json({ msg: `no student with id : ${req.params.stuId} found` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
