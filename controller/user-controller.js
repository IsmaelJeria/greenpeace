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
        console.log(response)
        res.sendStatus(response)
    }
)

module.exports = UserModelRouter