const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});
const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
