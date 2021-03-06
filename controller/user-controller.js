const express = require('express')
const Service = require('../service/user-service')

const UserModelRouter = express.Router()

UserModelRouter.route('/createUserAccount').post(
    function(req, res) {
        Service.createUserAccount(req.body)
        res.sendStatus(201)
    }
)

UserModelRouter.route('/login').post(
    async function(req, res) {
        const response = await Service.loginUserAccount(req.body)
        res.status(201).send(response)
    }
)

UserModelRouter.route('/doStuff').post(
    async function(req, res) {
        res.status(201).send('doing stuff')
    }
)

module.exports = UserModelRouter