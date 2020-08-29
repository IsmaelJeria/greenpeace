const jwt = require('jsonwebtoken');

async function verifyToken(token) {

    return new Promise(function(resolve, reject) {

        const verifyTokenCallBack = function(err, decoded) {

            if (err != null) {
                throw new Error("Invalid token");
            }

            resolve(decoded);
        }

        jwt.verify(token, "UltraPrivateSecret", verifyTokenCallBack);

    });

}


async function createAndSignToken() {

    return new Promise(function(resolve, reject) {
        const getTokenCallBack = function(err, token) {
            if (err != null) {
                return reject(err);
            }
            resolve(token);
        };

        jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
        }, "UltraPrivateSecret", { algorithm: "HS256" }, getTokenCallBack);

    });

}

module.exports.verifyToken = verifyToken;
module.exports.createAndSignToken = createAndSignToken;