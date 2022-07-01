// const employee = require("../routes/employee")

const getEmployees = (req, res) => {  
    res.send('getting employees')
}

const getEmployeesById = (req, res) => {
  let id = req.params.id
  let found = employees.find((element) => {
    return element.id == id;
  })
  res.send('Get employee my ID!')
}

const getEmployeesByFirstName = (req, res) => {
  let firstName = req.params.first_name
  let found = employees.find((element) => {
    return element.first_name == firstName;
  })
  res.send('Get employee by first name!')
}

module.exports = {getEmployees, getEmployeesById, getEmployeesByFirstName}