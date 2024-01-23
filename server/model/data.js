const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  email: {
    type: String,
    required: [true, "must provide email"],
  },
  stuId: {
    type: Number,
    required: [true, "must provide student id"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "must provide phone number"],
  },
});

module.exports = mongoose.model("StudentSchema", StudentSchema);
