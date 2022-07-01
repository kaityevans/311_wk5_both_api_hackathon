const express = require('express');
const router = express.Router();
const controller = require("../controllers/employees")

  router.get('/users', getEmployees)

  router.get('/users/:id', getEmployeesById)

  router.get('/firstname/:first_name', getEmployeesByFirstName)

module.exports = router;