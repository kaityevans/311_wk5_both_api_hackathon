const express = require("express");
const router = express.Router();
const controller = require("../controllers/employees");

router.get("/users", controller.getEmployees);

router.get("/users/:id", controller.getEmployeesById);

router.get("/firstname/:first_name", controller.getEmployeesByFirstName);

module.exports = router;
