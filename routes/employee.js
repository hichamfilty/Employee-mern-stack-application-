const express = require('express');
const Employee = require('../model/Employee');
const employeeRouter = express.Router();

//CRUD
//Read
employeeRouter.get(
  ('/',
  (req, res) => {
    Employee.find({}, (err, response) => {
      if (err) {
        res.status(400).json({
          message: {
            msgBody: 'unable to find employee',
            msgError: true,
          },
        });
      } else {
        res.status(200).json({ response });
      }
    });
  })
);
//Create
employeeRouter.post('/', (req, res) => {
  const employee = new Employee(req.body);
  employee.save((err, document) => {
    if (err) {
      res.status(400).json({
        message: {
          msgBody: 'unable to create employee',
          msgError: true,
        },
      });
    } else {
      res.status(200).json({
        message: {
          msgBody: 'successfully added employee',
          msgError: false,
        },
      });
    }
  });
});
//delete
employeeRouter.delete('/:id', (req, res) => {
  Employee.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(400).json({
        message: {
          msgBody: 'unable to delete employee',
          msgError: true,
        },
      });
    } else {
      res.status(200).json({
        message: {
          msgBody: 'delete employee successfully',
          msgError: false,
        },
      });
    }
  });
});
//update
employeeRouter.put(':id', (req, res) => {
  Employee.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      runValidators: true,
    },
    (err, res) => {
      if (err) {
        res.status(400).json({
          nessage: {
            msgBody: 'unable to update',
            msgError: true,
          },
        });
      } else {
        res.status(200).json({
          message: {
            msgBody: 'employee updated successfully',
            msgError: false,
          },
        });
      }
    }
  );
});

module.exports = employeeRouter;
