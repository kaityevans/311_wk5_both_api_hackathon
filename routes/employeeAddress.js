const express = require('express');
const router = express.Router();
const controller = require('../controllers/employeeAddress')

router.get('/usersAddress', controller.getEmployeesAddress)

router.get('/usersAddress/:id', controller.getAddressById)

router.post('/usersAddress', controller.postAddress)

router.delete('/usersAddress/:id', controller.removeAddressById)

router.put('/usersAddress/:id', controller.updateAddressById)


module.exports = router