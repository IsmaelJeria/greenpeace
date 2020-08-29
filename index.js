//const { Sequelize } = require('sequelize')
const express = require('express')
const UserModelRouter = require('./controller/user-controller')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use('/api', UserModelRouter)
app.listen(3000, function() { console.log('puerto abierto') })