const User = require('../sequelize')
const bcrypt = require('bcrypt');
const { response } = require('express');
//const token = require('../service/jwt-utils')

const saltRounds = 10;


exports.createUserAccount = function(userParam) {
    bcrypt.hash(userParam['password'], saltRounds, (err, hash) => {
        userParam['password'] = hash
        User.create(userParam)
    });
}

exports.loginUserAccount = async function(userParam) {
    let responseCode = 200;

    const user = await User.findOne({ where: { username: userParam['username'] } });

    const compareResut = await bcrypt.compare(userParam['password'], user.get("password"));

    if (compareResut)
        return 200 //token.createAndSignToken()

    return 401


    /*
        User.findOne({
            where: { username: userParam['username'] }
        }).then(user => {
            console.log(user.get("password"))
            bcrypt.compare(userParam['password'], user.get("password"), function(err, res) {
                if (res == true) {
                    console.log("password matched")
                    console.log(res)
                } else {
                    console.log("wrong password")
                    responseCode = 401

                }
                return responseCode
            });
        })*/
}