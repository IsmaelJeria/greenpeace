//const { Sequelize } = require('sequelize')
const express = require('express')
const UserModelRouter = require('./controller/user-controller')
const bodyParser = require('body-parser')
const middleware = require('./service/middleware')

const app = express()
app.use(bodyParser.json())
app.use(middleware.validateLogging)
app.use(middleware.anotherMiddleware)
app.use('/api', UserModelRouter)
app.listen(3000, function() { console.log('puerto abierto') })