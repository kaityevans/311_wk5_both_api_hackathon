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
  let sql = `SELECT * FROM users WHERE first_name = "${firstName}"`
  pool.query(sql, (err, rows) => {
    return res.json(rows)
  })
}

module.exports = {getEmployees, getEmployeesById, getEmployeesByFirstName}