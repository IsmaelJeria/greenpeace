const token = require('../service/jwt-utils')

async function validateLogging(req, res, next) {

    if (req.url == '/api/createUserAccount') {
        next()
    } else if (req.url == '/api/login') {
        next()
    } else {
        try {
            const result = await token.verifyToken(req.headers.authorization.substr(7))
            console.log('after validate token')
            console.log(result)
            next()
        } catch (err) {
            console.log('error en tu token')
            res.status(201).send('error en el token')
            return 401
        }
    }
}


function anotherMiddleware(req, res, next) {
    console.log('another middleware')
    next()
}

module.exports.validateLogging = validateLogging
module.exports.anotherMiddleware = anotherMiddleware