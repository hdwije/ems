import { model, models, Schema } from 'mongoose';

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    max: 10,
    min: 6,
  },
  lastName: {
    type: String,
    required: true,
    max: 10,
    min: 6,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    max: 10,
    min: 10,
  },
  gender: {
    type: String,
    required: true,
    enum: ['M', 'F'],
  },
  photo: {
    type: String,
  },
});

const Employee = models.Employee || model('Employee', EmployeeSchema);

module.exports = Employee;
