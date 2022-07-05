const express = require('express');
const app = express();
const employees = require('./routes/employee');
const contact = require("./routes/employeesContact")

const port = process.env.PORT || 4001;

app.use(express.json())
app.use( employees)
app.use( contact)

app.get('/', (req, res) => {
    res.send('Welcome to our API!')
  })

  app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`)
   })
   