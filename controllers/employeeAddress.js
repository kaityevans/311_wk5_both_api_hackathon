const mysql = require('mysql')
const pool = require('../mysql/connection')

const getEmployeesAddress = (req, res) => {
    let sql = "SELECT * FROM ??"
    sql = mysql.format(sql, ['usersAddress'])
    pool.query(sql, (err, rows) => {
        if(err){
            res.status(500).send("Error could not query data")
        }
        res.json(rows)
    })
}

const getAddressById = (req, res) => {
    const id = req.params.id
    let sql = "SELECT * FROM ?? WHERE ?? = ?"
    sql = mysql.format(sql, ['usersAddress', 'id', id])

    pool.query(sql, (err, rows) => {
        if(err){
            res.status(500).send("Error could not query data")
        }
        res.json(rows)
    })
}

const postAddress = (req, res) => {
    const {
        user_id,
        address,
        city,
        county,
        state,
        zip
    } = req.body

    let sql = `INSERT INTO ?? (??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?);`
    sql = mysql.format(sql, ['usersAddress', 'user_id', 'address', 'city', 'county', 'state', 'zip', user_id, address, city, county, state, zip])
    pool.query(sql, (err, results) => {
        if(err){
            res.status(500).send("Error could not query data")
        }
        res.json(results)
    })
}

const removeAddressById = (req, res) => {
    const id = req.params.id
    let sql = `DELETE FROM ?? WHERE ?? = ?`
    sql = mysql.format(sql, ['usersAddress', 'id', id])

    pool.query(sql, (err, rows) => {
        if(err){
            res.status(500).send("Error could not query data")
        }
        res.json(rows)
    })
}

const updateAddressById = (req, res) => {
    const id = req.params.id
    const {
        address,
        city,
        county,
        state,
        zip
    } = req.body


    let sql = ` UPDATE ?? SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ?? = ? where id = ${id}`
    sql = mysql.format(sql, ['usersAddress', 'address', address,'city', city,'county', county, 'state', state,'zip', zip])
    pool.query(sql, (err, rows) => {
        if(err){
            res.status(500).send("Error could not query data")
        }
        res.json(rows)
    })

}
module.exports = {getEmployeesAddress, getAddressById, postAddress, removeAddressById, updateAddressById}