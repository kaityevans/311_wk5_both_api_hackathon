const mysql = require("mysql")
const pool = require("../mysql/connection")


const getEmployees = (req, res) => {  
  pool.query("SELECT * FROM users", (err, rows) => {
     res.json(rows);
  })
}

const getEmployeesById = (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["users", "id", id]);
     res.json(rows)
}

const getEmployeesByFirstName = (req, res) => {
  let firstName = req.params.first_name
  let found = employees.find((element) => {
    return element.first_name == firstName;
  })
  res.send('Get employee by first name!')
}

module.exports = {getEmployees, getEmployeesById, getEmployeesByFirstName}