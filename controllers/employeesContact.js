const mysql = require("mysql");
const pool = require("../mysql/connection");

const getContact = (req, res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    res.json(rows);
  });
};

const getContactById = (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["users", "id", id]);
  res.json(rows);
};

const postContact = (req, res) => {
  console.log(req.body)
  const {user_id, phone1, phone2, email} = req.body
  let sql = `INSERT INTO usersContact
	(user_id, phone1, phone2, email)
  VALUES 
  (?, ?, ?, ?);`;
  sql = mysql.format(sql, [user_id, phone1, phone2, email]);
  pool.query(sql, (err, results) => {
    return res.json(results);
  });
};
const putContact = (req, res) => {
  console.log(req.body)
}

const deleteContact = (req, res) => {
  console.log(req.body)
}

module.exports = {
  getContact,
  getContactById,
  postContact,
  putContact,
  deleteContact
};
