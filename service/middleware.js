const token = require('../service/jwt-utils')

async function validateLogging(req, res, next) {

    if (req.url == '/api/createUserAccount') {
        next()
    } else {
        const result = await token.verifyToken(req.headers.authorization.substr(7))
        console.log(result)
        next()
    }
}


function anotherMiddleware(req, res, next) {
    console.log('another middleware')
    next()
}

module.exports.validateLogging = validateLogging
module.exports.anotherMiddleware = anotherMiddleware