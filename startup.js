const express = require('express')

const app = express()

app.listen(3000, () => console.log("Online Server at port 3000"))
module.exports = app

const studentController = require('./mvc/controllers/studentsController')
const escolaControllers = require('./mvc/controllers/escolaControllers')
