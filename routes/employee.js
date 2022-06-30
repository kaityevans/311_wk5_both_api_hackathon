const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('getting employees')
  })

  router.get('/users/:id', (req, res) => {
    res.send('Get employee my ID!')
  })

  router.get('/firstname/:first_name', (req, res) => {
    res.send('Get employee by first name!')
  })



module.exports = router;