const mysql = require("mysql");
const pool = require("../mysql/connection");

const getContact = (req, res) => {
  pool.query("SELECT * FROM usersContact", (err, rows) => {
    res.json(rows);
  });
};

const getContactById = (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["usersContact", "id", id]);
  pool.query(sql, (err, rows) => {
    res.json(rows);
  })
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
  let id = req.params.id;
  const {phone1, phone2, email} = req.body
  let sql = `UPDATE usersContact 
  SET phone1 = ? , phone2 = ?, email = ?
  WHERE user_id = ${id}`;
  sql = mysql.format(sql, [phone1, phone2, email]);
  pool.query(sql, (err, results) => {
    return res.json(results);
  });
}

const deleteContact = (req, res) => {
  console.log(req.body)
  // Get the Id from the path parameters
  let id = req.params.id;
  // DON'T FORGET THE POOL.QUERY!
  pool.query(`DELETE FROM usersContact
  WHERE user_id = ${id}`, (err, results) => {
    return res.json(results);
  })
}

module.exports = {
  getContact,
  getContactById,
  postContact,
  putContact,
  deleteContact
};
